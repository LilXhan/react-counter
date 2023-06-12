import PropTypes from 'prop-types';

export const FirstApp = ({ 
  title,
  subTitle,
  name
}) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h2>{ subTitle }</h2>
      <h2>{ name }</h2>
      <p>Soy un subtitulo</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
};

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Flavio'
};
