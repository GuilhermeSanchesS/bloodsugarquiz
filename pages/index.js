/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-named-as-default */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import ListQuiz from '../src/components/ListQuiz';
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  h1{
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>{db.title}</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Diz ai seu nome"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>🎮 Quizes da Galera</h1>

              <p>
                Dá uma olhada nesses quizes incríveis que o pessoal
                da Imersão fez:
              </p>
              <ListQuiz />
            </Widget.Content>
          </Widget>
          <Footer
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner
          projectUrl="https://github.com/GuilhermeSanchesS"
        />
      </QuizBackground>
    </>
  );
}
