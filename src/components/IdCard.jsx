import React from 'react';

const IdCard = (props) => {
  return (
    <div className="info-card">
      <div className="picture">
        <img src={props.picture} alt="profile pic" />
      </div>
      <div className="info">
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Heigth: </strong>
          {props.height[0]} cm
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toString().slice(0, 15)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
