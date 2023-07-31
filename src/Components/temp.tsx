import React, { useState } from "react";
import styled from "styled-components";
import { shoedata } from "./ShoeData";
import Image from "next/image";
import StyleSheet from "../app/page.module.css";

const ProductDetail = () => {
  const [opt, setOpt] = useState(0);
  const [animate, setAnimate] = useState("0");

  const navBefore = () => {
    setAnimate("1");
    if (opt === 0) {
      setOpt(shoedata.length - 1);
    } else {
      setOpt(opt - 1);
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? shoedata[length].img.length - 1 : prevIndex - 1
    );
  };

  const navNext = () => {
    setAnimate("1");
    if (opt === shoedata.length - 1) {
      setOpt(0);
    } else {
      setOpt(opt + 1);
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === shoedata[length].img.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = shoedata[0].img && shoedata[0].img[currentImageIndex];

  return (
    <Product>
      {/* <ProductInfo> */}
      <LeftBox>
        <ProductImage>
          <Image
            src={currentImage}
            alt="Picture of the author"
            width={500}
            height={500}
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </ProductImage>
        <ProductScroll>
          <div>
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
                opacity="0.3"
                d="M13.9922 18.9922C14.2734 18.9922 14.5234 18.8984 14.7109 18.7109C15.1172 18.3359 15.1172 17.6797 14.7109 17.3047L9.42969 11.9922L14.7109 6.71094C15.1172 6.33594 15.1172 5.67969 14.7109 5.30469C14.3359 4.89844 13.6797 4.89844 13.3047 5.30469L7.30469 11.3047C6.89844 11.6797 6.89844 12.3359 7.30469 12.7109L13.3047 18.7109C13.4922 18.8984 13.7422 18.9922 13.9922 18.9922Z"
                fill="#201B21"
              />
            </svg>
          </div>
          <div className={StyleSheet.middlesvg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <ellipse cx="6" cy="6" rx="6" ry="6" fill="#201B21" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle opacity="0.2" cx="4" cy="4" r="4" fill="#201B21" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle opacity="0.2" cx="4" cy="4" r="4" fill="#201B21" />
            </svg>
          </div>
          <div>
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
          </div>
        </ProductScroll>
      </LeftBox>
      <RightBox>
        <ProductTitle>
          <ShoeTag>
            <span className={StyleSheet.h6}>{shoedata[0].name}</span>
            <span className={StyleSheet.h7}>{shoedata[0].desc}</span>
          </ShoeTag>
          <span className={StyleSheet.h8}>${shoedata[0].price}</span>
        </ProductTitle>
        <ProductQuantity>
          <span className={StyleSheet.h8}>Quantity</span>
          <div className={StyleSheet.quantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M17.5 13H6.5C5.9375 13 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11 6.5 11H17.5C18.0312 11 18.5 11.4688 18.5 12C18.5 12.5625 18.0312 13 17.5 13Z"
                fill="#201B21"
              />
            </svg>
            <span id="span" className={StyleSheet.quantitynumber}>
              1
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
                fill="#201B21"
              />
            </svg>
          </div>
        </ProductQuantity>
        <Button>
          <span>Add to Cart</span>
          {/* <svg
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
          </svg> */}
        </Button>
      </RightBox>
      {/* </ProductInfo> */}
      {/* <ProductDescription> */}
      <LeftLowerBox>
        <ProductDescriptionTitle>
          <span className={StyleSheet.h9}>Description</span>
          <span>
            Energize your look with a fresh take on heritage adidas style. The
            adidas Daily 3.0 Shoes cut a classic profile with a modern suede
            upper. Your walk across campus or commute across town has never
            looked or felt this good.
          </span>
          {/* <span className={StyleSheet.points}> */}
          <ul>
            <li>Regular fit</li>
            <li>Lace closure</li>
            <li>Rubber outsole with vulcanized look</li>
            <li>Imported</li>
          </ul>

          {/* Regular fit <br /> Lace closure <br /> Rubber outsole with
            vulcanized look <br /> Imported */}
          {/* </span> */}
        </ProductDescriptionTitle>
      </LeftLowerBox>
      <RightLowerBox>
        <ProductDescriptionImage>
          <Image
            src={shoedata[0].imgdeskmain}
            alt="Picture of the author"
            width={500}
            height={500}
            style={{ width: "100%", height: "100%" }}
            priority={true}
          />
        </ProductDescriptionImage>
      </RightLowerBox>
      {/* </ProductDescription> */}
    </Product>
  );
};

export default ProductDetail;

const Product = styled.div`
  background-color: #ffffff;
  max-width: 100vw;
  /* max-height: 100vh !important; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 10%;
  gap: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 50%; */
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);
  /* width: 50%; */
`;

const ProductImage = styled.div`
  width: 100%;
  /* height: 100%; */
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
  /* background-color: #e9ebee; */
`;

const ProductScroll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProductTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 36px 32px 18px 32px;
`;

const ProductQuantity = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 32px;
  border-top: 1px solid var(--line-light-grey, #e9ebee);
  /* background: var(--line-light-grey, #e9ebee); */
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
  margin: 18px 32px;
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
`;

const LeftLowerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* width: 50%; */
`;

const RightLowerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* width: 50%; */
`;

const ProductDescriptionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  ul {
    list-style-type: disc;
    padding-left: 0;
    margin-left: 0;
    li {
      margin-left: 1em;
      /* text-indent: -1em; */
    }
  }
`;

const ProductDescriptionContent = styled.div`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0em;
  text-align: left;
`;

const ProductDescriptionImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #e9ebee;
`;

const ShoeTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

// Path: src/Components/Footer.tsx
