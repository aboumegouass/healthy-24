import { TextInput } from "@mantine/core"
import { FormikProps } from "formik"
import { TFunction } from "i18next"

type Language = 'en' | 'fr' | 'ar';

export const SwitchRoleName = ({ formik, size = 'sm', t, placeholder }:
    {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
        placeholder: string,
        formik: FormikProps<RoleForm>,
        t: TFunction<"translation", undefined>
    }
) => {
    const lang = formik.values.lang || 'en';

    const getTextInput = (language: Language) => (
        <TextInput
            size={size}
            withAsterisk
            value={formik.values.name[language] || ''}
            name={`name.${language}`}
            error={formik.errors.name?.[language]}
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