import { PlugZap, Wallet } from "lucide-react";
import { useWalletProvider } from "../hooks/useWalletProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Alert, AlertTitle } from "./ui/alert";
import {
  RESTRICTED_METHODS,
  UNRESTRICTED_METHODS,
} from "@/constants/requestConstants";

export const DetectedWallets = () => {
  const { wallets, connectWallet } = useWalletProvider();

  // Restricted methods invocation
  const personal_sign = async (provider: EIP6963ProviderDetail) => {
    const params = [
      "0x506c65617365207369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206964656e746974792e",
      "Z20D20b8026B8F02540246f58120ddAAf35AECD9B",
    ];
    const signature = await provider.provider.request({
      method: "personal_sign",
      params,
    });
    return signature;
  };

  const zond_requestAccounts = async (provider: EIP6963ProviderDetail) => {
    const accounts = await provider.provider.request({
      method: "zond_requestAccounts",
    });
    return accounts;
  };

  const zond_sendTransaction = async (provider: EIP6963ProviderDetail) => {
    const requestForContractDeployment = {
      data: "0x608060405234801561001057600080fd5b5061010e806100206000396000f3fe6080604052600436106100295760003560e01c806306661abd1461002e57806360fe47b11461003c578063d09de08a14610057575b600080fd5b61003a61003a565b005b61004561009a565b60405161005291906100ce565b60405180910390f35b61005f6100a0565b60405161006c91906100ce565b60405180910390f35b60008054905090565b60005481565b60008054905090565b6000819050919050565b6100928161007f565b82525050565b60006020820190506100ad6000830184610089565b92915050565b6000819050919050565b6100c6816100b3565b82525050565b60006020820190506100e160008301846100bd565b9291505056fea26469706673582212202e7f728e9bfb79346c7c0c1570a776bd0b2e6f38e18738c9f76cc6fa0cf92adf64736f6c63430008000033",
      from: "Z20D20b8026B8F02540246f58120ddAAf35AECD9B",
      gas: "0x1cbb3",
      type: "0x2",
      value: "0x0",
    };
    // // Example request for a contract interaction
    // const requestForContractInteraction = {
    //   from: "Z20D20b8026B8F02540246f58120ddAAf35AECD9B",
    //   to: "Z3ca82a624ee8f3d5ee808ffeb7d7a1a06dd73b61",
    //   data: "0x60fe47b1000000000000000000000000000000000000000000000000000000000000007b",
    //   value: "0x0",
    //   gas: "0x1cbb3",
    //   type: "0x2",
    // };
    // // Example request for a ZND transfer
    // const requestForZndTransfer = {
    //   from: "Z20D20b8026B8F02540246f58120ddAAf35AECD9B",
    //   to: "Z20EE9760786AD48aB90E326c5cd78c6269Ba10AB",
    //   value: "0xde0b6b3a7640000",
    //   gas: "0x1cbb3",
    //   type: "0x2",
    // };
    const transactionReceipt = await provider.provider.request({
      method: "zond_sendTransaction",
      params: [requestForContractDeployment],
    });
    return transactionReceipt;
  };

  const zond_signTypedData_v4 = async (provider: EIP6963ProviderDetail) => {
    const from = "Z20D20b8026B8F02540246f58120ddAAf35AECD9B";
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
      method: "zond_signTypedData_v4",
      params: [from, msgParams],
    });
    return signature;
  };

  // Unrestricted methods invocation
  const wallet_revokePermissions = async (provider: EIP6963ProviderDetail) => {
    const response = await provider.provider.request({
      method: "wallet_revokePermissions",
      params: [{ zond_accounts: {} }],
    });
    return response;
  };

  const zond_accounts = async (provider: EIP6963ProviderDetail) => {
    const accounts = await provider.provider.request({
      method: "zond_accounts",
      params: [],
    });
    return accounts;
  };

  const zond_blockNumber = async (provider: EIP6963ProviderDetail) => {
    const blockNumber = await provider.provider.request({
      method: "zond_blockNumber",
      params: [],
    });
    return blockNumber;
  };

  const zond_call = async (provider: EIP6963ProviderDetail) => {
    const returnData = await provider.provider.request({
      method: "zond_call",
      params: [
        {
          to: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
          value: "0x1",
        },
        "latest",
      ],
    });
    return returnData;
  };

  const zond_chainId = async (provider: EIP6963ProviderDetail) => {
    const chainId = await provider.provider.request({
      method: "zond_chainId",
      params: [],
    });
    return chainId;
  };

  const zond_estimateGas = async (provider: EIP6963ProviderDetail) => {
    const gasEstimate = await provider.provider.request({
      method: "zond_estimateGas",
      params: [
        {
          from: "Z20D20b8026B8F02540246f58120ddAAf35AECD9B",
          to: "Z208318ecd68f26726CE7C54b29CaBA94584969B6",
          value: "0x1",
        },
      ],
    });
    return gasEstimate;
  };

  const zond_gasPrice = async (provider: EIP6963ProviderDetail) => {
    const gasPrice = await provider.provider.request({
      method: "zond_gasPrice",
      params: [],
    });
    return gasPrice;
  };

  const zond_getBalance = async (provider: EIP6963ProviderDetail) => {
    const balance = await provider.provider.request({
      method: "zond_getBalance",
      params: ["Z208318ecd68f26726CE7C54b29CaBA94584969B6", "latest"],
    });
    return balance;
  };

  const zond_getBlockByHash = async (provider: EIP6963ProviderDetail) => {
    const blockInformation = await provider.provider.request({
      method: "zond_getBlockByHash",
      params: [
        "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
        false,
      ],
    });
    return blockInformation;
  };

  const zond_getBlockByNumber = async (provider: EIP6963ProviderDetail) => {
    const blockInformation = await provider.provider.request({
      method: "zond_getBlockByNumber",
      params: ["0x1", false],
    });
    return blockInformation;
  };

  const zond_getCode = async (provider: EIP6963ProviderDetail) => {
    const code = await provider.provider.request({
      method: "zond_getCode",
      params: ["Z208318ecd68f26726CE7C54b29CaBA94584969B6", "latest"],
    });
    return code;
  };

  const zond_getTransactionByHash = async (provider: EIP6963ProviderDetail) => {
    const transaction = await provider.provider.request({
      method: "zond_getTransactionByHash",
      params: [
        "0x7daca88be141b9c778aa2d55ae81eab7766e97a9b2549e975680a6f20dd46fde",
      ],
    });
    return transaction;
  };

  const zond_getTransactionCount = async (provider: EIP6963ProviderDetail) => {
    const transactionCount = await provider.provider.request({
      method: "zond_getTransactionCount",
      params: ["Z208318ecd68f26726CE7C54b29CaBA94584969B6", "latest"],
    });
    return transactionCount;
  };

  const zond_getTransactionReceipt = async (
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

  const callRpcMethod = async (
    provider: EIP6963ProviderDetail,
    method:
      | (typeof UNRESTRICTED_METHODS)[keyof typeof UNRESTRICTED_METHODS]
      | (typeof RESTRICTED_METHODS)[keyof typeof RESTRICTED_METHODS]
  ) => {
    try {
      switch (method) {
        case RESTRICTED_METHODS.PERSONAL_SIGN:
          return personal_sign(provider);
        case RESTRICTED_METHODS.ZOND_REQUEST_ACCOUNTS:
          return zond_requestAccounts(provider);
        case RESTRICTED_METHODS.ZOND_SEND_TRANSACTION:
          return zond_sendTransaction(provider);
        case RESTRICTED_METHODS.ZOND_SIGN_TYPED_DATA_V4:
          return zond_signTypedData_v4(provider);
        case UNRESTRICTED_METHODS.WALLET_REVOKE_PERMISSIONS:
          return wallet_revokePermissions(provider);
        case UNRESTRICTED_METHODS.ZOND_ACCOUNTS:
          return zond_accounts(provider);
        case UNRESTRICTED_METHODS.ZOND_BLOCK_NUMBER:
          return zond_blockNumber(provider);
        case UNRESTRICTED_METHODS.ZOND_CALL:
          return zond_call(provider);
        case UNRESTRICTED_METHODS.ZOND_CHAIN_ID:
          return zond_chainId(provider);
        case UNRESTRICTED_METHODS.ZOND_ESTIMATE_GAS:
          return zond_estimateGas(provider);
        case UNRESTRICTED_METHODS.ZOND_GAS_PRICE:
          return zond_gasPrice(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_BALANCE:
          return zond_getBalance(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_HASH:
          return zond_getBlockByHash(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_BLOCK_BY_NUMBER:
          return zond_getBlockByNumber(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_CODE:
          return zond_getCode(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_HASH:
          return zond_getTransactionByHash(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_COUNT:
          return zond_getTransactionCount(provider);
        case UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_RECEIPT:
          return zond_getTransactionReceipt(provider);
        default:
          return "Method not implemented for this provider.";
      }
    } catch (error) {
      console.error(`Error calling ${method}:`, error);
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
              <Button
                size="lg"
                className="max-w-min"
                onClick={() => connectWallet(provider.info.rdns)}
              >
                <PlugZap />
                <span> Connect {provider.info.name}</span>
              </Button>
              <div className="w-full space-y-6">
                <div className="space-y-2">
                  <div className="font-bold">Restricted methods:</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(RESTRICTED_METHODS).map((method, index) => (
                      <Button
                        key={method}
                        variant="outline"
                        onClick={() => callRpcMethod(provider, method)}
                      >
                        {index + 1}. {method}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-bold">Unrestricted methods:</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(UNRESTRICTED_METHODS).map(
                      (method, index) => (
                        <Button
                          key={method}
                          variant="outline"
                          onClick={() => callRpcMethod(provider, method)}
                        >
                          {index + 1}. {method}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))
      ) : (
        <Alert variant="destructive" className="max-w-md">
          <Wallet />
          <AlertTitle>
            No wallets detected. Please install a web3 wallet extension!
          </AlertTitle>
        </Alert>
      )}
    </Accordion>
  );
};
