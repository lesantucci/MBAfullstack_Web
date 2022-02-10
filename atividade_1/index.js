const calcularIMC = () => {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const imc = peso / (altura * altura);

    document.getElementById('imc').innerHTML = `Seu IMC: ${imc.toFixed(2)}`;
}