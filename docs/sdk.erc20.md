<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Erc20](./sdk.erc20.md)

## Erc20 class

Standard ERC20 functions

<b>Signature:</b>

```typescript
export declare class Erc20<T extends TokenERC20 | DropERC20> implements UpdateableNetwork 
```
<b>Implements:</b> UpdateableNetwork

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(contractWrapper, storage, options)](./sdk.erc20._constructor_.md) |  | Constructs a new instance of the <code>Erc20</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [contractWrapper](./sdk.erc20.contractwrapper.md) |  | ContractWrapper&lt;T&gt; |  |
|  [options](./sdk.erc20.options.md) |  | [SDKOptions](./sdk.sdkoptions.md) |  |
|  [storage](./sdk.erc20.storage.md) |  | [IStorage](./sdk.istorage.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [allowance(spender)](./sdk.erc20.allowance.md) |  | Get Token Allowance |
|  [allowanceOf(owner, spender)](./sdk.erc20.allowanceof.md) |  | Get Token Allowance |
|  [balance()](./sdk.erc20.balance.md) |  | Get Token Balance for the currently connected wallet |
|  [balanceOf(address)](./sdk.erc20.balanceof.md) |  | Get Token Balance |
|  [burn(amount)](./sdk.erc20.burn.md) |  | Burn Tokens |
|  [burnFrom(holder, amount)](./sdk.erc20.burnfrom.md) |  | Burn Tokens |
|  [get()](./sdk.erc20.get.md) |  | Get the token Metadata (name, symbol, etc...) |
|  [getAddress()](./sdk.erc20.getaddress.md) |  |  |
|  [isTransferRestricted()](./sdk.erc20.istransferrestricted.md) |  | Get whether users can transfer tokens from this contract |
|  [normalizeAmount(amount)](./sdk.erc20.normalizeamount.md) |  |  |
|  [setAllowance(spender, amount)](./sdk.erc20.setallowance.md) |  | Allows the specified <code>spender</code> wallet to transfer the given <code>amount</code> of tokens to another wallet |
|  [totalSupply()](./sdk.erc20.totalsupply.md) |  | The total supply for this Token |
|  [transfer(to, amount)](./sdk.erc20.transfer.md) |  | Transfer Tokens |
|  [transferBatch(args)](./sdk.erc20.transferbatch.md) |  | Transfer Tokens To Many Wallets |
|  [transferFrom(from, to, amount)](./sdk.erc20.transferfrom.md) |  | Transfer Tokens From Address |

