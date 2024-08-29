import { Pill } from "@mantine/core"
import { t } from "i18next"
import { Trans } from "react-i18next"
import { renderAttributeType } from "../renderAttributeType"

export const product_attributes_columns: any = [
    {
        accessorKey: 'name',
        header: <Trans>Name</Trans>,
        accessorFn: (originalRow: any) => <div className="flex flex-col gap-0.5">
            <p className="text-xs font-bold">{originalRow.label}</p>
            <p className="text-xs opacity-85">{originalRow.name}</p>
        </div>,
    },
    {
        accessorKey: 'values',
        header: <Trans>Options</Trans>,
        accessorFn: (originalRow: any) => <div className="flex flex-wrap gap-1">
            {originalRow.values.map((value: any, index: number) => (
                <Pill size="sm" key={index}>{value}</Pill>
            ))}
        </div>,
        minSize: 300
    },
    {
        accessorKey: 'isRequired',
        header: <Trans>Required</Trans>,
        accessorFn: (originalRow: any) => <>
            {originalRow.isRequired ? <Pill size="sm" className="text-white bg-green-700">{t("Yes")}</Pill> : <Pill size="sm" className="bg-gray-200">{t("No")}</Pill>}
        </>,
    },
    {
        accessorKey: 'type',
        header: <Trans>Type</Trans>,
        accessorFn: (originalRow: any) => <>
            {renderAttributeType(originalRow.type)}
        </>,
    },
]