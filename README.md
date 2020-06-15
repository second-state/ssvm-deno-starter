## Prerequisites

[Install Deno](https://deno.land/manual/getting_started/installation)

[Install Rust](https://www.rust-lang.org/tools/install)

## Setup

```
$ curl https://raw.githubusercontent.com/second-state/ssvmup/master/installer/init.sh -sSf | sh
```

## Build

```
$ ssvmup build --target deno
```

## Test

```
$ deno run --allow-read deno/test.ts
```

## Run

```
$ deno run --allow-read --allow-net deno/server.ts
```

## User test

```
$ curl http://localhost:8000/
hello  World
```
