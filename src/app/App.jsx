import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Register from "../pages/users/register/Register";
import Login from "../pages/users/login/Login";
import List from "../pages/list/List"
import Single from "../pages/single/Single"
import New from "../pages/newPage/New"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
            <Route path="user">
              <Route index element = {<List/> } />
              <Route path=":userId" element = {< Single/>}/>
              <Route path="new" element = {< New/>}/>
              <Route />

            </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
