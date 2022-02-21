<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [ContractDeployer](./sdk.contractdeployer.md) &gt; [deployNFTDrop](./sdk.contractdeployer.deploynftdrop.md)

## ContractDeployer.deployNFTDrop() method

Deploys a new NFTDrop contract

<b>Signature:</b>

```typescript
deployNFTDrop(metadata: z.input<typeof NFTDrop.schema.deploy>): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadata | z.input&lt;typeof NFTDrop.schema.deploy&gt; | the contract metadata |

<b>Returns:</b>

Promise&lt;string&gt;

the address of the deployed contract
