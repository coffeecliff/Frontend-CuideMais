//! importação das bibliotecas e componentes
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import toast from "react-hot-toast";
 
export const Register = () => {
  const [userType, setUserType] = useState("paciente");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    CRP: "",
    specialty: "",
    phone: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
 
  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Senhas não coincidem");
      return;
    }
    setLoading(true);
    try {
      const { user, token } = await mockApi.register({
        ...formData,
        type: userType,
      });
      login(user, token);
      toast.success("Conta criada com sucesso!");
      navigate("/dashboard");
    } catch (error) {
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