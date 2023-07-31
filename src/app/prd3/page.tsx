"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import styled from "styled-components";
import ProductDetail3 from "@/Components/ProductDetail3";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductDetail3 />
      <Footer />
    </div>
  );
}
