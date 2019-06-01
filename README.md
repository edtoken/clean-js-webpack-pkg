# How to publish the javascript package on the npm with webpack and travis
[![npm](https://img.shields.io/npm/v/@edtoken/clean-js-webpack-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-js-webpack-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-js-webpack-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-js-webpack-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/7d803c5e1ddbed85bec8/maintainability)](https://codeclimate.com/github/edtoken/clean-js-webpack-pkg/maintainability)

> Tiny Javascript package to help to configure the Javascript package with webpack  
> to deploy on the npm with travis

See [CodeSandbox usage](CODESANDBOX LINK)

## Features
- tests
- travis deploy
- dotenv

## Usage

##### 1. Copy the package
Clone the repo  
```
git clone git clone git@github.com:edtoken/clean-js-pkg.git 
```  

Please! Do not add the .env file to the GIT, it's local file, for local development/common builds

##### 2. Update `travis` configuration  
Update the `.travis.yml` file, replace the `email` and `repo`

##### 3. Update `package.json`  
Update `name`, `description`, `repository`, `author`, and `licenses`

##### 4. Update `travis` environment, Add NPM_TOKEN value.  
To able, to deploy the npm package from the `travis`  
you should add the environment  variable `NPM_TOKEN` in the travis UI.

##### 5. Publish

## Other examples
See the Main article [Build and publish your NPM package](https://github.com/edtoken/build-and-publish-npm)  

- [Clean JS](https://github.com/edtoken/clean-js-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-js-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-js-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-js-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-js-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/23d7cf2a79cd133121e3/maintainability)](https://codeclimate.com/github/edtoken/clean-js-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-js-pkg.svg?style=social)](https://github.com/edtoken/clean-js-pkg)  
- [Clean JS + Parcel](https://github.com/edtoken/clean-js-parcel-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-js-parcel-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-js-parcel-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-js-parcel-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-js-parcel-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/53c503f945c7f2078f09/maintainability)](https://codeclimate.com/github/edtoken/clean-js-parcel-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-js-parcel-pkg.svg?style=social)](https://github.com/edtoken/clean-js-parcel-pkg)
- [Clean JS + Webpack](https://github.com/edtoken/clean-js-webpack-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-js-webpack-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-js-webpack-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-js-webpack-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-js-webpack-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/7d803c5e1ddbed85bec8/maintainability)](https://codeclimate.com/github/edtoken/clean-js-webpack-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-js-webpack-pkg.svg?style=social)](https://github.com/edtoken/clean-js-webpack-pkg)
- [Clean TypeScript](https://github.com/edtoken/clean-typescript-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-typescript-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-typescript-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-typescript-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-typescript-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/4bd52c0ef1b15fb9996d/maintainability)](https://codeclimate.com/github/edtoken/clean-typescript-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-typescript-pkg.svg?style=social)](https://github.com/edtoken/clean-typescript-pkg)
- [Clean Vue](https://github.com/edtoken/clean-vue-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-vue-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-vue-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-vue-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-vue-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-vue-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-vue-pkg.svg?style=social)](https://github.com/edtoken/clean-vue-pkg)
- [Clean React](https://github.com/edtoken/clean-react-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-react-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-react-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-react-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-react-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-react-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-react-pkg.svg?style=social)](https://github.com/edtoken/clean-react-pkg)
- [Vue + vue-cli](https://github.com/edtoken/clean-vue-cli-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-vue-cli-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-vue-cli-pkg) [![Build Status](https://travis-ci.org/edtoken/xxx.svg?branch=master)](https://travis-ci.org/edtoken/clean-vue-cli-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-vue-cli-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-vue-cli-pkg.svg?style=social)](https://github.com/edtoken/clean-vue-cli-pkg)
- [Vue + TypeScript](https://github.com/edtoken/clean-vue-typescript-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-vue-typescript-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-vue-typescript-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-vue-typescript-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-vue-typescript-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-vue-typescript-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-vue-typescript-pkg.svg?style=social)](https://github.com/edtoken/clean-vue-typescript-pkg)
- [React + create-react-app](https://github.com/edtoken/clean-react-cra-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-react-cra-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-react-cra-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-react-cra-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-react-cra-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-react-cra-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-react-cra-pkg.svg?style=social)](https://github.com/edtoken/clean-react-cra-pkg)
- [React + TypeScript](https://github.com/edtoken/clean-react-typescript-pkg) [![npm](https://img.shields.io/npm/v/@edtoken/clean-react-typescript-pkg.svg)](https://www.npmjs.com/package/@edtoken/clean-react-typescript-pkg) [![Build Status](https://travis-ci.org/edtoken/clean-react-typescript-pkg.svg?branch=master)](https://travis-ci.org/edtoken/clean-react-typescript-pkg) [![Maintainability](https://api.codeclimate.com/v1/badges/HASH_XXX/maintainability)](https://codeclimate.com/github/edtoken/clean-react-typescript-pkg/maintainability) [![stars](https://img.shields.io/github/stars/edtoken/clean-react-typescript-pkg.svg?style=social)](https://github.com/edtoken/clean-react-typescript-pkg)
