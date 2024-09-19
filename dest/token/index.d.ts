import { AccountWallet, AztecAddress } from "@aztec/aztec.js";
export declare const deployToken: (PXE_URL: string, accountAddr: string) => Promise<AztecAddress>;
export declare const getBalance: (tokenAddr: string, wallet: AccountWallet) => Promise<number>;
export declare const sendTokenPublic: (address: string, receipient: string, amount: number, wallet: AccountWallet) => Promise<import("@aztec/aztec.js").FieldsOf<import("@aztec/aztec.js").TxReceipt>>;
export declare const sendToken: (address: string, receipient: string, amount: number, wallet: AccountWallet) => Promise<import("@aztec/aztec.js").FieldsOf<import("@aztec/aztec.js").TxReceipt>>;
