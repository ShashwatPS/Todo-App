import "./App.css";
import Appbar from "./AppBar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodos from "./AddTodos.jsx";
import Todos from "./Todos.jsx";

function App() {
    return (
        <>
            <Router>
                <Appbar></Appbar>
                <Routes>
                    <Route path="/addtodo" element={<AddTodos />} />
                    <Route path="/showtodo" element={<Todos />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
