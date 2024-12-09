import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const AltSenha = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }

    return (
        <div className="flex justify-content-center align-items-center min-h-screen alt-senha-background">
            <Card title="Alterar Senha" className="p-4 alt-senha-card" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="email">Email</label><br />
                        <InputText name="email" id="email" className="w-full" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="codigo">Código de Confirmação</label><br />
                        <InputText name="codigo" id="codigo" className="w-full" placeholder='XXX-XXX' />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="password">Senha</label><br />
                        <Password name="password" id="password" feedback={true} toggleMask className="w-full" inputClassName="w-full" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="confirm-password">Confirmar Senha</label><br />
                        <Password name="confirm-password" id="confirm-password" feedback={true} toggleMask className="w-full" inputClassName="w-full" />
                    </div>
                </div>
                <Button label="Alterar Senha" className="w-full mt-3 p-button-secondary" />
                <Button onClick={login} label="Cancelar" className="w-full mt-3 p-button-outlined p-button-secondary" />
            </Card>
        </div>
    );
}

export default AltSenha;
