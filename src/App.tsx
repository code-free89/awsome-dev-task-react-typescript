import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CardRoute from './routes/card';
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/card/*" element={<CardRoute />} />
          <Route path="*" element={<Navigate replace to={`/card/${process.env.REACT_APP_CARD_ID}`} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
