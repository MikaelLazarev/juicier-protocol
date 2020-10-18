/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface UserBalanceRepositoryContract
  extends Truffle.Contract<UserBalanceRepositoryInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<UserBalanceRepositoryInstance>;
}

type AllEvents = never;

export interface UserBalanceRepositoryInstance
  extends Truffle.ContractInstance {
  findReserveIndexOrCreate: {
    (
      _user: string,
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _user: string,
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseUserDeposit: {
    (
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decreaseUserDeposit: {
    (
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseUserBorrow: {
    (
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decreaseUserBorrow: {
    (
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _reserve: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getUserReservesQty(
    _user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getUserReserveBalance(
    _user: string,
    _index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[string, BN, BN]>;

  methods: {
    findReserveIndexOrCreate: {
      (
        _user: string,
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _user: string,
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    increaseUserDeposit: {
      (
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    decreaseUserDeposit: {
      (
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    increaseUserBorrow: {
      (
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    decreaseUserBorrow: {
      (
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _reserve: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getUserReservesQty(
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getUserReserveBalance(
      _user: string,
      _index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[string, BN, BN]>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
