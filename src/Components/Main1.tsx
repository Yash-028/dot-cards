import React, { useRef } from "react";
import styled from "styled-components";
import StyleSheet from "../app/page.module.css";
import Image from "next/image";
import AdImage from "../../public/Images/AdImage.png";
import Adimagesmall from "../../public/Images/Adimagesmall.png";
import { shoedata } from "./ShoeData";
import Link from "next/link";

const Main1 = () => {
  const navBefore = () => {
    const shoescroll = document.getElementById("shoescroll");
    shoescroll.scrollIntoView({ behavior: "smooth" });
  };

  const navNext = () => {
    const shoescroll = document.getElementById("shoescroll");
    shoescroll.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainDiv>
      <BoxAd>
        <RightBox>
          <Image
            src={AdImage}
            alt="Large Image"
            width={300}
            height={200}
            className="adimage"
            // style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </RightBox>
        <RightBoxSmall>
          <Image
            src={Adimagesmall}
            alt="Large Image"
            width={300}
            height={200}
            className="adimagesmall"
            // style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </RightBoxSmall>
        <LeftBox>
          <span className={StyleSheet.h2}>25% OFF</span>
          <span className={StyleSheet.h3}>Summer Sale</span>
          <span className={StyleSheet.h4}>
            Discover our summer styles with discount
          </span>
          <Button className={StyleSheet.button}>
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.6875 12.7188L13.6875 17.7188C13.5 17.9062 13.25 18 13 18C12.7188 18 12.4688 17.9062 12.2812 17.7188C11.875 17.3438 11.875 16.6875 12.2812 16.3125L15.5625 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15.5625L12.2812 7.71875C11.875 7.34375 11.875 6.6875 12.2812 6.3125C12.6562 5.90625 13.3125 5.90625 13.6875 6.3125L18.6875 11.3125C19.0938 11.6875 19.0938 12.3438 18.6875 12.7188Z"
                fill="white"
              />
            </svg>
          </Button>
        </LeftBox>
      </BoxAd>
      <BoxContent>
        <span className={StyleSheet.h5}>Explore our latest drops</span>
        <ShoeList>
          {shoedata.map((shoe) => (
            <ShoeItem key={shoe.id} href={shoe.link} id="shoescroll">
              <ShoeImage>
                <Image
                  src={shoe.imgdeskmain}
                  alt="Large Image"
                  width={500}
                  // height={260}
                  height={500}
                  priority={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </ShoeImage>
              <ShoeImageSmall>
                <Image
                  src={shoe.imgmobmain}
                  alt="Large Image"
                  width={500}
                  // height={260}
                  height={500}
                  priority={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </ShoeImageSmall>
              <ShoeDescription>
                <ShoeTag>
                  <span className={StyleSheet.h6}>{shoe.name}</span>
                  <span className={StyleSheet.h7}>{shoe.desc}</span>
                </ShoeTag>
                <span className={StyleSheet.h8}>${shoe.price}</span>
              </ShoeDescription>
            </ShoeItem>
          ))}
          {/* <ShoeImage>
              <Image
                src={shoedata[0].imgdeskmain}
                alt="Large Image"
                width={250}
                // height={260}
                height={200}
                priority={true}
              />
            </ShoeImage>
            <ShoeDescription>
              <ShoeTag>
                <span className={StyleSheet.h6}>Nike Air Max 270</span>
                <span className={StyleSheet.h7}>
                  Out Of Office &ldquo;Ooo&ldquo; sneakers
                </span>
              </ShoeTag>
              <span className={StyleSheet.h6}>$775</span>
            </ShoeDescription>
          </ShoeItem> */}
        </ShoeList>
      </BoxContent>
      <div className={StyleSheet.shoescroll}>
        <CircleSvg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={navBefore}
            className={StyleSheet.lrsvg}
          >
            <path
              // opacity="0.3"
              d="M13.9922 18.9922C14.2734 18.9922 14.5234 18.8984 14.7109 18.7109C15.1172 18.3359 15.1172 17.6797 14.7109 17.3047L9.42969 11.9922L14.7109 6.71094C15.1172 6.33594 15.1172 5.67969 14.7109 5.30469C14.3359 4.89844 13.6797 4.89844 13.3047 5.30469L7.30469 11.3047C6.89844 11.6797 6.89844 12.3359 7.30469 12.7109L13.3047 18.7109C13.4922 18.8984 13.7422 18.9922 13.9922 18.9922Z"
              fill="#201B21"
            />
          </svg>
        </CircleSvg>
        <CircleSvg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={navNext}
            className={StyleSheet.lrsvg}
          >
            <path
              d="M10.0078 18.9922C9.72656 18.9922 9.47656 18.8984 9.28906 18.7109C8.88281 18.3359 8.88281 17.6797 9.28906 17.3047L14.5703 11.9922L9.28906 6.71094C8.88281 6.33594 8.88281 5.67969 9.28906 5.30469C9.66406 4.89844 10.3203 4.89844 10.6953 5.30469L16.6953 11.3047C17.1016 11.6797 17.1016 12.3359 16.6953 12.7109L10.6953 18.7109C10.5078 18.8984 10.2578 18.9922 10.0078 18.9922Z"
              fill="#201B21"
            />
          </svg>
        </CircleSvg>
      </div>
    </MainDiv>
  );
};

export default Main1;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 50px; */
  /* margin-left: 10%;
  margin-right: 10%; */
  /* border: 1px solid var(--line-light-grey, #e9ebee); */
  /* background: var(--line-light-grey, #e9ebee); */
  @media (max-width: 768px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`;

const BoxAd = styled.div`
  border-radius: 40px;
  background: var(--hero-bg, #eaeeef);
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 7%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5%;
  max-width: 50%;
  @media (max-width: 960px) {
    /* margin-left: auto; */
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 768px) {
    /* margin-left: auto; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
  }
  @media (min-width: 1280px) {
    gap: 15px;
  }
`;

const RightBox = styled.div`
  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.25));
  margin-top: auto;
  margin-bottom: auto;
  /* margin-left: 10%; */
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: none;
  }
  @media (max-width: 960px) {
    img {
      width: 250px;
      height: 200px;
    }
  }

  @media (min-width: 1280px) {
    img {
      width: 400px;
      height: 320px;
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 500px;
      height: 400px;
    }
  }
`;

const RightBoxSmall = styled.div`
  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.25));
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
    img {
      width: 200px;
      height: 150px;
    }
  }
`;

const Button = styled.button`
  display: inline-flex;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black, #201b21);
  color: var(--white, #ffffff);
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    svg {
      transform: translateX(10px);
    }
  }
  #span {
    color: var(--white, #fff);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: 0em;
    text-align: center;
  }
  #svg {
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
  }
  @media (min-width: 1280px) {
    padding: 20px 100px;
  }
  @media (min-width: 1440px) {
    padding: 20px 120px;
  }
