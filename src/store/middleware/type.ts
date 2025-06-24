import {Action} from "redux";

interface ActionPayload {
    name: string;
    message: string;
    stack: string;
    code: string;
}

interface ActionMeta {
    requestId: string;
    rejectedWithValue: boolean;
    requestStatus: string;
    aborted: boolean;
    condition: boolean;
}

export interface MiddlewareAction extends Action {
    payload?: ActionPayload;
    meta?: ActionMeta;
    error?: {
        message: string;
    };
}
