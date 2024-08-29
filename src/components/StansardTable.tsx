import { ActionIcon, Space, Tooltip } from '@mantine/core';
import { MantineReactTable, MRT_RowSelectionState, useMantineReactTable } from 'mantine-react-table';
import ActionButtons from './Table/ActionButtons';
import { Trans, useTranslation } from 'react-i18next';
import { button_default_class } from '../lib/style_classe';
import { Icon } from "@iconify/react";
import { useState } from 'react';

type CompsProps = {
    //MRT_Localization_FR: any
    enableRowSelection?: boolean
    handleCheckboxChange: any
    setColumnVisibility: any
    setDensityToggle: any
    columnVisibility: any
    setGlobalFilter: any
    getCoreRowModel: any
    initialFilter: any
    densityToggle: any
    setPagination: any
    tableType?: string
    setSorting: any
    pagination: any
    columns: any
    sorting: any
    data: any[]
    count: any
    openDeleteConfirmModal?: (row: any) => void
}
function StansardTable({
    //MRT_Localization_FR,
    columnVisibility,
    columns,
    count,
    enableRowSelection = true,
    data,
    tableType = "all",
    densityToggle,
    getCoreRowModel,
    handleCheckboxChange,
    pagination,
    setColumnVisibility,
    setDensityToggle,
    openDeleteConfirmModal,
    setPagination,
    setSorting,
    sorting,
}: CompsProps) {
    const { t } = useTranslation()
    const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

    const table = useMantineReactTable({
        columns: columns,
        data: data || [],
        onPaginationChange: setPagination,
        mantineTableProps: {
            striped: true,
            highlightOnHover: false,
        },
        state: {
            columnVisibility: columnVisibility,
            sorting,
            pagination,
            rowSelection,
            density: densityToggle,
        },
        enableStickyHeader: true,
        enableColumnFilterModes: true,
        manualFiltering: true,
        getRowId: (row) => row.id,
        manualPagination: true,
        enableRowSelection,
        manualSorting: true,
        rowCount: count && Number(count),
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        mantinePaginationProps: {
            classNames: {
                dots: "dark:bg-slate-900",
                control: 'dark:border-slate-900 max-sm:text-sm dark:text-slate-200 dark:hover:border-slate-800 dark:hover:text-slate-50 dark:hover:bg-slate-700'
            },
            showRowsPerPage: false
        },
        mantinePaperProps: {
            className: "dark:bg-slate-800 border-0 shadow-none"
        },
        mantineTableBodyCellProps: {
            className: "dark:hover:text-slate-700 dark:hover:bg-slate-800",

        },
        mantineTableBodyRowProps: {
            className: "dark:bg-slate-800 dark:border-slate-700 dark:hover:text-[#000000!important]",
        },

        mantineTableHeadProps: {
            className: "dark:bg-slate-800"
        },
        mantineTableHeadRowProps: {
            className: "dark:bg-slate-800 text-[10px] uppercase text-slate-600 dark:border-slate-700",
        },
        mantineTableHeadCellProps: {
            className: "dark:bg-slate-800 text-[10px] uppercase text-slate-600 dark:border-slate-700",
        },
        mantineBottomToolbarProps: {
            className: "dark:bg-slate-800"
        },
        enableColumnOrdering: true,
        positionPagination: "bottom",
        onRowSelectionChange: setRowSelection,
        enableColumnActions: false,
        //localization: MRT_Localization_FR,
        paginationDisplayMode: "pages",
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <ActionIcon.Group>
                <Tooltip
                    arrowSize={8}
                    label={<div className="flex items-center gap-2 text-xs"><Trans>Edit type</Trans></div>}
                    withArrow>
                    <ActionIcon variant="default" className={`max-sm:hidden ${button_default_class}`} size={'md'}>
                        <Icon icon={'tabler:edit'} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip
                    arrowSize={8}
                    label={<div className="flex items-center gap-2 text-xs"><Trans>Delete type</Trans></div>}
                    withArrow>
                    <ActionIcon
                        onClick={() => openDeleteConfirmModal?.(row)}
                        variant="default"
                        className={button_default_class}
                        size={'md'}
                    >
                        <Icon className="w-4 h-4 text-red-600" icon={'ant-design:delete-twotone'} />
                    </ActionIcon>
                </Tooltip>
            </ActionIcon.Group>
        ),
        enableColumnDragging: true,
        enableDensityToggle: false,
        enableTopToolbar: false,
        //onColumnOrderChange: setColumnOrder,
        onDensityChange: setDensityToggle,
        onColumnVisibilityChange: setColumnVisibility,
        mantineTopToolbarProps: { className: "justify-between dark:bg-slate-800" }
    });
    return (
        <div className={"mt-3 bg-white relative dark:bg-[#141e36] border border-gray-300 dark:border-[#25314f] rounded-md"}>
            {/* {isFetching && <Progress className="fixed left-0 right-0 top-16 z-[1000]" color="#e96b75" size={9} value={100} animated />} */}
            <ActionButtons
                tableType={tableType}
                columnVisibility={columnVisibility}
                densityToggle={densityToggle}
                handleCheckboxChange={handleCheckboxChange}
                pagination={pagination}
                setDensityToggle={setDensityToggle}
                setPagination={setPagination}
                table={table}
            />
            <MantineReactTable table={table} />
            <Space h="md" />
            <div className="bg-white dark:bg-slate-800 rounded-b-md border-t max-sm:flex-col border-t-gray-300 dark:border-t-[#25314f]">
                <div className="flex items-center justify-between gap-2 max-sm:flex-col">
                    {/* <div className="flex items-center gap-2 p-4 max-sm:pb-0">
                                <p className="text-base font-bold">
                                    {t("Total")}:
                                </p>
                                <p className="text-base">
                                    {dinarFormat(29300002)}
                                </p>
                            </div> */}
                    <div className="p-4 max-sm:pt-0">
                        <p className="flex gap-1.5 items-center">
                            <span className="text-sm opacity-70">{t("Number of current rows")} |</span>
                            <span className="font-bold opacity-100">{table.getRowModel().rows.length}</span> <span className="opacity-70">{t("of")}</span> <span className="font-bold opacity-100">{table.getRowCount()}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StansardTable