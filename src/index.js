import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

const App = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

//Takes the react component and shows it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
