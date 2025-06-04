import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { Bug, Copy } from "lucide-react";

export const WalletError = () => {
  const { errorMessage } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    isError && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="w-5" /> Wallet Error
            </CardTitle>
            <CardDescription>
              The error occurred during wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="break-all max-h-48 overflow-y-auto text-destructive">
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
