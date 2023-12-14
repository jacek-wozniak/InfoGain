import './App.scss';
import './Table.scss';
import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Transactions from "./Pages/Transactions/Transactions";
import Users from "./Pages/Users/Users";
import Navigation from "./Navigation/Navigation";

const App = () => {
    return (
        <BrowserRouter>
            <main className="main container">
                <Navigation />

                <Routes>
                    <Route path="/*" element={<Transactions />} />
                    <Route path="/users/*" element={<Users />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App;