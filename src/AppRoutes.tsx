import {Route, Routes} from "react-router-dom";
import Memo from "./pages/Memo";


export default function AppRoutes() {
    return <Route path="memo" element={<Memo />}/>
}