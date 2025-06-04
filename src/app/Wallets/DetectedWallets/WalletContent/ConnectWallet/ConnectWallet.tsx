import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { ConnectButton } from "./ConnectButton/ConnectButton";
import { Connected } from "./Connected/Connected";

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
          <Connected />
        ) : (
          <ConnectButton provider={provider} />
        )}
      </CardContent>
    </Card>
  );
};
