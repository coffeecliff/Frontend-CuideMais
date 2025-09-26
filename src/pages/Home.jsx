// Importações necessárias
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { motion } from 'framer-motion'; // Para animações suaves
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react'; // Ícones vetoriais
import { Button } from '../components/Button'; // Botão customizado do projeto

// Página inicial (Home)
export const Home = () => {
  // Lista de recursos/funcionalidades que serão exibidos na seção de "features"
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Dinâmica',
      description: 'Visualização de horários disponíveis com marcação automática e lembretes por e-mail'
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Autenticação segura via JWT e proteção total dos dados sensíveis dos pacientes'
    },
    {
      icon: Activity,
      title: 'Análise Inteligente',
      description: 'Machine Learning para identificar padrões emocionais e agrupar perfis de risco'
    },
    {
      icon: Users,
      title: 'Impacto Social',
      description: 'Voltado para projetos voluntários, universidades e ONGs que oferecem apoio psicológico'
    },
    {
      icon: FileText,
      title: 'Histórico Estruturado',
      description: 'Registro organizado de sessões com temas, recomendações e evolução do paciente'
    },
    {
      icon: Zap,
      title: 'Interface Acolhedora',
      description: 'Design responsivo e acessível, pensado para conforto emocional dos usuários'
    }
  ];

  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
    style={{backgroundImage: "url('/bg.png')"}}
    >
      {/* ================= HERO SECTION ================= */}
      <section className="flex items-center justify-center text-center py-20">
        <div>
          {/* Animação de entrada do framer-motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Início invisível + deslocado
            animate={{ opacity: 1, y: 0 }}   // Anima até visível + posição normal
            transition={{ duration: 0.8 }}
          >
            {/* Logo centralizada */}
            <div className="mt-10 w-102 h-42 rounded-3xl flex items-center justify-center mx-auto mb-8  overflow-hidden">
              <img src="/logo-big.svg" alt="Cuide Mais" className="w-full h-full object-cover" />
            </div>
            
            {/* Descrição principal */}
            <p className="text-xl text-dark/70 font-semibold mb-8 max-w-3xl mx-auto leading-relaxed">
            Plataforma digital voltada para facilitar o agendamento e a gestão de atendimentos psicológicos voluntários. 
            Criada especialmente para universidades,
             ONGs e iniciativas sociais dedicadas à promoção da saúde mental.
            </p>
            
            {/* Botões de ação (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botão para criar conta */}
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                  Começar Agora
                </Button>
              </Link>

              <a href="/about">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Sobre nós
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      {/* <section id="features" className="min-h-screen flex items-center py-20">
        <div className="w-full">
           Título da seção 
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário vê no scroll
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tecnologia a Serviço do Cuidado
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Ferramentas inteligentes para organizar, acompanhar e potencializar atendimentos voluntários
              </p>
            </motion.div>
          </div>

           Grid com os recursos (features) 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // Cada card aparece ao entrar na tela
                transition={{ delay: index * 0.1, duration: 0.6 }} // Delay incremental
                viewport={{ once: true }}
                className="text-center"
              >
                 Ícone dentro de um card arredondado 
                <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-light" />
                </div>
                 Título e descrição do recurso 
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-dark leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário vê no scroll
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
      <div>
      <section className="w-full min-h-[400px] flex items-center justify-center p-30 pb-60">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">
        
        {/* Card com imagem e texto */}
        <div className="glass-card rounded-3xl p-7 flex flex-col items-center shadow-lg w-full md:w-1/3">
          <img
            src="/people1.webp" // substitua pela sua imagem
            alt="Profissional de saúde"
            className="w-52 h-52 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="text-5xl font-bold mb-10 text-light text-center leading-snug">
            + Cuidado, <span className="text-light text-8xl">”</span>
            <br />+ Saúde
          </p>
        </div>

        {/* Texto de apoio */}
        <div className="glass-card rounded-3xl p-14 shadow-lg w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light leading-snug text-center md:text-left">
            Fazendo atendimentos especializados mais
            <br />
            dinâmicos e acessíveis desde 2008
          </h2>
        </div>

      </div>
    </section>
    </div>
    </motion.div>

      {/* ================= CTA (CALL TO ACTION) SECTION ================= */}
      {/* <section className="min-h-screen flex items-center py-20">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Aparece com scroll
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
              Faça Parte desta Transformação Social
            </h2>
            <p className="text-xl text-dark mb-12 max-w-3xl mx-auto leading-relaxed">
              Uma tecnologia e responsabilidade social. Ajude a democratizar o acesso 
              à saúde mental através de uma plataforma pensada para o bem-estar coletivo.
            </p>

            <Link to="/register">
              <Button size="lg" className="text-xl px-12 py-5 rounded-2xl font-semibold cursor-pointer">
                Criar Conta Gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};
