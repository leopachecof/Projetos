import "./ListaFuncionario.css"

//2 criar os dados da tabela

const funcionarios = [
  {
    cod: 1,
    nome: "Gabriel Braga",
    email: "gabriel.braga@email.com",
    endereco: { cidade: "Ubajara", estado: "CE" },
  },
  {
    cod: 2,
    nome: "José Almir",
    email: "jose.almir@email.com",
    endereco: { cidade: "Tianguá", estado: "CE" },
  },
  {
    cod: 3,
    nome: "Carlos Antônio",
    email: "carlos.antonio@email.com",
    endereco: { cidade: "São Paulo", estado: "SP" },
  },
  {
    cod: 4,
    nome: "Maria de Souza",
    email: "maria.souza@email.com",
    endereco: { cidade: "São Paulo", estado: "SP" },
  },
];


//1 cria-se a função depois estrutura-se a tabela
export function ListaFuncionario() {
    const conteudoTabela = funcionarios.map((funcionario) => {
        return (
          <tr key={funcionario.cod}>
            <td>{funcionario.cod}</td>
            <td>{funcionario.nome}</td>
            <td>{funcionario.email}</td>
            <td>{`${funcionario.endereco.cidade}, ${funcionario.endereco.estado}`}</td>
          </tr>
        );
    })

    return <table className="tabela-func">
        <thead>
            <tr>
                <th>Cod</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
            </tr>
        </thead>
        <tbody>{conteudoTabela}</tbody>
    </table>;
}