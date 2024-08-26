import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { CalculoService } from "../../service/CalculoService";

const Calculo = () => {
    const calculoService = new CalculoService();
    const [resultado, setResultado] = useState(0);


    const [calculo, setCalculo] = useState({ valorInicial: 0, prazoMeses: 0, juroMensal: 0 });

    const alterarValor = (e) => {
        setCalculo({ ...calculo, [e.target.name]: e.target.value });
    }


    const calcular = () => {
        calculoService.calcular(calculo).then(data => {
            setResultado(data.data);
        })
    }

    



return (
    <div>
        <Header />
        <h3>Realize o seu calculo</h3>
        Valor Inicial<br></br>
        <input onChange={alterarValor} type="number" name="valorInicial" value={calculo.valorInicial} /><br></br>
        Prazo em meses<br></br>
        <input onChange={alterarValor} type="number" name="prazoMeses" value={calculo.prazoMeses} /><br></br>
        Juros Mensal<br></br>
        <input onChange={alterarValor} type="number" name="juroMensal" value={calculo.juroMensal} /><br></br>
        <button onClick={calcular}>Calcular</button>
        {resultado}
    </div>
)

}
export default Calculo;