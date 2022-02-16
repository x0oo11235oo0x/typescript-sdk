<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Marketplace](./sdk.marketplace.md) &gt; [buyoutAuctionListing](./sdk.marketplace.buyoutauctionlisting.md)

## Marketplace.buyoutAuctionListing() method

Buyout Auction

<b>Signature:</b>

```typescript
buyoutAuctionListing(listingId: BigNumberish): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  listingId | BigNumberish |  |

<b>Returns:</b>

Promise&lt;TransactionResult&gt;

## Remarks

Buy a specific direct listing from the marketplace.

## Example


```javascript
// The listing ID of the asset you want to buy
const listingId = 0;

await contract.buyoutAuctionListing(listingId);
```
