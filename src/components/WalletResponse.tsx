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

export const WalletResponse = () => {
  const { errorMessage } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    isError && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Response</CardTitle>
            <CardDescription>
              The response from wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>{errorMessage}</div>
            <Button
              variant="secondary"
              onClick={() => window.navigator.clipboard.writeText(errorMessage)}
            >
              <Copy /> Copy response
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  );
};
