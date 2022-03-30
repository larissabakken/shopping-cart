import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Switch>
        </BrowserRouter>
    );
}
