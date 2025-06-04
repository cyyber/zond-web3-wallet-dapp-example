import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center justify-between">
          <span className="font-bold break-all">{account}</span>
          <span>
            <Tooltip>
              <TooltipTrigger>
                <Copy
                  className="cursor-pointer"
                  onClick={() => copyText(account || "")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </span>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <span>{seed}</span>
          <span>
            <Tooltip>
              <TooltipTrigger>
                <Copy
                  className="cursor-pointer"
                  onClick={() => copyText(seed || "")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
};
