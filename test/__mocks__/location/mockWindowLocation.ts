export const mockWindowLocation = () => {
    Object.defineProperty(globalThis, "location", {
        configurable: true,
        enumerable: true,
        value: new URL(globalThis.location.href),
    });
};

export const restoreMockedWindowLocation = (originalWindowLocation: Location) => {
    Object.defineProperty(globalThis, "location", {
        configurable: true,
        enumerable: true,
        value: originalWindowLocation,
    });
};
