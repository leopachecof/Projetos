import "./Quadrado.css";



export function Quadrado() {

// function quandoClicar() {
//     // alert("CLICOOOOOOOOOOOOOOOOU")
// }
function quandoMouseEntrar(evento) {
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "red";
}
function quandoMouseSair(evento) {
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "blue";
}
function quandoClicarDuasVezes(evento) {
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "orange";
}

    return (
        <div
            className="quadrado"
            // onClick={quandoClicar}
            onDoubleClick={quandoClicarDuasVezes}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
        >
        </div>
    );
} 

//Crie uma função chamada quandoClicarDuasVezes que será acionar com duplo clique no. A função deve mudar a cor do quadrado para laranja