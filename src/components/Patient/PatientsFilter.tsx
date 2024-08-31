import { Icon } from "@iconify/react"
import { Button, TextInput } from "@mantine/core"
import { t } from "i18next"

function PatientsFilter() {
    return (
        <div className='flex items-center gap-2 justify-between'>
            <div>
                <TextInput
                    placeholder={t("Search for something")}
                    radius={10}
                    classNames={{ input: "text-sm" }}
                    leftSection={<Icon className="w-6 h-6" icon={'iconamoon:search-light'} />}
                    size="lg"
                />
            </div>
            <div className="flex gap-2">
                <Button
                    variant="light"
                    color="#192252"
                    radius={10}
                    className="text-xs flex items-center gap-1 font-medium"
                    size="lg"
                >
                    <Icon className="w-4 h-4" icon={'solar:download-linear'} /><span className="max-sm:hidden">{t("Download Report")}</span>
                </Button>
                <Button
                    variant="light"
                    color="#192252"
                    radius={10}
                    className="text-xs flex items-center gap-1 font-medium"
                    size="lg"
                >
                    <Icon className="w-4 h-4" icon={'solar:filter-outline'} /> <span className="max-sm:hidden">{t("Filter")}</span>
                </Button>
            </div>
        </div>
    )
}

export default PatientsFilter