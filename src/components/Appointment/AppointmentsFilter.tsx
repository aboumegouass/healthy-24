import { Icon } from '@iconify/react'
import { ActionIcon, Button, TextInput } from '@mantine/core'
import { t } from 'i18next'

function AppointmentsFilter() {
    return (
        <div className='flex items-center gap-2 justify-between'>
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
                    className="text-xs flex items-center gap-2 font-medium"
                    size="sm"
                >
                    {"Jan 16, 2023"}
                </Button>
                <ActionIcon.Group>
                    <ActionIcon variant="default" size="lg" aria-label="Gallery">
                        <Icon icon={'solar:calendar-line-duotone'} />
                    </ActionIcon>

                    <ActionIcon variant="filled" size="lg" aria-label="Likes">
                        <Icon icon={'lucide:settings-2'} />
                    </ActionIcon>
                </ActionIcon.Group>
            </div>
        </div>
    )
}

export default AppointmentsFilter