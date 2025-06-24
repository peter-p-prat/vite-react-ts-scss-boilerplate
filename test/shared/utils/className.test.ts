import {className} from "shared/utils";

test("should return a className object containing the classes string", () => {
    // Given
    const classNames = [
        "test-class-1",
        "test-class-2",
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "conditional-class-1": true,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "conditional-class-2": false,
        },
    ];

    // When
    const result = className(...classNames);
    const expectedResult = "test-class-1 test-class-2 conditional-class-1";

    // Then
    expect(result).toEqual(expectedResult);
});
