import { Icon } from "@iconify/react";
import { Group, Paper, Text, Table, Progress, Anchor, Space, Indicator } from '@mantine/core';
import DashboardBars from "../../components/Statistics/DashboardBars";
import Clients from "../../components/Statistics/TopTables/Clients";
import Products from "../../components/Statistics/TopTables/Products";
import '@mantine/charts/styles.css';
import { Calendar } from 'react-date-range';
import HeaderTitle from "../../components/HeaderTitle";
import { Link } from "react-router-dom";
import { t } from "i18next";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import MedicalHistoryTable from "../../components/MedicalHistoryTable";
const latestOrders = [
    {
        title: 'Foundation',
        author: 'Isaac Asimov',
        year: 1951,
        reviews: { positive: 2223, negative: 259 },
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        year: 1818,
        reviews: { positive: 5677, negative: 1265 },
    },
    {
        title: 'Solaris',
        author: 'Stanislaw Lem',
        year: 1961,
        reviews: { positive: 3487, negative: 1845 },
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        year: 1965,
        reviews: { positive: 8576, negative: 663 },
    },
    {
        title: 'The Left Hand of Darkness',
        author: 'Ursula K. Le Guin',
        year: 1969,
        reviews: { positive: 6631, negative: 993 },
    },
    {
        title: 'A Scanner Darkly',
        author: 'Philip K Dick',
        year: 1977,
        reviews: { positive: 8124, negative: 1847 },
    },
];
export default function Home() {
    const rows = latestOrders.map((row) => {
        const totalReviews = row.reviews.negative + row.reviews.positive;
        const positiveReviews = (row.reviews.positive / totalReviews) * 100;
        const negativeReviews = (row.reviews.negative / totalReviews) * 100;

        return (
            <Table.Tr key={row.title}>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                        {row.title}
                    </Anchor>
                </Table.Td>
                <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
                <Table.Td>
                    <Group justify="space-between">
                        <Text fz="xs" c="teal" fw={700}>
                            {positiveReviews.toFixed(0)}%
                        </Text>
                        <Text fz="xs" c="red" fw={700}>
                            {negativeReviews.toFixed(0)}%
                        </Text>
                    </Group>
                    <Progress.Root>
                        <Progress.Section
                            value={positiveReviews}
                            color="teal"
                        />

                        <Progress.Section
                            value={negativeReviews}
                            color="red"
                        />
                    </Progress.Root>
                </Table.Td>
            </Table.Tr>
        );
    });
    const handleSelect = (date: any) => {
        console.log(date); // native Date object
    }
    return (
        <>
            <div className="p-4 bg-white border border-t-0 border-gray-300">
                <div className="flex gap-4 mt-4">
                    <div className="w-2/3">
                        <h1 className="font-extrabold text-[#192252] text-xl">{'Welcome back Dr. Taylor!'}</h1>
                        <DashboardBars />
                    </div>
                    <div className="w-1/3">
                        <div className="p-5 pt-3 bg-white border border-gray-300 rounded-md">
                            <HeaderTitle
                                size='xs'
                                bordered={false}
                                uppercase
                                title="Calendar"
                                children={<div><Icon icon={`ph:caret-down`} /></div>}
                            />
                            <Calendar
                                date={new Date()}
                                onChange={handleSelect}
                            />
                            <div className="flex items-center justify-between gap-2 py-2 my-3">
                                <h2 className="text-[#192252] font-bold">{t("Upcoming")}</h2>
                                <Link className="text-xs font-semibold text-blue-600 underline" to='/'>{t("View All")}</Link>
                            </div>
                            <div className="flex items-center py-2 gap-2 rounded-md bg-[#F0F9FD] p-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white bg-[#2952CC]">M</div>
                                <div className="w-[calc(100%-40px)]">
                                    <h2 className="text-[#192252] font-semibold">{t("Montly doctor’s meet")}</h2>
                                    <p className="text-xs text-gray-500">{'8 April, 2021 | 04:00 PM'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <MedicalHistoryTable />
                </div>
            </div>
        </>
    )
}