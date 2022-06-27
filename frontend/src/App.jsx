import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front/Front";
import Back from "./Components/Back/Back";
import LoginPage from "./Components/Authorization/LoginPage";
import LogoutPage from "./Components/Authorization/LogoutPage";
import Authorization from "./Components/Authorization/Authorization";
import NotFound from "./Components/NotFound";
import BackUser from "./Components/Back/BackUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Front show="all" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/admin" element={<Authorization><Back /></Authorization>} />
                <Route path="/backUser" element={<Authorization><BackUser /></Authorization>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;