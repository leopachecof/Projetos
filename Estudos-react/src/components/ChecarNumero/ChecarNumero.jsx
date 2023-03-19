import "./ChecarNumero.css";

export function ChecarNumero(props) {
    if(props.numero % 2 === 0) {
        return <h1>O número {props.numero} é par</h1>
    } else {
        return <h1>O número {props.numero} é impar</h1>
    }
}