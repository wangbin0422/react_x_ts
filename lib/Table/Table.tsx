import React, {ReactNode} from 'react';
import {scopedClassMaker} from '../untils/classes';
import './table.scss'

const sc = scopedClassMaker('ui-table');

interface TableDataSourceItem {
  [key: string]: any;

  id: number | string
}

interface TableColumn {
  // name: string;
  [key: string]: any;

  render: ((item: TableDataSourceItem, column: TableColumn) => ReactNode) | string
}

interface IProps extends React.TableHTMLAttributes<HTMLTableElement> {
  dataSource: TableDataSourceItem[];
  columns: TableColumn[]
}

const renderColumn = (item: TableDataSourceItem, col: TableColumn) => {
  if (typeof col.render === 'string') {
    return item[col.render];
  } else {
    return col.render.call(undefined, item, col);
  }
};

const Table: React.FunctionComponent<IProps> = (props) => {
  const {dataSource, columns, className ,style} = props;
  const header = columns.map(col =>
    <th
      className={sc('header')}
      key={col.name}
      style={{width: col.width}}
    >
      {col.name}
    </th>
  );
  const rows = dataSource.map(item =>
    <tr key={item.id}>
      {columns.map(col =>
        <td className={sc('td')} key={col.name}>
          {renderColumn(item, col)}
        </td>
      )}
    </tr>
  );
  const _table = (
    <table className={sc('')}>
      <thead>
      <tr>{header}</tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  );
  const empty = (
    <div className={sc('empty')}>无数据。。。</div>
  );
  return (
    <div
      className={sc('wrapper', {extra: className ? className : ''})}
      style={style}
    >
      {dataSource && dataSource.length > 0 ? _table : empty}
    </div>
  );
};

export default Table;