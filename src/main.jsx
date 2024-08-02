import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode é uma ferramenta para destacar problemas potenciais em um aplicativo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
