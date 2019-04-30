import * as React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import {useState} from 'react';
import Button from '../lib/Button/Button';

interface IProps {
  code: string
}

const Demo: React.FunctionComponent<IProps> = (props) => {
  const [snippetVisible, setSnippetVisible] = useState(false);
  const snippet = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div>
        {props.children}
      </div>
      <div>
        <Button
          level="default"
          onClick={() => {setSnippetVisible(!snippetVisible);}}>
          view code
        </Button>
        {snippetVisible && snippet}
      </div>
    </div>
  );
};

export default Demo;