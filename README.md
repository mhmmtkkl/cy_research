# Automation Tests

This is a Typescript project that leverages Cypress framework for core automated testing.


---

🛠 Built with [TypeScript](https://www.typescriptlang.org/) and [Cypress](https://www.cypress.io/)

### Installation

Clone this repository from GitLab using ssh:

```bash
git clone ssh://{{future github url here}}
```

Switch to the required NodeJS version by utilizing nvm and the .nvmrc file:

```bash
nvm use
```

If you receive a message similar to this:

```bash
N/A: version "16 -> N/A" is not yet installed.
You need to run "nvm install --lts" to install it before using it.
```

Simply copy paste the nvm install command and execute it, then run nvm use again.

The final step is to run a package dependency install, once you are on the correct version of Node for the project:

```bash
npm i
```

#### Run Tests

```bash
npm run test
```
> 🚩 **Note**
>
> This will run all the tests in the suite, to run tests on a single service use the `npm run only` script instead.

```bash
npm run test -- --spec $FILEPATH
```