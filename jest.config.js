"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true, //habilita la cobertura
    coverageDirectory: 'coverage', //directorio de informes
    coveragePathIgnorePatterns: [
        'node_modules/',
        'src/api/routers',
        'src/api/routers',
        'config',
        'index.ts',
        'build/'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};
exports.default = configJest;
