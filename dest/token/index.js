import { getDeployedTestAccountsWallets } from "@aztec/accounts/testing";
import { AztecAddress, createPXEClient } from "@aztec/aztec.js";
import { TokenContract } from "@aztec/noir-contracts.js/Token";
export const deployToken = async (PXE_URL, accountAddr) => {
    console.log("deployToken called");
    const pxe = createPXEClient(PXE_URL);
    const deployer = (await getDeployedTestAccountsWallets(pxe))[0];
    const tokenContract = await (await TokenContract.deploy(deployer, deployer.getAddress(), "Ethereum", "ETH", 18n).send()).deployed();
    const tx = await (await tokenContract.methods
        .mint_public(AztecAddress.fromString(accountAddr), 10)
        .send()).wait();
    console.log("tx: ", tx);
    return tokenContract.address;
};
export const getBalance = async (tokenAddr, wallet) => {
    console.log("getBalance called");
    const token = await TokenContract.at(AztecAddress.fromString(tokenAddr), wallet);
    const balance = await token.methods
        .balance_of_public(wallet.getAddress())
        .simulate();
    console.log("balance: ", balance);
    return Number(balance);
};
export const sendTokenPublic = async (address, receipient, amount, wallet) => {
    console.log("sendToken called");
    const token = await TokenContract.at(AztecAddress.fromString(address), wallet);
    const tx = await (await token.methods
        .transfer_public(wallet.getAddress(), AztecAddress.fromString(receipient), amount, 0)
        .send()).wait();
    console.log("tx: ", tx);
    return tx;
};
export const sendToken = async (address, receipient, amount, wallet) => {
    console.log("sendToken called");
    const token = await TokenContract.at(AztecAddress.fromString(address), wallet);
    const tx = await (await token.methods
        .transfer(AztecAddress.fromString(receipient), amount)
        .send()).wait();
    console.log("tx: ", tx);
    return tx;
};
//# sourceMappingURL=index.js.map