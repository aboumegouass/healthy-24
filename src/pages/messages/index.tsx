import { Helmet } from "react-helmet";
import HeaderTitle from "../../components/HeaderTitle";
import MedicalHistoryTable from "../../components/MedicalHistoryTable";
import { t } from "i18next";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{t("Messages")} | Healthy 24</title>
            </Helmet>
            <div className="bg-white border border-t-0 border-gray-300">
                <div className="h-[90vh] flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-56 gap-2">
                        <img src="/no-selected-message.png" className="w-16" />
                        <h1 className="text-base font-bold text-center">{t("No selected messages")}</h1>
                        <p className="text-xs font-light text-center opacity-80">{t("Choose from the left menu any patient to chat with.")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}