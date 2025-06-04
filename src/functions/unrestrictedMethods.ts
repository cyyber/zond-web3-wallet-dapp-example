// Unrestricted methods invocation
export const zond_accounts = async (provider: EIP6963ProviderDetail) => {
  const accounts = await provider.provider.request({
    method: "zond_accounts",
    params: [],
  });
  return accounts;
};

export const zond_blockNumber = async (provider: EIP6963ProviderDetail) => {
  const blockNumber = await provider.provider.request({
    method: "zond_blockNumber",
    params: [],
  });
  return blockNumber;
};

export const zond_call = async (provider: EIP6963ProviderDetail) => {
  const returnData = await provider.provider.request({
    method: "zond_call",
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
    method: "zond_chainId",
    params: [],
  });
  return chainId;
};

export const zond_estimateGas = async (provider: EIP6963ProviderDetail) => {
  const gasEstimate = await provider.provider.request({
    method: "zond_estimateGas",
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

export const zond_gasPrice = async (provider: EIP6963ProviderDetail) => {
  const gasPrice = await provider.provider.request({
    method: "zond_gasPrice",
    params: [],
  });
  return gasPrice;
};

export const zond_getBalance = async (provider: EIP6963ProviderDetail) => {
  const balance = await provider.provider.request({
    method: "zond_getBalance",
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return balance;
};

export const zond_getBlockByHash = async (provider: EIP6963ProviderDetail) => {
  const blockInformation = await provider.provider.request({
    method: "zond_getBlockByHash",
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
    method: "zond_getBlockByNumber",
    params: ["0x1", false],
  });
  return blockInformation;
};

export const zond_getCode = async (provider: EIP6963ProviderDetail) => {
  const code = await provider.provider.request({
    method: "zond_getCode",
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return code;
};

export const zond_getTransactionByHash = async (
  provider: EIP6963ProviderDetail
) => {
  const transaction = await provider.provider.request({
    method: "zond_getTransactionByHash",
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
    method: "zond_getTransactionCount",
    params: ["Z20E7Bde67f00EA38ABb2aC57e1B0DD93f518446c", "latest"],
  });
  return transactionCount;
};

export const zond_getTransactionReceipt = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionReceipt = await provider.provider.request({
    method: "zond_getTransactionReceipt",
    params: [
      "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
    ],
  });
  return transactionReceipt;
};
