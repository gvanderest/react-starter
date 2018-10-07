const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const SOURCE_FOLDER = "src";
const RELEASE_FOLDER = "release";
const STATIC_FOLDER = `${SOURCE_FOLDER}/static`;

const SOURCE_PATH = `${__dirname}/${SOURCE_FOLDER}`;
const RELEASE_PATH = `${__dirname}/${RELEASE_FOLDER}`;

module.exports = (env, argv) => {
    const mode = argv.mode || "development";

    return {
        devtool: "source-map",
        entry: [
            `${SOURCE_PATH}/index.tsx`,
            `${SOURCE_PATH}/styles/example.less`,
        ],
        mode: mode,
        module: {
            rules: [
                { test: /\.[jt]sx?$/, loader: "awesome-typescript-loader" },
                { test: /\.(le|c)ss$/, use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { minimize: true } },
                    "less-loader",
                ] },
                { test: /\.(jpe?g|gif|png|svg)$/, use: [
                    "file-loader",
                    "image-webpack-loader",
                ] },
            ],
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
                new OptimizeCSSAssetsPlugin(),
            ],
        },
        output: { filename: "bundle.js", path: RELEASE_PATH },
        plugins: [
            mode === "development" ? new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }) : null,
            new CleanWebpackPlugin([
                RELEASE_FOLDER,
            ]),
            new MiniCssExtractPlugin({
                filename: "styles.css",
            }),
            new HtmlWebpackPlugin({
                template: `${STATIC_FOLDER}/index.html`,
            }),
        ].filter(Boolean),
        resolve: {
            extensions: [
                ".ts", ".tsx",
                ".js", ".jsx",
                ".css", ".less",
            ],
        },
    };
}
