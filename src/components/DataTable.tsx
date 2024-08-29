import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import {
    MRT_RowData,
    MRT_TableInstance,
    MantineReactTable,
} from 'mantine-react-table';

type CompsProps = {
    table: MRT_TableInstance<MRT_RowData>
}
function DataTable({ table }: CompsProps) {
    return <MantineReactTable table={table} />
}

export default DataTable