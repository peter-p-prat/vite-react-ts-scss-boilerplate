import {useLocalization, useLocalizationContext} from "contexts";
import {CommonTranslation, Locale, locales} from "localization";

import {Select} from "../UI";

interface Props {
    showLabel?: boolean;
}

export const LanguageSelector: React.FC<Props> = ({showLabel = true}) => {
    const {locale, setLocale} = useLocalizationContext();
    const translation = useLocalization<CommonTranslation>("common");

    return (
        <Select
            label={showLabel ? translation.languageSelector.label : undefined}
            options={locales.map((x) => ({label: x.label, value: x.id}))}
            value={locale.id}
            onChange={(value) => {
                setLocale(locales.find((x: Locale) => x.id === value)!);
            }}
        />
    );
};
