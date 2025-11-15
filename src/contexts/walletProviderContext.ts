import { createContext } from "react";

export const WalletProviderContext = createContext<WalletProviderContext>({
  wallets: {},
  selectedWallet: null,
  selectedAccount: null,
  errorMessage: null,
  connectWallet: function (walletUuid: string): Promise<void> {
    throw new Error("Function not implemented.", { cause: walletUuid });
  },
  disconnectWallet: function (): Promise<void | ""> {
    throw new Error("Function not implemented.");
  },
  clearError: function (): void {
    throw new Error("Function not implemented.");
  },
  response: null,
  writeResponse: function (response: string): void {
    throw new Error("Function not implemented.", { cause: response });
  },
  clearResponse: function (): void {
    throw new Error("Function not implemented.");
  },
  writeError: function (errorMessage: string): void {
    throw new Error("Function not implemented.", { cause: errorMessage });
  },
});
