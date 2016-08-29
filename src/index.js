import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Counter from './components/Counter';
import StateExample from './components/StateExample';

ReactDOM.render((<div>
                  <Counter/>
                </div>
              ), document.getElementById('example1'));

ReactDOM.render((<div>
                  <StateExample/>
                </div>
              ), document.getElementById('example2'));
