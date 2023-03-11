import { useEffect, useState } from "react";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import stakingABI from "../../utils/abi/StakingABI.json";

export const StakeForm = () => {
  const { address: msgSender } = useAccount();

  const contractAddress = "0xccF6772F52D007E082bF4A01757C4091F5f4dD92";

  const [_contractAddress, _setContractAddress] = useState(null);
  const [_contractNetwork, _setContractNetwork] = useState(null);

  const [tokenAmount, setTokenAmount] = useState(null);

  const [_allowance, _setAllowance] = useState(0);

  useContractRead({
    address: _contractAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: [msgSender, contractAddress],
    onSuccess(data) {
      _setAllowance(data);
    },
  });

  const { config: approveConfig } = usePrepareContractWrite({
    address: _contractAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [contractAddress, tokenAmount],
  });

  const { config: stakeConfig } = usePrepareContractWrite({
    address: contractAddress,
    abi: stakingABI,
    functionName: "StakeToken",
    args: [_contractAddress, tokenAmount],
  });
  const {
    data: stakeTokenData,
    isLoading: stakeTokenIsLoading,
    write: stakeToken,
  } = useContractWrite(stakeConfig);

  const {
    data: approveTokenData,
    isLoading: approveTokenIsLoading,
    write: approve,
  } = useContractWrite(approveConfig);

  const handleSubmit = (e) => {
    e.preventDefault();
    stakeToken?.();
  };

  const handleApprove = (e) => {
    e.preventDefault();
    approve?.();
  };

  return (
    <form className="relative flex flex-col mt-4 px-8 py-8 w-1/2 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200">
      <div className="">
        <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"
          >
            <defs>
              <pattern
                id=":R56hd6:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:R56hd6:)"
            ></rect>
            <svg x="50%" y="16" class="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>

      <h1 className="text-2xl text-center font-bold mb-8"> Stake Token </h1>
      {/* <span>{ _allowance }</span> */}
      <div className="mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className=" text-sm">Token Contract Address</label>
            <input
              type="text"
              placeholder="Token Contract Address"
              onChange={(e) => _setContractAddress(e.target.value)}
              className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">Token Network</label>
            <select
              onChange={(e) => _setContractNetwork(e.target.value)}
              className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
            >
              <option value="">Select a network</option>
              <option value="BNB Smart Chain(bep20)">BNB Smart Chain bep20</option>
              <option value="EOS">EOS</option>
              <option value="AVAX C-Chain">AVAX C-Chain</option>
              <option value="BNB Beacon Chain">BNB Beacon Chain</option>
              <option value="Polygon"> Polygon</option>
              <option value="Solana">Solana</option>
              <option value="Tezos">Tezos</option>
              <option value="TRon TrC-20">TRon TrC-20</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className=" text-sm">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setTokenAmount(e.target.value)}
              className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
            />
          </div>
        </div>
      </div>

      <button
        onClick={_allowance >= tokenAmount ? handleSubmit : handleApprove}
        type="submit"
        className="w-full bg-zinc-800 text-white rounded-md p-2 hover:bg-zinc-900 z-50"
      >
        {_allowance >= tokenAmount ? "Stake Token" : "Approve Token"}
      </button>
    </form>
  );
};
