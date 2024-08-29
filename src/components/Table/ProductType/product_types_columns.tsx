import { Trans } from "react-i18next"

export const product_types_columns: any = [
    {
        accessorKey: 'name',
        header: <Trans>Name</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.name}</>,
    },
    {
        accessorKey: 'description',
        header: <Trans>Description</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.description}</>,
        minSize: 300
    },
    {
        accessorKey: 'attributes_count',
        header: <Trans>Attributes counts</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.attributes_count}</>,
    },
    {
        accessorKey: 'products_count',
        header: <Trans>Products count</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.products_count}</>,
    },
]