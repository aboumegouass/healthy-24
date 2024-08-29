import { Trans } from "react-i18next"

export const delivery_company_columns: any = [
    {
        accessorKey: 'name',
        header: <Trans>Name</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.name}</span>,
    },
    {
        accessorKey: 'phone_number',
        header: <Trans>Phone Number</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.phone_number}</span>,
    },
    {
        accessorKey: 'type',
        header: <Trans>Type</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.type == 'provider' ? <Trans>Provider</Trans> : <Trans>Normal</Trans>}</span>,
    },
    {
        accessorKey: 'address',
        header: <Trans>Address</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.address}</span>,
    },
]