import { Trans } from "react-i18next"

export const product_brands_columns: any = [
    {
        accessorKey: 'name',
        header: <Trans>Name</Trans>,
        accessorFn: (originalRow: any) => <div className="flex items-center gap-2">
            <img src={originalRow.logo} className="object-cover w-9 h-9" />
            <p>{originalRow.name}</p>
        </div>,
    },
    {
        accessorKey: 'description',
        header: <Trans>Description</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.description}</>,
        minSize: 300
    },
    {
        accessorKey: 'products_count',
        header: <Trans>Products count</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.products_count}</>,
    },
]