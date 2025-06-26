import {createElement, ReactElement} from "react";

/**
 * Gets a hash string
 * @returns The hash
 */
export function getRandomHash(): string {
    return Math.random().toString(36).slice(2, 15);
}

/**
 * Gets a nested value by its key
 * @param object The original object
 * @param key The key
 */
export function getObjectByKeys(object: Record<string, unknown>, key: string): unknown {
    return key.split(".").reduce((acc: Record<string, unknown>, keyPart: string) => acc[keyPart] as Record<string, unknown>, object);
}

/**
 * Returns a new string with all matches of a pattern replaced by a replacement
 * Not using the native replaceAll since it's not supported by all node versions
 * @param string The original string
 * @param search A String that is to be replaced by the replace parameter
 * @param replace The String that replaces the substring specified by the find parameter
 */
export function replaceAll(string: string, search: string, replace: string): string {
    return string.replaceAll(new RegExp(search, "gi"), replace);
}

/**
 * Replace a string with any given params
 * @param localizationString The locale string
 * @param translationParams The translation params
 */
export function translateWithParams(localizationString: string, translationParams: Record<string, string | number | null>): string {
    for (const param of Object.entries(translationParams)) {
        localizationString = replaceAll(localizationString, `{{${param[0]}}}`, String(param[1]));
    }

    return localizationString;
}

/**
 * Introduce bold parts into a string
 * @param localizationString The locale string
 */
export function translateWithBoldPart(localizationString: string): ReactElement {
    if (!localizationString.includes("<b>")) {
        return createElement("span", {key: getRandomHash()}, localizationString);
    }

    let parts = localizationString.split("<b>");
    parts = [parts[0]!, ...parts[1]!.split("</b>")];
    const boldElement = createElement("b", {key: getRandomHash()}, parts[1]);
    const fullContent = [parts[0], boldElement, parts[2]];
    return createElement("span", {key: getRandomHash()}, fullContent);
}

/**
 * Generates a random integer number between 0 and 10 (inclusive)
 * @returns A random integer from 0 to 10
 */
export function getRandomNumberZeroToTen(): number {
    return Math.floor(Math.random() * 11);
}
