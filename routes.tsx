import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './src/App';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
