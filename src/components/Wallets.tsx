import { ThemeProvider } from "@/contexts/themeProviderContext";
import { DetectedWallets } from "./DetectedWallets";
import { SelectedWallet } from "./SelectedWallet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { WalletError } from "./WalletError";
import { WalletProvider } from "./WalletProvider";

export const Wallets = () => {
  return (
    <ThemeProvider>
      <WalletProvider>
        <Card className="m-16">
          <CardHeader>
            <CardTitle>Wallets Detected</CardTitle>
            <CardDescription>
              The web3 wallet extensions detected on this browser
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <DetectedWallets />
            </div>
            <div className="col-span-1 space-y-6">
              <SelectedWallet />
              <WalletError />
            </div>
          </CardContent>
        </Card>
      </WalletProvider>
    </ThemeProvider>
  );
};
