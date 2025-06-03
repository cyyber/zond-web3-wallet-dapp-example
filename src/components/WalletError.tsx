import { Copy } from "lucide-react";
import { useWalletProvider } from "../hooks/useWalletProvider";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const WalletError = () => {
  const { errorMessage } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    isError && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Error</CardTitle>
            <CardDescription>
              The error occurred during wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="break-all max-h-48 overflow-y-auto">
              {errorMessage}
            </div>
            <Button
              onClick={() => navigator.clipboard.writeText(errorMessage || "")}
            >
              <Copy /> Copy error
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  );
};
