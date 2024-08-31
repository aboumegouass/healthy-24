import { Button } from "@mantine/core"
import { t } from "i18next"

function AppointmentCard({ item }: { item: AppointmentType }) {
    return (
        <div className="p-4 border border-gray-100" style={{ borderRadius: 9 }}>
            <div className="flex items-center gap-2">
                <div>
                    <img src={item.avatar} className="w-10 h-10" style={{ borderRadius: 100 }} alt={item.full_name} />
                </div>
                <div className="w-[calc(100%-40px)]">
                    <div className="">
                        <p className={`text-sm font-medium`}>{item.full_name}</p>
                        <p className={`text-xs font-light text-gray-700`}>{item.startTime} - {item.endTime}</p>
                    </div>
                </div>
            </div>
            <p className="text-sm my-4 font-light text-gray-700">{item.text}</p>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <Button
                        variant="outline"
                        color="#103F74"
                        radius={10}
                        className="text-[10px] w-full font-normal px-1"
                        size="sm"
                    >
                        <span className="max-sm:hidden">{t("Decline Appointment")}</span>
                    </Button>
                </div>
                <div>
                    <Button
                        variant="filled"
                        color="#103F74"
                        radius={10}
                        className="text-[10px] w-full font-normal px-1"
                        size="sm"
                    >
                        <span className="max-sm:hidden">{t("Accept Appointment")}</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCard