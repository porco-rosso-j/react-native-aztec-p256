/**
 * The `@aztec/accounts/ecdsa` export provides an ECDSA account contract implementation, that uses an ECDSA private key for authentication, and a Grumpkin key for encryption.
 * Consider using this account type when working with integrations with Ethereum wallets.
 *
 * @packageDocumentation
 */
import { AccountManager, type Salt } from '@aztec/aztec.js/account';
import { type AccountWallet } from '@aztec/aztec.js/wallet';
import { type PXE } from '@aztec/circuit-types';
import { type AztecAddress, type Fr } from '@aztec/circuits.js';
import { EcdsaAccountContract } from './account_contract.js';
export { EcdsaAccountContractArtifact } from './artifact.js';
export { EcdsaAccountContract };
/**
 * Creates an Account that relies on an ECDSA signing key for authentication.
 * @param pxe - An PXE server instance.
 * @param secretKey - Secret key used to derive all the keystore keys.
 * @param publicKey - Secp256k1 key used for signing transactions.
 * @param salt - Deployment salt.
 */
export declare function getEcdsaAccount(pxe: PXE, secretKey: Fr, publicX: Buffer, publicY: Buffer, salt?: Salt): AccountManager;
/**
 * Gets a wallet for an already registered account using ECDSA signatures.
 * @param pxe - An PXE server instance.
 * @param address - Address for the account.
 * @param publicKey - ECDSA key used for signing transactions.
 * @returns A wallet for this account that can be used to interact with a contract instance.
 */
export declare function getEcdsaWallet(pxe: PXE, address: AztecAddress, publicX: Buffer, publicY: Buffer): Promise<AccountWallet>;
