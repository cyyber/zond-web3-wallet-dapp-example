import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { WalletProviderContext } from "@/contexts/walletProviderContext";
import { wallet_revokePermissions } from "@/functions/unrestrictedMethods";
import { zond_requestAccounts } from "@/functions/restrictedMethods";

// Extending the global WindowEventMap interface with the custom eip6963:announceProvider event
declare global {
  interface WindowEventMap {
    "eip6963:announceProvider": CustomEvent;
  }
}

export const WalletProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [wallets, setWallets] = useState<Record<string, EIP6963ProviderDetail>>(
    {}
  );
  const [selectedWalletRdns, setSelectedWalletRdns] = useState<string | null>(
    null
  );
  const [selectedAccountByWalletRdns, setSelectedAccountByWalletRdns] =
    useState<SelectedAccountByWallet>({});

  const [response, setResponse] = useState("");
  const writeResponse = (newResponse: string) => setResponse(newResponse);
  const clearResponse = () => setResponse("");

  const [errorMessage, setErrorMessage] = useState("");
  const writeError = (newError: string) => setErrorMessage(newError);
  const clearError = () => setErrorMessage("");

  useEffect(() => {
    const savedSelectedWalletRdns = localStorage.getItem("selectedWalletRdns");
    const savedSelectedAccountByWalletRdns = localStorage.getItem(
      "selectedAccountByWalletRdns"
    );

    if (savedSelectedAccountByWalletRdns) {
      setSelectedAccountByWalletRdns(
        JSON.parse(savedSelectedAccountByWalletRdns)
      );
    }

    function onAnnouncement(event: EIP6963AnnounceProviderEvent) {
      setWallets((currentWallets) => ({
        ...currentWallets,
        [event.detail.info.rdns]: event.detail,
      }));

      if (
        savedSelectedWalletRdns &&
        event.detail.info.rdns === savedSelectedWalletRdns
      ) {
        setSelectedWalletRdns(savedSelectedWalletRdns);
      }
    }

    window.addEventListener("eip6963:announceProvider", onAnnouncement);
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    return () =>
      window.removeEventListener("eip6963:announceProvider", onAnnouncement);
  }, []);

  const disconnectWallet = useCallback(async () => {
    clearResponse();
    clearError();
    if (selectedWalletRdns) {
      setSelectedAccountByWalletRdns((currentAccounts) => ({
        ...currentAccounts,
        [selectedWalletRdns]: null,
      }));

      const wallet = wallets[selectedWalletRdns];
      setSelectedWalletRdns(null);
      localStorage.removeItem("selectedWalletRdns");

      try {
        await wallet_revokePermissions(wallet);
        return "";
      } catch (error) {
        console.error("Failed to revoke permissions:", error);
      }
    }
  }, [selectedWalletRdns, wallets]);

  const connectWallet = useCallback(
    async (walletRdns: string) => {
      await disconnectWallet();
      try {
        const wallet = wallets[walletRdns];
        const accounts = (await zond_requestAccounts(wallet)) as string[];

        if (accounts?.[0]) {
          setSelectedWalletRdns(wallet.info.rdns);
          setSelectedAccountByWalletRdns((currentAccounts) => ({
            ...currentAccounts,
            [wallet.info.rdns]: accounts[0],
          }));

          localStorage.setItem("selectedWalletRdns", wallet.info.rdns);
          localStorage.setItem(
            "selectedAccountByWalletRdns",
            JSON.stringify({
              ...selectedAccountByWalletRdns,
              [wallet.info.rdns]: accounts[0],
            })
          );
        }
        return accounts;
      } catch (error) {
        console.error("Failed to connect to provider:", error);
        const walletError: WalletError = error as WalletError;
        writeError(
          `Code: ${walletError.code}, \nMessage: ${walletError.message}`
        );
      }
    },
    [disconnectWallet, wallets, selectedAccountByWalletRdns]
  );

  const contextValue: WalletProviderContext = {
    wallets,
    selectedWallet:
      selectedWalletRdns === null ? null : wallets[selectedWalletRdns],
    selectedAccount:
      selectedWalletRdns === null
        ? null
        : selectedAccountByWalletRdns[selectedWalletRdns],
    response,
    writeResponse,
    clearResponse,
    errorMessage,
    connectWallet,
    disconnectWallet,
    writeError,
    clearError,
  };

  return (
    <WalletProviderContext.Provider value={contextValue}>
      {children}
    </WalletProviderContext.Provider>
  );
};
