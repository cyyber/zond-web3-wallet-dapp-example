import { RESTRICTED_METHODS } from "@/constants/requestConstants";

// Restricted methods invocation
export const personal_sign = async (provider: EIP6963ProviderDetail) => {
  const params = [
    "0x506c65617365207369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206964656e746974792e",
    "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
  ];
  const signature = await provider.provider.request({
    method: RESTRICTED_METHODS.PERSONAL_SIGN,
    params,
  });
  return signature;
};

export const wallet_addZondChain = async (provider: EIP6963ProviderDetail) => {
  const result = await provider.provider.request({
    method: RESTRICTED_METHODS.WALLET_ADD_ZOND_CHAIN,
    params: [
      {
        chainId: "0x44",
        chainName: "Test chain name",
        rpcUrls: ["https://testDefaultRpcUrl1", "https://testDefaultRpcUrl2"],
        blockExplorerUrls: ["https://testDefaultExplorerUrl1"],
        iconUrls: [
          "https://testDefaultIconUrl1",
          "https://testDefaultIconUrl2",
          "icons/qrl/default.png",
          "https://testDefaultIconUrl3",
        ],
        nativeCurrency: {
          name: "Test native currency",
          symbol: "TSTSMB",
          decimals: 18,
        },
      },
    ],
  });
  return result;
};

export const wallet_requestPermissions = async (
  provider: EIP6963ProviderDetail
) => {
  const result = await provider.provider.request({
    method: RESTRICTED_METHODS.WALLET_REQUEST_PERMISSIONS,
    params: [{ zond_accounts: {} }],
  });
  return result;
};

export const wallet_switchZondChain = async (
  provider: EIP6963ProviderDetail
) => {
  const result = await provider.provider.request({
    method: RESTRICTED_METHODS.WALLET_SWITCH_ZOND_CHAIN,
    params: [
      {
        chainId: "0x7e7e",
      },
    ],
  });
  return result;
};

export const zond_requestAccounts = async (provider: EIP6963ProviderDetail) => {
  const result = await provider.provider.request({
    method: RESTRICTED_METHODS.ZOND_REQUEST_ACCOUNTS,
    params: [],
  });
  return result;
};

export const zond_sendTransaction = async (provider: EIP6963ProviderDetail) => {
  const requestForContractDeployment = {
    data: "0x608060405234801561001057600080fd5b5061010e806100206000396000f3fe6080604052600436106100295760003560e01c806306661abd1461002e57806360fe47b11461003c578063d09de08a14610057575b600080fd5b61003a61003a565b005b61004561009a565b60405161005291906100ce565b60405180910390f35b61005f6100a0565b60405161006c91906100ce565b60405180910390f35b60008054905090565b60005481565b60008054905090565b6000819050919050565b6100928161007f565b82525050565b60006020820190506100ad6000830184610089565b92915050565b6000819050919050565b6100c6816100b3565b82525050565b60006020820190506100e160008301846100bd565b9291505056fea26469706673582212202e7f728e9bfb79346c7c0c1570a776bd0b2e6f38e18738c9f76cc6fa0cf92adf64736f6c63430008000033",
    from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
    gas: "0x1cbb3",
    type: "0x2",
    value: "0x0",
  };
  // // Example request for a contract interaction
  // const requestForContractInteraction = {
  //   from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
  //   to: "Z3ca82a624ee8f3d5ee808ffeb7d7a1a06dd73b61",
  //   data: "0x60fe47b1000000000000000000000000000000000000000000000000000000000000007b",
  //   value: "0x0",
  //   gas: "0x1cbb3",
  //   type: "0x2",
  // };
  // // Example request for a ZND transfer
  // const requestForZndTransfer = {
  //   from: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
  //   to: "Z20EE9760786AD48aB90E326c5cd78c6269Ba10AB",
  //   value: "0xde0b6b3a7640000",
  //   gas: "0x1cbb3",
  //   type: "0x2",
  // };
  const transactionReceipt = await provider.provider.request({
    method: RESTRICTED_METHODS.ZOND_SEND_TRANSACTION,
    params: [requestForContractDeployment],
  });
  return transactionReceipt;
};

export const zond_signTypedData_v4 = async (
  provider: EIP6963ProviderDetail
) => {
  const from = "Z208318ecd68f26726CE7C54b29CaBA94584969B6";
  const msgParams = {
    types: {
      EIP712Domain: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "version",
          type: "string",
        },
        {
          name: "chainId",
          type: "uint256",
        },
        {
          name: "verifyingContract",
          type: "address",
        },
      ],
      Person: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "wallet",
          type: "address",
        },
      ],
      Mail: [
        {
          name: "from",
          type: "Person",
        },
        {
          name: "to",
          type: "Person",
        },
        {
          name: "contents",
          type: "string",
        },
      ],
    },
    primaryType: "Mail",
    domain: {
      name: "Ether Mail",
      version: "1",
      chainId: 1,
      verifyingContract: "ZCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    },
    message: {
      from: {
        name: "Cow",
        wallet: "ZCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      },
      to: {
        name: "Bob",
        wallet: "ZbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
      },
      contents: "Hello, Bob!",
    },
  };
  const signature = await provider.provider.request({
    method: RESTRICTED_METHODS.ZOND_SIGN_TYPED_DATA_V4,
    params: [from, msgParams],
  });
  return signature;
};
