import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#455EB5',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '10px',
  };
  const imgStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50px',
  };
  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  const changeMargin = {
    margin: '5px',
    padding: '0',
  };
  return (
    <div style={divStyle}>
      <div className="picture">
        <img src={img} alt="profile" style={imgStyle} />
      </div>
      <div style={infoStyle}>
        <h3 style={changeMargin}>{name}</h3>
        <Rating>{rating}</Rating>
        <p style={changeMargin}>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
