import {getEnvVariable} from "shared/utils";

describe("getEnvVariable", () => {
    beforeEach(() => {
        process.env = {};
    });

    it("should return the environment variable value as boolean", () => {
        vi.stubEnv("VITE_BOILERPLATE_STACK", "true");
        const result = getEnvVariable("VITE_BOILERPLATE_STACK");
        expect(result).toBe(true);
    });

    it("should return the environment variable value as number", () => {
        vi.stubEnv("VITE_BOILERPLATE_STACK", "123");
        const result = getEnvVariable("VITE_BOILERPLATE_STACK");
        expect(result).toBe(123);
    });

    it("should return the environment variable value as string", () => {
        vi.stubEnv("VITE_BOILERPLATE_STACK", "hello");
        const result = getEnvVariable("VITE_BOILERPLATE_STACK");
        expect(result).toBe("hello");
    });

    it("should throw an error if the environment variable is undefined", () => {
        expect(() => getEnvVariable("VITE_BOILERPLATE_STACK")).toThrow("Environment variable VITE_BOILERPLATE_STACK is not defined");
    });

    it("should return the environment variable value as boolean when value is 'false'", () => {
        vi.stubEnv("VITE_BOILERPLATE_STACK", "false");
        const result = getEnvVariable("VITE_BOILERPLATE_STACK");
        expect(result).toBe(false);
    });

    it("should return the environment variable value as number when value is '0'", () => {
        vi.stubEnv("VITE_BOILERPLATE_STACK", "0");
        const result = getEnvVariable("VITE_BOILERPLATE_STACK");
        expect(result).toBe(0);
    });

    it("should throw an error when using unexpected type on environment variable", () => {
        process.env.VITE_BOILERPLATE_STACK = {} as unknown as string;
        expect(() => getEnvVariable("VITE_BOILERPLATE_STACK")).toThrow("Unexpected type for environment variable VITE_BOILERPLATE_STACK");
    });
});
