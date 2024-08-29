import { Textarea } from "@mantine/core"
import { FormikProps } from "formik"
import { TFunction } from "i18next"

type Language = 'en' | 'fr' | 'ar';

export const SwitchRoleDescription = ({ formik, size = 'sm', t, placeholder, label }:
    {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
        placeholder: string,
        formik: FormikProps<RoleForm>,
        label?: string
        t: TFunction<"translation", undefined>
    }
) => {
    const lang = formik.values.lang || 'en';

    const getTextInput = (language: Language) => (
        <Textarea
            size={size}
            value={formik.values.description[language] || ''}
            rows={4}
            label={label ? t(label) : null}
            error={formik.errors.description?.[language]}
            name={`description.${language}`}
            onChange={formik.handleChange}
            classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2 font-bold opacity-75' }}
            placeholder={`${t(placeholder)} (${language})`}
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