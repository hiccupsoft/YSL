import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routes as Router } from "./Routes";
import './App.css';
import _ from 'lodash';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
      <Topbar />
      <Routes>
        {_.map(Router.container, (each, index) => {
          const Component: any = each.Component;
          return <Route path={each.path} element={Component ? <Component /> : null} key={index} />;
        })}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
