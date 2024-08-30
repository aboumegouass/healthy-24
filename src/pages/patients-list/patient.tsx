import { Helmet } from "react-helmet"
import HeaderTitle from "../../components/HeaderTitle"
import { t } from "i18next"
import PatientSidebarCard from "../../components/Patient/PatientSidebarCard"
import PatientDetailsSidebarCard from "../../components/Patient/PatientDetailsSidebarCard"
import { Space } from "@mantine/core"
import PastNotesAppointment from "../../components/Patient/PastNotesAppointment"

function patient() {

    return (
        <>
            <Helmet>
                <title>
                    {t("Patient - Hamid Megouas")} | Healthy 24
                </title>
            </Helmet>
            <div className="p-4 bg-white border border-t-0 border-gray-300">
                <HeaderTitle
                    size='lg'
                    bordered={false}
                    uppercase
                    title={`Patient - Hamid Megouas`}
                />
                <div className="flex gap-4 max-sm:flex-col">
                    <div className="w-1/3 max-sm:w-full">
                        <PatientSidebarCard />
                        <Space h={'md'} />
                        <PatientDetailsSidebarCard />
                    </div>
                    <div className="w-2/3 max-sm:w-full">
                        <div className="p-4 border border-gray-100" style={{ borderRadius: 9 }}>
                            <HeaderTitle
                                size='sm'
                                bordered={false}
                                uppercase
                                title={`Past Notes Appointment`}
                            />
                            <PastNotesAppointment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default patient