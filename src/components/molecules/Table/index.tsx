/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
import React, { FC } from 'react';
import { TableInstance } from 'react-table';
import './style.module.scss';

export type TableProps = Partial<TableInstance<any>>;

const Table: FC<TableProps> = ({
  getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
}) => (
    <table {...getTableProps()} styleName="table">
      <thead styleName="thead">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} rowSpan={(column as any).rowSpan} style={(column as any).style} styleName="th">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} styleName="tbody">
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()} styleName="td">{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );

export default Table;
