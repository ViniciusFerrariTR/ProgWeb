import React from "react";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Logout from "../../components/logout/Logout";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'HOME', icon: 'pi pi-home', command: () => navigate("/") },
        { label: 'AGENDA DE LEILÕES', icon: 'pi pi-calendar', command: () => navigate("/agenda") },
        { label: 'LEILÕES ONLINE', icon: 'pi pi-globe', command: () => navigate("/leiloes") },
        { label: 'RESULTADOS', icon: 'pi pi-chart-line', command: () => navigate("/resultados") },
        { label: 'PERFIL', icon: 'pi pi-user-plus', command: () => navigate("/editperfil") },
        { label: 'CONTATO', icon: 'pi pi-envelope', command: () => navigate("/contato") }
    ];

    return (
        <div className="home-page">
            {/* Menu */}
            <Menubar model={menuItems} className="menu-bar" />

            {/* Conteúdo Principal */}
            <div className="content">
                <h1>Página Inicial</h1>
                <p>Bem-vindo ao portal de leilões online da LanceTech!</p>
                <Logout />
            </div>
        </div>
    );
}

export default Home;
