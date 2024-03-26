# utils-gear

> Like a gear, tiny and useful frontend functional utils written in typescript

<div>
  <a style="display: inline-block;margin-right: 4px" href="https://codecov.io/gh/cirolee/utils-gear/branch/main" target="_blank">
    <img src="https://codecov.io/gh/cirolee/utils-gear/branch/main/graph/badge.svg" />
  </a>
  <img style="display: inline-block;margin-right: 4px" src="https://img.shields.io/github/v/release/cirolee/utils-gear" />
  <img style="display: inline-block;margin-right: 4px" src="https://img.shields.io/github/license/cirolee/utils-gear" />
</div>

## 安装

npm

```shell
npm install utils-gear
```

## 使用

```typescript
import { getType } from 'utils-gear';
const res = getType(Symbol(1)); // symbol
```
