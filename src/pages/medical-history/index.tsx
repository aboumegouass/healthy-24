import { Helmet } from "react-helmet";
import HeaderTitle from "../../components/HeaderTitle";
import MedicalHistoryTable from "../../components/MedicalHistoryTable";
import { t } from "i18next";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{t("Medical History")} | Healthy 24</title>
            </Helmet>
            <div className="p-4 bg-white border border-t-0 border-gray-300">
                <HeaderTitle
                    size='lg'
                    bordered={false}
                    uppercase
                    title="Medical History"
                />
                <MedicalHistoryTable data_count={20} />
            </div>
        </>
    )
}