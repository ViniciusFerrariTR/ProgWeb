import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

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
                <Button onClick={login} label="Login" className="w-full mt-3 p-button-secondary" />
                <Button onClick={recsenha} label="Recuperar Senha" className="w-full mt-3 p-button-outlined p-button-secondary" />
                <Button onClick={cadastro} label="Cadastre-se" className="w-full mt-3 p-button-outlined p-button-secondary" />
            </Card>
        </div>
    );
}

export default Login;
