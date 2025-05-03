import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ColorPicker } from "./color-picker";
import { Button } from "@/components/ui/button";
import { useColor } from "@/hooks/use-color";
import { useWriteContract } from "wagmi";
import { EduStreamrAbi } from "@/abi/EduStreamr";
import { useState } from "react";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/wagmi";
import toast from "react-hot-toast";
import { ExampleAlert } from "./example-alert";
import { Save } from "lucide-react";
import { useTxHash } from "@/hooks/use-tx-hash";
import { TxButton } from "../../_components/tx-button";
import { BaseError } from "wagmi";
import { UseGetColorsReturnType } from "@/hooks/use-get-colors";
import { useGetCreatorInfo } from "@/hooks/use-get-creator-info";
import { ErrorCard } from "../../_components/error-card";
import { LoadingCard } from "../../_components/loading-card";
import { RegisterCard } from "../../_components/register-card";

export const WidgetColors = ({
  colors,
  contractAddress,
}: {
  colors: UseGetColorsReturnType;
  contractAddress: string | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { txHash, setTxHashWithTimeout } = useTxHash();

  const { primaryColor, secondaryColor, backgroundColor } = useColor();

  const { writeContract } = useWriteContract();

  const creatorInfo = useGetCreatorInfo();

  const handleSaveColors = () => {
    if (!contractAddress) {
      toast.error("Contract address is missing");
      return;
    }

    setIsLoading(true);

    writeContract(
      {
        abi: EduStreamrAbi,
        address: contractAddress,
        functionName: "setColors",
        args: [primaryColor, secondaryColor, backgroundColor],
      },
      {
        onSuccess: async (data) => {
          await waitForTransactionReceipt(config, {
            hash: data,
          });

          setTxHashWithTimeout(data);

          toast.success("Colors saved successfully");

          setIsLoading(false);
        },
        onError: (error) => {
          toast.error(
            (error as BaseError).details ||
              "Failed to save colors. See console for detailed error.",
          );

          console.error(error);

          setIsLoading(false);
        },
      },
    );
  };

  if (colors.status === "error") return <ErrorCard title="Alert colors " />;

  if (
    creatorInfo.status === "pending" ||
    (creatorInfo.status === "success" && colors.status === "pending")
  )
    return <LoadingCard title="Alert colors" />;

  if (colors.status === "pending") return <RegisterCard title="Alert colors" />;

  const realtimeColors = {
    primary: primaryColor ? primaryColor : colors.colors.primary,
    secondary: secondaryColor ? secondaryColor : colors.colors.secondary,
    background: backgroundColor ? backgroundColor : colors.colors.background,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert colors</CardTitle>
        <CardDescription>
          Change alert colors based on your preference. This action requires a
          small transaction fee (~0.0001 EDU).
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <ExampleAlert colors={realtimeColors} />
          <ColorPicker
            initialColor={colors.colors.primary}
            title="Primary Color"
            description="The primary color for your alert."
            type="primary"
          />
          <ColorPicker
            initialColor={colors.colors.secondary}
            title="Secondary Color"
            description="The secondary color for your alert."
            type="secondary"
          />
          <ColorPicker
            initialColor={colors.colors.background}
            title="Background Color"
            description="The background color for your alert."
            type="background"
          />
        </div>
        <TxButton
          isLoading={isLoading}
          txHash={txHash}
          icon={Save}
          text="Save"
          onClick={handleSaveColors}
        />
      </CardContent>
    </Card>
  );
};
