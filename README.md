# 🧠 Cuide+ - Sistema de Agendamento Psicológico

Aplicação web moderna voltada para o gerenciamento de consultas psicológicas, construída com React 19 + Vite. Destina-se especialmente a atendimentos voluntários em universidades, organizações sociais e projetos comunitários.

![Cuide+ Logo](public/logo-big.svg)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646cff.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8.svg)](https://tailwindcss.com/)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Mock](#api-mock)
- [Chat com IA](#chat-com-ia)
- [Componentes](#componentes)
- [Rotas](#rotas)
- [Design System](#design-system)

## 🎯 Sobre o Projeto

O **Cuide+** é uma solução web projetada para otimizar o agendamento e gerenciamento de sessões psicológicas, especialmente em contextos de atendimento voluntário. A plataforma oferece interfaces distintas para psicólogos e pacientes, priorizando a usabilidade e a organização eficiente das informações.

### Objetivos

- Tornar o agendamento de sessões mais prático e acessível
- Otimizar a administração de pacientes por parte dos psicólogos
- Oferecer relatórios e dados analíticos para acompanhamento
- Registrar o histórico completo de atendimentos
- Garantir uma interface atual, intuitiva e adaptável a diferentes dispositivos

## ✨ Funcionalidades

### 👨‍⚕️ Para Psicólogos

- **Dashboard Personalizado**: Visão geral com KPIs e próximos agendamentos
- **Gestão de Pacientes**: Lista completa com informações detalhadas
- **Detalhes do Paciente**: Histórico de sessões, anotações e relatórios
- **Gestão de Sessões**: Edição de status, anotações e relatórios clínicos
- **Chat com IA**: Assistente especializada em psicologia clínica
- **Relatórios e Analytics**: Gráficos de frequência, status e alertas de risco
- **Agenda Individual**: Controle de disponibilidade por psicólogo

### 👤 Para Pacientes

- **Dashboard Simples**: Próximos agendamentos e informações relevantes
- **Agendamento Flexível**: Escolha de psicólogo, data e horário
- **Seleção de Especialista**: Lista de psicólogos com especialidades
- **Verificação de Disponibilidade**: Horários livres em tempo real

### 🔐 Sistema de Autenticação

- Login seguro com validação de dados
- Identificação automática do tipo de usuário (psicólogo ou paciente)
- Duas interfaces de login disponíveis: tradicional e moderna com glassmorphism
- Cadastro com validação completa
- Contexto global de autenticação mantido na aplicação
- Proteção de rotas conforme o tipo de usuário

## 🛠 Tecnologias

### Frontend
- **React 19.1.1** - Biblioteca principal
- **Vite 7.1.0** - Build tool e dev server
- **React Router DOM 7.8.0** - Roteamento
- **Tailwind CSS 4.1.11** - Framework CSS moderno
- **Framer Motion 12.23.12** - Animações fluidas
- **Lucide React 0.539.0** - Ícones modernos
- **Recharts 3.1.2** - Gráficos e visualizações
- **Chart.js 4.5.0** - Gráficos alternativos
- **React Hot Toast 2.5.2** - Notificações
- **@huggingface/inference 4.6.1** - Integração com IA

### Persistência
- **LocalStorage** - Armazenamento local dos dados
- **Mock API** - Simulação de backend

### Design
- **Glassmorphism** - Efeitos visuais modernos
- **Design System** - Paleta de cores consistente
- **Responsivo** - Mobile-first approach

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/coffeecliff/Frontend-CuideMais
cd front-cuidemais
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env e adicione seu token do Hugging Face
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

## 💻 Uso

### Contas de Teste

#### Psicólogos
- **Dr. João Silva**: `psicologo@test.com` / `123456` - Psicologia Clínica
- **Dra. Ana Costa**: `ana@test.com` / `123456` - Terapia Cognitivo-Comportamental
- **Dr. Carlos Mendes**: `carlos@test.com` / `123456` - Psicologia Infantil
- **Dra. Lucia Ferreira**: `lucia@test.com` / `123456` - Terapia Familiar

#### Paciente
- **Maria Santos**: `paciente@test.com` / `123456`

### Fluxo de Uso

1. **Login**: Acesse com uma das contas de teste
2. **Dashboard**: Visualize informações relevantes ao seu perfil
3. **Navegação**: Use a sidebar para acessar diferentes seções
4. **Agendamento** (Pacientes): Escolha psicólogo, data e horário
5. **Gestão** (Psicólogos): Gerencie pacientes e sessões

## 📁 Estrutura do Projeto

```
src/
├── components/                 # Componentes reutilizáveis
│   ├── Button.jsx              # Botão customizado com variantes
│   ├── Card.jsx                # Container com glassmorphism
|   ├── Footer.jsx              # Container footer
|   ├── FormSelect.jsx          # Container de seleção com opções
│   ├── Input.jsx               # Input com validação e show/hide password
│   ├── KPIcard.jsx             # Métrica relevante de forma resumida.
│   ├── LoadingSpinner.jsx      # Spinner de carregamento
│   ├── MarkdownRenderer.jsx    # Renderizador de markdown para IA
│   ├── PublicNavbar.jsx        # Navbar para páginas públicas
│   ├── Sidebar.jsx             # Sidebar adaptativa para usuários autenticados
│   ├── TextArea.jsx            # Componente de input de texto
│   └── TextBlock.jsx           # Componente de parágrafo e texto
├── context/                    # Contextos React
│   └── AuthContext.jsx         # Contexto de autenticação
├── pages/                      # Páginas da aplicação
│   ├── About.jsx               # Página sobre o projeto
│   ├── Agendamentos.jsx        # Sistema de agendamento (pacientes)
│   ├── ChatIA.jsx              # Chat com IA especializada (psicólogos)
│   ├── DashboardPaciente.jsx   # Dashboard para pacientes
│   ├── DashboardPsicologo.jsx  # Dashboard para psicólogos
│   ├── Home.jsx                # Página inicial pública
│   ├── Login.jsx               # Login padrão
│   ├── NotFound.jsx            # Página 404 personalizada
│   ├── Pacientes.jsx           # Lista de pacientes (psicólogos)
│   ├── PacientesDetalhes.jsx   # Detalhes e histórico do paciente
│   ├── Register.jsx            # Cadastro de usuários
│   ├── Relatorios.jsx          # Relatórios e analytics (psicólogos)
│   ├── SessaoDetalhes.jsx      # Detalhes e gestão de sessões
│   └── Solicitacoes.jsx        # Solicitações de pacientes (psicólogos)
├── routes/                     # Configuração de rotas
│   └── AppRoutes.jsx           # Rotas principais
├── services/                   # Serviços e APIs
│   ├── aiService.js            # Serviço de IA
│   └── mockApi.js              # API mockada
├── App.jsx                     # Componente principal
├── index.css                   # Estilos globais Tailwind
└── main.jsx                    # Entry point
```

## 🔌 API Mock

### Estrutura da API

A API mockada simula um backend real com as seguintes funcionalidades:

#### Autenticação
- `login(email, password)` - Autenticação de usuário
- `register(userData)` - Registro de novo usuário

#### Usuários
- `getPsychologists()` - Lista psicólogos disponíveis

#### Pacientes
- `getPatients(psychologistId)` - Lista pacientes do psicólogo

#### Agendamentos
- `getAppointments(userId, userType)` - Lista agendamentos
- `createAppointment(appointmentData)` - Criar agendamento
- `getAvailableSlots(date, psychologistId)` - Horários disponíveis
- `updateAppointment(id, data)` - Atualizar agendamento
- `cancelAppointment(id)` - Cancelar agendamento

#### Sessões
- `getSessionDetails(sessionId)` - Detalhes da sessão
- `updateSessionStatus(sessionId, status)` - Atualizar status
- `updateSessionNotes(sessionId, notes, report)` - Atualizar anotações

#### Relatórios
- `getReportsData(psychologistId)` - Dados para relatórios

### Persistência

Os dados são armazenados no `localStorage` do navegador:

- `lunysse_users` - Usuários do sistema
- `lunysse_patients` - Pacientes cadastrados
- `lunysse_appointments` - Agendamentos e sessões

## 🤖 Chat com IA

### Funcionalidades

- **Assistente Especializada**: IA treinada em psicologia clínica
- **Respostas Estruturadas**: Formatação markdown para melhor legibilidade
- **Histórico de Conversa**: Contexto mantido durante a sessão
- **Tratamento de Erros**: Mensagens informativas para problemas de conexão
- **Interface Moderna**: Design consistente com o sistema

### Configuração

1. **Token do Hugging Face já configurado**:
   - O projeto já possui um token configurado no arquivo `.env`
   - Para usar seu próprio token, substitua o valor em `VITE_HF_TOKEN`

2. **Modelo Utilizado**:
   - **Provider**: Novita
   - **Modelo**: zai-org/GLM-4.5
   - **Especialização**: Psicologia clínica
   - **Parâmetros**: max_tokens: 1500, temperature: 0.7

3. **Funcionalidades da IA**:
   - Respostas formatadas em markdown
   - Contexto de conversa mantido (últimas 10 mensagens)
   - Orientações baseadas em evidências científicas
   - Tratamento de erros específicos (token inválido, rate limit, conexão)

### Exemplos de Uso

- "Como lidar com pacientes com ansiedade?"
- "Técnicas para terapia infantil"
- "Abordagens para terapia de casal"
- "Sinais de alerta em depressão"
- "Orientações sobre aspectos éticos"

### Componentes

#### `ChatIA.jsx`
- Interface principal do chat
- Gerenciamento de mensagens e estado
- Integração com o serviço de IA

#### `MarkdownRenderer.jsx`
- Renderização de markdown nas respostas
- Formatação de títulos, listas e código
- Estilos consistentes com o design system

#### `aiService.js`
- Integração com Hugging Face Inference API
- Tratamento de erros e timeouts
- Configuração de parâmetros do modelo

## 🎨 Design System

### Paleta de Cores

```css
:root {
  --dark: #3e2e5d;      /* Indigo escuro */
  --medium: #685293;    /* Indigo claro */
  --light: #8582e4;     /* Roxo */
  --accent: #a18ef2;    /* Lilás accent */
  --background: #F2EFE9; /* Cinza claro */
}
```

### Tipografia

- **Primária**: Montserrat (títulos e interface)
- **Secundária**: Montserrat (textos corridos)
- **Monospace**: Montserrat (códigos)

### Componentes Base

#### Button
- Variantes: primary, secondary, danger
- Estados: normal, hover, loading, disabled
- Tamanhos: sm, md, lg

#### Card
- Glass-card effect
- Sombras suaves
- Bordas arredondadas

#### Modal
- Overlay com blur
- Animações de entrada/saída
- Responsivo

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🧩 Componentes

### Componentes de UI

#### `<Button />`
Botão customizado com variantes e estados.

```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Confirmar
</Button>
```

#### `<Card />`
Container com efeito glassmorphism.

```jsx
<Card className="p-6 glass-card shadow-lg">
  <h2>Título do Card</h2>
  <p>Conteúdo...</p>
</Card>
```

#### `<MarkdownRenderer />`
Renderizador de markdown para mensagens da IA.

```jsx
<MarkdownRenderer content={markdownText} />
```

### Componentes de Layout

#### `<Sidebar />`
Navegação lateral para usuários autenticados.

#### `<PublicNavbar />`
Navbar para páginas públicas.

### Componentes de Utilidade

#### `<LoadingSpinner />`
Indicador de carregamento com tamanhos variados.

## 🛣 Rotas

### Rotas Públicas
- `/` - Página inicial
- `/about` - Sobre o projeto
- `/login` - Login padrão
- `/register` - Cadastro

### Rotas Protegidas
- `/dashboard` - Dashboard (redireciona por tipo de usuário)
- `/agendamento` - Agendamento (apenas pacientes)
- `/chat-ia` - Chat com IA (apenas psicólogos)
- `/relatorios` - Relatórios (apenas psicólogos)
- `/solicitacoes` - Solicitações de pacientes (apenas psicólogos)
- `/pacientes` - Lista de pacientes (apenas psicólogos)
- `/pacientes/:id` - Detalhes do paciente
- `/sessao/:sessionId` - Detalhes da sessão


### Proteção de Rotas

```jsx
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8">
        {children}
      </main>
    </div>
  );
};
```

## 📊 Funcionalidades Avançadas

### Sistema de Relatórios

- **KPIs Dinâmicos**: Calculados em tempo real
- **Gráficos Interativos**: Recharts para visualizações
- **Alertas de Risco**: Baseados em padrões de comportamento
- **Dados Históricos**: Análise temporal de sessões

### Chat com IA Especializada

- **Assistente Inteligente**: IA especializada em psicologia clínica
- **Respostas Estruturadas**: Formatação markdown automática
- **Contexto Mantido**: Histórico de conversa preservado
- **Sugestões Inteligentes**: Perguntas pré-definidas para facilitar uso
- **Tratamento de Erros**: Feedback claro sobre problemas de conexão

### Gestão de Agenda

- **Disponibilidade Individual**: Cada psicólogo tem sua agenda
- **Conflito de Horários**: Prevenção automática
- **Horários Flexíveis**: Configuração de slots disponíveis
- **Status de Sessões**: Controle completo do ciclo de vida

### Interface Responsiva

- **Mobile-First**: Design otimizado para dispositivos móveis
- **Sidebar Adaptativa**: Menu hambúrguer em telas pequenas
- **Cards Flexíveis**: Layout que se adapta ao conteúdo
- **Navegação Intuitiva**: UX consistente em todos os dispositivos

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código (ESLint 9.32.0)
npm run lint

# Instalar dependências
npm install
```

### Padrões de Código

- Use ESLint para manter consistência
- Siga os padrões do Prettier
- Componentes em PascalCase
- Funções em camelCase
- Constantes em UPPER_CASE

## 🔄 Versão Atual

**v1.0.0** - Sistema completo com todas as funcionalidades principais implementadas.

---

<div align="center">
  <p>Desenvolvido com amor para facilitar o acesso à saúde mental</p>
  <p><strong>Cuide+ v1.0.0 - Sistema de Agendamento Psicológico</strong></p>
  <p>React 19 • Vite 7 • Tailwind CSS 4 • Hugging Face AI</p>
</div>