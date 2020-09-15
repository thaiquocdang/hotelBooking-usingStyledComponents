import React, { useState } from "react";
import Room from "./Room";
import { Section } from "../global/Section";
import { setColor, media, setRem } from "../../styles";
import Title from "../global/Title";
import styled from "styled-components";
import rooms from "../../components/home/room-data";

function Rooms() {
  const [roomData, setRoomData] = useState(rooms);
  console.log(roomData);

  return (
    <Section background={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {roomData.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    /* grid-template-columns: repeat(3, 1fr); */
    max-width: 1170px; 
  `};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(40)}
`;

export default Rooms;

/* ${media.tablet`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)}
`};
${media.desktop`
  width: 100vw; 
  max-width: 1170px;
`}; */
