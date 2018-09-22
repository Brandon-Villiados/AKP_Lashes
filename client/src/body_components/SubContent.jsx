import React, { Component } from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr .25fr);
  width: 100%;
  height: 100%;
`;

const ShowcaseOne = styled.div`
  grid-row: 1;
  size: 100% 100%;
`;

const OneDesc = styled.div`
  grid-row: 2;
  size: 100% 100%;
`;

const SubContent = (props) => {
  return(
    <ContentWrap>
      <ShowcaseOne>
        <OneDesc>
        </OneDesc>
      </ShowcaseOne>
    </ContentWrap>
  )
}

export default SubContent;