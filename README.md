# @rotoio/contracts

Roto.io smart contract interface.

```sh
yarn add @rotoio/contracts
```

## Roto.io Contracts

### Clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from "@rotoio/contracts"
const { CW20Base, RotoStaking, RotoSwapRoto, RotoSwapOthers } = contracts
```

Then each contract will have clients, for example for `RotoStaking`:

```ts
const { RotoStakingClient, RotoStakingMessageComposer, RotoStakingQueryClient } =
	RotoStaking
```

### Queries

```js
const queryClient = new RotoStakingQueryClient(wasmClient, contractAddress)
```

### Mutations

```js
const client = new RotoStaking(signingWasmClient, sender, contractAddress)
await client.stake(msg)
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Using CosmWasm TS Codegen:

-  [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
