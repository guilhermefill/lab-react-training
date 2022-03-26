const stars = {
  1: '★☆☆☆☆',
  2: '★★☆☆☆',
  3: '★★★☆☆',
  4: '★★★★☆',
  5: '★★★★★',
};

const Rating = (props) => {
  return (
    <div>
      <p>{stars[Math.round(props.children)]}</p>
    </div>
  );
};

export default Rating;
