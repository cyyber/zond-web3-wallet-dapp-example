import { Unlink } from "lucide-react";
import { useWalletProvider } from "../hooks/useWalletProvider";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const SelectedWallet = () => {
  const { selectedWallet, selectedAccount, disconnectWallet } =
    useWalletProvider();

  const upperAfterLastTwo =
    (selectedAccount?.slice(0, 2) ?? "") + selectedAccount?.slice(2);
  const formattedAccountAddress = `${upperAfterLastTwo.substring(
    0,
    6
  )} ... ${upperAfterLastTwo.substring(36)}`;

  return (
    selectedAccount && (
      <Card>
        <CardHeader>
          <CardTitle>Selected Wallet</CardTitle>
          <CardDescription>
            The wallet you've connected to this dApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <img
                src={selectedWallet?.info.icon}
                alt={selectedWallet?.info.name}
              />
              <div className="flex flex-col">
                <div className="text-xs">{selectedWallet?.info.name}</div>
                <div className="font-bold text-xl">
                  {formattedAccountAddress}
                </div>
              </div>
            </div>
            <div>
              <strong>uuid:</strong> {selectedWallet?.info.uuid}
            </div>
            <div>
              <strong>rdns:</strong> {selectedWallet?.info.rdns}
            </div>
            <Button variant="destructive" onClick={disconnectWallet}>
              <Unlink /> Disconnect wallet
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  );
};
