import React from "react";
import Layout from "./components/layouts/Layout";
import { Route, Routes } from "react-router-dom";
import LfinsOvrlPstaListPage from './pages/'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/getLfinsOvrlPstaList" element={<LfinsOvrlPstaListPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
