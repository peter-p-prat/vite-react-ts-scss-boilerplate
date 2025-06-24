type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function isObject(item: unknown): item is object {
    return item !== null && typeof item === "object" && !Array.isArray(item);
}

export function deepMerge<T extends object, U extends DeepPartial<T>>(target: T, source: U): T {
    const output = {...target};

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = target[key as unknown as keyof T];

            if (isObject(sourceValue) && isObject(targetValue)) {
                output[key as unknown as keyof T] = deepMerge(targetValue, sourceValue as DeepPartial<typeof targetValue>);
            } else {
                output[key as unknown as keyof T] = sourceValue as unknown as typeof targetValue;
            }
        }
    }

    return output;
}
