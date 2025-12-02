import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {  Bell } from 'lucide-react';
import toast from 'react-hot-toast';
import { FormTextarea } from '../components/TextArea';
import { FormSelect } from '../components/FormSelect';
import { TextBlock } from '../components/TextBlock';
import { psychologistService, requestService } from '../services/apiService';


export const Agendamento = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedPsychologist, setSelectedPsychologist] = useState('');
  const [psychologists, setPsychologists] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [requestData, setRequestData] = useState({
    description: '', 
    urgency: 'media' 
  });
  useEffect(() => {
    loadPsychologists(); 
  }, []); 

  const loadPsychologists = async () => {
    try {
      const data = await psychologistService.getPsychologists();
      setPsychologists(data);
    } catch {
      toast.error('Erro ao carregar psicólogos');
    }
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPsychologist || !requestData.description) {
      toast.error('Selecione um psicólogo e descreva sua necessidade');
      return;
    }
    setSubmitting(true);
    
    try {
      // ===== ENVIO PARA API =====
      // Monta objeto com todos os dados necessários
      // ESTRUTURA: Combina dados do usuário logado + dados do formulário
      await requestService.createRequest({
        patient_id: user.id,
        patient_name: user.name,           // Do contexto de autenticação
        patient_email: user.email,         // Do contexto de autenticação
        patient_phone: user.phone || '(11) 99999-9999', // Fallback se não tiver telefone
        preferred_psychologist: parseInt(selectedPsychologist), // Converte string para número
        description: requestData.description,  // Do estado do formulário
        urgency: requestData.urgency,          // Do estado do formulário
        preferred_dates: [],
        preferred_times: []
      });
      toast.success('Solicitação enviada! O psicólogo avaliará e entrará em contato se aceitar você como paciente.');
      navigate('/dashboard');
    } catch {
      toast.error('Erro ao enviar solicitação');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        {/* TÍTULO PRINCIPAL */}
        <TextBlock
          as="h1"
          text="Solicitar ser Paciente"
          size="text-3xl"
          weight="font-bold"
          color="text-dark"
          direction="col"
          className="mb-2"
        />

        {/* SUBTÍTULO EXPLICATIVO */}
        <TextBlock
          as="p"
          text="Escolha um psicólogo e descreva sua necessidade de atendimento"
          size="text-base"
          weight="font-base"
          color="text-dark/70"
          direction="col"
        />
      </div>

      {/* ===== CARD PRINCIPAL COM FORMULÁRIO ===== */}
      {/* COMPONENTE REUTILIZÁVEL: Card aplica estilos consistentes */}
      {/* GLASSMORPHISM: Efeito visual moderno com transparência e blur */}
      {/* PORQUE: Agrupa visualmente o formulário e melhora a hierarquia */}
      <Card>
        {/* ===== FORMULÁRIO HTML ===== */}
        {/* EVENT BINDING: onSubmit conecta evento HTML com função JavaScript */}
        {/* LAYOUT: space-y-6 = espaçamento vertical de 1.5rem entre campos */}
        {/* PORQUE: Organização visual clara entre diferentes seções */}
        <form onSubmit={handleRequestSubmit} className="space-y-6">
          
          {/* ===== CAMPO 1: SELETOR DE PSICÓLOGO ===== */}
         <FormSelect
            label="Escolha o Psicólogo"
            icon={Bell}
            value={selectedPsychologist}
            onChange={(e) => setSelectedPsychologist(e.target.value)}
            options={psychologists.map((psych) => ({
                value: psych.id,
                label: `${psych.name} - ${psych.specialty}`,
            }))}
            placeholder="Selecione um psicólogo"
            required
            />

          {/* ===== CAMPO 2: DESCRIÇÃO DA NECESSIDADE ===== */}
         <FormTextarea
            label="Descreva sua necessidade"
            value={requestData.description}
            onChange={(e) =>
                setRequestData({ ...requestData, description: e.target.value})
                
            }
            placeholder="Ex: Gostaria de ser seu paciente. preciso de ajuda com ansiedade..."
            required
            rows={4}
            />
          {/* ===== CAMPO 3: NÍVEL DE URGÊNCIA ===== */}
          <div>
            {/* LABEL SIMPLES */}
            {/* SEM ASTERISCO: Campo opcional, tem valor padrão */}
            <label className="block text-lg font-medium text-dark mb-3">
              Nível de Urgência
            </label>
            
            {/* SELECT COM OPÇÕES PRÉ-DEFINIDAS */}
            {/* VALORES CONTROLADOS: baixa/media/alta para padronização */}
            {/* PADRÃO: 'media' definido no estado inicial */}
            {/* PORQUE: Ajuda psicólogo a priorizar solicitações */}
            <select
              value={requestData.urgency}  // Valor atual (padrão: 'media')
              onChange={(e) => setRequestData({...requestData, urgency: e.target.value})}  // Atualiza só urgency
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
            >
              {/* OPÇÕES COM DESCRIÇÕES CLARAS */}
              {/* PORQUE: Usuário entende exatamente o que cada nível significa */}
              <option value="baixa">Baixa - Posso aguardar</option>
              <option value="media">Média - Prefiro em breve</option>
              <option value="alta">Alta - Preciso urgentemente</option>
            </select>
          </div>

          {/* ===== CARD INFORMATIVO CONDICIONAL ===== */}
          {/* RENDERIZAÇÃO CONDICIONAL: só aparece se psicólogo foi selecionado */}
          {/* OPERADOR &&: se selectedPsychologist for truthy, renderiza o JSX */}
          {/* PORQUE: Feedback contextual - mostra info relevante apenas quando necessário */}
          {selectedPsychologist && (
            <Card className="bg-blue-50"> {/* Card aninhado com fundo azul claro */}
              {/* TÍTULO DA SEÇÃO */}
              <h3 className="font-semibold text-dark mb-2">Informações Importantes</h3>
              
              <div className="space-y-2 text-sm text-dark/70">
                {/* BUSCA DINÂMICA DE DADOS */}
                {/* FIND: procura psicólogo na lista pelo ID */}
                {/* PARSEINT: converte string do select para número */}
                {/* OPTIONAL CHAINING (?.): previne erro se não encontrar */}
                <p><strong>Psicólogo selecionado:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.name}</p>
                <p><strong>Especialidade:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.specialty}</p>
                
                {/* CAIXA EXPLICATIVA */}
                {/* HIERARQUIA VISUAL: Fundo mais escuro para destacar informação importante */}
                {/* PORQUE: Explica o processo para reduzir ansiedade do usuário */}
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Como funciona:</strong> Sua solicitação será enviada ao psicólogo. Se aceita, ele entrará em contato para agendar as sessões nos horários que funcionem para ambos.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* ===== ÁREA DE BOTÕES ===== */}
          {/* LAYOUT FLEXÍVEL: Botões lado a lado com espaçamento igual */}
          {/* gap-4: espaçamento de 1rem entre botões */}
          <div className="flex gap-4">
            
            {/* BOTÃO CANCELAR */}
            {/* type="button": previne submit do formulário */}
            {/* variant="secondary": estilo visual menos destacado */}
            {/* onClick: navegação programática sem submit */}
            {/* flex-1: ocupa metade do espaço disponível */}
            {/* PORQUE: Sempre dar opção de sair sem salvar */}
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/dashboard')}  // Volta para dashboard
              className="flex-1"
            >
              Cancelar
            </Button>
            
            {/* BOTÃO ENVIAR */}
            {/* type="submit": dispara evento onSubmit do form */}
            {/* loading: mostra spinner e desabilita durante envio */}
            {/* disabled: desabilita se campos obrigatórios estão vazios */}
            {/* LÓGICA: !selectedPsychologist OR !description = botão desabilitado */}
            {/* PORQUE: Previne envio de dados incompletos */}
            <Button
              type="submit"
              loading={submitting}  // Estado de carregamento
              className="flex-1"
              disabled={!selectedPsychologist || !requestData.description}  // Validação visual
            >
              Enviar Solicitação
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};