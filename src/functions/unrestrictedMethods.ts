import { UNRESTRICTED_METHODS } from "@/constants/requestConstants";

// Unrestricted methods invocation
export const web3_clientVersion = async (provider: EIP6963ProviderDetail) => {
  const currentVersion = await provider.provider.request({
    method: UNRESTRICTED_METHODS.WEB_3_CLIENT_VERSION,
    params: [],
  });
  return currentVersion;
};

export const zond_accounts = async (provider: EIP6963ProviderDetail) => {
  const accounts = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_ACCOUNTS,
    params: [],
  });
  return accounts;
};

export const zond_blockNumber = async (provider: EIP6963ProviderDetail) => {
  const blockNumber = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_BLOCK_NUMBER,
    params: [],
  });
  return blockNumber;
};

export const zond_call = async (provider: EIP6963ProviderDetail) => {
  const returnData = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_CALL,
    params: [
      {
        from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
        to: "Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c",
        accessList: [],
        blobVersionedHashes: [],
        blobs: [],
        value: "0x1",
      },
      "latest",
    ],
  });
  return returnData;
};

export const zond_chainId = async (provider: EIP6963ProviderDetail) => {
  const chainId = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_CHAIN_ID,
    params: [],
  });
  return chainId;
};

export const zond_estimateGas = async (provider: EIP6963ProviderDetail) => {
  const gasEstimate = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_ESTIMATE_GAS,
    params: [
      {
        from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
        to: "Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c",
        value: "0x1",
      },
    ],
  });
  return gasEstimate;
};

export const zond_feeHistory = async (provider: EIP6963ProviderDetail) => {
  const feeHistory = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_FEE_HISTORY,
    params: ["0x3", "latest", [10, 50]],
  });
  return feeHistory;
};

export const zond_gasPrice = async (provider: EIP6963ProviderDetail) => {
  const gasPrice = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GAS_PRICE,
    params: [],
  });
  return gasPrice;
};

export const zond_getBalance = async (provider: EIP6963ProviderDetail) => {
  const balance = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_BALANCE,
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return balance;
};

export const zond_getBlockByHash = async (provider: EIP6963ProviderDetail) => {
  const blockInformation = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_HASH,
    params: [
      "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
      false,
    ],
  });
  return blockInformation;
};

export const zond_getBlockByNumber = async (
  provider: EIP6963ProviderDetail
) => {
  const blockInformation = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_NUMBER,
    params: ["0x17187", true],
  });
  return blockInformation;
};

export const zond_getBlockTransactionCountByHash = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionCount = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_BLOCK_TRANSACTION_COUNT_BY_HASH,
    params: [
      "0x762881f501a0dd33e1ca3a3a3db42671292c9b33ddaa2108b8958bab6414f4dd",
    ],
  });
  return transactionCount;
};

export const zond_getBlockTransactionCountByNumber = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionCount = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER,
    params: ["0x17187"],
  });
  return transactionCount;
};

export const zond_getCode = async (provider: EIP6963ProviderDetail) => {
  const code = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_CODE,
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return code;
};

export const zond_getLogs = async (provider: EIP6963ProviderDetail) => {
  const log = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_LOGS,
    params: [
      {
        fromBlock: "0x1234AB",
        toBlock: "latest",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        topics: [],
      },
    ],
  });
  return log;
};

export const zond_getProof = async (provider: EIP6963ProviderDetail) => {
  const accountProof = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_PROOF,
    params: ["Z20D20b8026B8F02540246f58120ddAAf35AECD9B", [], "latest"],
  });
  return accountProof;
};

export const zond_getStorageAt = async (provider: EIP6963ProviderDetail) => {
  const storageAt = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_STORAGE_AT,
    params: ["Z20D20b8026B8F02540246f58120ddAAf35AECD9B", "0x0", "latest"],
  });
  return storageAt;
};

export const zond_getTransactionByHash = async (
  provider: EIP6963ProviderDetail
) => {
  const transaction = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_HASH,
    params: [
      "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
    ],
  });
  return transaction;
};

export const zond_getTransactionCount = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionCount = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_COUNT,
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return transactionCount;
};

export const zond_getTransactionReceipt = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionReceipt = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_RECEIPT,
    params: [
      "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
    ],
  });
  return transactionReceipt;
};

export const zond_newBlockFilter = async (provider: EIP6963ProviderDetail) => {
  const filterIdentifier = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_NEW_BLOCK_FILTER,
    params: [],
  });
  return filterIdentifier;
};

export const zond_newFilter = async (provider: EIP6963ProviderDetail) => {
  const filterIdentifier = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_NEW_FILTER,
    params: [
      {
        fromBlock: "latest",
        toBlock: "latest",
        address: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
        topics: [],
      },
    ],
  });
  return filterIdentifier;
};

export const zond_subscribe = async (provider: EIP6963ProviderDetail) => {
  const subscriptionId = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_SUBSCRIBE,
    params: ["newHeads"],
  });
  return subscriptionId;
};

export const zond_syncing = async (provider: EIP6963ProviderDetail) => {
  const syncingStatus = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_SYNCING,
    params: [],
  });
  return syncingStatus;
};

export const zond_unsubscribe = async (provider: EIP6963ProviderDetail) => {
  const unsubscribed = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_UNSUBSCRIBE,
    params: ["0xda4de5b265bc34b0bacaf5da395e7fce"],
  });
  return unsubscribed;
};
