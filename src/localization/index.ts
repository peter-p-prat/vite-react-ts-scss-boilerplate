import {enUS} from "./en-us";
import {esES} from "./es-es";
import {Locale} from "./types";

export const locales = Object.seal<Locale[]>([
    {
        id: "en-us",
        label: "English",
        translation: enUS,
    },
    {
        id: "es-es",
        label: "Español",
        translation: esES,
    },
]);

export const defaultLocale: Locale = locales.find((x) => x.default) ?? locales[0]!;

export * from "./types";
