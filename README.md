# React Starter

Just a quick starter pack for working on projects.

## Workflow

1. Checkout the code.

    ```shell
    git checkout git@github.com:gvanderest/react-starter.git <project-name>
    ```

2. Install the dependencies with your package manager of choice.

    ```shell
    $ yarn
    # or use `npm install`
    ```

3. Start developing locally.

    ```shell
    yarn local
    ```

4. Run the unit tests or lint the code.

    ```shell
    yarn test
    yarn lint
    ```

    Make sure that everything's running tip-top with Jest.

5. Build a deployment.

    ```shell
    yarn release
    ```

    This will export production-ready code to the `release/` folder.


## Features

### Programming
* TypeScript
* React
* Redux

### Styling
* LESS
* Loading Images via `import`

### Unit Testing
* Jest
* Coverage Reporting

### Optimizations
* Uglified CSS/JS
* Bundle Analyzer on port 8888 during development mode
* Source maps
* Optimizing Images

## Next
* Redux Thunk
* Internationalization
* Sentry.io integration
* React Router
* Options for hashRouter or browserRouter
* Webworkers?
* Integration with Bulma or Bootstrap frameworks
* Additional plugin integrations
    * Chunking
    * Copying static assets
    * DllPlugin for performance
    * Circular dependency detection
    * More: https://github.com/webpack-contrib/awesome-webpack#webpack-plugins
