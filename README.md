# eslint-plugin-pixore

Official pixore lint config

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@pixore/eslint-config`:

```
$ npm install @pixore/eslint-config --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@pixore/eslint-config` globally.

## Usage

Add `pixore` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@pixore"]
}
```

If your are using React, add the specific configuration for it:

```json
{
  "plugins": ["@pixore/eslint-config/react"]
}
```
