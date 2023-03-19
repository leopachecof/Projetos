import {useState} from "react";
import "./Abas.css";


// useState é um hook
//1 - cia a base
export function Abas() {
 // home, perfiol, ajuda
    const [aba, setAba] = useState("home");
    //comentei as funções abaixo que foi substituida pe arrow lá em baixo
    // function irParaHome() {
    //     setAba("home");
    // }
    // function irParaPerfil() {
    //     // aba = "perfil";
    //     setAba("perfil");
    // }
    // function irParaAjuda() {
    //     // aba = "ajuda";
    //     setAba("ajuda");
    // }


    let conteudoAba; // conter o layout de aba selecionada

    if(aba === "home") {
        conteudoAba = <div>HOME</div>
    } else if(aba === "perfil") {
        conteudoAba = <div>PERFIL</div>
    } else if(aba === "ajuda") {
        conteudoAba = <div>AJUDA</div>
    } 

    console.log("reconstrução");
//2 o que retorna
    return (
        <div>
            {/* com arrow não precisa definir as funções acima no componente */}
        <button onClick={() => setAba ("home")}>Home</button>
        <button onClick={() => setAba ("perfil")}>Perfil</button>
        <button onClick={() => setAba ("ajuda")}>Ajuda</button>
        <hr />
        <div>{conteudoAba}</div>
        </div>   
    );
}



///////////////////PRIMEIRO ESBOÇO/////////////
//como tem muit6a repetição, iremos reduzir o código
/////////////////////////////////////////////
// if (aba === "home") {
//     return (
//         <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>HOME</div>
//         </div>   
//     );
// } else if (aba === "perfil") {
//     return (
//     <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>PERFIL</div>
//         </div>
//         );   
// } else if (aba === "ajuda") {
//     return (
//     <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>AJUDA</div>
//         </div>
//         );   
// }
//////////////////////////////////////////