import React, { FC } from "react";
import Footer from "components/layout/Footer";
import { Button } from "components/ui/";
import home from "./Home.module.scss";

const Home: FC = () => (
  <section>
    <article className={home.article1}>
      <div className={home.container}>
        <div className={home.article1Left}>
          <h1>5th Edition Sidekick</h1>
          <p>
            5th Edition Sidekick lets you create and manage character sheets.
          </p>
        </div>
        <div className={home.article1Right}>
          <Button className={home.signUpBtn}>Sign up</Button>
        </div>
      </div>
    </article>
    <article className={home.article2}>
      <div className={home.container}>
        <h1>Test title</h1>
        <h4>Test subtitle</h4>
        <div className={home.wrapper}>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
        </div>
      </div>
    </article>
    <article className={home.article3}>
      <div className={home.container}>
        <h1>Test title</h1>
        <h4>Test subtitle</h4>
        <div className={home.wrapper}>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
          <div className={home.card}>card 1</div>
          <div className={home.cardAlt}>card 2</div>
        </div>
      </div>
    </article>
    <Footer />
  </section>
);

export default Home;
