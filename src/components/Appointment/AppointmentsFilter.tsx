import { Icon } from '@iconify/react'
import { ActionIcon, Button, TextInput } from '@mantine/core'
import { t } from 'i18next'

function AppointmentsFilter({
    isScheduler,
    setIsScheduler
}:
    {
        isScheduler: number
        setIsScheduler: (isScheduler: number) => void
    }) {
    return (
        <div className='flex items-center justify-between gap-2'>
            <div>
                <TextInput
                    placeholder={t("Search for something")}
                    radius={5}
                    classNames={{ input: "text-xs" }}
                    leftSection={<Icon className="w-4 h-4" icon={'iconamoon:search-light'} />}
                    size="sm"
                />
            </div>
            <div className="flex gap-2">
                <Button
                    variant="light"
                    color="#192252"
                    radius={4}
                    rightSection={<Icon icon={'ph:caret-down'} />}
                    className="flex items-center gap-2 text-xs font-medium"
                    size="sm"
                >
                    {"Jan 16, 2023"}
                </Button>
                <ActionIcon.Group>
                    <ActionIcon variant={isScheduler == 1 ? "filled" : "default"} size="lg" onClick={() => setIsScheduler(1)} aria-label="Gallery">
                        <Icon icon={'solar:calendar-line-duotone'} />
                    </ActionIcon>

                    <ActionIcon variant={isScheduler == 2 ? "filled" : "default"} onClick={() => setIsScheduler(2)} size="lg" aria-label="Likes">
                        <Icon icon={'lucide:settings-2'} />
                    </ActionIcon>
                </ActionIcon.Group>
            </div>
        </div>
    )
}

export default AppointmentsFilter