## What is `NPM`?
npm is a node packaged manager. It can install and manage all dependencies in the project. Dependencies are also defined in `package.json`.

NPM consists of two main parts:

* a CLI (command-line interface) tool for publishing and downloading packages, and
* an online repository or the publishing of open-source Node.js projects.

It is the world’s largest software registry. Open-source developers all over the world use npm to publish and share their source code.

All npm packages are defined in files called `package.json`. The content of `package.json` must be written in JSON.

To create the `package.json` file, you go to the root directory of the project and execute the following command:

```npm init```

When you run the *npm init* command, it will prompt you for the project information

If you hit `Return` or `Enter`, it will accept the default values and move on to the next prompt.

If you want to use default options, you use the following command:

```npm init --yes```

Later, you can change the default values in the `package.json`.


## What is `Parcel/Webpack`? Why do we need it?
Parcel/Webpack is a web application bundler. A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

The purpose of a bundler is to make it easier to build and deploy web applications by handling tasks such as,

- **Transforming and Optimizing code and assests :**
    
    For example, a bundler might transpile modern JavaScript code to be compatible with old browsers, or minify CSS and JavaScript file to reduce their size.
    
- **Splitting code into smaller chunks :**
    
     A bundler can split your code into smaller pieces, called "chunks "which can be loaded on demand. This can help improve the performance of your application, by allowing it to load faster and reducing the amount of code that needs to be downloaded initially.


## What is `.parcel-cache`
`.parcel-cache` stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

You should add this folder to your .gitignore so that it is not committed in your repo.


## What is `npx` ?
The npx stands for Node Package Execute and it comes with the npm. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## What is difference between `dependencies` vs `devDependencies`
Dependencies are the list of modules/packages that are required for your project to run. These are installed using npm install to add the package to the dependencies list.

devDependencies, short for development dependencies, are modules/packages that are NOT required for your project to run. These are often things that help the development process but aren’t part of the project themselves. For example, linters like eslint, testing, etc.


## What is Tree Shaking?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. 

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.


## What is Hot Module Replacement?
Hot Module Replacement(HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.


## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
1. Hot Module Replacement
2. Code splitting - Parcel supports zero configuration code splitting. This allows you to split your application code into separate bundles which can be loaded on demand, resulting in smaller initial bundle sizes and faster load times.
3. Tree shaking - Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".
4. Development - Parcel includes a development server supporting hot reloading, HTTPS, an API proxy, and more.
6. HTTPS - Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues. Parcel’s dev server supports HTTPS 
  ```parcel src/index.html --https```
5. Caching - Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes.
7. Auto install - When you use a language or plugin that isn’t included by default, Parcel will automatically install the necessary dependencies into your project for you.
8. Deduplication - If a dynamically imported module has a dependency that is already available in all of its possible ancestries, it will be deduplicated. For example, if a page imports a library which is also used by a dynamically imported module, the library will only be included in the parent since it will already be on the page at runtime.
9. Size optimization - Parcel includes many optimizations designed to reduce bundle sizes, including automatic minification, tree shaking, image optimization, and more. Parcel includes minifiers for JavaScript, CSS, HTML, and SVG. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.

## What is `.gitignore`? What should we add and not add into it?
A gitignore file specifies intentionally untracked files that Git should ignore. 

Files or folders that needs to be added to .gitignore: 
* Folders generated by package managers, such as npm’s node_modules folder
* Files that contain sensitive data and personal information. Some examples of such files are files with your credentials (username and password) and files with environment variables like .env files (.env files contain API keys that need to remain secure and private)
* Runtime files, such as .log files, Files that get automatically generated from the programming language or framework you are using in your project

Files or folders that should not to be added to .gitignore: Files that are necessary for your application to run, or that are tracked by Git.

The entries in this file can also follow a matching pattern.

```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
This is an example of what the .gitignore file could look like:
```

```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## What is the difference between `package.json` and `package-lock.json`
`package.json`:
* this file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs wll be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version.
* **^** : “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present , that means only the version specified in `package.json` file is used in the development.


## Why should I not modify `package-lock.json`?
We should not modify package-lock.json because it is a generated file that is used to lock the versions of the packages in our project's dependencies and devDependencies to a specific version.


## What is `node_modules` ? Is it a good idea to push that on git?
`node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
Don't push `node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space and these can be generated in production when application is running.


## What is the `dist` folder?
The `/dist` folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## What is `browserlists`
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.


Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)