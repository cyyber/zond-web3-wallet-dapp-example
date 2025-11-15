import { Button } from "@/components/ui/button";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { PlugZap } from "lucide-react";

type ConnectButtonProps = {
  provider: EIP6963ProviderDetail;
};

export const ConnectButton = ({ provider }: ConnectButtonProps) => {
  const { connectWallet, selectedWallet } = useWalletProvider();

  const isConnected = provider?.info?.name === selectedWallet?.info?.name;

  return (
    <Button
      size="lg"
      className="max-w-min"
      onClick={() => connectWallet(provider.info.rdns)}
    >
      <PlugZap />
      <span>
        {isConnected ? "Reconnect" : "Connect"} {provider.info.name}
      </span>
    </Button>
  );
};
