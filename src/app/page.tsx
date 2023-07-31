"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "../Components/Header";
import Main1 from "../Components/Main1";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <HomeLand>
      <Header />
      {/* <Box></Box> */}
      <Main1 />
      <Footer />
    </HomeLand>
  );
}

const HomeLand = styled.div`
  background-color: #ffffff;
  max-width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10%;
`;

const Box = styled.div`
  width: 1440px;
  height: 1px;
  flex-shrink: 0;
  position: fixed;
  top: 50px;
  border: 1px solid var(--line-light-grey, #e9ebee);
  background: var(--line-light-grey, #e9ebee);
`;
