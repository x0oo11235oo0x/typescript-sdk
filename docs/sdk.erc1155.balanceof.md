<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Erc1155](./sdk.erc1155.md) &gt; [balanceOf](./sdk.erc1155.balanceof.md)

## Erc1155.balanceOf() method

Get NFT Balance

<b>Signature:</b>

```typescript
balanceOf(address: string, tokenId: BigNumberish): Promise<BigNumber>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string |  |
|  tokenId | BigNumberish |  |

<b>Returns:</b>

Promise&lt;BigNumber&gt;

## Remarks

Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).

## Example


```javascript
// Address of the wallet to check NFT balance
const address = "{{wallet_address}}";
// Id of the NFT to check
const tokenId = 0;

const balance = await contract.balanceOf(address, tokenId);
console.log(balance);
```

