import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { NoWalletsDetected } from "./NoWalletsDetected/NoWalletsDetected";
import { WalletContent } from "./WalletContent/WalletContent";

export const DetectedWallets = () => {
  const { wallets } = useWalletProvider();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="ZondWeb3Wallet"
    >
      {Object.keys(wallets).length > 0 ? (
        Object.values(wallets).map((provider: EIP6963ProviderDetail) => (
          <AccordionItem key={provider.info.uuid} value={provider.info.name}>
            <AccordionTrigger>
              <div className="flex gap-4 items-center text-xl">
                <img
                  className="w-5"
                  src={provider.info.icon}
                  alt={provider.info.name}
                />
                {provider.info.name}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center space-y-6">
              <WalletContent provider={provider} />
            </AccordionContent>
          </AccordionItem>
        ))
      ) : (
        <NoWalletsDetected />
      )}
    </Accordion>
  );
};
