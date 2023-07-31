import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { shoedata } from "./ShoeData";
import Image from "next/image";
import StyleSheet from "../app/page.module.css";

const CartLand = () => {
  const [count, setCount] = React.useState(1);

  return (
    <CartBox>
      <div className={StyleSheet.cart}>
        <h1 className={StyleSheet.h5}>Your Bag</h1>
        <CartItem>
          <CartInfo>
            <CartImage>
              <Image
                src={shoedata[0].imgdeskmain}
                alt="Picture of the author"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </CartImage>
            <CartName>
              <ProductLink>
                <ShoeTag>
                  <span className={StyleSheet.h6}>{shoedata[0].name}</span>
                  <span className={StyleSheet.h7}>{shoedata[0].desc}</span>
                </ShoeTag>
                <span className={StyleSheet.h8}>${shoedata[0].price}</span>
              </ProductLink>
              <CartDescription>
                <div className={StyleSheet.quantity}>
                  <div
                    onClick={() =>
                      setCount((curr) => {
                        if (curr <= 0) {
                          return curr;
                        }
                        return curr - 1;
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <path
                        opacity="0.4"
                        d="M17.5 13H6.5C5.9375 13 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11 6.5 11H17.5C18.0312 11 18.5 11.4688 18.5 12C18.5 12.5625 18.0312 13 17.5 13Z"
                        fill="#201B21"
                      />
                    </svg>
                  </div>
                  <span className={StyleSheet.quantitynumber}>{count}</span>
                  <div onClick={() => setCount((curr) => curr + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <path
                        d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
                        fill="#201B21"
                      />
                    </svg>
                  </div>
                </div>
                <span onClick={() => setCount(0)}>Remove</span>
              </CartDescription>
            </CartName>
          </CartInfo>
          <CartInfo>
            <CartImage>
              <Image
                src={shoedata[1].imgdeskmain}
                alt="Picture of the author"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </CartImage>
            <CartName>
              <ProductLink>
                <ShoeTag>
                  <span className={StyleSheet.h6}>{shoedata[1].name}</span>
                  <span className={StyleSheet.h7}>{shoedata[1].desc}</span>
                </ShoeTag>
                <span className={StyleSheet.h8}>${shoedata[1].price}</span>
              </ProductLink>
              <CartDescription>
                <div className={StyleSheet.quantity}>
                  <div
                    onClick={() =>
                      setCount((curr) => {
                        if (curr <= 0) {
                          return curr;
                        }
                        return curr - 1;
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <path
                        opacity="0.4"
                        d="M17.5 13H6.5C5.9375 13 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11 6.5 11H17.5C18.0312 11 18.5 11.4688 18.5 12C18.5 12.5625 18.0312 13 17.5 13Z"
                        fill="#201B21"
                      />
                    </svg>
                  </div>
                  <span id="span" className={StyleSheet.quantitynumber}>
                    {count}
                  </span>
                  <div onClick={() => setCount((curr) => curr + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <path
                        d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
                        fill="#201B21"
                      />
                    </svg>
                  </div>
                </div>
                <span>Remove</span>
              </CartDescription>
            </CartName>
          </CartInfo>
        </CartItem>
      </div>
      <div className={StyleSheet.pricecart}>
        <Price>
          <PriceDescription>
            <span className={StyleSheet.h5}>Summary</span>
            <ul>
              <li>
                Subtotal
                <span className={StyleSheet.h6}>
                  ${shoedata[0].price + shoedata[1].price}
                </span>
              </li>
              <li>
                Shipping and Delivery
                <span className={StyleSheet.h6}>
                  ${shoedata[0].ship + shoedata[1].ship}
                </span>
              </li>
              <li>
                Tax
                <span className={StyleSheet.h6}>
                  ${shoedata[0].tax + shoedata[1].tax}
                </span>
              </li>
              <li>
                Discout
                <span className={StyleSheet.h6} style={{ color: "red" }}>
                  - ${shoedata[0].discount + shoedata[1].discount}
                </span>
              </li>
            </ul>
            <div>
              <span className={StyleSheet.h9}>Total</span>
              <span className={StyleSheet.h6}>${shoedata[0].price * 0.1}</span>
            </div>
          </PriceDescription>
          <Button>
            <span id="span">Checkout</span>
          </Button>
        </Price>
      </div>
    </CartBox>
  );
};

export default CartLand;

const CartBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 5% 10%;
  max-width: 100vw;
  height: 100%;
  gap: 20px;
  background-color: #ffffff;
  /* border: 1px solid #e9ebee;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px; */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    /* margin: 5% 5%; */
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

const CartInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  padding: 0;
  /* overflow: scroll; */
  height: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid #e9ebee;
`;

const CartImage = styled.div`
  min-width: 200px;
  min-height: 150px;
  @media (max-width: 512px) {
    min-width: 100px;
    min-height: 80px;
  }
`;

const CartName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 0 10%; */
  height: 100%;
  width: 100%;
`;

const ShoeTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
`;

const CartDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 
  align-items: center;
  width: 40%;
  position: sticky; */
  /* padding: 36px; */
  width: 100%;
  /* border: 1px solid #e9ebee; */
  /* margin: 10% 0; */
  /* border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08); */
  @media (max-width: 768px) {
    width: 90%;
    /* margin: 60px 0; */
  }
`;

const PriceDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 32px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 32px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    padding-bottom: 32px;
    border-bottom: 1px solid black;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    color: var(--black, #201b21);
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
    letter-spacing: -0.5px;
  }
  @media (max-width: 1040px) {
    gap: 15px;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 18px;
  }
`;

const Button = styled.div`
  display: inline-flex;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-items: center;
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
  @media (max-width: 1040px) {
    margin-top: 0;
  }
`;
