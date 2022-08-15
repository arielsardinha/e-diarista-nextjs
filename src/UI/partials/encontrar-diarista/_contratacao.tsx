import { Button, Paper } from "@mui/material";
import { spawn } from "child_process";
import useContratacao from "data/hooks/pages/useContratacao.page";
import useIsMobile from "data/hooks/useIsMobile";
import React, { PropsWithChildren } from "react";
import { FormProvider } from "react-hook-form";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SideInformation from "UI/components/data-display/SideInformation/SideInformation";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import {
  UserFormContainer,
  PageFormContainer,
} from "UI/components/inputs/UserForm/UserForm";
import BreadCrumb from "UI/components/navigation/BreadCrumb/BreadCrumb";
import CadastroCliente from "./_cadastro-cliente";
import DetalheServico from "./_detalhe-servico";

// import { Component } from './_contratacao.styled';

const Contratacao: React.FC<PropsWithChildren> = () => {
  const {
    step,
    breadcrumbItems,
    serviceForm,
    onServiceFormSubmit,
    servicos,
    hasLogin,
    setHasLogin,
    cleintForm,
    onClientFormSubmit,
    setStep,
  } = useContratacao();
  const isMobile = useIsMobile();
  return (
    <div>
      {!isMobile && <SafeEnvironment />}
      <BreadCrumb
        selected={breadcrumbItems[step - 1]}
        items={breadcrumbItems}
      />
      {step === 1 && <PageTitle title="Nos conte um pouco sobre o serviço!" />}

      {step === 2 && (
        <PageTitle
          title="Precisamos conhecer um pouco sobre você!"
          subtitle={
            !hasLogin ? (
              <span>
                Caso já tenha cadastro,{" "}
                <Button onClick={() => setHasLogin(true)}>clique aqui</Button>
              </span>
            ) : (
              <span>
                Caso não tenha cadastro,{" "}
                <Button onClick={() => setHasLogin(false)}>clique aqui</Button>
              </span>
            )
          }
        />
      )}

      <UserFormContainer>
        <PageFormContainer>
          <Paper>
            <FormProvider {...serviceForm}>
              <form
                onSubmit={serviceForm.handleSubmit(onServiceFormSubmit)}
                hidden={step !== 1}
              >
                <DetalheServico servicos={servicos} />
              </form>
            </FormProvider>

            <FormProvider {...cleintForm}>
              <form
                onSubmit={cleintForm.handleSubmit(onClientFormSubmit)}
                hidden={step !== 2 || hasLogin}
              >
                <CadastroCliente onBack={() => setStep(1)} />
              </form>
            </FormProvider>
          </Paper>
          {!isMobile && step !== 4 && (
            <SideInformation
              title="Detalhes"
              items={[
                {
                  title: "Tipo",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
                {
                  title: "Tamanho",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
                {
                  title: "Data",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
              ]}
              footer={{
                text: "R$80,00",
                icon: "twf-credit-card",
              }}
            />
          )}
        </PageFormContainer>
      </UserFormContainer>
    </div>
  );
};

export default Contratacao;
