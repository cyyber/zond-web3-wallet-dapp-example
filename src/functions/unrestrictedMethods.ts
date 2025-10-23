import { UNRESTRICTED_METHODS } from "@/constants/requestConstants";

// Unrestricted methods invocation
export const wallet_getCallsStatus = async (
  provider: EIP6963ProviderDetail
) => {
  const result = await provider.provider.request({
    method: UNRESTRICTED_METHODS.WALLET_GET_CALL_STATUS,
    params: [
      "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527123",
    ],
  });
  return result;
};

export const wallet_getPermissions = async (
  provider: EIP6963ProviderDetail
) => {
  const result = await provider.provider.request({
    method: UNRESTRICTED_METHODS.WALLET_GET_PERMISSIONS,
    params: [],
  });
  return result;
};

export const wallet_revokePermissions = async (
  provider: EIP6963ProviderDetail
) => {
  const result = await provider.provider.request({
    method: UNRESTRICTED_METHODS.WALLET_REVOKE_PERMISSIONS,
    params: [{ zond_accounts: {} }],
  });
  return result;
};

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

export const zond_getFilterChanges = async (
  provider: EIP6963ProviderDetail
) => {
  const logObject = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_FILTER_CHANGES,
    params: ["0x5d71077f43bcd46f25b74f2409d2f164"],
  });
  return logObject;
};

export const zond_getFilterLogs = async (provider: EIP6963ProviderDetail) => {
  const logObjects = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_FILTER_LOGS,
    params: ["0x1c2fc22a03559852c88e0b501792be88"],
  });
  return logObjects;
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

export const zond_getTransactionByBlockHashAndIndex = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionInformation = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_BLOCK_HASH_AND_INDEX,
    params: [
      "0x28e25a85fe327cea53e461774d989181e71595ce653e193f96836242ae8b8f48",
      "0x2",
    ],
  });
  return transactionInformation;
};

export const zond_getTransactionByBlockNumberAndIndex = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionInformation = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX,
    params: ["0x1f06a", "0x2"],
  });
  return transactionInformation;
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

export const zond_newPendingTransactionFilter = async (
  provider: EIP6963ProviderDetail
) => {
  const filterIdentifier = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_NEW_PENDING_TRANSACTION_FILTER,
    params: [],
  });
  return filterIdentifier;
};

