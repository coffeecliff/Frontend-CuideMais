// Componente responsável por emitir notificações utilizando a biblioteca react-hot-tost
import { AuthProvider } from "./context/AuthContext";
// Importação do arquivo authProvider responsável pela autenticação dos usuários e controle de rotas privadas

// Importação do appRoutes componente de gerenciamento de rotas
import { AppRoutes } from "./routes/AppRoutes";

// construção código principal
function App(){
  return(
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App;