const BoxColor = (props) => {
  const divStyle = {
    color: 'white',
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  return (
    <div style={divStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
};

export default BoxColor;
