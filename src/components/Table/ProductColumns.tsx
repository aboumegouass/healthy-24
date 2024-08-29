import { ActionIcon, CopyButton, Tooltip, rem } from "@mantine/core"
import { dinarFormat } from "../../utils/formats"
import { Trans } from "react-i18next"
import { IconCheck, IconCopy } from "@tabler/icons-react"

export const product_columns: any = [
    {
        accessorKey: 'reference',
        header: 'Référence',
        accessorFn: (originalRow: any) => (<p className="flex items-center justify-between gap-1 p-1 px-2 text-[11px] font-medium rounded-md bg-gray-100 border border-gray-200">
            {originalRow.reference}<CopyButton value={originalRow.reference} timeout={2000}>
                {({ copied, copy }) => (
                    <Tooltip label={<div className="flex items-center gap-2 text-xs">{copied ? <Trans>Copied</Trans> : <Trans>Copy</Trans>}</div>} withArrow position="right">
                        <ActionIcon size={"xs"} color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                            {copied ? (
                                <IconCheck style={{ width: rem(13) }} />
                            ) : (
                                <IconCopy style={{ width: rem(13) }} />
                            )}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </p>),
    },
    {
        accessorKey: 'name',
        header: <Trans>Designation</Trans>,
        accessorFn: (originalRow: any) => <div className="flex items-center gap-2">
            <img src={originalRow.image} className="object-cover w-12 h-10 rounded-sm" alt="" />
            <div>
                {originalRow.name}
            </div>
        </div>,
        minSize: 300
    },
    {
        accessorKey: 'unit_price',
        header: <Trans>Unit price</Trans>,
        accessorFn: (originalRow: any) => <>{dinarFormat(originalRow.unit_price)} DA</>,
    },
    {
        accessorKey: 'product_type',
        header: <Trans>Product Type</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.product_type.name}</>,
    },
    {
        accessorKey: 'brand',
        header: <Trans>Brand</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.brand.name}</>,
    },
]