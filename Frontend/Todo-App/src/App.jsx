import "./App.css";
import Appbar from "./AppBar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodos from "./AddTodos.jsx";
import Todos from "./Todos.jsx";
import LandingPage from "./LandingPage.jsx";

function App() {
    return (
        <>
            <Router>
                <Appbar></Appbar>
                <Routes>
                    <Route path="/addtodo" element={<AddTodos />} />
                    <Route path="/showtodo" element={<Todos />} />
                    <Route path="/" element={<LandingPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
