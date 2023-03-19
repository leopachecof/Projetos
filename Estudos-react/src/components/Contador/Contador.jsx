import "./Contador.css"


import { useState } from "react"; // useState é uma função
export function Contador() {

//destruct
let [numero, setNumero] = useState(0);
    function zerar() {
        setNumero(0)
    }
        // incrementar
    function inc () {
        setNumero(numero+1)    
    }
    function incDez () {
        setNumero(numero+10)
    }
    function incCem () {
        setNumero(numero+100)
    }
    function incMultTres () {
        setNumero (numero*3)
    }
    function decDivDois () {
        setNumero (numero/2)
    }
    function decSubtCinq () {
        setNumero (numero-50)
    }
    function decSubtCinco () {
        setNumero (numero-5)
    }


    // decrementar /// abaixo foi feito menos simplificado, mas é o mesmo propósito do incrementar
    function dec () {
        let novoNumero = numero -1;
        setNumero(novoNumero)

    }

    return (
        <div className="contador">
            
            <h1>{numero}</h1>
            <div>
                
                <button onClick={zerar}>Zerar</button>
                <button onClick={inc}>+1</button>
                <button onClick={dec}>-1</button>
                <button onClick={incDez}>+10</button>
                <button onClick={incCem}>+100</button>
                <button onClick={incMultTres}>*3</button>
                <button onClick={decDivDois}>/2</button>
                <button onClick={decSubtCinq}>-50</button>
                <button onClick={decSubtCinco}>-5</button>
            </div>
          
        </div>
    )
    }
/////////////////////////////////////////////////////Elevando o State/////////////////
// import { useState } from "react"; // useState é uma função

// export function Contador() {
// // useState é uma função que cria um estado
// //u estado é uma variavel especial que sincroniza as mudanças na pág.

//     const array = useState(0); //Retorna um array

//     let numero = array [0];
//     let setNumero = array[1];
    
//     // incrementar
//     function inc () {
//         setNumero(numero+1)
        
//     }
//     // decrementar /// abaixo foi feito menos simplificado, mas é o mesmo propósito do incrementar
//     function dec () {
//         let novoNumero = numero -1;
//         setNumero(novoNumero)

//     }



//     return (
//         <div>
            
//             <h1>{numero}</h1>
//             <button onClick={inc}>
//                 +1
//             </button>
//             <button onClick={dec}>
//                 -1
//             </button>

//         </div>
//     )
// }
///////////////////////////////////////////outra maneira///////////////////////////////
// export function Contador() {
//     let numero = 0;
    
//     function inc () {
//         numero = numero+1;
//         setNumero()
//     }
//     function dec () {
//         numero = numero-1;
//         setNumero()
//     }

//     function setNumero() {
//         const displayNumero = document.getElementById ("displayNumero");
//         displayNumero.innerHTML = numero;
//     }

//     return (
//         <div>
            
//             <h1 id="displayNumero">{numero}</h1>
//             <button onClick={inc}>
//                 +1
//             </button>
//             <button onClick={dec}>
//                 -1
//             </button>

//         </div>
//     )
// }

//////////////////////////////////////versão básica///////////////////
// export function Contador() {
//     let numero = 0;
    
//     function inc () {
//         numero = numero+1;
//     }
//     function dec () {
//         numero = numero-1;
//     }

//     function setNumero() {
//         const displayNumero = document.getElementById ("displayNumero");
//         displayNumero.innerHTML = numero;
//     }

//     return (
//         <div>
            
//             <h1 id="displayNumero">{numero}</h1>
//             <button onClick={inc}>
//                 +1
//             </button>
//             <button onClick={dec}>
//                 -1
//             </button>
//             <button onClick={setNumero}>
//                 Atualizar valor
//             </button>
//         </div>
//     )
// }


///////////////////////////////