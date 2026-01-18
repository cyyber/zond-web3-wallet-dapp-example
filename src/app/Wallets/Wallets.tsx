import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DetectedWallets } from "./DetectedWallets/DetectedWallets";
import { SelectedWallet } from "./SelectedWallet/SelectedWallet";
import { WalletError } from "./WalletError/WalletError";
import { WalletResponse } from "./WalletResponse/WalletResponse";

export const Wallets = () => {
  return (
    <Card className="m-16 max-w-[80rem]">
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
          <WalletResponse />
          <WalletError />
        </div>
      </CardContent>
    </Card>
  );
};
