

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import Nopage from './components/Nopage';

const App = () => {
    return (<>


        <Header />
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<Nopage />} />


            </Routes>
        </BrowserRouter>


    </>)
}
export default App;