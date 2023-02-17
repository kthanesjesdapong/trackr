import React from 'react';
import { Tag, Table, P } from "./RecentTable.styled";
import { useTable } from 'react-table';
import { Column } from 'react-table';
import { dummyData } from './Title/dummyData';
import { topicTagColors } from '@src/utils/topicTagColors';
//RecentTableStyles, 

type Problem = {
    id: string;
    name: string;
    difficulty: string;
    tags: string[];
};
type RecentTableProps = {
    problems: Problem[];
};




//Move these into utils
type DifficultyColor = '#04a08f' | '#ba8e1d' | '#ff375f';
const getDifficultyColor = (difficulty: string): DifficultyColor => {
    switch (difficulty) {
        case 'EASY':
            return '#04a08f';
        case 'MEDIUM':
            return '#ba8e1d';
        case 'HARD':
            return '#ff375f';
        default:
            return '#04a08f';
    }
};






//RecentTable will take in props 
//data, result of fetching from db
//Column<iColumns>[]
//topicTagColors: {[key:string]: string}
interface iColumns {
    status: string,
    title: string,
    acceptanceRate: string,
    difficulty: string,
    topicTags: string[];
}

export const RecentTable = () => {

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
            accessor: 'difficulty',
            Cell: ({ value }) => (
                <P color={getDifficultyColor(value)}>
                    {value}
                </P>
            )
        },
        {
            Header: "TopicTags",
            accessor: 'topicTags',
            Cell: ({ value }) => (
                <>
                    {value.map((tag: string) => {
                        const tagObject = topicTagColors.find((item) => item.tag === tag);
                        if (tagObject) {
                            return (
                                <Tag key={tag} color={tagObject.color}>
                                    {tag}
                                </Tag>
                            );
                        }
                        return null;
                    })}
                </>
            )
        },
    ];

    const columns: Column<iColumns>[] = React.useMemo(() => c, []);
    const data: Array<iColumns> = React.useMemo(() => dummyData, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });


    //getTableProps, returns obj that can be spread into an element. includes attributes
    //make sure its the last prop you add
    //Loop thru headergroups, and now you have access to cols
    return (

        <Table className='card' {...getTableProps()}>
            {/* Header */}
            <thead>
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
            </thead>
            {/*Body */}
            <tbody {...getTableBodyProps()}>
                {rows && rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {(row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    <p>{cell.render('Cell')}</p>
                                </td>
                            )))}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};