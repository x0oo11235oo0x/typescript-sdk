<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [DropErc1155Module](./sdk.droperc1155module.md) &gt; [createBatch](./sdk.droperc1155module.createbatch.md)

## DropErc1155Module.createBatch() method

Create Many NFTs

<b>Signature:</b>

```typescript
createBatch(metadatas: NFTMetadataInput[]): Promise<TransactionResultWithId<NFTMetadata>[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadatas | NFTMetadataInput\[\] |  |

<b>Returns:</b>

Promise&lt;TransactionResultWithId&lt;NFTMetadata&gt;\[\]&gt;

## Remarks

Create and mint NFTs.

## Example


```javascript
// Custom metadata of the NFTs to create
const metadatas = [{
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}];

await module.createBatch(metadatas);
```
