---
slug: /sdk.erc20.burn
title: Erc20.burn() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [Erc20](./sdk.erc20.md) &gt; [burn](./sdk.erc20.burn.md)

## Erc20.burn() method

Burn Tokens

<b>Signature:</b>

```typescript
burn(amount: BigNumberish): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | BigNumberish |  |

<b>Returns:</b>

Promise&lt;TransactionResult&gt;

## Remarks

Burn tokens held by the connected wallet

## Example


```javascript
// The amount of this token you want to burn
const amount = 100;

await contract.burn(amount);
```