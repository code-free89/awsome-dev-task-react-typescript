import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CardPage from '../../pages/card';

const CardRoute: React.FC = () => {
  return (
    <Routes>
      <Route path=":cardId" element={<CardPage />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default CardRoute
