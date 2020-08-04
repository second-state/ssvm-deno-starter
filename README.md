![Build and test](https://github.com/second-state/ssvm-deno-starter/workflows/Build%20and%20test/badge.svg)

Check out this tutorial article: *[Deno Apps with WebAssembly, Rust, and WASI](https://www.secondstate.io/articles/deno-webassembly-rust-wasi/)*

## Prerequisites

[Install Deno](https://deno.land/manual/getting_started/installation)

[Install Rust](https://www.rust-lang.org/tools/install)

Also, if you have not done so, please bring your Linux system up to date with dev tools.

```
sudo apt install build-essential curl wget git vim libboost-all-dev
```

## Setup

The command below installs the [ssvmup tooling](https://www.secondstate.io/articles/ssvmup/).

```
$ curl https://raw.githubusercontent.com/second-state/ssvmup/master/installer/init.sh -sSf | sh
```

## Build

```
$ ssvmup build --target deno
```

## Test

```
$ deno run --allow-read --allow-env --unstable deno/test.ts
```

If you encounter an error here, most likely your Deno install and cached library files are out of sync. Do the following to upgrade Deno to the latest version and then reload the cache.

```
$ deno upgrade
$ deno cache --reload deno/test.ts
```

## Run

```
$ deno run --allow-read --allow-net --allow-env --unstable deno/server.ts
```

## User test

```
$ curl http://localhost:8000/
hello  World
```

## Next steps

Check out the [SSVM Deno repository for more WebAssembly examples on Deno](https://github.com/second-state/wasm-learning/tree/master/deno).

Tutorial article: *[Deno Apps with WebAssembly, Rust, and WASI](https://www.secondstate.io/articles/deno-webassembly-rust-wasi/)*

