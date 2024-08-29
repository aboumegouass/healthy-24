import { TextInput } from "@mantine/core"
import { FormikProps } from "formik"
import { TFunction } from "i18next"

type Language = 'en' | 'fr' | 'ar';

type MultilingualField = {
    [key in Language]: string;
};

export const SwitchName = ({ formik, size = 'sm', t, placeholder, name }:
    {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
        placeholder: string,
        name: string,
        formik: FormikProps<any>,
        t: TFunction<"translation", undefined>
    }
) => {
    const lang = formik.values.lang || 'en';

    const getTextInput = (language: Language) => (
        <TextInput
            size={size}
            withAsterisk
            value={(formik.values[name] as MultilingualField)[language] || ''}
            name={`${name}.${language}`}
            error={(formik.errors[name] as Partial<MultilingualField>)?.[language]}
            onChange={formik.handleChange}
            placeholder={`${t(placeholder)} (${language})`}
            classNames={{
                input: "ring-1 border-e-0 rounded-e-none ring-slate-300 focus:ring-1 focus:ring-gray-800",
                label: 'mb-0'
            }}
        />
    )

    switch (lang) {
        case 'ar':
            return getTextInput('ar');
        case 'fr':
            return getTextInput('fr');
        default:
            return getTextInput('en');
    }
}