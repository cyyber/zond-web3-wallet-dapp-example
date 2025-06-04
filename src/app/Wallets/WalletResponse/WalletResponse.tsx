import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { Copy, FileText } from "lucide-react";

export const WalletResponse = () => {
  const { response } = useWalletProvider();
  const hasResponse = !!response;

  return (
    hasResponse && (
      <div className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5" /> Wallet Response
            </CardTitle>
            <CardDescription>
              The response from wallet interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="break-all max-h-48 overflow-y-auto text-constructive">
              {response}
            </div>
            <Button
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
