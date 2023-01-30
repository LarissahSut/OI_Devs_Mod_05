function Link(props) {
  return (
    <div>
      <a href={props.href} className="recuperarSenha">
        {" "}
        {props.content}{" "}
      </a>
    </div>
  );
}

export default Link;
