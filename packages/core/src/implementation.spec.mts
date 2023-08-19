import { camelAttrNameToNative } from "./implementation.cjs";

describe("camelAttrNameToNative", () => {
    test("plain", () => {
        expect(camelAttrNameToNative("space-before.optimum")).toBe("space-before.optimum");
    });

    test("camelCase", () => {
        expect(camelAttrNameToNative("spaceBefore")).toBe("space-before");
    });

    test("camelCase with extension", () => {
        expect(camelAttrNameToNative("spaceBeforeOptimum")).toBe("space-before.optimum");
    });
});
