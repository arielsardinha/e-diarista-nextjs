import { Button, Container, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";

import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "./_verificar-profissionais.styled";

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <Container sx={{ mb: 10 }}>
        <FormElementsContainer>
          <TextFieldMask mask="99.999-999" label="Digite seu CEP" fullWidth />

          <Typography color="error">Cep não encontrado</Typography>

          <Button variant="contained" color="secondary" sx={{ width: "220px" }}>
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name="Ariel Sardinha"
              picture="https://github.com/arielsardinha.png"
              rating={3}
              description="Web Developer"
            />
            <UserInformation
              name="Ariel Sardinha"
              picture="https://github.com/arielsardinha.png"
              rating={3}
              description="Web Developer"
            />
            <UserInformation
              name="Ariel Sardinha"
              picture="https://github.com/arielsardinha.png"
              rating={3}
              description="Web Developer"
            />
          </ProfissionaisContainer>

          <Container sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 5 }}>
              ... mais 50 diaristas disponiveis oa seu endereço
            </Typography>

            <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
              Contratar um(a) profissional
            </Button>
          </Container>
        </ProfissionaisPaper>
      </Container>
    </>
  );
};

export default VerificarProfissionais;
