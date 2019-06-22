import React, {useEffect, useState} from 'react';
import Table from '../lib/Table/Table';

export default function () {
  const [dataSource, setDataSource] = useState<Array<{ id: number, name: string }>>([]);
  const columns = [
    {name: 'ID', render: 'id'},
    {name: '姓名', render: 'name'}
  ];

  useEffect(() => {
    setTimeout(() => {
      setDataSource([
        {id: 1, name: 'jessie'},
        {id: 2, name: 'mio'}
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>示例</h2>
      <Table
        className="ui-table-example"
        dataSource={dataSource}
        columns={columns}
      >
      </Table>
    </div>
  );
};