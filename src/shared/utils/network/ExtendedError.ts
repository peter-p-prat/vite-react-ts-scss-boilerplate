import {ErrorCode} from "./type";

export class ExtendedError extends Error {
    code: ErrorCode;

    constructor({message, code}: Omit<ExtendedError, "name">) {
        super(message);

        this.code = code;
    }
}
