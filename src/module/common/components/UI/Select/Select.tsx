import styles from "./Select.module.scss";

interface SelectProps {
    label?: string;
    options: {label: string; value: string}[];
    value: string;
    onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({label, options, value, onChange}) => {
    return (
        <div className={styles.selectWrapper}>
            {label && <label htmlFor="language-selector">{label}</label>}
            <div className={styles.select}>
                <select
                    id="language-selector"
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
