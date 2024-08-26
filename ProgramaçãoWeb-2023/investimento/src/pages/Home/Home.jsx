import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { CalculoService } from "../../service/CalculoService";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const calculoService = new CalculoService();
    const [dataHora, setDataHora] = useState('');
    const navigate = useNavigate();
    const navegar = (calculo) => {
        navigate(calculo);
    }


    useEffect(() => {
        calculoService.buscarDataHora().then(data => {
            console.log(data);
            setDataHora(data.data);
        })
    }, []);
    return (
        <div>
            
            <Header />
            Voce acessou a pagina às {dataHora}<br></br>
            <button onClick={() => navegar("/calculo")}>Calcular Investimento</button>
        </div>
    )
}

export default Home;