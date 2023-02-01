import './style.css';
import Title from '../../components/Title/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import Link from '../../components/Link/index';
import Subtitle from '../../components/Subtitle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('Login');
  const [showError, setShowError] = useState(false);
  const [nomeDoUsuario, setNomeDeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [inputColor, setInputColor] = useState('white');

  const [usuarios] = useState([
    {
      id: 1,
      email: 'joao@hotmail.com',
      password: 'oidevs',
    },
    {
      id: 2,
      email: 'jady@oi.com',
      password: 'oidevs',
    },
    {
      id: 3,
      email: 'luiza@oi.com',
      password: 'oidevs',
    },
    {
      id: 4,
      email: 'luciana@oi.com',
      password: 'oidevs',
    },
  ]);

  const mudarTitulo = () => {
    setTitle('Home');
  };

  const vaParaHome = () => {
    //usuário e senha correspondem a alguma existente

    const usuarioEscolhido = usuarios.find(
      (usuario) => usuario.email === setNomeDeUsuario && usuario.password
    );

    if (usuarioEscolhido) {
      navigate('/home', { state: { listaDeUsuarios: usuarios } });
    } else {
      setShowError(true);
      setInputColor('red');
    }
  };

  return;
  <div className="container">
    <Title title={title} />
    {showError ? <Subtitle texto="Credenciais inválidas" /> : null}
    <Input
      label="Usuário"
      cor={inputColor}
      value={nomeDoUsuario}
      onChange={(e) => setNomeDeUsuario(e.target.value)}
    />

    <Input
      label="Senha"
      cor={inputColor}
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      hideContent
    />
 
    <Button texto='Entrar' aoClicar={vaParaHome} />
    <Button texto='Trocar tíitulo' aoClicar={mudarTitulo} />
    <Link/>
  </div>;
};

export default Login;
