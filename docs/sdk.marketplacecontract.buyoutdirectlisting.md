<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [MarketplaceContract](./sdk.marketplacecontract.md) &gt; [buyoutDirectListing](./sdk.marketplacecontract.buyoutdirectlisting.md)

## MarketplaceContract.buyoutDirectListing() method

Buy Listing

<b>Signature:</b>

```typescript
buyoutDirectListing(listingId: BigNumberish, quantityDesired: BigNumberish): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  listingId | BigNumberish |  |
|  quantityDesired | BigNumberish |  |

<b>Returns:</b>

Promise&lt;TransactionResult&gt;

## Remarks

Buy a specific direct listing from the marketplace.

## Example


```javascript
// The listing ID of the asset you want to buy
const listingId = 0;
// Quantity of the asset you want to buy
const quantityDesired = 1;

await contract.buyoutDirectListing(listingId, quantityDesired);
```
