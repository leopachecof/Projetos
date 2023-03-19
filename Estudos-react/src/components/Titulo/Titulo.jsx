
export function Titulo(props) {

  const textoTitulo = props.children;

// let borderLefColor = props.borderColor;
// let backgroundColor = props.backgroundColor;

let objectStyle = {
  borderLefColor: props.borderLefColor,
  backgroundColor: props.backgroundColor
}

  // A parte "visual" do componente
  return (
    <h1 className="titulo" style={objectStyle}>
      {textoTitulo}   
    </h1>
  );
}
