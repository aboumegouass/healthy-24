import { Skeleton, Table } from "@mantine/core";
import { t } from "i18next";
import HeaderTitle from "../../HeaderTitle";

type CompsProps = {
    isLoading?: boolean
}
const orders_products = [
    {
        "id": 1,
        name: 'Samir Meuble',
        order_count: 172
    },
    {
        "id": 2,
        name: 'LBN',
        order_count: 172
    },
    {
        "id": 3,
        name: 'Dar Ibn Hicham',
        order_count: 172
    },
    {
        "id": 4,
        name: 'Yalidine',
        order_count: 172
    },
    {
        "id": 5,
        name: 'ZR Express',
        order_count: 172
    },
]
function Clients({ isLoading = false }: CompsProps) {
    const rows = orders_products.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td className="text-xs">{element.name}</Table.Td>
            <Table.Td className="text-xs">{element.order_count}</Table.Td>
        </Table.Tr>
    ));
    if (isLoading)
        return <div className="relative p-3 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Top clients by order"
            />
            <Table striped withRowBorders={false} withTableBorder>
                <Table.Tr>
                    <Table.Th className="py-2 text-xs"><Skeleton h={12} /></Table.Th>
                    <Table.Th className="py-2 text-xs"><Skeleton h={12} /></Table.Th>
                </Table.Tr>
                {[0, 1, 2, 3, 4].map((i) => (
                    <Table.Tr key={i}>
                        <Table.Td className="py-[9px] text-xs"><Skeleton h={12} /></Table.Td>
                        <Table.Td className="py-[9px] text-xs"><Skeleton h={12} /></Table.Td>
                    </Table.Tr>
                ))}
            </Table>
        </div>
    return (
        <div className="relative p-3 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Top clients by order"
            />
            <Table striped withRowBorders={false} withTableBorder>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th className="text-[10px] uppercase opacity-60">{t("Client name")}</Table.Th>
                        <Table.Th className="text-[10px] uppercase opacity-60">{t("Order count")}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    )
}

export default Clients