export const zond_sendRawTransaction = async (
  provider: EIP6963ProviderDetail
) => {
  const transactionHash = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_SEND_RAW_TRANSACTION,
    params: [
      "0x02f91c4a827e7e0c8477359400847735940782520894208318ecd68f26726ce7c54b29caba94584969b6880de0b6b3a764000080c0b90a2087ea66b0bc7d292916a9cc225c460e21fa6a76525600876bb65635874d1e68644c28daeaccee651dc2ff85602fae4161450656e88f45ba6bacd9982d033580524b952b0d2de0cb92205860ae3f2eb54d9497dc13d0e6bd833a6e947f0fc24918aba42bc7156abea97189c83fdf4215223cfb6e49505b5a6ae065f6056b3e874bf56340c96fb41831cfcb42a6e0e996198cdd30cbee51f47d0a8fa8ee1c79dfa5cab0af195bfb0c6b702fdd127939c42ec32edbe6780126fc5142bb0491f79c1bbec59ee14d4de6b73b6a6a618445fef3efd16e884254c859da80a8c7e05691b1b81cc7034974056fb1479ee1596027f54de148488774e76271591eb2566e517f4de4b09a5c62e0488aa10aba61288074c8071ae16f0248c61237b4c02f126bca55158833a28822b370d6fef1adba7f0bea01e3cceb89646f86b6356b7c62960461e14508606eb25340a68d0d8fffc866bc50b043b6ac5dec819e24d84925989f73300857e57847dd58f1cf21b03be42954a58f35167b4abf4539b56d1f03c0690681862d5a4775ec74d17f6c19a3c2ee2e8a06504c2fd6e2eed4f11799c65d2e20c46237dbd5996ae503f78eb52d327cb8992eb0a11ea55407e516c084fabc292f66e003139536d77d4ed3b61bd77e86c811d00c8eaea5c8f9745b2c85ec6ab5ff635513d6ecc5b370e0fad2bec9e4575b4ddc96b135f9fedb598f1d754855be8574241b2efdba1a4d250f25b7bfd9dc13973b256f242725ddf746139257b886cfc3a21c0c2eb159b93eb474ff9e96613ef770a48750ac1c635dedcab9035114aee60826886f3bd26a7124d6147ae540cb9e9e58b58eaed93f2cc7b820f9293ee6b2899e3798d65f129c1065e49088f4b555bf892d607cb35a7890887431df843360763a86892e0a96825fe4089e1eeef2277b6cd486a1dc3d8cb0482e2e7d7afdd99ecaa7a29888d37204207003deed46650c5cce6939533d47b6b75436a47729aa4dae0849e98faf005ff28e258fdda5be1c1dca4e2b5935d057bfb1863e961960839271585cf4e36fd392f1306b250873297c1dcc624f25c617098ca8581977ca701d08844a81b92b9964efa1f9f06716da227749b0b8c9648d3bbdc2fb7176c3c11ea89fb87a6fc1feed1369f3e99b96339d5c4f91b4436c4c88c2681d17d753f1827559742a85e09a4994f84811c9750b0ae9c2b134f089f9769d05d7748fd30b10341f9c971a7669f3c554c37cd8cb9431f947a1204f44c5b3108228c6596703985caf9d366befe33a1b077cbb1d1cabc18358a6047a555b859eb7060e302c8ec1ece60c1e6c30d1e5d2d0b9becefce19906d59e0f6e79a40d596e726c6724dab31d76bed4779cf4827262aeb3f604248f335e6db793133b92d12159c35eeeb3e57232566cf5f7d9d3681dcfb4da3adc7284283f56f5546c34853ca3bb154ed0a93059004a2afd90a802441f75a2789bf55ac4e5393531235295cd7fa6bf8d3cf1644542d483fc204f95ecb5d72f9b7c0af792928c740ebe917e1b067ed3d25633f5a2626917149a4812d7c0dd60c901bb7145d0f12a2b2dca4f12d106714de84aee087b49604163d459ff29170a11a0f5611286cc2587c50e7febbf815c78d5ae1e7da1597a4bd5d4e3d690da50650e483937e3f04c5c73bc0a059096cbaedc200e32b300b2c4eeb77bf4e6e04f2331255ed85fc40ad78e830d01677e53b258b8cea87acbbdcd436852c5c2160e5f5437835043a9dc5ca76c81ef8cd2ad5109c647de80ee0431a3771d33debd3bbc56a7436b6f8c0ff48e413d88ef03783471402e39dd85a457376dca32a6cf1bfe6f6020890045eb2d312f426103772e254504ac4a6fd160867633cd76752507fe67f5f3a9a9af7b416abb50b1538a72531767c36ba7ca9ba8ca775078957556592e47c55906c578ea559b476535adfcf804f6c4c22b6de3f10f49d1d345e0cc0cc6478246f9e135a91bc4ca9d47180004dbeb19936c740b25feb2849a3512ebd92c375e1977958a1d8ea27df335de7b3001fc8c6412015aace8358eb7ec038b853bb7e1dcf8b5fb9aa01dd535a023a5ee5c76be221690a2ab1ec2c29b249a4dca577d6f7a99cd0934a1a9e0a7fa1ed737e002071088d7b7bf2082d86cf27057301d103c8d1b1958be6e0053d10bcf7dce9553a187d52185812f2104d970a192448d50cba1bf81b4dd199b95385e5798794ee72b746254dece95461884fc2c3089060d195aadb197a91390e410d97a4e96f58a55ad573f6cc894e37428b2f5d32fbf1efc867aa84eb2f110211d2ac0d5d47af46a4cccd9fa98b056a374dcf056c9fb6f98309e1f50d59062972d8975389e09c3217ea5e9f0deccbb43d9d120cdcf474192918ba711ccd7e09e1fcf2eef3625eef2ca306761de656aff72c4800e300c111a19aeed300ab6c12def3979e79220e374bf3f4dd7c05dde6417bf63ad78c579e57b781874153e5c6dbf8eef3f81ea32073ea51248087246c03ed2579fa481ce265684a000fd1e4af7647bd8c4d4a1355c7fb055fcea5a83fd142856dc4a4590a3fcef1c46ea9c3bf9e6e704ae4ba150ebd6e9e8041ea662a8b9b62a8faa916091d99aaef969c92990019afd56fcdbc9d59f25cbf5cfd57ffcfa7584188907590366926984277ce85445b8446d6e24926da1f079fa53a9bab31d6f44caecb210cdf1f9507206a8b0f1f6011a1edfa6066f9e07e8fc7357a22807029386f96d0a28618317fa0ddb8202a17828e95b439345faa11d01a3cdb129bfa8c0a971dc64c696c723c868100d4b2aa37dd0e3d47cef70061d18dff19c400f336d98799246689da2b5946fc3107b665b9382642445344af042a76eb538ee14cf1e6c7ccbf96dca982d49b95c00f6347d688d77cb08a31dd8e083c8a8275ea11a7d42693ce6afd9e68365596c1a6739e4baddc31be5dbb0763d642b3d174a96b8908d898bc2318f463159aa60ccf5b0d69560d49f5d67df5574fdc842d98eebc8059f0a7ec0a0b38a16c53d37b823a9b75c03928d0ebd8756c741fcfd7a8e771f41b66406f6a773a31e99865b54cb6ae1f27c584d215623c7fcce71b6abe40f02bee21145f4e02e2cad680279d0e6311d1cf6ce01512e684171c1cb7fc7b0c96d61b0adf261ea5c03028a6f0ec2162ba1bd6c74b591b1a4f8965873e450a69369133a583806fb6e29484fe4d6935bd6cf57382a21733b50ee8fd40d60b45e60ea9faf111844601e372c901890b1f5170f72036a98d8fab1c5c3664b56f019ea6e11127d501e343745739bde729227e57d3b9277bfffd204a53239caf7979f4c8e46a8365af77ac30acdb5d43fa01928fd665a4d38c9a26db58370ed51c818f0cd76262ff3c662b5b7cadad21c5516b152d3190e5f91de6e5a75a70b90720629c2dbfd4c03af7cca2bb7248a5f3f45f35e3bda5ea3b3ab4ec7cdd5479a41d3279ebb7e0a5d3a5eb6add7d4fd03d18f6349486237531132d17bb4f317835ba22ae7fe45e8197a0a7384325399533720caefb1a717a8853e9812a5ebde5a018250044789bc1804c1866ba4df4674163415405fb5ff22a5fc6c945ba562d3c9ca152a37da11d24c9f61aadaef5ae6d8ac87c1c8acd9ac09f8cbe10bd518c7ad1f3bb8e0bbb8daa32883dce7616f73e8786a7a09b911f331c0f8f93ae16cb73dcf1a38da3a0fa9a84d52ec7ef0ac49416abb2a4be87c8e61b4822ea41acf158c761ec83fc37700acbbd0205dcecd39d9f8e80e4084611e314449f997e784f9ba5eb21e819478f486acb2d1fbca8254735a51438345b92be6f7c5c093673e21ebe588378c9175a3982e74dfb1b6b22df5f82ac2cce0ca19c423a84324b8737b30ab04dd0096854cfa5f986d501382a0f64f1ae7d8b75db54d7e0965884a10c3270dc22ed911ba0b15fa95ae20e80e8738172f01d70ac67ec28a01da1636fd0c09fed69a9ccb6b3d70ebc5a26cfb634d5e0def5cfb26677777e13deed462e419fbc180bf22833b08a6004c8bb58ba0544f91b4d768a0265de689afca80d3445bd814daec09501224488d798ac15717c7ddfc2e8f84b7ba97c2fc8dfa6007a95fcfc976e33039de9ead8b01d613e0ed6ee796657d402d02b7262f55c5e52ed55f7ec98a4e47e2be7bee9e2511ff8d555248da66ac06099f6639a8ef113ea088d0ef0d2a74af69e9322fda7f490b04fae93d46418704ffb79a78893f2ab5f73d893a7a52650ed2de2039c90ade057bf29219be24e7f77eae2156536e4fdedcf3dd8e1af1cee171334bdd4f1895490c708ea1c29b7966994c133b5cb93377125f4463927dbe03dc9642cd52d470087bce215088713b85daf1ce4a0b6b5ed1bd9af7de5c73e1816ba3e86a2f1c0e3178eeaa84a034e90d3094a97db702c1c8a7b5262ff25f638ddf57f02ac66ab69dd4a4b6df961ad328fe90b45034109b01d3836d0a265d896537bda2227e07713011eef3d43607a8bb953cc20bf283a155881d9e121df5ff5721ee912ace9a97a2cfc968727fd99dad3fb5c12d04f0de6efb094fb326d21141bf8cb73ec6d7395bcfc698ba31744e05b35c9313e0e56cd9f910224d4b796de8f587f846193a3fa27ac5bc71dc2a6c356746fcb8909377569265be3302a33804a79ec342160ca36f034e2749bdd90b30ec5847db658d23cdf450705487bf8adf3f8994f49df479bd3ac0a5bf7fa73702f58829d106a586f531956609d6f0fdafa492a4a119fa30455dedcfefcd607d24c9043ec43aecb91b2fa0595f4f39e01c6dcd8493bc8276bf70313800b54f4281ccefec67a7026d55a3b716e38178f06bf196e6d0874d3c91d6d3ab106dd7230d491192ef64c8cb0fbaae2abb9149bc3bd4b77ca8b93f8d8f98cbb204a6ac56731e04beb16422d6b005ac12a460677846562608f2fbfba812ef33215da7afa2c1c682d1eb1063c36ce1105ee0845cb3adba91f20de144efde62b3040cb419515f5e49ea599f38e12203ceefe0b1210dac18a1b7032328e00cb875d28df3760b614299298a29e38bde493fa8428d0ee800b8700ca7eb7808ded8be0c040b87b5363ba1609a08a29dd666c6bf76e57480d8b23c28aa111acb20cf293cf576dc8b8cf398c04ba48b3d7cdc02b7ce8767b3f5292076a5da54a37822615a46f728c3d1b88aef45af0b3560277b9219504aac75dab8ca8a2a457a1d9e910cc3cd173e0c6a885fa33faf594c4f39de3c85035587604263c8429eec2762cb2da1d93f7e98c0bf4e1e053e1f3a342b0ff62dc91fe861bd874ec68c4a4bc6ccdf054752b138186ad42e6ffa832d578613d9ad2d5cd8f4bdf67e8dbb0893cdace3d2fa6df5552341ae50156e42e39775f918bd948de6bcd98752bc66306899cef2a2f62eea7b215b9230a11c5fc31cb0f22a9356feb96295bd66e7f8f4a0913c657ae2bd6d54cda95d0f12360e439a82a17741b0afbf96a9cdc38d3d7210e63a6bc07024d52b204b8e717f7303ad382ae8e7cf846a6dfe71a48f2cea8492ffbfb128a55810e64344403f502fc785cf152078dcf75b867a1f452ad7bf98eeed415c301323afe01443388dcf099fd62bfa45ebcb9ffcadec66cdd49bcad54425cde427cf0ed1a8e716c97911a8eca6712b38faa9d60aab75acc525cfedf0fd9f95336b6c931d525eb5de69642c6142b1a25b9207e2252db2e376a77c844b1a75897f4368f44eced554c385e66e9f42bdc852f45f086ca20bfe9253ad78c59fa1a7da557f3deb4e3176a8510346c7c83d0a4ff33cdc78310ca1d63052700ae47d4b79b91861af59aae3415c428de37423500ffc3e61300dca1aedf461f4c0a04bcaddbe6ee3e5978677717a8d4a2e65557ba98c8e2d1a2ab6e06020093026b3b09c68d427c2c1586607e0c0bc6ce73c5cedaee09c2ec3730c7556cf817e412efba064a8470a9c975d4042752ab6486a046ae75a4233d8c67c21810b00dc7ee960ad14b0c8f16e228193d364103d0a4a3b25c07eadc79561160743221c33e32922493e759eb6f8b7454e9fcd1514dfd320e64c1e580daee00837d29b1fffe889c9662ec96588e04f3e5adaf3702bff1b986f1ee370a85da79c23153df243694cf2b45270537923f4f6285b9a50cd989a27aee534266e65189b304a65ef0e53d244122ee0187dac225ba3e679bba5288bd51f1bfad8bf08bc8e47123383fa1f19f8ad8ca74d1e6620ce17239113e0dfe04d780d6d5936b61a592621f270797558b7d806163293a2e0f7a1ebe975f4bd02235f75ec3a64d119a2b6ae810a5848922894156ddbc11fa6c1edf68f5416db8b7a7a4e89d9be8c49a8bb5f6a67026d11b516d033fa87bc18d227961afff97a1a775827c356c61983691653aaeeed4d1304d6ea933ca49f82a7df4d355b7a561f6414c7e0d23e241b5ec25df7317f9bbc627611ca2613bf9b7ea5e0c4fa1929f51a1c4d418bf64853eeb7aa8b85a0cbf29e550631b1abb167d68c1540d97b4fb0fb849c5eae8671b4bcff1a2e9957de9ad46253161f1717961f8ca5bb898489244c527a7e71b7ba3330718670f79a593112d0483bd8d04f3bb4a90ec2994dfad4b77c9c9adc5a8bb1f3c5129517372973f12fceb80dd04f5d124763637c9a63599c6fab7d9071ad3083ef2b0910b637d571334296272e2bb1ddf0dd2edc567ece1cad548f5591c06580486779e08a70e9a376afb1a6b524423c2bfe38828e7ac6573ddec8f445ac773a7b751c55231e66ae7770dd00654a6e6b2987ed40cd63ff271be61136a21ee3b308b93f9e3fc1242defee91674c867017baea5f3dda3189d3210e65d7728c5b610429626312675189a18285011aed550bd79b67fbc03f4ea418b9c3487db012f008c30c8110942ef2cc3be459e4d6def4598014e47379f9b3b49012fb8e96baa9702a1d5b87727c388136aed42a84eb310cdb304503d6cb7f7679ad2b8e3cef8fd62a56c5c9beeff0ca334fc3f08c3892224a7663982fef4db9cb39a417148d02b3bd67cdb6e26e4b26a342ae266f489e8857b89cd87c0a25666a1753bbd838e8f90396d835d5dae5c7d562a9688680c598691f1dc8c10f28895d54acd34c7d68909e26f158bb58c7f929d3671b3c57f6cb46ef79bdb962f416e0d8eec21aee66998e47bfcb1346814a341b4476664f8c0e9a693bde4cf625ebc3c09edede7f4ea63797c721d13e1303760fbd0ef0cf0aff00351196fa97b8b3a4439ad17319f8ac3ea0b9d2c18036ab4a1132406f1a68b694ab58755ec73219391be571cf5e866c6ad5a9062f2e7721f5798e0618c4726a23ca85be37757f4207fbcdfa15984daadf28963b40696d6d381f14e4cf0970a7d44b2b8e1a122e0043dded7bd8870053399f6574dc733785bacd83dfb5fed1ca77acd07a360fd2802d1570806e1ca326ac88aaaf3650a7c38184dcd5d5f0b4fa1a8528b73d0c45abab3ef9dddcb52dbecac85f926736d5b210f4829f9969bd261cc0901ab68c3dc1883f755252fed01211890331f0cfda4fcf94c5bd0a3a37ec3c06e8758046cbf449d0e42ba37a2c9d07af1b679435e9dd8aa93f7fcc152b32d186e68bacaab0a83a106c1648fd598d7a5dfce7a781cdd0a3751efc92e7aade7ce2897c10b9dd2018d7dde532f7c9edcc0c32221ca409a24184790588ae8ab29ff7134f025ecdab55400f7c853afc77706900577109130e62281336a51c4ecd7a0c514e2a4c15252eb886fac2eb03d66371712332b83f50fcccdef7f1c5014564d27536101659c15aa9cacbd644715abe14e28dcf666ca409ca74e2a6cc0865cc2511f081952751fdd84f87c1f20f77848ce7875697431f27b3e633d12485ecbbd6e21764efd63436cf205ebdff47f7529e78dc614dcb1fce74df947d80c48caf79ceebac20568b69424f559fbe8d97ea2c7999d91eeac24f9e11810fec350768f0be7e96dc4f4737a5e3ab426913fd6b49d4cf22ebcbafa27cd91c06c4b2e0eabba30a858c7c543f3403b9ea5783bfe0f0e197ef8d55dc0785c8d13cf94b4fdbe56012eb818fb04f6f6b785c0d9337ebb5c0f0d508153a8dd684705fae14b2633a8e78f076f7ce0682f37e87fd3153408a51f1fdc11d4d5a703a22e116edb1133beda179ff199b6ac5715165a50f7f067cb4ba45776ea0f4109398a4537c44cb9395958e38056ff4a8d9bed9e5450f3b74cda3b2f633b2009649cf84bd37018bb903e4e573462b98669e5f0413af0dd52039dff4e3cb445d6f868d55ad92c258014282b84aad8a64e480c2c49505818e63b939b5ea5bf4c98a66c90b369c37e7e658c30f76127e98a4e9035d4039ed4cc9ce59fd23fbb6b151acfea4b0225437158a8e03735dd659361bf7a8a44d86826949c010126f6e17a41ea4c150a6413fb731c4f98ff85f9e248d2af5713cb79748bbfcc426089a4eca7790f187be8e7bf20840f44cc8c9c802d60b21d475c2137cd5280d5acdd1b47b7efe08cde916809e89eb7d22ab362f662bd33b29da3c63c532d66a625dab5a75a2f9cd0099ba89cbd87570b254fecc35d36b340cbce84d030e5800cce17e6bba1603f653a98f8604380cf18f4bbd8b8c094888790b02527ec1536b2f1a5aaa5a5ed496373d4f15dd9e4938d53e6246832076aed96d6102e455acdfe20070bf421a2539c0fbd3343c6e5c1df3965eb2728b908053b455d08a658f2d25844a28b0ff564f6c24c838e32538c1ff670d96376e73be593c2727e1b7a22caa1c2f374f7a263bcd5573501e7cd3b801a45c0b71a92386a06b548b5cd186a3b596ebbdfcbdfa337db41af943e2d254a92aba2c5bc8842ed4d5fc4c4cfbf10620181d2176f4185219c0040a4467e1a7fac5defda597bc84c8c422e1286e123f32f5f7318f5d0b4226940667b34961bf954d657c25a532a580fb9157682629714e65ec128b2b520a68a3a2d8a7cab441fcca87beeb07561f111a02c3f271ba515e3718e5ace17b09ac8d6b3755c51f048a0bbfdd3f737ae936bb8834f06c4cdef248887a4f88f3cee0b8aded8b3408b8aaf75ea669b8c239cda118cc5d6ca68e26c768062d8b5d8d81985f6d6a8422e560808c1dfe2480b207bbee18dee42e25223bedc525e87b9d9a1037f9e50f3a4c48b59b3177c608b683c9ea5bedb16dab01f98bbb13e5a5c62d0f3759f64a8244fbdfc8528c89a387dc1a9928a2c8bb7bc9ce950de2e226497ac1269866b7cdc08ce02e1dbdedff277832253c3ba6e6a346e3cf2e9f592eecd221048d296c9e36cb4c9fbc12eae5c77163855e57059a241d9185f5f2de52b27eee851107a7117f9b49ec5ec0904483951559785ad655e88b37806f416b334a0d72041248f7b40bb5d8c53638ecf3a48b0b3bcfd95bc10835ebc0e1c3c4461301b2f64c2e38df2485c7b233f757a5a484ac4e6560251b47d331f59630d7c4718d2966ecdb4ff5eecb4a312ef32b44ef8924823b4f3127ab7be00685989f5c9ae1bd23856d7efac57b270474284458cee78b35b44faa54b74e61521b7cbe472386840395f3ce38649ff89b4f869f86ab5cb98bf8230cd9fcb18d451cfe6520092a9b959fd82acc11518bb924e82e0334faeb11eec6d187d7512af1e048f59a72744a3c295b6ad5f170879ef623709569648dc2336854818730f8b6e9e115e4d302c5f38a9c23e89527781dbfbd402d4e34c53fb888963051f02429c37cbc02d4df4ea7ead4a8f78ad29040894521244b2f9727ced90f8cac96daf60f79e78fc545f22cc4f7ae4b0345288558c664970d6f8814470e2e604ca49340a58c6169f006ce60ced4ddc276949d2e2e42bd2d88e53ccaeb6aad5796d1ae3d18c673819128cc131568a3800ea99db6b5662719feff95738e1ab5a3fa780b11faa69ecb66c4eea2ddef42463bcdfa064423dad1edd91379ab01ed0d8bc66c88a14fb2d088e78fbebd01dc9f9cc2db870a8abb17d4d617f54a970328e18868ee1c27635b1f10ac522cf00256a834c34b99995770facb660c890ad29f9e6f592cb1429ebf670bfde429ec672fea50a2dd45d8b353872500a357eebba8e15a4ac6a3877ab8dfbeec82535a6367759eb3be40606181aeb8093753597dcafe0c1bbbc0c3e4e91abbc1cfeb151b3f414a50515a8ab0bec3db0817576670b3f8192132394c979dbed2f5f6000000000000000000000000070d141b202d343f",
    ],
  });
  return transactionHash;
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

export const zond_uninstallFilter = async (provider: EIP6963ProviderDetail) => {
  const isSuccess = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_UNINSTALL_FILTER,
    params: ["0x19ecc4e804cb0fa1827358325b53312"],
  });
  return isSuccess;
};

export const zond_unsubscribe = async (provider: EIP6963ProviderDetail) => {
  const unsubscribed = await provider.provider.request({
    method: UNRESTRICTED_METHODS.ZOND_UNSUBSCRIBE,
    params: ["0xda4de5b265bc34b0bacaf5da395e7fce"],
  });
  return unsubscribed;
};
