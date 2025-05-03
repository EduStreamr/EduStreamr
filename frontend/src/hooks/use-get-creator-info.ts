import { useAccount } from "wagmi";
import { ErrorReturnType, PendingReturnType } from "./types";
import { useGetCreatorInfoByAddress } from "./use-get-creator-info-by-address";

interface SuccessReturnType {
  status: "success";
  username: string;
  name: string;
  creatorAddress: string;
  contractAddress: string;
}

export type UseGetCreatorInfoReturnType =
  | SuccessReturnType
  | ErrorReturnType
  | PendingReturnType;

export const useGetCreatorInfo = (): UseGetCreatorInfoReturnType => {
  const account = useAccount();

  return useGetCreatorInfoByAddress(account.address);
};
