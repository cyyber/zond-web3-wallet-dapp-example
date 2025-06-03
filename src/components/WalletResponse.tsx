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
  const { response } = useWalletProvider();
  const hasResponse = !!response;

  return (
    hasResponse && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Response</CardTitle>
            <CardDescription>
              The response from wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="break-all">{response}</div>
            <Button
              variant="secondary"
              onClick={() =>
                window.navigator.clipboard.writeText(response || "")
              }
            >
              <Copy /> Copy response
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  );
};
