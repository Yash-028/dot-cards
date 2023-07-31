"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import styled from "styled-components";
import ProductDetail2 from "@/Components/ProductDetail2";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductDetail2 />
      <Footer />
    </div>
  );
}
