import Home from './Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from './StoreContext.js';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import Create from './Create/Create.js';


const App = () => {
    return (
        <StoreProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </Router>
        
        
        </StoreProvider>

    );
}

export default App;