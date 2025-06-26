import {deepMerge} from "../objects";

import {ExtendedError} from "./ExtendedError";
import {APIError, APIResponse, CommonErrorCode, ErrorCode, isExtendedError} from "./type";

const defaultFetchOptions: RequestInit = {
    headers: {
        Accept: "application/json",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "application/json",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "x-api-key": "reqres-free-v1",
    },
};

const buildUrlWithParams = (baseUrl: string, params?: BodyInit | null): string => {
    if (!params) return baseUrl;

    if (params && typeof params !== "string") {
        throw new TypeError("Body must be a JSON string");
    }

    let parsedParams: Record<string, unknown>;
    try {
        parsedParams = JSON.parse(params) as Record<string, unknown>;
    } catch {
        throw new Error("Invalid JSON in params");
    }

    const queryObject: Record<string, string> = Object.entries(parsedParams).reduce<Record<string, string>>((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
            acc[key] = typeof value === "object" ? JSON.stringify(value) : String(value as string | number | boolean);
        }
        return acc;
    }, {});

    const queryString = new URLSearchParams(queryObject).toString();
    return `${baseUrl}?${queryString}`;
};

export async function fetchWithErrorHandling<T>(url: string, options: RequestInit): Promise<APIResponse<T>> {
    try {
        let newUrl = url;
        const mergedOptions = deepMerge(defaultFetchOptions, options);

        if (options.method === "GET" || options.method === "DELETE") {
            newUrl = buildUrlWithParams(url, options.body);
            mergedOptions.body = undefined;
        }

        const response = await fetch(newUrl, mergedOptions);
        const isJSONResponse = response.headers.get("content-type")?.includes("application/json");

        if (response.status >= 200 && response.status < 300) {
            let data: T;
            switch (true) {
                case isJSONResponse:
                    data = (await response.json()) as unknown as T;
                    break;
                default:
                    data = (await response.text()) as unknown as T;
            }
            return data;
        }

        if (isJSONResponse) {
            const error = (await response.json()) as unknown as APIError;
            throw new ExtendedError({
                message: error.message ?? "",
                code: (error.errorCode as ErrorCode | undefined) ?? CommonErrorCode.UNHANDLED_ERROR,
            });
        }
        throw new ExtendedError({
            message: `Fetch Error ${response.status.toString()}`,
            code: CommonErrorCode.UNHANDLED_ERROR,
        });
    } catch (error) {
        if (isExtendedError(error)) {
            throw error;
        }
        if (error instanceof Error) {
            throw new ExtendedError({message: error.message, code: CommonErrorCode.UNHANDLED_ERROR});
        }
        throw error;
    }
}
