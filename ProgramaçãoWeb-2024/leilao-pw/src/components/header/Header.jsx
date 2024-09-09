import React from "react";
import "./Header.css";
import { Menubar } from 'primereact/menubar';
import Logout from "../../components/logout/Logout";
import Idioma from "../trocaIdioma/Idioma";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const menuItems = [
        { style:{color: 'white'}, label: t('home'), icon: 'pi pi-home', command: () => navigate("/")},
        { label: t('auction'), icon: 'pi pi-calendar', command: () => navigate("/agenda") },
        { label: t('online-auction'), icon: 'pi pi-globe', command: () => navigate("/leiloes") },
        { label: t('results'), icon: 'pi pi-chart-line', command: () => navigate("/resultados") },
        { label: t('profile'), icon: 'pi pi-user-plus', command: () => navigate("/editperfil") },
        { label: t('contact'), icon: 'pi pi-envelope', command: () => navigate("/contato") }
    ];
    return (

        <div className="header">

            <div class="logout">
                <Idioma />
                <Logout />

            </div>

            <div className="header-logo">
                <img alt="logo" src={require("../../components/imagens/logo-lancetech.png")} />
            </div>
            <Menubar model={menuItems} className="menu-bar" />
        </div>
    );
}

export default Header;
