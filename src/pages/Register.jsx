import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import toast from 'react-hot-toast';
 
// Funções de máscara
const phoneMask = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
    .slice(0, 15);
};
 
const crpMask = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .slice(0, 11);
};
 
// Validação de senha
const validatePassword = (password) => {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
 
  return {
    isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,
    errors: {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSymbol
    }
  };
};
 
export const Register = () => {
  const [userType, setUserType] = useState('paciente');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    crp: '',
    specialty: '',
    phone: '',
    birthDate: ''
  });
  const [passwordValidation, setPasswordValidation] = useState({
    isValid: false,
    errors: {
      minLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSymbol: false
    }
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
 
  const handleInputChange = useCallback((field) => (e) => {
    let value = e.target.value;
   
    // Aplicar máscaras
    if (field === 'phone') {
      value = phoneMask(value);
    } else if (field === 'crm') {
      value = crpMask(value);
    }
   
    setFormData(prev => ({ ...prev, [field]: value }));
   
    // Validar senha em tempo real
    if (field === 'password') {
      setPasswordValidation(validatePassword(value));
    }
  }, []);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Validações
    if (!passwordValidation.isValid) {
      toast.error('A senha não atende aos critérios de segurança');
      return;
    }
 
    if (formData.password !== formData.confirmPassword) {
      toast.error('Senhas não coincidem');
      return;
    }
 
    // Validar telefone
    const phoneNumbers = formData.phone.replace(/\D/g, '');
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      toast.error('Telefone deve ter 10 ou 11 dígitos');
      return;
    }
 
    // Validar CRP para psicólogos
    if (userType === 'psicologo') {
      const crpNumbers = formData.crp.replace(/\D/g, '');
      if (crpNumbers.length < 6) {
        toast.error('CRP deve ter pelo menos 6 dígitos');
        return;
      }
    }
 
    setLoading(true);
 
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: userType === 'psicologo' ? 'psicologo' : 'paciente',
        phone: formData.phone.replace(/\D/g, '') || null,
        ...(userType === 'psicologo' && {
          specialty: formData.specialty,
          crp: formData.crm.replace(/\D/g, '')
        }),
        ...(userType === 'paciente' && {
          birth_date: formData.birthDate
        })
      };
     
      console.log('Payload enviado:', payload);
      await register(payload);
      toast.success('Conta criada com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg2.png')"}}
        >
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
      <Card className="bg-white w-full max-w-md">
        
 
        {/* Seletor de usuário */}
        <div className="flex mb-6 justify-center gap-10 mt-5">
          <Button
            type="button"
            variant={userType === "paciente" ? "primary" : "secondary"}
            size="md"
            onClick={() => setUserType("paciente")}
            className="flex cursor-pointer"
          >
            Paciente
          </Button>
 
          <Button
            type="button"
            variant={userType === "psicologo" ? "primary" : "secondary"}
            size="md"
            onClick={() => setUserType("psicologo")}
            className="flex cursor-pointer ml-20"
          >
            Psicólogo
          </Button>
        </div>
        <div className="text-center mb-8">
          <p className="text-dark/70">Cadastre-se no Cuide+</p>
        </div>
 
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome completo"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Seu nome completo"
            required
            className="text-dark"
          />
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="seu@email.com"
            required
            className="text-dark"
          />
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            placeholder="sua senha"
            required
            className="text-dark"
          />
          <Input
            label="Confirme sua senha"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            placeholder="Confirme sua senha"
            required
            className="text-dark"
          />
          <Input
            label="Telefone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            placeholder="Digite seu telefone"
            required
            className="text-dark"
          />
 
          {userType === "paciente" && (
            <Input
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange("birthDate")}
              placeholder="Digite a sua data de nascimento"
              required
              className="text-dark"
            />
          )}
 
          {userType === "psicologo" && (
            <>
              <Input
                label="CRP"
                value={formData.CRP}
                onChange={handleInputChange("CRP")}
                placeholder="Ex: 12/34567"
                required
                className="text-dark"
              />
              <Input
                label="Especialidade"
                value={formData.specialty}
                onChange={handleInputChange("specialty")}
                placeholder="Ex: Psicologia Clínica, Terapia Cognitiva"
                required
                className="text-dark"
              />
            </>
          )}
 
          <Button type="submit" loading={loading} className="w-full">
            Criar Conta
          </Button>
        </form>
 
        <div className="mt-6 text-center space-y-2">
          <p className="text-dark/70">Já possui conta?</p>
          <Link to="/login" className="text-light font-bold hover:text-dark">
            Entrar
          </Link>
        </div>
      </Card>
    </div>
    </div>
  );
};