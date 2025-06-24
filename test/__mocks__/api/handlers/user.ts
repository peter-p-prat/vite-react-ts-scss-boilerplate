import {HttpHandler} from "msw";

import {userDataMock} from "test/__mocks__/models/userData.mock";

import {User} from "store/slices/user/type";

import {getMockedHandler, HandlerOptions, MockedHandlerMethod} from "./shared";

/**
 * Gets an API mock for user data
 * @param options The handler options
 * @returns The mocked handler
 */
export function getUserHandler(options?: Partial<HandlerOptions<User>>): HttpHandler {
    return getMockedHandler({
        ...options,
        method: MockedHandlerMethod.GET,
        url: "/ajax/user",
        payload: options?.payload ?? userDataMock,
    });
}
