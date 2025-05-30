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
  const { errorMessage, clearError } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    isError && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Error</CardTitle>
            <CardDescription>
              The error occurred with the wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>{errorMessage}</div>
            <Button variant="secondary" onClick={clearError}>
              Clear error
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  );
};
