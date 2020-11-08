import React, { FC, ReactNode, useMemo } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Column, useTable } from 'react-table';
import Table from '../Table';
import './style.module.scss';

type ProcessInCharge =
  | 'basicDesign'
  | 'combinedTest'
  | 'comprehensiveTest'
  | 'conservativeAndUse'
  | 'detailedDesign'
  | 'implementation'
  | 'requirementDefinition'
  | 'unitTest';

type Data = {
  businessContent: ReactNode;
  db: ReactNode;
  no: number;
  other: string;
  period: string;
  processInCharge: Record<ProcessInCharge, JSX.Element>;
  roleAndScale: ReactNode;
  serverOs: ReactNode;
  usedLanguage: ReactNode;
};

type Project = Pick<Data, 'businessContent' | 'db' | 'period' | 'roleAndScale' | 'serverOs' | 'usedLanguage'>;

export type ProjectTableProps = {
  projects: Project[];
};

const ProjectTable: FC<ProjectTableProps> = ({ projects }) => {
  const columns = useMemo<Column<Data>[]>(() => [
    {
      columns: [
        {
          accessor: 'no',
          Cell: ({ cell: { value } }) => (
            <div styleName="no-cell">{value}</div>
          ),
          style: { display: 'none' },
        },
      ],
      Header: 'No.',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'period',
          style: { display: 'none' },
        },
      ],
      Header: '期間',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'businessContent',
          style: { display: 'none' },
        },
      ],
      Header: '業務内容',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'roleAndScale',
          Header: '規模',
        },
      ],
      Header: '役割',
    },
    {
      columns: [
        {
          accessor: 'usedLanguage',
          style: { display: 'none' },
        },
      ],
      Header: '使用言語',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'db',
          style: { display: 'none' },
        },
      ],
      Header: 'DB',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'serverOs',
          style: { display: 'none' },
        },
      ],
      Header: 'サーバーOS',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'other',
          style: { display: 'none' },
        },
      ],
      Header: 'FW・MW・ツールなど',
      rowSpan: 2,
    },
    {
      columns: [
        {
          accessor: 'processInCharge.requirementDefinition',
          Header: (
            <>
              要件
              <br />
              定義
            </>
          ),
        },
        {
          accessor: 'processInCharge.basicDesign',
          Header: (
            <>
              基本
              <br />
              設計
            </>
          ),
        },
        {
          accessor: 'processInCharge.detailedDesign',
          Header: (
            <>
              詳細
              <br />
              設計
            </>
          ),
        },
        {
          accessor: 'processInCharge.implementation',
          Header: '実装',
        },
        {
          accessor: 'processInCharge.unitTest',
          Header: (
            <>
              単体
              <br />
              テスト
            </>
          ),
        },
        {
          accessor: 'processInCharge.combinedTest',
          Header: (
            <>
              結合
              <br />
              テスト
            </>
          ),
        },
        {
          accessor: 'processInCharge.comprehensiveTest',
          Header: (
            <>
              総合
              <br />
              テスト
            </>
          ),
        },
        {
          accessor: 'processInCharge.conservativeAndUse',
          Header: (
            <>
              保守
              <br />
              運用
            </>
          ),
        },
      ].map(({ accessor, Header }) => ({
        accessor,
        Cell: ({ cell: { value } }) => (
          <div styleName="process-in-charge-cell">{value}</div>
        ),
        Header,
      })),
      Header: '担当工程',
      style: { height: '40px' },
    },
  ], []);
  const data = useMemo<Data[]>(() => projects.map(({
    businessContent, db, period, roleAndScale, serverOs, usedLanguage,
  }) => ({
    businessContent,
    db,
    no: 1,
    other: 'other',
    period,
    processInCharge: {
      basicDesign: <IoIosCheckmarkCircle styleName="icon" />,
      combinedTest: null,
      comprehensiveTest: <IoIosCheckmarkCircle styleName="icon" />,
      conservativeAndUse: null,
      detailedDesign: <IoIosCheckmarkCircle styleName="icon" />,
      implementation: null,
      requirementDefinition: <IoIosCheckmarkCircle styleName="icon" />,
      unitTest: null,
    },
    roleAndScale,
    serverOs,
    usedLanguage,
  })), [projects]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Data>({
    columns,
    data,
  });

  return (
    <Table
      getTableBodyProps={getTableBodyProps}
      getTableProps={getTableProps}
      headerGroups={headerGroups}
      prepareRow={prepareRow}
      rows={rows}
    />
  );
};

export default ProjectTable;
