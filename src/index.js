import React from 'react';
import ReactDOM from 'react-dom/client';
//Подключение файла глобальных стилей
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const GREEN = "green"

//Пример передачи props в компонент с использованием синтаксиса JSX
/*ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App color={color}/>
    </React.StrictMode>
)*/

//Пример передачи props в компонент без использованиея синтаксиса JSX
ReactDOM.createRoot(document.getElementById('root'))
    .render(React.createElement(App, {color: GREEN},  /*[...children]*/))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
