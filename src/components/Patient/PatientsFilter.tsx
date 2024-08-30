import { Icon } from "@iconify/react"
import { Button, TextInput } from "@mantine/core"
import { t } from "i18next"

function PatientsFilter() {
    return (
        <div className='flex items-center justify-between'>
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
                    leftSection={<Icon className="w-4 h-4" icon={'solar:download-linear'} />}
                    variant="light"
                    color="#192252"
                    radius={10}
                    className="text-xs font-medium"
                    size="lg"
                >
                    {t("Download Report")}
                </Button>
                <Button
                    leftSection={<Icon className="w-4 h-4" icon={'solar:filter-outline'} />}
                    variant="light"
                    color="#192252"
                    radius={10}
                    className="text-xs font-medium"
                    size="lg"
                >
                    {t("Filter")}
                </Button>
            </div>
        </div>
    )
}

export default PatientsFilter