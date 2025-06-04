import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { TEST_ACCOUNT_1, TEST_ACCOUNT_1_SEED } from "@/constants/testAccounts";
import {
  personal_sign,
  zond_sendTransaction,
  zond_signTypedData_v4,
} from "@/functions/restrictedMethods";
import {
  zond_accounts,
  zond_blockNumber,
  zond_call,
  zond_chainId,
  zond_estimateGas,
  zond_gasPrice,
  zond_getBalance,
  zond_getBlockByHash,
  zond_getBlockByNumber,
  zond_getCode,
  zond_getTransactionByHash,
  zond_getTransactionCount,
  zond_getTransactionReceipt,
} from "@/functions/unrestrictedMethods";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { CheckCheck, Copy, PlugZap } from "lucide-react";
import { NoWalletsDetected } from "./NoWalletsDetected/NoWalletsDetected";

export const DetectedWallets = () => {
  const {
    wallets,
    connectWallet,
    disconnectWallet,
    selectedWallet,
    writeResponse,
    clearResponse,
    writeError,
    clearError,
  } = useWalletProvider();

  const getRpcResponse = async (
    provider: EIP6963ProviderDetail,
    method: string
  ) => {
    switch (method) {
      case RESTRICTED_METHODS.PERSONAL_SIGN:
        return await personal_sign(provider);
      case RESTRICTED_METHODS.ZOND_REQUEST_ACCOUNTS:
        return await connectWallet(provider.info.rdns);
      case RESTRICTED_METHODS.ZOND_SEND_TRANSACTION:
        return await zond_sendTransaction(provider);
      case RESTRICTED_METHODS.ZOND_SIGN_TYPED_DATA_V4:
        return await zond_signTypedData_v4(provider);
      case UNRESTRICTED_METHODS.WALLET_REVOKE_PERMISSIONS:
        return await disconnectWallet();
      case UNRESTRICTED_METHODS.ZOND_ACCOUNTS:
        return await zond_accounts(provider);
      case UNRESTRICTED_METHODS.ZOND_BLOCK_NUMBER:
        return await zond_blockNumber(provider);
      case UNRESTRICTED_METHODS.ZOND_CALL:
        return await zond_call(provider);
      case UNRESTRICTED_METHODS.ZOND_CHAIN_ID:
        return await zond_chainId(provider);
      case UNRESTRICTED_METHODS.ZOND_ESTIMATE_GAS:
        return await zond_estimateGas(provider);
      case UNRESTRICTED_METHODS.ZOND_GAS_PRICE:
        return await zond_gasPrice(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BALANCE:
        return await zond_getBalance(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_HASH:
        return await zond_getBlockByHash(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_NUMBER:
        return await zond_getBlockByNumber(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_CODE:
        return await zond_getCode(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_HASH:
        return await zond_getTransactionByHash(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_COUNT:
        return await zond_getTransactionCount(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_RECEIPT:
        return await zond_getTransactionReceipt(provider);
      default:
        return "Method not implemented for this provider.";
    }
  };

  const callRpcMethod = async (
    provider: EIP6963ProviderDetail,
    method:
      | (typeof UNRESTRICTED_METHODS)[keyof typeof UNRESTRICTED_METHODS]
      | (typeof RESTRICTED_METHODS)[keyof typeof RESTRICTED_METHODS]
  ) => {
    clearResponse();
    clearError();
    try {
      const response = await getRpcResponse(provider, method);
      console.log(`Response from ${method}:`, response);
      writeResponse(
        typeof response === "string"
          ? response
          : JSON.stringify(response, null, 2)
      );
    } catch (error) {
      console.error(`Error calling ${method}:`, error);
      writeError(
        `Error calling ${method}: ${
          typeof error === "string"
            ? error
            : JSON.stringify(error, null, 2) || "Unknown error"
        }`
      );
    }
  };

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
              <div className="w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Connect wallet</CardTitle>
                    <CardDescription>
                      Connect this dApp with the wallet to interact with it
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    {provider?.info.name === selectedWallet?.info.name ? (
                      <div className="space-y-4">
                        <div className="flex gap-2 text-constructive">
                          <CheckCheck size="16" />
                          <span>Connected to {selectedWallet?.info.name}</span>
                        </div>
                        <div className="space-y-2">
                          <div>Test Account 1</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold">
                                {TEST_ACCOUNT_1}
                              </span>
                              <span>
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      TEST_ACCOUNT_1
                                    )
                                  }
                                />
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span>{TEST_ACCOUNT_1_SEED}</span>
                              <span>
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      TEST_ACCOUNT_1_SEED
                                    )
                                  }
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Button
                        size="lg"
                        className="max-w-min"
                        onClick={() => connectWallet(provider.info.rdns)}
                      >
                        <PlugZap />
                        <span> Connect {provider.info.name}</span>
                      </Button>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Restricted methods</CardTitle>
                    <CardDescription>
                      The methods that require user's approval to execute
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    {Object.values(RESTRICTED_METHODS).map((method, index) => (
                      <Button
                        key={method}
                        variant="outline"
                        onClick={() => callRpcMethod(provider, method)}
                        disabled={
                          provider.info.name !== selectedWallet?.info.name
                        }
                      >
                        {index + 1}. {method}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Unrestricted methods</CardTitle>
                    <CardDescription>
                      The methods that run in the background without user's
                      approval
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    {Object.values(UNRESTRICTED_METHODS).map(
                      (method, index) => (
                        <Button
                          key={method}
                          variant="outline"
                          onClick={() => callRpcMethod(provider, method)}
                          disabled={
                            provider.info.name !== selectedWallet?.info.name
                          }
                        >
                          {index + 1}. {method}
                        </Button>
                      )
                    )}
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))
      ) : (
        <NoWalletsDetected />
      )}
    </Accordion>
  );
};
