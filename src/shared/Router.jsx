// 어디로 갈지 방향을 알려줌

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "../pages/Detail"
import Home from "../pages/Home"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router