import { useTranslation } from "react-i18next"

function UnexpectedError() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col items-center justify-center py-6">
            <img className="h-12" src="/unexpected-error.png" alt="" />
            <h2 className="mt-3 font-bold">{t("An unexpected error occurred.")}</h2>
            <p className="text-sm opacity-75">{t("Please try again.")}</p>
        </div>
    )
}

export default UnexpectedError