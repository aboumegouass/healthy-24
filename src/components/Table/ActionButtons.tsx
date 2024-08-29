import { Icon } from '@iconify/react'
import { ActionIcon, Button, Checkbox, Kbd, Popover, Select, Tooltip } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { MRT_DensityState } from 'mantine-react-table'
import { useHotkeys } from '@mantine/hooks'
import { isMobile } from 'react-device-detect'
type CompsProps = {
    table: any
    setPagination: any
    pagination: any
    columnVisibility: any
    tableType?: string
    densityToggle: MRT_DensityState
    handleCheckboxChange: (columnVisibility: any) => void
    setDensityToggle: (densityToggle: MRT_DensityState) => void
}
function ActionButtons({
    table,
    tableType = "all",
    setPagination,
    pagination,
    densityToggle,
    setDensityToggle,
    columnVisibility,
    handleCheckboxChange,
}: CompsProps) {
    const { t } = useTranslation()
    const columns = table.getAllColumns()
    const switchDensity = (density: string) => {
        switch (density) {
            case 'xs':
                return <Icon icon={'material-symbols:density-small'} />

            case 'md':
                return <Icon icon={'ic:baseline-density-medium'} />

            case 'xl':
                return <Icon icon={'ic:baseline-density-large'} />
            default:
                break;
        }
    }
    useHotkeys([
        [
            'ctrl+shift+f', () => console.log('')
        ],
        [
            'ctrl+shift+d', () => {
                switch (densityToggle) {
                    case 'xs':
                        setDensityToggle('xl')
                        break;
                    case 'md':
                        setDensityToggle('xs')
                        break;
                    case 'xl':
                        setDensityToggle('md')
                        break;
                    default:
                        setDensityToggle('md')
                }
            }
        ]
    ]);
    return (
        <>
            <div>
                <div className="flex items-center justify-between gap-2 p-4">
                    <div className="flex items-center justify-between gap-2">
                        <Tooltip
                            arrowSize={8}
                            label={<div className="flex items-center gap-2 text-sm">{t("Rows per page")}</div>}
                            withArrow>
                            <Select
                                placeholder={t("Rows per page")}
                                className="w-36 max-sm:w-28"
                                onChange={(e) => setPagination({
                                    ...pagination,
                                    pageSize: Number(e)
                                })}
                                size={"xs"}
                                data={[
                                    {
                                        label: "10",
                                        value: '10',
                                    },
                                    {
                                        label: "25",
                                        value: '25',
                                    },
                                    {
                                        label: "50",
                                        value: '50',
                                    },
                                    {
                                        label: "100",
                                        value: '100',
                                    },
                                    {
                                        label: "200",
                                        value: '200',
                                    },
                                    {
                                        label: "500",
                                        value: '500',
                                    },
                                ]}
                            />
                        </Tooltip>
                        {tableType == 'order' && <Button.Group>
                            <Button
                                size='xs'
                                variant={'filled'}
                            >
                                {t("All")}
                            </Button>
                            <Button
                                size='xs'
                                variant='outline'
                            >
                                {t("Pending")}
                            </Button>
                            <Button
                                size='xs'
                                variant='outline'
                            >
                                {t("Delivered")}
                            </Button>
                            <Button
                                size='xs'
                                variant='outline'
                            >
                                {t("Shipped")}
                            </Button>
                            <Button
                                size='xs'
                                variant='outline'
                            >
                                {t("Canceled")}
                            </Button>
                        </Button.Group>}
                    </div>
                    <div>

                        <ActionIcon.Group>
                            <Popover arrowSize={12} arrowRadius={2} width={300} position="bottom" withArrow shadow="md">
                                <Popover.Target>
                                    <Tooltip
                                        arrowSize={8}
                                        label={<div className="flex items-center gap-2 text-sm">{t("Columns visibility")}<div dir="ltr">
                                            <Kbd>V</Kbd>
                                        </div></div>}
                                        withArrow>
                                        <ActionIcon variant="default" size={'lg'}>
                                            <Icon icon={'mdi:visibility-outline'} />
                                        </ActionIcon>
                                    </Tooltip>
                                </Popover.Target>
                                <Popover.Dropdown className='p-0'>
                                    <div>
                                        <div className="p-4 bg-white border-b-2 border-b-slate-200">
                                            <h3 className="font-bold">{t("Columns visibility")}</h3>
                                        </div>
                                        <ul>
                                            {columns.map((item: any, index: number) => (
                                                <li key={index} className={`p-2.5 border-b ${columnVisibility[item.id] ? 'bg-slate-100' : 'bg-white'} hover:bg-slate-100 border-slate-200 dark:border-slate-900 last:border-0 dark:hover:bg-slate-900`}>
                                                    <Checkbox
                                                        checked={columnVisibility[item.id]}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                        label={t(item.columnDef.header)}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="p-3 bg-white">
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover arrowSize={12} arrowRadius={2} width={isMobile ? '100%' : 300} position="bottom" withArrow shadow="md">
                                <Popover.Target>
                                    <Tooltip
                                        arrowSize={8}
                                        label={<div className="flex items-center gap-2 text-sm">{t("Search in table")}</div>}
                                        withArrow>
                                        <ActionIcon variant="default" size={'lg'}>
                                            <Icon icon={'teenyicons:search-outline'} />
                                        </ActionIcon>
                                    </Tooltip>
                                </Popover.Target>
                                <Popover.Dropdown className='p-0 max-sm:w-full'>
                                    <div className='p-3'>
                                        test
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Tooltip
                                arrowSize={8}
                                label={<div className="flex items-center gap-2 text-sm">{t("Row Density")}<div dir="ltr">
                                    <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>D</Kbd>
                                </div></div>}
                                withArrow>
                                <ActionIcon variant="default" size={'lg'} onClick={() => {
                                    switch (densityToggle) {
                                        case 'xs':
                                            setDensityToggle('xl')
                                            break;
                                        case 'md':
                                            setDensityToggle('xs')
                                            break;
                                        case 'xl':
                                            setDensityToggle('md')
                                            break;
                                        default:
                                            setDensityToggle('md')
                                    }
                                }}>
                                    {switchDensity(densityToggle)}
                                </ActionIcon>
                            </Tooltip>
                        </ActionIcon.Group>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionButtons
