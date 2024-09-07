import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components";
import {
  Tasks,
  Accounts,
  ApplicationDetails,
  Applications,
  Chat,
  Requests,
  Settings,
  ErrorPage,
} from "./containers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/tasks/" element={<Tasks />} />
        <Route path="/accounts/" element={<Accounts />} />
        <Route path="/applications/" element={<Applications />} />
        <Route path="/applications/:uuid/" element={<ApplicationDetails />} />
        <Route path="/chat/" element={<Chat />} />
        <Route path="/requests/" element={<Requests />} />
        <Route path="/settings/" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
