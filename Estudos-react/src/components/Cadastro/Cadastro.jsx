import { useState } from "react";

import "./Cadastro.css";

export function Cadastro() {
    const [nome, setNome] = useState(""); //função que cria um estado, retorna em formato de array
    const [email, setEmail] = useState("");
    const [resumo, setResumo] = useState("");

    function obterNome(evento) {
        const input = evento.target;
        const valor = input.value;
        setNome(valor);
    }

    function obterEmail(evento) {
        const input = evento.target;
        const valor = input.value;
        setEmail(valor);
    }
    function obterResumo(evento) {
        const textarea = evento.target;
        const valor = textarea.value;
        setResumo(valor);
    }


    return (
        <div>
            <br />
            <strong>Formulário de cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br />
            <input type="text" placeholder="Digite seu e-mail" onChange={obterEmail} />
            <br />
            <textarea type="text" placeholder="Digite sua mensagem" rows="6" cols="30" size="50" maxLength="250" onChange={obterResumo}></textarea>
            <br />
            <strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>

        </div>
    );
}