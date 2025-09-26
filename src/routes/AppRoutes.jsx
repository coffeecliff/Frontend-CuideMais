// Importação de rotas do React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 
// Importa contexto de autenticação
import { useAuth } from '../context/AuthContext';
 
// Componentes reutilizáveis
import { Sidebar } from '../components/Sidebar';
import { PublicNavbar } from '../components/PublicNavbar';
import { Footer } from "../components/Footer";
import { LoadingSpinner } from '../components/LoadingSpinner';
 
// Páginas públicas
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';

 
// Páginas protegidas (apenas para usuários autenticados)
import { DashboardPsicologo } from '../pages/DashboardPsicologo';
import { DashboardPaciente } from '../pages/DashboardPaciente';
 import { Agendamento } from '../pages/Agendamentos';
import { ChatIA } from '../pages/ChatIA';
import { Relatorios } from '../pages/Relatorios';
import { Solicitacoes } from '../pages/Solicitacoes';
import { Pacientes } from '../pages/Pacientes';
import { PacienteDetalhes } from '../pages/PacientesDetalhes';
 
/* ==============================
   Componente de rota protegida
   ============================== */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
 
  if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
  if (!user) return <Navigate to="/login" replace />; // Redireciona não autenticados para login
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg2.png')"}}
        >
    <div className="min-h-screen flex">
      <Sidebar /> {/* Sidebar lateral sempre visível */}
      <main className="flex-1 lg:ml-64 p-8">
        {children} {/* Conteúdo da página protegida */}
      </main>
    </div>
    </div>
  );
};
 
/* ==============================
   Componente de rota pública
   ============================== */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
 
  if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
  if (user) return <Navigate to="/dashboard" replace />; // Redireciona usuário logado para dashboard
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg.png')"}}
        >
    <div className="min-h-screen">
      <PublicNavbar /> {/* Navbar pública */}
      <main className="mx-auto">
        {children} {/* Conteúdo da página pública */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
};

const LogRegRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
 
  if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
  if (user) return <Navigate to="/dashboard" replace />; // Redireciona usuário logado para dashboard
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg2.png')"}}
        >
    <div className="min-h-screen">
      <PublicNavbar /> {/* Navbar pública */}
      <main className="mx-auto">
        {children} {/* Conteúdo da página pública */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
};

/* ==============================
   Componente Dashboard condicional
   ============================== */
const Dashboard = () => {
  const { user } = useAuth();
  // Retorna dashboard específico baseado no tipo do usuário
  return user?.type === 'psicologo' ? <DashboardPsicologo /> : <DashboardPaciente />;
};
 
/* ==============================
   Configuração de rotas da aplicação
   ============================== */
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
 
        {/* ==============================
           Rotas Públicas
           ============================== */}
        <Route path="/" element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        } />
       
        <Route path="/about" element={
          <PublicRoute>
            <About />
          </PublicRoute>
        } />
       
        <Route path="/login" element={
          <LogRegRoute>
            <Login />
          </LogRegRoute>
        } />
       
        <Route path="/register" element={
          <LogRegRoute>
            <Register />
          </LogRegRoute>
        } />
       
        {/* ==============================
           Rotas Protegidas
           ============================== */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
         <Route path="/agendamento" element={
          <ProtectedRoute>
            <Agendamento /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
         <Route path="/chat-ia" element={
          <ProtectedRoute>
            <ChatIA /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
         <Route path="/relatorios" element={
          <ProtectedRoute>
            <Relatorios /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
        <Route path="/solicitacoes" element={
          <ProtectedRoute>
            <Solicitacoes /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
        <Route path="/pacientes" element={
          <ProtectedRoute>
            <Pacientes /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
        <Route path="/pacientes/:id" element={
          <ProtectedRoute>
            <PacienteDetalhes /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};