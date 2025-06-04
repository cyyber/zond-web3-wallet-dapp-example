import { Copy } from "lucide-react";

type TestAccountProps = {
  title: string;
  account: string;
  seed: string;
};

export const TestAccount = ({ title, account, seed }: TestAccountProps) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-2">
      <div>{title}</div>
      <div>
        <div className="flex gap-2 justify-between">
          <span className="font-bold break-all">{account}</span>
          <span>
            <Copy
              className="cursor-pointer w-4"
              onClick={() => copyText(account || "")}
            />
          </span>
        </div>
        <div className="flex gap-2 justify-between">
          <span>{seed}</span>
          <span>
            <Copy
              className="cursor-pointer w-4"
              onClick={() => copyText(seed || "")}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
