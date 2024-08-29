import { Badge } from "@mantine/core"
import { t } from "i18next"
import { Trans } from "react-i18next"

export const employee_columns: any = [
    {
        accessorKey: 'full_name',
        header: <Trans>Full Name</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.full_name}</span>,
    },
    {
        accessorKey: 'phone_number',
        header: <Trans>Phone Number</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.phone_number}</span>,
    },
    {
        accessorKey: 'role_name',
        header: <Trans>Role name</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.role_name}</span>,
    },
    {
        accessorKey: 'type',
        header: <Trans>Type</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.type == 'client' ? <Badge color="#222">{t("Client")}</Badge> : <Badge color="#9C747D">{t("Employee")}</Badge>}</span>,
    },
    {
        accessorKey: 'is_active',
        header: <Trans>Actived</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.is_active ? <Badge color="teal">Yes</Badge> : <Badge color="red">No</Badge>}</span>,
    },
]