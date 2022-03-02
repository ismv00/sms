import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Form from './pages/Form';

export default function RoutesFile() {
    return (
        <BrowserRouter>
           <Routes>
                <Route path='/' element={<Form />}/>
            </Routes> 
                
           
        </BrowserRouter>
    )
}