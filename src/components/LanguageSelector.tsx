import {useLocalization, useLocalizationContext} from "contexts";
import {CommonTranslation, Locale, locales} from "localization";

import styles from "./LanguageSelector.module.scss";

export const LanguageSelector = () => {
    const {locale, setLocale} = useLocalizationContext();
    const translation = useLocalization<CommonTranslation>("common");

    return (
        <div className={styles.languageSelector}>
            <label htmlFor="language-selector">{translation.languageSelector.label}</label>
            <select
                id="language-selector"
                value={locale.id}
                onChange={(e) => {
                    setLocale(locales.find((x: Locale) => x.id === e.target.value)!);
                }}
            >
                {locales.map((x) => (
                    <option key={x.id} value={x.id}>
                        {x.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
