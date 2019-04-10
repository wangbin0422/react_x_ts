import React from 'react'
import ReactDOM from 'react-dom';

// import Button from './Button';
import Icon from './Icon/Icon'

const func:React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e, e.currentTarget.style);
};

ReactDOM.render(<div>
  <Icon name="qq"/>
  <Icon name="wechat"
        className="wx"
        onClick={func}
        onMouseEnter={() => {console.log('enter')}}
        onMouseLeave={() => {console.log('leave')}}/>
</div>, document.querySelector('#root'));

