import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todo from "./Components/Todo"
import Edit from "./Components/Edit"

const App = () => {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path="/" Component={Todo} />
                                <Route path="/edit/:editIndex" Component={Edit} />
                        </Routes>
                </BrowserRouter>
        )
}

export default App