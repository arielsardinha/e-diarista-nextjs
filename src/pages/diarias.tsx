import React from "react";
import { GetStaticProps } from "next";
import MinhasDiarias from "@patials/diarias/_minhas-diarias";
import { DiariaProvider } from "data/contexts/DiariaContext";

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
    <DiariaProvider>
      <MinhasDiarias />
    </DiariaProvider>
  );
};

export default Diarias;
