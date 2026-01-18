import { useWalletProvider } from "@/hooks/useWalletProvider";
import { CheckCheck } from "lucide-react";
import { TestAccount } from "./TestAccount/TestAccount";
import {
  TEST_ACCOUNT_1,
  TEST_ACCOUNT_1_SEED,
  TEST_ACCOUNT_2,
  TEST_ACCOUNT_2_SEED,
} from "@/constants/testAccounts";

export const Connected = () => {
  const { selectedWallet } = useWalletProvider();

  const isZondWeb3Wallet = selectedWallet?.info.name === "ZondWeb3Wallet";

  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-constructive">
        <CheckCheck size="16" />
        <span>Connected to {selectedWallet?.info.name}</span>
      </div>
      {isZondWeb3Wallet && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TestAccount
            title="Test account 1"
            account={TEST_ACCOUNT_1}
            seed={TEST_ACCOUNT_1_SEED}
          />
          <TestAccount
            title="Test account 2"
            account={TEST_ACCOUNT_2}
            seed={TEST_ACCOUNT_2_SEED}
          />
        </div>
      )}
    </div>
  );
};
