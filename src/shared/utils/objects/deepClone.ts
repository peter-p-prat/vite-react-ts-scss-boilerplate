function deepClone<T>(obj: T): T {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let clone: T;

    if (Array.isArray(obj)) {
        clone = obj.map((item: T) => deepClone<T>(item)) as T;
    } else {
        clone = {} as T;
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
    }

    return clone;
}

export default deepClone;
