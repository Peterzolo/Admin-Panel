import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Register from "../pages/users/register/Register";
import Login from "../pages/users/login/Login";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/newPage/New";
import { productInputs, userInputs } from "../data/formSource";
import NewProduct from "../pages/newPage/NewProduct";
import { DarkModeContext } from "../context/modeContext";

import "../components/styles/ExtraStyles.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="user">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              <Route />
            </Route>
            <Route path="product">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewProduct />} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
