import { menu_item } from '../../lib/style_classe'
import { Icon } from '@iconify/react'
import { Button, Menu, rem } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type CompsProps = {
    table: any
}
function ExportationButton({ table }: CompsProps) {
    const { t } = useTranslation()
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button variant="filled"
                    className="bg-gradient-to-bl to-[#2c3e50] from-[#2c3e50]"
                    leftSection={<Icon icon={`solar:upload-outline`} />}
                    rightSection={<Icon icon={`fa6-solid:angle-down`} />}
                >
                    {t("Exportation")}
                </Button>
            </Menu.Target>
            <Menu.Dropdown classNames={{ dropdown: "dark:bg-slate-800 dark:border-slate-800 text-sm dark:text-slate-100 hover:bg-slate-100" }}>
                <Menu.Item
                    className={menu_item}
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    leftSection={<Icon icon={`grommet-icons:document-pdf`}
                        style={{ width: rem(14), height: rem(14) }} />}
                >
                    {t("Export all rows to PDF")}
                </Menu.Item>
                <Menu.Item
                    className={menu_item}
                    disabled={table.getRowModel().rows.length === 0}
                    leftSection={<Icon icon={`grommet-icons:document-pdf`}
                        style={{ width: rem(14), height: rem(14) }} />
                    }
                >
                    {t("Export Page Rows to PDF")}
                </Menu.Item>
                <Menu.Item
                    className={menu_item}
                    leftSection={<Icon icon={`teenyicons:ms-excel-outline`} style={{ width: rem(14), height: rem(14) }} />}
                >
                    {t("Export to Excel")}
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ExportationButton