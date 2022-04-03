import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Acima from "../pages/acima";
import Abaixo from "../pages/abaixo";
import Main from "../pages/main";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/acima" element={<Acima />} />
                <Route exact path="/abaixo" element={<Abaixo />} />
            </Switch>
        </BrowserRouter>
    );
}
