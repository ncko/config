# ESLint and Prettier configs for/from NCKO

- [Usage](#Usage)
  - [ESLint](#ESLint)
    - [Typescript](#Typescript)
    - [React](#React)
  - [Prettier](#Prettier)

## <a name='Usage'></a>Usage

### <a name='ESLint'></a>ESLint

Install `@ncko/eslint-config` along with eslint:

```shell
yarn add -D eslint @ncko/eslint-config
```

In a .eslintrc file at the root of your project:

```json
{
  "extends": ["@ncko/eslint-config"]
}
```

There are also configs for typescript and react. Each have peer dependencies that must also be installed.

#### <a name='Typescript'></a>Typescript

Install the typescript config's peer dependencies:

```shell
yarn add -D typescript @typescript-eslint/eslint-plugin
```

In your .eslintrc file:

```json
{
  "extends": ["@ncko/eslint-config", "@ncko/eslint-config/typescript"]
}
```

#### <a name='React'></a>React

Install the react config's peer dependencies:

```shell
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react
```

In your .eslintrc file:

```json
{
  "extends": ["@ncko/eslint-config", "@ncko/eslint-config/react"]
}
```

### <a name='Prettier'></a>Prettier

Install `@ncko/prettier-config` along with prettier:

```shell
yarn add -D @ncko/prettier-config
```

In your package.json, add a field "prettier" with the value "@ncko/prettier-config."

```json
{
    ...
    "prettier": "@ncko/prettier-config",
    ...
}
```
