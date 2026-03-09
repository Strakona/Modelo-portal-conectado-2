/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import FeedGlobal from './pages/FeedGlobal';
import DashboardEscola from './pages/DashboardEscola';
import GestaoOficinas from './pages/GestaoOficinas';
import DashboardDev from './pages/DashboardDev';
import AprovacoesCoordenador from './pages/AprovacoesCoordenador';
import Layout from './components/Layout';
import PublicLayout from './components/PublicLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
        <Route path="/publico" element={<PublicLayout />}>
          <Route index element={<FeedGlobal isPublic={true} role="publico" />} />
        </Route>

        <Route path="/professor" element={<Layout role="professor" />}>
          <Route index element={<FeedGlobal role="professor" />} />
          <Route path="escola" element={<DashboardEscola />} />
        </Route>

        <Route path="/coordenador" element={<Layout role="coordenador" />}>
          <Route index element={<GestaoOficinas />} />
          <Route path="escola" element={<DashboardEscola />} />
          <Route path="feed" element={<FeedGlobal role="coordenador" />} />
          <Route path="aprovacoes" element={<AprovacoesCoordenador />} />
        </Route>

        <Route path="/desenvolvedor" element={<Layout role="desenvolvedor" />}>
          <Route index element={<DashboardDev />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
