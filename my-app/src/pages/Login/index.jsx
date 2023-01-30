import "./style.css";
import Title from "../../components/Title/index";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import Link from "../../components/Link/index";

function Login() {
  return (
    <div className="container">
      <div className="box-login">
        <Title title="Login" />
        <Input label="Usuário" />
        <Input label="Senha" hideContent />
        <Button text="Entrar" url="https://discord.gg/HNY3Rz8V" />
        <Link link="www.google.com" text="Esqueci a senha" />
      </div>
    </div>
  );
}

export default Login;
