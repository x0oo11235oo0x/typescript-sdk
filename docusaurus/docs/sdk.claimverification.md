---
slug: /sdk.claimverification
title: ClaimVerification type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [ClaimVerification](./sdk.claimverification.md)

## ClaimVerification type

<b>Signature:</b>

```typescript
declare type ClaimVerification = {
    overrides: CallOverrides;
    proofs: BytesLike[];
    maxQuantityPerTransaction: BigNumber;
    price: BigNumber;
    currencyAddress: string;
};
```