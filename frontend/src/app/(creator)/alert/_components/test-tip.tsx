import { EduStreamrAbi } from "@/abi/EduStreamr";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UseGetCreatorInfoReturnType } from "@/hooks/use-get-creator-info";
import { useTxHash } from "@/hooks/use-tx-hash";
import { config } from "@/wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BaseError, useWriteContract } from "wagmi";
import { TxButton } from "../../_components/tx-button";
import { LoadingCard } from "../../_components/loading-card";
import { RegisterCard } from "../../_components/register-card";

export const TestTip = ({
  creatorInfo,
}: {
  creatorInfo: UseGetCreatorInfoReturnType;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { txHash, setTxHashWithTimeout } = useTxHash();

  const { writeContract } = useWriteContract();

  if (creatorInfo.status === "pending")
    return <LoadingCard title="Send Test Tip" />;

  if (creatorInfo.status === "error")
    return <RegisterCard title="Send Test Tip" />;

  const handleTestTip = () => {
    setIsLoading(true);

    writeContract(
      {
        abi: EduStreamrAbi,
        address: creatorInfo.contractAddress,
        functionName: "sendTestTip",
      },
      {
        onSuccess: async (data) => {
          await waitForTransactionReceipt(config, { hash: data });

          setTxHashWithTimeout(data);

          toast.success("Test tip sent");

          setIsLoading(false);
        },
        onError: (error) => {
          toast.error(
            (error as BaseError).details ||
              "Failed to send test tip. See console for detailed error.",
          );

          console.error(error.message);

          setIsLoading(false);
        },
      },
    );
  };

  return (
    <Card className="w-full flex flex-col">
      <CardHeader>
        <CardTitle>Send Test Tip</CardTitle>
        <CardDescription>
          Send a test tip to check if it appears on-screen. This action requires
          a small transaction fee (~0.0001 EDU).
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-grow flex items-end">
        <TxButton
          isLoading={isLoading}
          txHash={txHash}
          icon={Send}
          text="Send"
          onClick={handleTestTip}
        />
      </CardFooter>
    </Card>
  );
};
