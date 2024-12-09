import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const RecSenha = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }

    return (
        <div className="flex justify-content-center align-items-center min-h-screen rec-senha-background">
            <Card title="Recuperar Senha" className="p-4 rec-senha-card" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="email">Email</label><br />
                        <InputText name="email" id="email" className="w-full" />
                    </div>
                </div>
                <Button label="Recuperar Senha" className="w-full mt-3 p-button-secondary" />
                <Button onClick={login} label="Cancelar" className="w-full mt-3 p-button-outlined p-button-secondary" />
            </Card>
        </div>
    );
}

export default RecSenha;
