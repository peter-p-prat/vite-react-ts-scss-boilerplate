/// <reference types="vitest" />
/// <reference types="Vite/client" />
import eslintPlugin from "@nabla/vite-plugin-eslint";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: false,
            overlay: false,
        }),
        mode === "dev" && eslintPlugin(),
        mode !== "proxy" && basicSsl(),
        tsconfigPaths(),
    ],
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
        },
    },
    esbuild: {
        target: "esnext",
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./test/setup.ts",
        css: true,
        coverage: {
            reportsDirectory: "build/coverage",
            provider: "v8",
            reporter: ["text", "lcov"],
            include: ["src/**/*"],
        },
        fakeTimers: {
            toFake: ["setTimeout", "clearTimeout", "setInterval", "clearInterval"],
        },
        testTimeout: 10_000,
    },
    resolve: {
        alias: {
            styles: fileURLToPath(new URL("src/styles", import.meta.url)),
        },
    },
    build: {
        outDir: "build/dist",
        assetsDir: "static",
        target: "esnext",
        rollupOptions: {
            output: {
                format: "es",
            },
        },
    },
}));
