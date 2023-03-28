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
        <title>안녕하세요! 홍지민입니다 🙇‍♂️</title>
      </Head>
      <section id="main">
        <MainLayout
          utterance={<Utterance repo="J1min/comments" theme="photon-dark" />}
          title={<Title>>안녕하세요! 홍지민입니다 🙇‍♂️</Title>}
        />
      </section>
    </>
  );
};

export default Main;
