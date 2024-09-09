import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Idioma from '../../components/trocaIdioma/Idioma';
import './Login.css'; // Adiciona o arquivo CSS personalizado

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value });
    }

    const recsenha = () => {
        navigate("/recsenha");
    }

    const cadastro = () => {
        navigate("/cadastro");
    }

    const login = () => {
        // chamada para o back-end para verificar as credenciais
        if (user.email === "teste@gmail.com" && user.password === "123") {
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            navigate("/");
        } else {
            alert("usuário ou senha incorretos");
        }
    }

    return (
        <div className="login-container">
            {/* Componente de troca de idioma posicionado no topo */}
            <div className="idioma-container">
                <Idioma />
            </div>

            <div className="flex justify-content-center align-items-center min-h-screen login-background">
                <Card title="Login" className="p-4 login-card" style={{ width: '400px' }}>
                    <div className="grid">
                        <div className="field col-12">
                            <label htmlFor="email">Email</label><br />
                            <InputText onChange={handleChange} name="email" id="email" className="w-full" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="password">Senha</label><br />
                            <Password onChange={handleChange} name="password" id="password" feedback={true} toggleMask className="w-full" inputClassName="w-full" />
                        </div>
                    </div>
                    <Button onClick={login} label={t('button.login')} className="w-full mt-3 p-button-secondary" />
                    <Button onClick={recsenha} label={t('recover-password')} className="w-full mt-3 p-button-outlined p-button-primary"/>
                    <Button onClick={cadastro} label={t('register')} className="w-full mt-3 p-button-outlined p-button-primary" />
                </Card>
            </div>
        </div>
    );
}

export default Login;
