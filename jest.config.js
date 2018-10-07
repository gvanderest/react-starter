module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
    ],
    coverageDirectory: "bypass-coverage",
    coverageReporters: [
        "html",
    ],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,

    setupTestFrameworkScriptFile: "<rootDir>/setupEnzyme.ts",
    snapshotSerializers: ["enzyme-to-json/serializer"],
};
