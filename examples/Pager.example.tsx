import React, {useState} from 'react';
import Pager from '../lib/Pager/Pager';

export default function () {
  const [page, setPage] = useState(1);

  return (
    <div>
      <h2>示例</h2>
      <Pager
        current={page}
        total={20}
        onChange={value => setPage(value)}
      />
    </div>
  )
}