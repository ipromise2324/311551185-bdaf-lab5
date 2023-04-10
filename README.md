# 311551185-bdaf-lab5-Result

## ERC20 Token

[https://goerli.etherscan.io/address/0x2e4E75eB7189A6709bBAe321dD77ba92265261E5](https://goerli.etherscan.io/address/0x2e4E75eB7189A6709bBAe321dD77ba92265261E5)

## Mint 1000 tokens

[https://goerli.etherscan.io/tx/0x6a0896f21120cbddc16e55700b9300343c34002ebb858510780ea62b45ed1844](https://goerli.etherscan.io/tx/0x6a0896f21120cbddc16e55700b9300343c34002ebb858510780ea62b45ed1844)

## AAVE Borrow Transaction

[https://goerli.etherscan.io/tx/0xe0bc4e4a83e1c07da4525d960f5bc1f7f03ad4e8b1804f0dacfdcd734ee2cb32](https://goerli.etherscan.io/tx/0xe0bc4e4a83e1c07da4525d960f5bc1f7f03ad4e8b1804f0dacfdcd734ee2cb32)

## DAI Address

[https://goerli.etherscan.io/token/0xeaec6590fda7981b7de06bae7c1de27cfc262818](https://goerli.etherscan.io/token/0xba8dced3512925e52fe67b1b5329187589072a55)

## P**ool Token Address**

[https://goerli.etherscan.io/token/0x2e4e75eb7189a6709bbae321dd77ba92265261e5?a=0xf55352007fc75f28b2183877aea1a4a2750bc05b](https://goerli.etherscan.io/token/0x2e4e75eb7189a6709bbae321dd77ba92265261e5?a=0xf55352007fc75f28b2183877aea1a4a2750bc05b)

## Swap T**ransaction**

[https://goerli.etherscan.io/tx/0x9b738ad0d8de2a46a7bf552ffdac2b529ab97d8b4e076860e5375891181511bf](https://goerli.etherscan.io/tx/0x9b738ad0d8de2a46a7bf552ffdac2b529ab97d8b4e076860e5375891181511bf)

## **Safe multiSig address**

gor:0x0B59B491f5E9357fB801d3978fCB0d34e144217F 

## Transfer Ownership

[https://goerli.etherscan.io/tx/0x972410a61fac335d0ad026e4a51a7120ab20ca2499c44a747631bb6ae4f3be90](https://goerli.etherscan.io/tx/0x972410a61fac335d0ad026e4a51a7120ab20ca2499c44a747631bb6ae4f3be90)

## Mint tokens by Sage mutiSig

[https://goerli.etherscan.io/tx/0xf047fcc4ec458e45d178d73f3cf450013c86acf7c6113550e46c31d15227a1ce](https://goerli.etherscan.io/tx/0xf047fcc4ec458e45d178d73f3cf450013c86acf7c6113550e46c31d15227a1ce)

## Mint 10000 by using Safe mutiSig

[https://goerli.etherscan.io/tx/0xf047fcc4ec458e45d178d73f3cf450013c86acf7c6113550e46c31d15227a1ce](https://goerli.etherscan.io/tx/0xf047fcc4ec458e45d178d73f3cf450013c86acf7c6113550e46c31d15227a1ce)

## Sell All of 10000 tokens

[https://goerli.etherscan.io/tx/0x38e5ef8f5e55bd5c0545d2805a82ddf8bd874eed147dae01beab8dee7a16a455](https://goerli.etherscan.io/tx/0x38e5ef8f5e55bd5c0545d2805a82ddf8bd874eed147dae01beab8dee7a16a455)
 
# Requirement
In this lab, we’ll be playing around with Defi platform that are deployed on Georli testnet so that you get more familiar to it - not only as a user, but also as a protocol developer.

Here is the scenario: 

you are a protocol developer who are launching your own project and your own token. You want to create an Uniswap Market for your own token that is paired with DAI. But you have some ETH but not DAI. Your token contract has an owner role: in the beginning, it should be your own address, however after the initial operations, you should be handling it over to a multiSig contract(The well known one is Gnosis Safe). Lastly, you are going to perform a rug-pull, you are going to mint a lot of tokens and sell all the tokens into the pool to get most of the DAI back. 

**Submission link:** [https://forms.gle/Dib8nyCMFU2MsZPt8](https://forms.gle/Dib8nyCMFU2MsZPt8)

1. Develop an ERC20 token: 
    - 18 decimals.
    - Minting and burning capability with onlyOwner access control.
    - Ability to transfer ownership
2. Deploy your ERC20 token. Mint 1000 tokens (i.e. 1000 * 10^18 units) to yourself. **(Record the address of your own token)**
3. Go to Aave, lend ETH and borrow DAI out **(Record your Borrow transaction)**
    1. Go to AaveV3 Goerli: [https://staging.aave.com/?marketName=proto_goerli_v3](https://staging.aave.com/?marketName=proto_goerli_v3) 
    2. On the left, Supply 0.05 ETH.
    3. Borrow some DAI (50 or 100)
4. Go to Etherscan and get the address of the DAI **(Record the address of the DAI token)**
    - As this is a testnet, there are a lot of different versions of DAI, we’re going to use the one you borrowed out from Aave.
5. Go to UniswapV2 to create a new liquidity pair: [https://app.uniswap.org/#/pools/v2](https://app.uniswap.org/#/pools/v2) 
    - Make sure you are on Goerli testnet
    - “Add V2 Liquidity”
    - paste the address of your DAI token you have in one field (the ui should show you that you have some)
    - Paste the address of your own token in the other field
    - We can actually set the initial price of the token by determining the ratio between DAI and your token: let’s make your token worth 10 DAI by supplying 100 DAI to 10 of your token. (or 50 DAI to 5 of your token).
    - Approve DAI and your token to Uniswap, and hit the Supply button. (It will ask you to “Create pool and Supply”)
    - You will receive some pool tokens as per this transaction. Look at your address on Etherscan and determine the address of the token. **(Record the address of the pool token)**
    - Try [Swap](https://app.uniswap.org/#/swap), you should be able to swap your token to DAI now. Buy 0.001 of your token now. **(Record the transaction)**
6. Create a [Safe (Gnosis’s multiSig solution) on Goerli](https://app.safe.global/new-safe/create) **(Record the address of your Safe multiSig address)**
    - Have 2 owners in the Safe. You can use Metamask to generate the second address.
    - Set the Threshold as 2 out of 2 owners. This means that every time this multiSig is sending a transaction, both of these owners have to sign.
7. Transfer Ownership of your token to your Safe multiSig address. **(Record the transaction)**
8. Mint 10000 of your tokens by using your Safe multiSig address to your own address **(Record the transaction)**
9. Sell all of the 10000 tokens into the Uniswap pool you created. **(Record the transaction)**
