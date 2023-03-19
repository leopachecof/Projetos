import './ListaCompras.css'

// export ListaCompras = () => { depois testar arrow

//4 criado uma variavel para listar as compras, ela vai ser chamada pelo "map"
const compras = [
    "Batata palha",
    "Batata frita pronta",
    "Batata doce",
    "Batata chips",
    "Batata inglesa",
];

//5 Array de produtos para criar Card's
const produtos = [
    { cod: 1, nome: 'Batata palha', quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: 'Batata frita pronta', quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: 'Batata doce', quantidade: 10, precoUnitario: 20 },
    { cod: 4, nome: 'Batata chips', quantidade: 5, precoUnitario: 15 },
  ];

//1 Função é criada primeiro junto com o return lá de baixo
export function ListaCompras() {                                         
    //3  AQUI O MAP CORRE TODA ARRAY DE CIMA
    //3 variavel criada para dinamizar a li's            
    const elementosCompras = compras.map((nomeCompra, index) => {              
       //A key serve para controle interno, pois cada elemento precisa ter uma key diferente
        return <li key={index}>{nomeCompra}</li>
    });

    //6
    const elementosProdutos = produtos.map((produto) => {
        //7
        return (
        //8
        <div key={produto.cod} className="card-compra">
            <h2>{produto.nome}</h2>
            <p>QUANTIDADE: {produto.quantidade}</p>
            <p>SUBTOTAL: R$ {produto.quantidade * produto.precoUnitario}</p>
        </div>
        );
    }); 

    //2 return inicial da função que "puxa" a "lista" e "joga" na "App.jsx"
    return (
        <>
            {/* 2 */}
            <h2>Lista de compras</h2>
            <ul>{elementosCompras}</ul>
            <hr />
            {/* 5 */}
            <h2>Lista de produtos</h2>
            <div>{elementosProdutos}</div>
        </>
    );
}

//Começou com essa ideia aqui. Essa era a base
// export function ListaCompras() {                     ///estrutura base, o ideal é fazer um map (acima)
//     return (
//         <ul>
//             <li>{compras[0]}</li>
//             <li>{compras[1]}</li>
//             <li>{compras[2]}</li>
//             <li>{compras[3]}</li>
//         </ul>   
//     );
// }