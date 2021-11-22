import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import reportWebVitals from './reportWebVitals'
import {store} from './store/store'

import 'normalize.css'
import 'antd/dist/antd.css'
import './assets/scss/index.scss'
// импорт стилей выше компонента, потому что по непонятным причинам
// сбивается каскадность подключения стилей
import {App} from './App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
