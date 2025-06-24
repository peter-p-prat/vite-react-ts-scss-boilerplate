import {delay, DelayMode, http, HttpHandler, HttpResponse} from "msw";

export enum MockedHandlerMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

export interface HandlerOptions<T = any> {
    method: MockedHandlerMethod;
    url: string;
    payload: T;
    networkError?: boolean;
    errorCode?: string | number;
    errorMessage?: string;
    delayConfig?: number | DelayMode;
    statusCode?: number;
    headers?: HeadersInit;
}

/**
 * Gets a mocked GET handler
 * @param options The handler options
 * @returns The mocked handler
 */
export function getMockedHandler<T>(options: HandlerOptions<T>): HttpHandler {
    const {method, url, payload, networkError, errorCode, errorMessage, delayConfig, statusCode, headers} = options;
    return http[method](url, async () => {
        const defaultErrorCode = `FETCH_ERROR`;
        const defaultErrorMessage = `There was an error while trying to fetch from ${url}`;
        if (networkError) {
            return HttpResponse.error();
        }

        if (delayConfig) {
            await delay(delayConfig);
        }

        return HttpResponse.json(
            (errorCode || errorMessage
                ? {errorCode: errorCode ?? defaultErrorCode, message: errorMessage ?? defaultErrorMessage}
                : payload) as BodyInit,
            {
                status: statusCode ?? 200,
                headers,
            },
        );
    });
}
