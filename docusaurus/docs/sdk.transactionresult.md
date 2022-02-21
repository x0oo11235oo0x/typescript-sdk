---
slug: /sdk.transactionresult
title: TransactionResult type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [TransactionResult](./sdk.transactionresult.md)

## TransactionResult type

<b>Signature:</b>

```typescript
declare type TransactionResult<T = never> = If<A.Is<T, never, "equals">, Omit<TransactionResultWithMetadata, "data">, TransactionResultWithMetadata<T>>;
```