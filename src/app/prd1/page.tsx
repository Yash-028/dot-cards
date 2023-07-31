"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import styled from "styled-components";
import ProductDetail from "@/Components/ProductDetail";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}
