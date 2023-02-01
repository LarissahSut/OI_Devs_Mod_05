import PropTypes from 'prop-types'

const Link = ({texto, link}) => {
  return (
    <a href={link} target="blank" className="senha">{texto}</a>
  );
}

Link.propTypes = {
  texto: PropTypes.string
}

Link.defaultProps = {
texto: "Não lembro a senha?",
link:"http://www.google.com/"
}

export default Link;
