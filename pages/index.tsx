import React from "react";
import type { NextPage } from "next";
import MainLayout from "@/layout/App";
import Utterance from "@/components/Utterance";
import Title from "@/components/Title";
import Head from "next/head";

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>한마디 해주기</title>
      </Head>
      <section id={`main`}>
        <MainLayout
          utterance={<Utterance repo="J1min/comments" theme="photon-dark" />}
          title={<Title>한마디 해주기 🤔</Title>}
        />
      </section>
    </>
  );
};

export default Main;
