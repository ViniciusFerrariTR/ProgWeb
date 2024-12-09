import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './EditPerfil.css';

const validateCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[10])) return false;
    return true;
};

const EditPerfil = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
        photo: null,
        address: {
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
            zip: ''
        }
    });
    const [photoPreview, setPhotoPreview] = useState(null);
    const [cpfError, setCpfError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            address: { ...prevProfile.address, [name]: value }
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfile(prevProfile => ({ ...prevProfile, photo: file }));
        setPhotoPreview(URL.createObjectURL(file));
    };

    const handleSubmit = () => {
        if (validateCPF(profile.cpf)) {
            setCpfError('');
        } else {
            setCpfError('CPF inválido');
        }
    };

    return (
        <div className="container-edit-profile flex justify-content-center align-items-center min-h-screen">
            <Card title="Editar Perfil" className="p-4 edit-profile-card" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="name">Nome</label><br />
                        <InputText name="name" id="name" className="w-full" value={profile.name} onChange={handleChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="email">Email</label><br />
                        <InputText name="email" id="email" className="w-full" value={profile.email} onChange={handleChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="password">Senha</label><br />
                        <Password name="password" id="password" feedback={true} toggleMask className="w-full" value={profile.password} onChange={handleChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="cpf">CPF</label><br />
                        <InputText name="cpf" id="cpf" className="w-full" value={profile.cpf} onChange={handleChange} />
                        {cpfError && <small className="p-error">{cpfError}</small>}
                    </div>
                    <div className="field col-12">
                        <label htmlFor="photo">Foto</label><br />
                        <input type="file" id="photo" accept="image/*" onChange={handleFileChange} />
                        {photoPreview && <img src={photoPreview} alt="Foto Preview" className="photo-preview" />}
                    </div>
                    <div className="field col-12">
                        <label htmlFor="street">Rua</label><br />
                        <InputText name="street" id="street" className="w-full" value={profile.address.street} onChange={handleAddressChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="number">Número</label><br />
                        <InputText name="number" id="number" className="w-full" value={profile.address.number} onChange={handleAddressChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="neighborhood">Bairro</label><br />
                        <InputText name="neighborhood" id="neighborhood" className="w-full" value={profile.address.neighborhood} onChange={handleAddressChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="city">Cidade</label><br />
                        <InputText name="city" id="city" className="w-full" value={profile.address.city} onChange={handleAddressChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="state">Estado</label><br />
                        <InputText name="state" id="state" className="w-full" value={profile.address.state} onChange={handleAddressChange} />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="zip">CEP</label><br />
                        <InputText name="zip" id="zip" className="w-full" value={profile.address.zip} onChange={handleAddressChange} />
                    </div>
                </div>
                <Button label="Salvar" className="w-full mt-3 p-button-secondary" onClick={handleSubmit} />
                <Button label="Voltar" className="w-full mt-3 p-button-outlined p-button-secondary" onClick={() => navigate("/")} />
            </Card>
        </div>
    );
}

export default EditPerfil;
