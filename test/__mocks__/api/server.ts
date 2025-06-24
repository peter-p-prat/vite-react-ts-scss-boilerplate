import {setupServer} from "msw/node";

import {getUserHandler} from "./handlers/user";

const handlers = [getUserHandler()];

export const server = setupServer(...handlers);
