import { ActionIcon, Badge, CopyButton, Tooltip, rem } from "@mantine/core"
import { Trans } from "react-i18next"
import { IconCheck, IconCopy } from "@tabler/icons-react"

export const role_columns: any = [
    {
        accessorKey: 'id',
        header: 'Reference',
        accessorFn: (originalRow: any) => (<p className="flex items-center justify-between gap-1 p-1 px-2 text-[11px] font-medium rounded-md bg-gray-100 border border-gray-200">
            {originalRow.id}<CopyButton value={originalRow.id} timeout={2000}>
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
        header: <Trans>Name</Trans>,
        accessorFn: (originalRow: any) => <span className="text-xs">{originalRow.name}</span>,
    },
    {
        accessorKey: 'permissions',
        header: <Trans>Permissions</Trans>,
        accessorFn: (originalRow: any) => <>{originalRow.permissions.map((el: any) => <Badge size="sm" mx={2} color="gray">{el}</Badge>)}</>,
    },
]