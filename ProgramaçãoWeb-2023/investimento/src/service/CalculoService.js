import axios from "axios";

export class CalculoService{
    buscarDataHora(){
        return axios.get("http://localhost:8080/home/data-hora");
    }


    calcular(calculo){
        return axios.post("http://localhost:8080/calculo-investimento", calculo);
    }
}