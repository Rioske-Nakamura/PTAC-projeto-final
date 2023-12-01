import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Detalhe from './detalhe'
import Pagina from './entrada/indio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detalhe/:id" element={< Detalhe/>}></Route>
        <Route path='/pagina/:elemanto' element={< Pagina/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
