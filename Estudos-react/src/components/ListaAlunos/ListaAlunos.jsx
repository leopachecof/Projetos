// - Crie um array de alunos (nome, data de nascimento, nota, telefone);
// - Crie um componente que renderiza cada aluno em cards (ListaAlunos);
//    - Os alunos com média acima ou igual a 7 tem card com borda verde;
//    - Os alunos com média abaixo de 7 tem card com borda vermelha;
//    - Mostrar a média APENAS se o aluno tiver a nota maior ou igual a 7;
//    - Mostrar uma mensagem motivacional se o aluno tiver nota abaixo de 7;

// - Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;

import "./ListaAlunos.css";


const alunos = [
    { matricula: 1432, nome: 'Joaquim Souza', nascimento: "05/01/1992", nota: 4.5, telefone: "(21) 9999-9999" },
    { matricula: 2855, nome: 'João Alves', nascimento:  "17/07/2002", nota: 10, telefone: "(83) 7777-9999" },
    { matricula: 3654, nome: 'Maria Gomes', nascimento:  "23/06/2010", nota: 7.5, telefone: "(71) 5555-9999" },
    { matricula: 4546, nome: 'Thomas Silva', nascimento:  "09/11/2006", nota: 8.5, telefone: "(31) 3333-9999" },
  ];

export function ListaAlunos() {
    let alunosCards = alunos.map((elemento) => {
    let classCard = elemento.nota >= 7 ? 'aluno-card aprovado' : 'aluno-card reprovado';

        return (
            <div key={elemento.matricula} className={classCard}>
            <small>Matrícula:  {elemento.matricula}</small>
            <h3>{elemento.nome}</h3>
            <p>{elemento.nascimento}</p>
            <p>{elemento.telefone}</p>
            {elemento.nota >= 7 && <p>Média: {elemento.nota}</p>}
            {elemento.nota < 7 && <p>Pior que tá não fica!</p>}
        </div>
        );
    })

        return <div>{alunosCards}</div>
    }
