import * as React from 'react';

interface IProps {
  code: string
}

const Demo: React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>
  );
};

export default Demo;