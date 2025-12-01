import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import toast from "react-hot-toast";

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(formData.email, formData.password);
            toast.success("Login realizado com sucesso!");
            navigate('/dashboard');
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
            <Card className="w-full max-w-md">
                {/*Cabeçalho */}
                <div className="text-center mb-8">
                    <div className="items-center justify-center flex">
                        <img
                            src="/userLogo.svg" // substitua pela sua imagem
                            alt="Profissional de saúde"
                            className="w-30 h-30 rounded-full object-cover mb-4"
                        />
                    </div>
                    <p className="text-dark/70">Entre no Cuide+</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="E-mail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        required
                    />
                    <Input
                        label="Senha"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Sua senha"
                        required
                    />
                    <p className="text-[14px] underline cursor-pointer text-accent hover:text-dark">Esqueci minha senha</p>
                    <Button
                        type="submit"
                        loading={loading}
                        className="w-full cursor-pointer">
                        Entrar
                    </Button>
                </form>
                <div className="mt-6 text-center space-y-2">
                    <p className="text-dark/70">
                        Não possui conta?
                    </p>
                    <Link to="/register" className=" text-light font-bold hover:text-dark">
                        Criar Conta
                    </Link>
                </div>
            </Card>
        </div>
        </div>
    )
}