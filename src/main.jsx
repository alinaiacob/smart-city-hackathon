import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import UserAuthContextProvider from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<UserAuthContextProvider value={{status:null,email:null}}>
 <App />
</UserAuthContextProvider>

  </React.StrictMode>
)
