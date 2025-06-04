import { Button } from "@/components/ui/button";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { PlugZap } from "lucide-react";

type ConnectButtonProps = {
  provider: EIP6963ProviderDetail;
};

export const ConnectButton = ({ provider }: ConnectButtonProps) => {
  const { connectWallet } = useWalletProvider();

  return (
    <Button
      size="lg"
      className="max-w-min"
      onClick={() => connectWallet(provider.info.rdns)}
    >
      <PlugZap />
      <span> Connect {provider.info.name}</span>
    </Button>
  );
};
