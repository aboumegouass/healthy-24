import { ActionIcon, CopyButton, rem, Tooltip } from "@mantine/core"
import { IconCheck, IconCopy } from "@tabler/icons-react"
import { Trans } from "react-i18next"
import { formatCurrencyDZD } from "../../../utils/formats"
import { HandleSwitchStatus } from "../../SwitchStatus"
import { formatDistance } from 'date-fns'

export const order_columns: any = [
    {
        accessorKey: 'tracking_code',
        header: <Trans>Tracking code</Trans>,
        accessorFn: (originalRow: any) => (<p className="flex items-center justify-between gap-1 p-1 px-2 text-[11px] font-medium rounded-md bg-gray-100 border border-gray-200">
            {originalRow.tracking_code}<CopyButton value={originalRow.tracking_code} timeout={2000}>
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
        accessorKey: 'status_name',
        header: <Trans>Status</Trans>,
        accessorFn: (original: any) => (
            <HandleSwitchStatus
                status_id={original.status_id}
                status={original.status_name}
                onStatusChange={(newStatus, statusId) => {
                    console.log(`Status for ID ${statusId} changed to ${newStatus}`);
                    // Here you would update the status in your state or make an API call
                }}
            />
        ),
    },
    {
        accessorKey: 'customer.full_name',
        header: <Trans>Client Name</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.customer.full_name}</span>,
    },
    {
        accessorKey: 'customer.phone_number',
        header: <Trans>Phone number</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.customer.phone_number}</span>,
    },
    {
        accessorKey: 'total_ttc',
        header: <Trans>Total TTC</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{formatCurrencyDZD(originalRow.total_ttc)} DA</span>,
    },
    {
        accessorKey: 'items',
        header: <Trans>Items count</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow?.items?.length}</span>,
    },
    {
        accessorKey: 'created_at',
        header: <Trans>Date</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{formatDistance(originalRow?.created_at, new Date(), { addSuffix: true })}</span>,
    },
]