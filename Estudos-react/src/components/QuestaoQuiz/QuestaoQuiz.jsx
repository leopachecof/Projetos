import "./QuestaoQuiz.css";
import {useState} from "react";

const pergunta = {
    enunciado: "Qual é a capital de Brunei?",
    alternativas: ["Fortaleza", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
    alternativaCorreta: "Bandar Seri Begawan",
};


export function QuestaoQuiz() {
    const [statusQuiz, setStatusQuiz] = useState("pendente");
    const [chances, setChances] = useState(3);

    function checarResposta(altMarcada) {
        if(altMarcada === pergunta.alternativaCorreta){
            setStatusQuiz("acertou");  
        } else {
            setChances (chances - 1);
            setStatusQuiz("errou");
        }
    }
////////////////////////////////////////////////
function tentarNovamente() {
    if(chances > 0) {
        setStatusQuiz("pendente");
    } else {
        setStatusQuiz("acabou");
    }
}
    
    if(statusQuiz === "pendente") {
        return (
            <div>
                <h3>{pergunta.enunciado}</h3>
                <small>Tentativas restantes: {chances}</small>
                <ol type="A">
                    {pergunta.alternativas.map((alt) => (
                        <li  className="alternativa" onClick={() => checarResposta(alt)}>
                            {alt}
                        </li>    
                    ))}
                </ol>
            </div>
        );
        //////////////////////////////////////////
    } else if(statusQuiz === "acertou") {
        return (
            <div>
                <h3>Parabéns, você acertou!</h3>
                <p>Mostrou que manja!</p>
            </div>
        )
    } else if(statusQuiz === "errou") {
        return (
            <div>
                <h3>Você errou. Mas pode tentar novamente.</h3>
                <button onClick={() => tentarNovamente ("pendente")}>Tentar novamente</button>
            </div>
        )
    } else if(statusQuiz === "acabou") {
        return (
        <h3>Já era meu irmão!</h3>
        )
    }
}