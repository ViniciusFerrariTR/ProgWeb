import React from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
    
    const { t } = useTranslation();

    return (
        <div className="home-page">          

            {/* Conteúdo Principal */}
            <div className="content">
                <h1> Página Inicial</h1>
                <p>Bem-vindo ao portal de leilões online da LanceTech!</p>
                
            </div>
        </div>
    );
}

export default Home;
