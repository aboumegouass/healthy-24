import HeaderTitle from "../../components/HeaderTitle";
import { t } from "i18next";
import PatientsFilter from "../../components/Patient/PatientsFilter";
import PatientCard from "../../components/Patient/PatientCard";
import { generateFakePatients } from "../../utils/makeData";
import { Divider, Pagination, Space } from "@mantine/core";

export default function Home() {
    const getPatients = generateFakePatients(20)
    return (
        <>
            <div className="p-4 bg-white border border-t-0 border-gray-300">
                <HeaderTitle
                    size='lg'
                    bordered={false}
                    uppercase
                    title="Patients list"
                />
                <PatientsFilter />
                <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-4 mt-4">
                    {getPatients.map((patient) => (
                        <div key={patient.id}>
                            <PatientCard patient_data={patient} />
                        </div>
                    ))}
                </div>
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