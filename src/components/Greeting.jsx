const Greeting = (props) => {
  const greetings = {
    de: 'Hallo',
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour',
  };
  const myProp = Object.values(props).filter((x) => x !== props.children);
  return (
    <p>
      {greetings[myProp]} {props.children}
    </p>
  );
};

export default Greeting;
