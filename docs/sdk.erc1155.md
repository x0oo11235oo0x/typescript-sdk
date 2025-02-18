<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Erc1155](./sdk.erc1155.md)

## Erc1155 class

Standard ERC1155 functions

<b>Signature:</b>

```typescript
export declare class Erc1155<T extends DropERC1155 | TokenERC1155> implements UpdateableNetwork 
```
<b>Implements:</b> UpdateableNetwork

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(contractWrapper, storage, options)](./sdk.erc1155._constructor_.md) |  | Constructs a new instance of the <code>Erc1155</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [contractWrapper](./sdk.erc1155.contractwrapper.md) |  | ContractWrapper&lt;T&gt; |  |
|  [options](./sdk.erc1155.options.md) |  | [SDKOptions](./sdk.sdkoptions.md) |  |
|  [storage](./sdk.erc1155.storage.md) |  | [IStorage](./sdk.istorage.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [balance(tokenId)](./sdk.erc1155.balance.md) |  | Get NFT Balance for the currently connected wallet |
|  [balanceOf(address, tokenId)](./sdk.erc1155.balanceof.md) |  | Get NFT Balance |
|  [burn(tokenId, amount)](./sdk.erc1155.burn.md) |  | Burn a single NFT |
|  [get(tokenId)](./sdk.erc1155.get.md) |  | Get a single NFT Metadata |
|  [getAddress()](./sdk.erc1155.getaddress.md) |  |  |
|  [getAll(queryParams)](./sdk.erc1155.getall.md) |  | Get All NFTs |
|  [getOwned(\_address)](./sdk.erc1155.getowned.md) |  | Get Owned NFTs |
|  [getTotalCount()](./sdk.erc1155.gettotalcount.md) |  | Get the number of NFTs minted |
|  [isApproved(address, operator)](./sdk.erc1155.isapproved.md) |  | Get whether this wallet has approved transfers from the given operator |
|  [isTransferRestricted()](./sdk.erc1155.istransferrestricted.md) |  | Get whether users can transfer NFTs from this contract |
|  [totalSupply(tokenId)](./sdk.erc1155.totalsupply.md) |  | Returns the total supply of a specific token |
|  [transfer(to, tokenId, amount, data)](./sdk.erc1155.transfer.md) |  | Transfer a single NFT |

