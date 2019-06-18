## cg-api-starter

This repo demonstrates how to use the cg-api as a dependency, rather than how the samples in the cg-api-examples monorepo itself work (using lerna to manage the cg-api dependency).

## Branches

The repo has various branches for different use cases:

* webpack/*: branches using webpack to build.
* rollup/*: branches using rollup to build.

* */npm-bundle-api: this version bundles the cg-api into the output.
* */npm-external-load-api: this version loads the cg-api from its npm package.
* */unpkg: this version loads the cg-api from unpkpg. Note package.json still includes a cg-api depdendency in order to get TypeScript definitions.

## Instructions

* Clone this repo.
* Run `npm install` (or `yarn install`).
* Edit `src/index.ts` and edit the username and password fields as appropriate.
* Run `npm run serve` or `yarn serve`.
* Browse to http://localhost:8880.
* The API will attempt to connect and write to the html document on success or failure.

Note that the rollup configurations aren't succesfully live-reloading at this time.
