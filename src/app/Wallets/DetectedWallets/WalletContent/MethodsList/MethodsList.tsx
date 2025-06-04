import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RESTRICTED_METHODS,
  UNRESTRICTED_METHODS,
} from "@/constants/requestConstants";
import { useWalletProvider } from "@/hooks/useWalletProvider";

type MethodsListProps = {
  provider: EIP6963ProviderDetail;
  title: string;
  description: string;
  isRestricted?: boolean;
  callMethod: (
    method:
      | (typeof RESTRICTED_METHODS)[keyof typeof RESTRICTED_METHODS]
      | (typeof UNRESTRICTED_METHODS)[keyof typeof UNRESTRICTED_METHODS]
  ) => void;
};

export const MethodsList = ({
  provider,
  title,
  description,
  isRestricted = true,
  callMethod,
}: MethodsListProps) => {
  const { selectedWallet } = useWalletProvider();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {Object.values(
          isRestricted ? RESTRICTED_METHODS : UNRESTRICTED_METHODS
        ).map((method, index) => (
          <Button
            key={method}
            variant="outline"
            onClick={() => callMethod(method)}
            disabled={provider.info.name !== selectedWallet?.info.name}
          >
            {index + 1}. {method}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
