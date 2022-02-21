---
slug: /sdk.permitrequestmessage
title: PermitRequestMessage type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [PermitRequestMessage](./sdk.permitrequestmessage.md)

## PermitRequestMessage type

EIP-2612 token permit message for gasless transaction

<b>Signature:</b>

```typescript
declare type PermitRequestMessage = {
    to: string;
    owner: string;
    spender: string;
    value: number | string;
    nonce: number | string;
    deadline: number | string;
    v: number;
    r: string;
    s: string;
};
```