import React from 'react'
import ReactDOM from 'react-dom'

let clock = function(){
  return ;
}

setInterval(function(){
  ReactDOM.render(
  <h2>Time now: {new Date().toLocaleTimeString()}</h2>,
    document.getElementById('root')
  );
},1000);
