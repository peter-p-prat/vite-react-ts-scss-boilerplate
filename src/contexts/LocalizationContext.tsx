import {createContext, Dispatch, JSX, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {NestedKeyOf} from "shared/type-utilities";
import {getObjectByKeys} from "shared/utils/common";

import {defaultLocale, Locale, Translation} from "../localization";

interface ILocalizationContext {
    locale: Locale;
    setLocale: Dispatch<SetStateAction<Locale>>;
}

const LocalizationContext = createContext<ILocalizationContext>({} as ILocalizationContext);

const currentTranslation: Translation = defaultLocale.translation;

/**
 * Localization context provider
 */
export const LocalizationProvider = (props: PropsWithChildren): JSX.Element => {
    const [locale, setLocale] = useState<Locale>(defaultLocale);

    return (
        <LocalizationContext.Provider
            value={{
                locale,
                setLocale,
            }}
        >
            {props.children}
        </LocalizationContext.Provider>
    );
};

/**
 * Exposes the LocalizationContext
 */
export function useLocalizationContext(): ILocalizationContext {
    const context = useContext(LocalizationContext);

    if (!Object.entries(context).length) {
        throw new Error("useLocalizationContext must be used within a LocalizationContext");
    }

    return context;
}

/**
 * Exposes the LocalizationContext payload
 */
export function useLocalization<T = Translation>(key?: NestedKeyOf<Translation>): T {
    const context = useContext(LocalizationContext);

    if (!Object.entries(context).length) {
        throw new Error("useLocalization must be used within a LocalizationContext");
    }

    return (key ? getObjectByKeys(context.locale.translation, key) : context.locale.translation) as T;
}

/**
 * Gets the current translation from outside the context
 * @returns The translation
 */
export function getCurrentTranslation(): Translation {
    return currentTranslation;
}
