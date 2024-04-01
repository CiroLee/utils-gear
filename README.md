# utils-gear

Like a gear, tiny and useful frontend function tools written in typescript

[![codecov](https://codecov.io/gh/cirolee/utils-gear/branch/main/graph/badge.svg)](https://codecov.io/gh/cirolee/utils-gear/branch/main)  ![GitHub release (release name instead of tag name)](https://img.shields.io/github/v/release/cirolee/utils-gear) ![GitHub](https://img.shields.io/github/license/cirolee/utils-gear)

# install

npm

```shell
npm install utils-gear
```

# usage

```typescript
import { getType } from 'utils-gear';
const res = getType(Symbol(1));
console.log(res); // 'symbol'
```

# api

[documents](https://cirolee.github.io/utils-gear/)
