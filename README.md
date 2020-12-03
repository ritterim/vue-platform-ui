# vue-platform-ui
vueJS port of Platform UI to allow developers to easily create UI components with the help of [Vue](https://vuejs.org/).
We are using the package [Vuese](https://github.com/vuese/vuese) as our tool to build our documentation site. Here is a [link](https://vuese.org/cli/#writing-documentation-for-your-component) on how to write comments in the components to build our doc site.
## Project setup
Initial setup run `npm install` and the documentation site requires [vuese](https://vuese.org/) to be installed globally. You can install this with `npm install g @vuese/cli` or `yarn global add @vuese/cli`. 

#### Running The Base Project
To run the project locally run the command `npm run server`

#### Running The Documentation Site
To build the documentation site locally run `npm run build:docs` which will create a `website` directory at the root of the project. `npm run serve docs` will run the local server for the doc site.

### Compiles and minifies for production
```
npm run build
```