`;

const BoxContent = styled.div`
  display: flex;
  /* background-color: #7b5c5c; */
  flex-direction: column;
  padding: 20px 0;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  max-width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: scroll;
  @media (max-width: 768px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`;

const ShoeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 100%;
  height: auto;
  /* overflow: scroll; */
  @media (max-width: 768px) {
  }
`;

const ShoeItem = styled.a`
  gap: 18px;
  /* width: 23.38%; */
  max-width: 100%;
  min-width: 200px;
  height: 100%;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: none;
    scale: 100% 108%;
  }
  @media (max-width: 768px) {
    /* width: 50%; */
  }
`;

const ShoeImage = styled.div`
  /* filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.25)); */
  border-radius: 18.77px;
  /* background: lightgray 50% / cover no-repeat; */
  display: block;
  width: 100%;
  /* height: auto; */
  overflow: hidden;
  position: relative;
  /* padding: 10% 0; */
  /* padding-bottom: 100%; */
  @media (max-width: 768px) {
    display: none;
  }
`;

const ShoeImageSmall = styled.div`
  border-radius: 18.77px;
  /* background: lightgray 50% / cover no-repeat; */
  display: block;
  width: 100%;
  /* height: auto; */
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ShoeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
`;

const ShoeTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3px;
`;

const CircleSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--white, #fdfdfd);
  box-shadow: 0px 0.444444179534912px 100.66666412353516px 0px
    rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* transform: translateX(transformsvg); */
`;
