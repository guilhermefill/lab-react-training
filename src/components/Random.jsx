const Random = (props) => {
  let randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div>
      <p>
        Random number between {props.min} and {props.max} is {randomNumber}
      </p>
    </div>
  );
};
export default Random;
