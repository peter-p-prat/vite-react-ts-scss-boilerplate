/* eslint-disable no-console */
const errorHasMessage = (error: unknown): error is {message: string} =>
    error instanceof Error || (typeof error === "object" && error !== null && "message" in error);

const errorIsString = (error: unknown): error is string => typeof error === "string";

export const mockConsoleMessages = () => {
    const originalConsoleError = console.error;

    console.error = vi.fn((...args: Parameters<typeof console.error>) => {
        const ignoredErrorMessages = new Set(["Rejected"]);

        if (
            (errorIsString(args[0]) && ignoredErrorMessages.has(args[0])) ||
            (errorHasMessage(args[0]) && ignoredErrorMessages.has(args[0].message))
        ) {
            return;
        }

        originalConsoleError(...args);
    });
    const originalConsoleWarn = console.warn;

    console.warn = vi.fn((...args: Parameters<typeof console.warn>) => {
        const ignoredWarningMessages = new Set([""]);

        if (
            (errorIsString(args[0]) && ignoredWarningMessages.has(args[0])) ||
            (errorHasMessage(args[0]) && ignoredWarningMessages.has(args[0].message))
        ) {
            return;
        }

        originalConsoleWarn(...args);
    });
};

/* eslint-enable no-console */
