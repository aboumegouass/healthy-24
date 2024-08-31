import HeaderTitle from "../../components/HeaderTitle";
import { t } from "i18next";
import PatientsFilter from "../../components/Patient/PatientsFilter";
import { Helmet } from "react-helmet";
import AppointmentCard from "../../components/Appointment/AppointmentCard";
import { generateFakedAppointments } from "../../utils/makeData";
import AppointmentsFilter from "../../components/Appointment/AppointmentsFilter";
import { Divider, Pagination, Space } from "@mantine/core";

export default function Home() {
    const getAppointments = generateFakedAppointments()
    return (
        <>
            <Helmet>
                <title>{t('Appointments')} | Healthy 24</title>
            </Helmet>
            <div className="p-4 bg-white border border-t-0 border-gray-300">
                <HeaderTitle
                    size='lg'
                    bordered={false}
                    uppercase
                    title="Appointments"
                />
                <AppointmentsFilter />
                {getAppointments?.map((patient) => (
                    <>
                        <p className="text-xs font-bold opacity-70 text-center my-4 text-blue-600">{patient.date}</p>
                        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-4">
                            {patient?.data?.map((item) => (
                                <div key={item.id}>
                                    <AppointmentCard item={item} />
                                </div>
                            ))}
                        </div>
                    </>
                ))}
                <Space h={'lg'} />
                <Divider />
                <Space h={'lg'} />
                <div className="flex justify-end">
                    <Pagination
                        total={5}
                        radius="md"
                        classNames={{ control: 'border-0' }}
                    />
                </div>
            </div>
        </>
    )
}