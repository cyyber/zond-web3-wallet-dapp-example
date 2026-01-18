import { Alert, AlertTitle } from "@/components/ui/alert";
import { Wallet } from "lucide-react";

export const NoWalletsDetected = () => {
  return (
    <Alert variant="destructive" className="max-w-md">
      <Wallet />
      <AlertTitle>
        No wallets detected. Please install a web3 wallet extension!
      </AlertTitle>
    </Alert>
  );
};
