import {
  RESTRICTED_METHODS,
  UNRESTRICTED_METHODS,
} from "@/constants/requestConstants";
import {
  personal_sign,
  zond_sendTransaction,
  zond_signTypedData_v4,
} from "@/functions/restrictedMethods";
import {
  web3_clientVersion,
  zond_accounts,
  zond_blockNumber,
  zond_call,
  zond_chainId,
  zond_estimateGas,
  zond_feeHistory,
  zond_gasPrice,
  zond_getBalance,
  zond_getBlockByHash,
  zond_getBlockByNumber,
  zond_getBlockTransactionCountByHash,
  zond_getBlockTransactionCountByNumber,
  zond_getCode,
  zond_getFilterChanges,
  zond_getFilterLogs,
  zond_getLogs,
  zond_getProof,
  zond_getStorageAt,
  zond_getTransactionByHash,
  zond_getTransactionCount,
  zond_getTransactionReceipt,
  zond_newBlockFilter,
  zond_newFilter,
  zond_newPendingTransactionFilter,
  zond_subscribe,
  zond_syncing,
  zond_uninstallFilter,
  zond_unsubscribe,
} from "@/functions/unrestrictedMethods";
import { useWalletProvider } from "@/hooks/useWalletProvider";
import { ConnectWallet } from "./ConnectWallet/ConnectWallet";
import { MethodsList } from "./MethodsList/MethodsList";

type WalletContentProps = { provider: EIP6963ProviderDetail };

export const WalletContent = ({ provider }: WalletContentProps) => {
  const {
    connectWallet,
    disconnectWallet,
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
      case UNRESTRICTED_METHODS.WEB_3_CLIENT_VERSION:
        return await web3_clientVersion(provider);
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
      case UNRESTRICTED_METHODS.ZOND_FEE_HISTORY:
        return await zond_feeHistory(provider);
      case UNRESTRICTED_METHODS.ZOND_GAS_PRICE:
        return await zond_gasPrice(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BALANCE:
        return await zond_getBalance(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_HASH:
        return await zond_getBlockByHash(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_NUMBER:
        return await zond_getBlockByNumber(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_TRANSACTION_COUNT_BY_HASH:
        return await zond_getBlockTransactionCountByHash(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER:
        return await zond_getBlockTransactionCountByNumber(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_CODE:
        return await zond_getCode(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_FILTER_CHANGES:
        return await zond_getFilterChanges(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_FILTER_LOGS:
        return await zond_getFilterLogs(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_LOGS:
        return await zond_getLogs(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_PROOF:
        return await zond_getProof(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_STORAGE_AT:
        return await zond_getStorageAt(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_HASH:
        return await zond_getTransactionByHash(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_COUNT:
        return await zond_getTransactionCount(provider);
      case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_RECEIPT:
        return await zond_getTransactionReceipt(provider);
      case UNRESTRICTED_METHODS.ZOND_NEW_BLOCK_FILTER:
        return await zond_newBlockFilter(provider);
      case UNRESTRICTED_METHODS.ZOND_NEW_FILTER:
        return await zond_newFilter(provider);
      case UNRESTRICTED_METHODS.ZOND_NEW_PENDING_TRANSACTION_FILTER:
        return await zond_newPendingTransactionFilter(provider);
      case UNRESTRICTED_METHODS.ZOND_SUBSCRIBE:
        return await zond_subscribe(provider);
      case UNRESTRICTED_METHODS.ZOND_SYNCING:
        return await zond_syncing(provider);
      case UNRESTRICTED_METHODS.ZOND_UNINSTALL_FILTER:
        return await zond_uninstallFilter(provider);
      case UNRESTRICTED_METHODS.ZOND_UNSUBSCRIBE:
        return await zond_unsubscribe(provider);
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

  const callMethod = (
    method:
      | (typeof RESTRICTED_METHODS)[keyof typeof RESTRICTED_METHODS]
      | (typeof UNRESTRICTED_METHODS)[keyof typeof UNRESTRICTED_METHODS]
  ) => callRpcMethod(provider, method);

  return (
    <div className="w-full space-y-6">
      <ConnectWallet provider={provider} />
      <MethodsList
        provider={provider}
        title="Restricted methods"
        description="The methods that require user's approval to execute"
        isRestricted={true}
        callMethod={callMethod}
      />
      <MethodsList
        provider={provider}
        title="Unrestricted methods"
        description="The methods that can be called without user's approval"
        isRestricted={false}
        callMethod={callMethod}
      />
    </div>
  );
};
