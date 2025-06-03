import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { WalletProviderContext } from "../contexts/walletProviderContext";
import {
  RESTRICTED_METHODS,
  UNRESTRICTED_METHODS,
} from "@/constants/requestConstants";

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
  const clearResponse = () => setResponse("");

  const [errorMessage, setErrorMessage] = useState("");
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
        await wallet.provider.request({
          method: UNRESTRICTED_METHODS.WALLET_REVOKE_PERMISSIONS,
          params: [{ zond_accounts: {} }],
        });
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
        const accounts = (await wallet.provider.request({
          method: RESTRICTED_METHODS.ZOND_REQUEST_ACCOUNTS,
        })) as string[];
        setResponse(`[${accounts.join(", ")}]`);

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
      } catch (error) {
        console.error("Failed to connect to provider:", error);
        const walletError: WalletError = error as WalletError;
        setErrorMessage(
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
    clearResponse,
    errorMessage,
    connectWallet,
    disconnectWallet,
    clearError,
  };

  return (
    <WalletProviderContext.Provider value={contextValue}>
      {children}
    </WalletProviderContext.Provider>
  );
};
