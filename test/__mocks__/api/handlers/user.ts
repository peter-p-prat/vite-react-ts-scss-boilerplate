import {HttpHandler} from "msw";

import {UserData, userDataMock} from "test/__mocks__/models/userData.mock";

import {getMockedHandler, HandlerOptions, MockedHandlerMethod} from "./shared";

/**
 * Gets an API mock for user data
 * @param options The handler options
 * @returns The mocked handler
 */
export function getUserHandler(options?: Partial<HandlerOptions<UserData>>): HttpHandler {
    return getMockedHandler({
        ...options,
        method: MockedHandlerMethod.GET,
        url: "/ajax/user",
        payload: options?.payload ?? userDataMock,
    });
}
