import React from "react";
import { SmallButton } from "../../components/global/Button";
import styled from "styled-components";
import { setShadow, setColor, setRem, setTransition, setLetterSpacing, setFont, setBorder } from "../../styles";
import PropTypes from "prop-types";
import imageNotAvailable from '../../images/imageNotAvailable.jpg'

function Room({ room, className }) {
  console.log(room, "at ROOM");
  const { img = "", title = "", info = "", price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={room.img ? room.img : imageNotAvailable} /> 
        <div className="price">${room.price}</div>
      </div>
      <div className="room-info">
        <h4>{room.title}</h4>
        <p>{room.info}</p>
        <SmallButton>more info</SmallButton>
      </div>
    </article>
  );
}

export default styled(Room)`
    background: ${setColor.mainWhite};
    margin: ${setRem(32)} 0;

    .img-container{
        background:${setColor.mainBlack};
        position: relative;

        img{
            width: 100%;
            display: block;
            ${setTransition};
        }
        &:hover img {
            opacity: 0.65;
        }

        .price {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${setColor.mainWhite};
            ${setFont.main};
            font-size: ${setRem(21)};
            ${setLetterSpacing(4)};
            padding: ${setRem(10)} ${setRem(20)};
            ${setBorder({color: setColor.mainWhite, width: "3px"})};
            /* display:none; */
            opacity:0;
            ${setTransition}
        }

        &:hover .price {
            /* display: block; */
            opacity: 1;
        }
    }

    .room-info {
        padding: ${setRem()};

        h4{
            text-transform: capitalize;
            ${setLetterSpacing()};
        }

        p{
            ${setLetterSpacing(1.5)};
        }
    }

    ${setShadow.light};
    ${setTransition()};

    &:hover {
        ${setShadow.dark};
    }
`;

Room.propTypes = {
    room: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
}
