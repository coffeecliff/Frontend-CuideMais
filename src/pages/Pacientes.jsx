import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Users } from 'lucide-react';
 
export const Pacientes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await mockApi.getPatients(user.id);
      setPatients(data);
    } catch (error) {
      console.error('Erro ao carregar pacientes:', error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    loadPatients();
  }, [user.id]);
 
  useEffect(() => {
    const handleFocus = () => loadPatients();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);
 
  const calcularIdade = (birthDate) => {
    if (!birthDate) return null;
    const hoje = new Date();
    const nascimento = new Date(birthDate);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };
 
  if (loading) return <LoadingSpinner size="lg" />;
 
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Users className="w-8 h-8 text-light" />
        <h1 className="text-3xl font-bold text-dark">Meus Pacientes</h1>
      </div>
 
      <div className="grid gap-6">
        {patients.length === 0 ? (
          <Card className="text-center py-12">
            <Users className="w-16 h-16 text-dark/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark mb-2">Nenhum paciente encontrado</h3>
            <p className="text-dark/70">
              Seus pacientes aparecerão aqui conforme forem cadastrados.
            </p>
          </Card>
        ) : (
          patients.map((patient) => (
            <Card
              key={patient.id}
              className="cursor-pointer hover:shadow-lg transition-shadow p-5 rounded-2xl border border-gray-100"
              onClick={() => navigate(`/pacientes/${patient.id}`)}
            >
              {/* Linha superior - Ícone e nome (sem a linha divisória) */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-light to-accent rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark">{patient.name}</h3>
                  <p className="text-xs text-gray-500">Paciente</p>
                </div>
              </div>
 
              {/* Espaçamento entre cabeçalho e infos */}
              <div className="mt-4" />
 
              {/* Informações principais em 3 colunas fixas */}
              <div className="grid grid-cols-3 gap-6 text-sm text-gray-800">
                {/* Coluna 1 - Idade e Email */}
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Idade</p>
                    <p>
                      {calcularIdade(patient.birthDate)
                        ? `${calcularIdade(patient.birthDate)} anos`
                        : 'Não informada'}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>{patient.email || 'Não informado'}</p>
                  </div>
                </div>
 
                {/* Coluna 2 - Data de nascimento e Total de sessões */}
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Data de Nascimento</p>
                    <p>
                      {patient.birthDate
                        ? new Date(patient.birthDate).toLocaleDateString('pt-BR')
                        : 'Não informada'}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total de Sessões</p>
                    <p>{patient.totalSessions || 0}</p>
                  </div>
                </div>
 
                {/* Coluna 3 - Telefone e Status */}
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p>{patient.phone || 'Não informado'}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Status do Tratamento</p>
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          patient.status === "Em tratamento"
                            ? "bg-[#ffbd59] text-dark"
                            : "bg-[#58c470] text-dark"
                        }`}
                      >
                      {patient.status}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};