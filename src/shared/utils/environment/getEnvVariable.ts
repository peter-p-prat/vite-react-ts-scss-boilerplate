import {AppEnvironmentVariables} from "./type";

const isBoolean = (value: any): value is boolean => value === "true" || value === "false";
const isNumber = (value: any): value is number => !Number.isNaN(Number(value));

export const getEnvVariable = <T extends keyof AppEnvironmentVariables>(variable: T): AppEnvironmentVariables[T] => {
    const envVariable = import.meta.env[variable];

    if (isBoolean(envVariable)) {
        return (envVariable === "true") as unknown as AppEnvironmentVariables[T];
    }
    if (isNumber(envVariable)) {
        return Number(envVariable) as unknown as AppEnvironmentVariables[T];
    }
    return envVariable as AppEnvironmentVariables[T];
};
