/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import { motion } from 'framer-motion';
import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import Time from '../../components/Time';
import BackLinkArrow from '../../components/BackLinkArrow';
import loadingAnimation from './animations/loading.json';
import Alert from '../../components/Alert';

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;


  return (
    <>
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
          {`PARABÉNS 🏅 ${name}!!`}
        </Widget.Header>

        <Widget.Content>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
            src={db.winner}
          />
          <p>
            Você acertou 🏆
            {' '}
            {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)} */}
            {results.filter((x) => x).length}
            {' '}
            perguntas
          </p>
          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                {`0${index + 1}º`}
                Resultado: {' '}
                {result === true
                  ? '✅ Acertou'
                  : '❌ Errou'}
              </li>
            ))}
          </ul>
          <Button type="button" onClick={() => router.push('/')}>
            RENICIAR
          </Button>
        </Widget.Content>
      </Widget>
    </>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="400px"
          height="400px"
          className="lottie-container basic"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  
  const [timer, setTimer] = React.useState(30);

  React.useEffect(() => {
		let alarm = setInterval(handleTimer, 1000);

		function handleTimer() {
			setTimer((timer) => timer - 1);
		}

		if (timer === 0) {
			console.log(timer);
			clearInterval(alarm);
			setTimer(0);
			setTimeout(() => {() => router.push('/')}, 5 * 1000);
		}

		return () => clearInterval(alarm);
  }, [timer]);
  
  return (
    <>
      <Alert status={timer === 0 ? 'show' : ''} />
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
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
        <Time count={timer} />
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setTimer(30);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 5 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>👍 Você acertou! Parabéns ✅</p>}
          {isQuestionSubmited && !isCorrect && <p>👎Incorreta! Continue tentando ❌</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget> 
    </>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT
        && (
          <Widget>
            <Widget.Content>
              <ResultWidget results={results} />
            </Widget.Content>
          </Widget>

        )}
      </QuizContainer>
    </QuizBackground>
  );
}
