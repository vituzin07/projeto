import './App.css'
import Layout from "./Layout/Layout";
import Sobre from "./Sobre/Sobre";
import NotFound from "./Notfound/NotFound";
import { RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom'
import Catalogo from './Catalogo/Catalogo';


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Catalogo/>}/>
                    <Route path ='Sobre' element={<Sobre/>}/>
                    <Route path ='*' element ={<NotFound/>}/> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App