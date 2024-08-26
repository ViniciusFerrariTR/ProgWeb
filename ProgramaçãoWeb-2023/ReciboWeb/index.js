function gerarRecibo() {
    const valor = document.getElementById('valor').value;
    const pagador = document.getElementById('pagador').value;
    const cpf = document.getElementById('cpf').value;
    const referente = document.getElementById('referente').value;
    const cidade = document.getElementById('cidade').value;
    const datapagamento = document.getElementById('datapagamento').value;
    const emissor = document.getElementById('emissor').value;
    const telefone_emissor = document.getElementById('telefone_emissor').value;
    const cpf_cnpj_emissor = document.getElementById('cpf_cnpj_emissor').value;
    const observacoes = document.getElementById('observacoes').value;

    let recibo = `Recibo de pagamento
  =======================
  
  Valor: R$ ${valor}
  Nome do pagador: ${pagador}
  CPF/CNPJ: ${cpf}
  Referente a: ${referente}
  Cidade: ${cidade}
  Data: ${datapagamento}
  Nome do emissor: ${emissor}`;

    if (telefone_emissor) {
        recibo += `\nTelefone do emissor: ${telefone_emissor}`;
    }

    if (cpfCnpjEmissor) {
        recibo += `\nCPF/CNPJ do emissor: ${cpf_cnpj_emissor}`;
    }

    if (observacoes) {
        recibo += `\nObservações: ${observacoes}`;
    }


}




/*
function formatarTexto(input) {
    const form = document.querySelector('form');
    const valorInput = document.querySelector('#valor');
    const pagadorInput = document.querySelector('#pagador');
    const cpfInput = document.querySelector('#cpf');
    const referenteInput = document.querySelector('#referente');
    const cidadeInput = document.querySelector('#cidade');
    const datapagamentoInput = document.querySelector('#datapagamento');
    const emissorInput = document.querySelector('#emissor');
    const telefone_emissorInput = document.querySelector('#telefone_emissor');
    const cpf_cnpj_emissorInput = document.querySelector('#cpf_cnpj_emissor');
    const observacoesInput = document.querySelector('#observacoes');


    let texto = input.value;

    texto = texto.replace('{nome}', nome);
    texto = texto.replace('{idade}', idade);
    texto = texto.replace('{cidade}', cidade);
    alert(`Vale de R$ ${valorInput.value} emitido para ${destinatarioInput.value} com o motivo "${motivoInput.value}".`);

}


function escreverNumeroPorExtenso(valor) {
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const especiais = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

    if (numero === 0) {
        return 'zero';
    }

    let resultado = '';

    if (numero >= 1000000) {
        resultado += escreverNumeroPorExtenso(Math.floor(numero / 1000000)) + ' milhões';
        numero %= 1000000;
        if (numero > 0) {
            resultado += ' e ';
        }
    }

    if (numero >= 1000) {
        resultado += escreverNumeroPorExtenso(Math.floor(numero / 1000)) + ' mil';
        numero %= 1000;
        if (numero > 0) {
            resultado += ' e ';
        }
    }

    if (numero >= 100) {
        resultado += centenas[Math.floor(numero / 100)];
        numero %= 100;
        if (numero > 0) {
            resultado += ' e ';
        }
    }

    if (numero >= 10 && numero < 20) {
        resultado += especiais[numero - 10];
    } else {
        if (numero >= 20) {
            resultado += dezenas[Math.floor(numero / 10)];
            numero %= 10;
            if (numero > 0) {
                resultado += ' e ';
            }
        }
        if (numero > 0) {
            resultado += unidades[numero];
        }
    }

    return resultado;
}*/



