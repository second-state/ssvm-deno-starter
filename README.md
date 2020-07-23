![Build and test](https://github.com/second-state/ssvm-deno-starter/workflows/Build%20and%20test/badge.svg)

<p>
    <a href="https://online.visualstudio.com/environments/new?name=Rust%20and%20WebAssembly%20in%20Deno&repo=second-state/ssvm-deno-starter">
        <img src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Faka.ms%2Fvso-badge">
    </a>
</p>

![Demo](https://raw.githubusercontent.com/second-state/ssvm-deno-starter/master/docs/img/SSVM-rust-deno.gif)

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
