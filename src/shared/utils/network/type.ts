import {ExtendedError} from "./ExtendedError";

export interface APIError {
    id: string | null;
    errorCode: string | null;
    message: string | null;
}

export enum CommonErrorCode {
    UNAUTHORIZED = "UNAUTHORIZED",
    UNHANDLED_ERROR = "UNHANDLED_ERROR",
}

// This type should be extended with the error codes of the business rules
export type ErrorCode = CommonErrorCode;

export type APIResponse<T> = T;

export const isExtendedError = (error: unknown): error is ExtendedError => !!error && "code" in (error as ExtendedError);

export const isUnauthorizedError = (error: unknown): boolean => isExtendedError(error) && error.code === CommonErrorCode.UNAUTHORIZED;
