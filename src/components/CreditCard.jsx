import masterCard from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const typeImg = {
    'Master Card': masterCard,
    Visa: visa,
  };
  const divStyle = {
    color: `${color}`,
    backgroundColor: `${bgColor}`,
    borderRadius: '5px',
    height: '125px',
    width: '300px',
  };
  const flagStyle = {
    display: 'flex',
    marginLeft: 'auto',
    height: '15px',
  };
  return (
    <div style={divStyle}>
      <div className="type">
        <img src={typeImg[type]} alt="CC flag" style={flagStyle} />
        <p>•••• •••• •••• {number.slice(12)}</p>
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
