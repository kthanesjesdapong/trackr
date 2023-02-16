import React from 'react';
import RecentTableStyles from "./RecentTable.styled";
import { useTable } from 'react-table';
import { Column } from 'react-table';
import { dummyData } from './Title/dummyData';


interface iColumns {
    status: string,
    title: string,
    acceptanceRate: string,
    difficulty: string,
    topicTags: string[];
}


const c: Column<iColumns>[] = [
    {
        Header: "Status",
        accessor: 'status'
    },
    {
        Header: "Title",
        accessor: 'title'
    },
    {
        Header: "AC",
        accessor: 'acceptanceRate'
    },
    {
        Header: "Difficulty",
        accessor: 'difficulty'
    },
    {
        Header: "TopicTags",
        accessor: 'topicTags'
    },
];

export const RecentTable = () => {

    const columns: Column<iColumns>[] = React.useMemo(() =>
        c, []);
    const data: Array<iColumns> = React.useMemo(() => dummyData, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    //using dummyData right now, but youre gonna eventually have to pull in data from your own custom Hooks

    //getTableProps, returns obj that can be spread into an element. includes attributes
    //make sure its the last prop you add
    //Loop thru headergroups, and now you have access to cols
    return (
        <RecentTableStyles className='card'>
            <table>
                {/* Header */}
                <thead {...getTableProps()}>
                    {headerGroups.map((headerGroup) =>
                    (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead >
                {/*Body */}
                <tbody {...getTableBodyProps()}>
                    {rows && rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {(row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </RecentTableStyles>
    );
};