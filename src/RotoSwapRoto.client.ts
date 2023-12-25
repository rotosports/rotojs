/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, Decimal, Denom, Addr, InstantiateMsg, WalletInfo, ExecuteMsg, Expiration, Timestamp, Uint64, TokenSelect, QueryMsg, MigrateMsg, BalanceResponse, FeeResponse, InfoResponse, Token1ForToken2PriceResponse, Token2ForToken1PriceResponse } from "./RotoSwapRoto.types";
export interface RotoSwapRotoReadOnlyInterface {
  contractAddress: string;
  balance: ({
    address
  }: {
    address: string;
  }) => Promise<BalanceResponse>;
  info: () => Promise<InfoResponse>;
  token1ForToken2Price: ({
    token1Amount
  }: {
    token1Amount: Uint128;
  }) => Promise<Token1ForToken2PriceResponse>;
  token2ForToken1Price: ({
    token2Amount
  }: {
    token2Amount: Uint128;
  }) => Promise<Token2ForToken1PriceResponse>;
  fee: () => Promise<FeeResponse>;
}
export class RotoSwapRotoQueryClient implements RotoSwapRotoReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balance = this.balance.bind(this);
    this.info = this.info.bind(this);
    this.token1ForToken2Price = this.token1ForToken2Price.bind(this);
    this.token2ForToken1Price = this.token2ForToken1Price.bind(this);
    this.fee = this.fee.bind(this);
  }

  balance = async ({
    address
  }: {
    address: string;
  }): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        address
      }
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  token1ForToken2Price = async ({
    token1Amount
  }: {
    token1Amount: Uint128;
  }): Promise<Token1ForToken2PriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token1_for_token2_price: {
        token1_amount: token1Amount
      }
    });
  };
  token2ForToken1Price = async ({
    token2Amount
  }: {
    token2Amount: Uint128;
  }): Promise<Token2ForToken1PriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token2_for_token1_price: {
        token2_amount: token2Amount
      }
    });
  };
  fee = async (): Promise<FeeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      fee: {}
    });
  };
}
export interface RotoSwapRotoInterface extends RotoSwapRotoReadOnlyInterface {
  contractAddress: string;
  sender: string;
  addLiquidity: ({
    expiration,
    maxToken2,
    minLiquidity,
    token1Amount
  }: {
    expiration?: Expiration;
    maxToken2: Uint128;
    minLiquidity: Uint128;
    token1Amount: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeLiquidity: ({
    amount,
    expiration,
    minToken1,
    minToken2
  }: {
    amount: Uint128;
    expiration?: Expiration;
    minToken1: Uint128;
    minToken2: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  swap: ({
    expiration,
    inputAmount,
    inputToken,
    minOutput
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minOutput: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  passThroughSwap: ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: string;
    outputMinToken: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  swapAndSendTo: ({
    expiration,
    inputAmount,
    inputToken,
    minToken,
    recipient
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minToken: Uint128;
    recipient: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    burnFeePercentNumerator,
    devWalletLists,
    feePercentDenominator,
    feePercentNumerator,
    owner
  }: {
    burnFeePercentNumerator: Uint128;
    devWalletLists: WalletInfo[];
    feePercentDenominator: Uint128;
    feePercentNumerator: Uint128;
    owner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class RotoSwapRotoClient extends RotoSwapRotoQueryClient implements RotoSwapRotoInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.addLiquidity = this.addLiquidity.bind(this);
    this.removeLiquidity = this.removeLiquidity.bind(this);
    this.swap = this.swap.bind(this);
    this.passThroughSwap = this.passThroughSwap.bind(this);
    this.swapAndSendTo = this.swapAndSendTo.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }

  addLiquidity = async ({
    expiration,
    maxToken2,
    minLiquidity,
    token1Amount
  }: {
    expiration?: Expiration;
    maxToken2: Uint128;
    minLiquidity: Uint128;
    token1Amount: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_liquidity: {
        expiration,
        max_token2: maxToken2,
        min_liquidity: minLiquidity,
        token1_amount: token1Amount
      }
    }, fee, memo, funds);
  };
  removeLiquidity = async ({
    amount,
    expiration,
    minToken1,
    minToken2
  }: {
    amount: Uint128;
    expiration?: Expiration;
    minToken1: Uint128;
    minToken2: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_liquidity: {
        amount,
        expiration,
        min_token1: minToken1,
        min_token2: minToken2
      }
    }, fee, memo, funds);
  };
  swap = async ({
    expiration,
    inputAmount,
    inputToken,
    minOutput
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minOutput: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      swap: {
        expiration,
        input_amount: inputAmount,
        input_token: inputToken,
        min_output: minOutput
      }
    }, fee, memo, funds);
  };
  passThroughSwap = async ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: string;
    outputMinToken: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      pass_through_swap: {
        expiration,
        input_token: inputToken,
        input_token_amount: inputTokenAmount,
        output_amm_address: outputAmmAddress,
        output_min_token: outputMinToken
      }
    }, fee, memo, funds);
  };
  swapAndSendTo = async ({
    expiration,
    inputAmount,
    inputToken,
    minToken,
    recipient
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minToken: Uint128;
    recipient: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      swap_and_send_to: {
        expiration,
        input_amount: inputAmount,
        input_token: inputToken,
        min_token: minToken,
        recipient
      }
    }, fee, memo, funds);
  };
  updateConfig = async ({
    burnFeePercentNumerator,
    devWalletLists,
    feePercentDenominator,
    feePercentNumerator,
    owner
  }: {
    burnFeePercentNumerator: Uint128;
    devWalletLists: WalletInfo[];
    feePercentDenominator: Uint128;
    feePercentNumerator: Uint128;
    owner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        burn_fee_percent_numerator: burnFeePercentNumerator,
        dev_wallet_lists: devWalletLists,
        fee_percent_denominator: feePercentDenominator,
        fee_percent_numerator: feePercentNumerator,
        owner
      }
    }, fee, memo, funds);
  };
}