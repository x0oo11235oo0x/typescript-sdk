<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [IStorage](./sdk.istorage.md) &gt; [upload](./sdk.istorage.upload.md)

## IStorage.upload() method

Uploads a file to the storage.

<b>Signature:</b>

```typescript
upload(data: string | File | FileOrBuffer | Buffer, contractAddress?: string, signerAddress?: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  data | string \| File \| FileOrBuffer \| Buffer | The data to be uploaded. Can be a file/buffer (which will be loaded), or a string. |
|  contractAddress | string | Optional. The contract address the data belongs to. |
|  signerAddress | string | Optional. The address of the signer. |

<b>Returns:</b>

Promise&lt;string&gt;

- The hash of the uploaded data.
