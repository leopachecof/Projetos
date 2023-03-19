import "./CalculadoraIMC.css";
import {useState} from "react";

export function CalculadoraIMC() {
    // const altura = 0;
    // const peso = 0;
    // const resultado = 0;


    return (
        <div>
            <h1>Calculadora IMC</h1>
            <p>Índice de Massa Corporal, um parâmetro que é utilizado para avaliar se o peso está dentro do valor ideal para a altura. </p>
            <span>Altura</span> <br />
            <input type="text" placeholder="Digite sua altura..." />
            <br /><br />
            <span>Peso</span> <br />
            <input type="text" placeholder="Digite seu peso..." />
            <br />
            <h2>Resultado</h2>
        </div>
      
        
        )
}


//IMC = peso / (altura x altura).
// IMC	Classificação
// Menor que 18,5	Magreza
// 18,5 a 24,9	Normal
// 25 a 29,9	Sobrepeso
// 30 a 34,9	Obesidade grau I
// 35 a 39,9	Obesidade grau II
// Maior que 40	Obesidade grau III

{/*
(resultado < 18.5) {setIMC("magreza");}
(resultado >= 18.5 && resultado <= 24.9) {setIMC("normal");}
(resultado >= 25 && resultado <= 29.9) {setIMC("sobrepeso");}
(resultado >= 30 && resultado <= 34.9) {setIMC("oGI");}
(resultado >= 35 && resultado <= 39.9) {setIMC("oGII");}
(resultado >= 40) {setIMC("oGIII");}






*/}
