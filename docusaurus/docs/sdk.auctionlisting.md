---
slug: /sdk.auctionlisting
title: AuctionListing interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [AuctionListing](./sdk.auctionlisting.md)

## AuctionListing interface

Represents a new marketplace auction listing.

<b>Signature:</b>

```typescript
interface AuctionListing 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [asset](./sdk.auctionlisting.asset.md) | NFTMetadata | The asset being listed. |
|  [assetContractAddress](./sdk.auctionlisting.assetcontractaddress.md) | string | The address of the asset being listed. |
|  [buyoutCurrencyValuePerToken](./sdk.auctionlisting.buyoutcurrencyvaluepertoken.md) | CurrencyValue | The <code>CurrencyValue</code> of the buyout price listing. Useful for displaying the price information. |
|  [buyoutPrice](./sdk.auctionlisting.buyoutprice.md) | BigNumber | The buyout price of the listing. |
|  [currencyContractAddress](./sdk.auctionlisting.currencycontractaddress.md) | string | The address of the currency to accept for the listing. |
|  [endTimeInEpochSeconds](./sdk.auctionlisting.endtimeinepochseconds.md) | BigNumberish | Number of seconds until the auction expires. |
|  [id](./sdk.auctionlisting.id.md) | string | The id of the listing |
|  [quantity](./sdk.auctionlisting.quantity.md) | BigNumberish | The quantity of tokens to include in the listing.<!-- -->For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here). |
|  [reservePrice](./sdk.auctionlisting.reserveprice.md) | BigNumber | The reserve price is the minimum price that a bid must be in order to be accepted. |
|  [reservePriceCurrencyValuePerToken](./sdk.auctionlisting.reservepricecurrencyvaluepertoken.md) | CurrencyValue | The <code>CurrencyValue</code> of the reserve price. Useful for displaying the price information. |
|  [sellerAddress](./sdk.auctionlisting.selleraddress.md) | string | The address of the seller. |
|  [startTimeInEpochSeconds](./sdk.auctionlisting.starttimeinepochseconds.md) | BigNumberish | The start time of the listing. |
|  [tokenId](./sdk.auctionlisting.tokenid.md) | BigNumberish | The ID of the token to list. |
|  [type](./sdk.auctionlisting.type.md) | ListingType.Auction |  |