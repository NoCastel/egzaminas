import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front/Front";
import Back from "./Components/Back/Back";
import LoginPage from "./Components/Authorization/LoginPage";
import LogoutPage from "./Components/Authorization/LogoutPage";
import Authorization from "./Components/Authorization/Authorization";
import NotFound from "./Components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Front show="all" />} />
                <Route index element={<Front show="S" />} />
                <Route index element={<Front show="L" />} />
                <Route index element={<Front show="M" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/admin" element={<Authorization><Back /></Authorization>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;