import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Confirmation } from './pages/Confirmation';

import Form from './pages/Form';

export default function RoutesFile() {
    return (
        <BrowserRouter>
           <Routes>
                <Route path='/' element={<Form />}/>
                <Route path='/confirmation' element={<Confirmation />} />
            </Routes> 
                
           
        </BrowserRouter>
    )
}