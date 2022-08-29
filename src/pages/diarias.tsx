import React from "react";
import { GetStaticProps } from "next";
import MinhasDiarias from "@patials/diarias/_minhas-diarias";

// import { Component } from '@styles/pages/diarias.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Diárias",
    },
  };
};

const Diarias: React.FC = () => {
  return (
    <div>
      <MinhasDiarias />
    </div>
  );
};

export default Diarias;
