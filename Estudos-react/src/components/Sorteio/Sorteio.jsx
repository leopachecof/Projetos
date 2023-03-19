import "./Sorteio.css"
import { useState } from "react";

export function Sorteio() {
    
    let [numero, setNumero] = useState(0);
    
        function gerarNumero () {
            
            let numeroSorteado = Math.floor(Math.random()*100);
            setNumero(numeroSorteado);
        }
        function zerarNumero () {
            
            let numeroSorteado = 0;
            setNumero(numeroSorteado);
        }
        // function gerarNumero () {
        //     setNumero (numero = Math.floor(Math.random()*100))
        // }
        // console.log("Componente reconstruiu " + new Date().toTimeString());
        // console.log("Valor do estado "+ numero)

        // let h3Class;

        // if(numero % 2 === 0) {
        //     h3Class  = "par"
        // } else {
        //     h3Class  = "impar"
        // }

    return (
        <div className="tempsorte">
            <h1>Sorteio</h1>
            {/* <h3 className={h3Class}>{numero}</h3> */}
            <h3 className={numero % 2 === 0 ? "par" : "impar"}>{numero}</h3>
            <button className="btnsorte" onClick={gerarNumero}>Gerar</button>
            <br /><br />
            <button className="btnzero" onClick={zerarNumero}>Zerar</button>
          </div>
    );
}