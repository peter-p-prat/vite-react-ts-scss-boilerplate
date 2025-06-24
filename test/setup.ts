import {cleanup} from "@testing-library/react";

import {server} from "./__mocks__/api/server";
import {mockConsoleMessages} from "./__mocks__/console/console";
import {spyLocalStorage} from "./__mocks__/storage/localStorage";

import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
});

beforeAll(() => {
    // Start server before all tests
    server.listen({onUnhandledRequest: "error"});
    mockConsoleMessages();
    spyLocalStorage();
    vi.stubGlobal("open", vi.fn());
    vi.stubGlobal("scrollTo", vi.fn());
});

afterAll(() => {
    //  Close server after all tests
    server.close();
});

afterEach(() => {
    // Reset handlers after each test `important for test isolation`
    server.resetHandlers();
    vi.resetAllMocks();
});
