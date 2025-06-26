import {enUS as defaultLocale} from "./en-us";

export interface Locale {
    id: string;
    label: string;
    default?: boolean;
    translation: Translation;
}

export type Translation = typeof defaultLocale;
export type CommonTranslation = typeof defaultLocale.common;
export type UserTranslation = typeof defaultLocale.user;
export type HomeTranslation = typeof defaultLocale.homePage;
