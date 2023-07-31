"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import styled from "styled-components";
import CartLand from "@/Components/CartLand";

export default function Home() {
  return (
    <div>
      <Header />
      <CartLand />
      <Footer />
    </div>
  );
}
