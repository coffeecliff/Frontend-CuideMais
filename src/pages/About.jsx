// Importações necessárias
import React from 'react';
import { motion } from 'framer-motion'; // Para animações suaves
import { Link } from 'react-router-dom'; // Usado para navegação entre páginas sem recarregar o site
import { Button } from '../components/Button'; // Importa um botão reutilizável
import { Heart, Target, Award, Users, Brain, Shield, Zap, Calendar, Activity, FileText } from 'lucide-react'; // Biblioteca de ícones SVG

// Componente funcional "About"
export const About = () => {
  // Array que define os valores da empresa/plataforma
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-medium" />,
      description: 'Proteção rigorosa com dados sensíveis de pacientes'
    },
    {
      icon: <Users className="w-6 h-6 text-light" />,
      description: 'Interface acolhedora, responsiva e compatível com tecnologias assistivas'
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      description: 'Machine Learning para identificar padrões emocionais e apoiar decisões clínicas'
    },
    {
      icon: <Heart className="w-6 h-6 text-light" />, // Ícone estilizado com cor e tamanho
      description: 'Focamos em projetos voluntários que promovem saúde mental para comunidades vulneráveis'
    }
  ];

  // Array de funcionalidades principais
  const features = [
    {
      icon: <Calendar className="w-5 h-5 text-white" />,
      title: 'Agendamento Dinâmico',
      description: 'Sistema automatizado com visualização de horários disponíveis e lembretes por e-mail'
    },
    {
      icon: <Activity className="w-5 h-5 text-white" />,
      title: 'Análise Preditiva',
      description: 'Algoritmos de clustering para agrupar perfis de pacientes e identificar riscos emocionais'
    },
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      title: 'Histórico Completo',
      description: 'Registro estruturado de sessões com temas, recomendações e evolução do tratamento'
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: 'Interface Intuitiva',
      description: 'Design pensado para conforto emocional com navegação simples e acolhedora'
    }
  ];

  // Lista de problemas que a plataforma busca resolver
  const problems = [
    'Falta de controle e organização nos agendamentos', 
    'Dificuldade de busca psicólogos dispostos a realizar acompanhamentos voluntários',
    'Impossibilidade de mapear perfis de risco com dados',
    'Ausência de ferramentas de análise e acompanhamento'
  ];

  // Lista de soluções propostas
  const solutions = [
    'Sistema digital centralizado com agendamento automatizado',
    'Registro estruturado e seguro de todas as sessões',
    'Painel administrativo com visão completa da agenda',
    'Machine Learning para agrupamento de perfis comportamentais',
    'Interface responsiva, acessível e emocionalmente confortável'
  ];

  return (
    <div className="py-12 space-y-16"> {/* Container principal com espaçamento entre seções */}

      {/* Seção Hero (introdução com logo e descrição) */}
      <section className="py-12 mb-40">
      <motion.div
            initial={{ opacity: 0, y: 20 }} // Início invisível + deslocado
            animate={{ opacity: 1, y: 0 }}   // Anima até visível + posição normal
            transition={{ duration: 0.8 }}
          >
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Texto (esquerda) */}
      <div className="text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 text-center">
          Cuidar da sua mente <br /> é cuidar da sua vida
        </h1>
        <p className="text-xl md:text-2xl text-dark/70 leading-relaxed text-center">
        Nossa plataforma oferece suporte e orientação para 
        promover seu bem-estar mental, com profissionais
        </p>
        <div className='flex items-center justify-center mt-14'>
        <a href="#valores" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('valores').scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Button variant="primary" size="xlg" className="w-full sm:w-auto cursor-pointer ">
                    Nossos valores
                  </Button>
          </a>
      </div>
      </div>

      {/* Logo (direita) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="glass-card rounded-3xl shadow-xl p-14">
          <img 
            src="/logo-big.svg" 
            alt="Lunysse" 
            className="w-640 h-64 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
  </motion.div>
</section>





      {/* Seção Valores */}
      <section className="py-12 mb-30" id="valores" >
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário vê no scroll
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark/70 text-center mb-8">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 border shadow-lg text-center">
                {/* Ícone centralizado com fundo */}
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(value.icon, { size: 60, className: "text-accent" })}
                </div>
                <p className="text-dark/70 text-md leading-relaxed font-semibold">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </section>
    </div>
  );
};
