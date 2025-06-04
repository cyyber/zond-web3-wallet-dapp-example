import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TEST_ACCOUNT_1, TEST_ACCOUNT_1_SEED } from "@/constants/testAccounts";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { CheckCheck, Copy } from "lucide-react";
import { ConnectButton } from "./ConnectButton/ConnectButton";

type ConnectWalletProps = {
  provider: EIP6963ProviderDetail;
};

export const ConnectWallet = ({ provider }: ConnectWalletProps) => {
  const { selectedWallet } = useWalletProvider();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect wallet</CardTitle>
        <CardDescription>
          Connect this dApp with the wallet to interact with it
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {provider?.info.name === selectedWallet?.info.name ? (
          <div className="space-y-4">
            <div className="flex gap-2 text-constructive">
              <CheckCheck size="16" />
              <span>Connected to {selectedWallet?.info.name}</span>
            </div>
            <div className="space-y-2">
              <div>Test Account 1</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{TEST_ACCOUNT_1}</span>
                  <span>
                    <Copy
                      className="cursor-pointer"
                      onClick={() =>
                        navigator.clipboard.writeText(TEST_ACCOUNT_1)
                      }
                    />
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>{TEST_ACCOUNT_1_SEED}</span>
                  <span>
                    <Copy
                      className="cursor-pointer"
                      onClick={() =>
                        navigator.clipboard.writeText(TEST_ACCOUNT_1_SEED)
                      }
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ConnectButton provider={provider} />
        )}
      </CardContent>
    </Card>
  );
};
