import React from "react";
import { Card as BSCard, Col } from "react-bootstrap";
import Zero from "assets/pokerCards/0 - planning poker_Here be dragons.svg";
import Half from "assets/pokerCards/0.5 - planning poker_Coffee break.svg";
import One from "assets/pokerCards/1 - planning poker_Low hanging fruit.svg";
import Five from "assets/pokerCards/5 - planning poker-Ornitorinco.svg";
import Eight from "assets/pokerCards/8 - planning poker_An arm and a leg.svg";
import Twenty from "assets/pokerCards/20 - planning poker_Don't put all .svg";
import Hundred from "assets/pokerCards/100 - planning poker_Monster task.svg";
import Two from "assets/pokerCards/2 - planning poker_Piece of cake.svg";
import QuestionMark from "assets/pokerCards/101 - planning poker_When pigs fly.svg";
import Three from "assets/pokerCards/3 - planning poker_It ain't rocket science.svg";
import Thirteen from "assets/pokerCards/13 - planning poker_Squeaking by.svg";
import Fourty from "assets/pokerCards/40 - planning poker_Meterse en un berenjenal.svg";
import xsmall from "assets/pokerCards/xs - planning poker_When pigs fly.svg";
import small from "assets/pokerCards/sm - planning poker_Don't put all.svg";
import medium from "assets/pokerCards/md - planning poker_Squeaking by.svg";
import large from "assets/pokerCards/lg - planning poker_An arm and a leg.svg";
import xlarge from "assets/pokerCards/xl - planning poker_Low hanging fruit.svg";
import xxlarge from "assets/pokerCards/xxl - planning poker_It ain't rocket science.svg";

const CardMapping = {
  "0": Zero,
  "0.5": Half,
  "1": One,
  "2": Two,
  "3": Three,
  "5": Five,
  "8": Eight,
  "13": Thirteen,
  "20": Twenty,
  "40": Fourty,
  "100": Hundred,
  "?": QuestionMark,
  xs: xsmall,
  s: small,
  m: medium,
  l: large,
  xl: xlarge,
  xxl: xxlarge,
};

const Card = ({ value, handleClick }) => {
  if (value && CardMapping[value.toString()])
    return (
      <Col sm='2' className='text-center mb-2'>
        <BSCard>
          <BSCard.Body
            className='p-0 cursor-pointer'
            onClick={() => handleClick(value)}
          >
            <img src={CardMapping[value]} alt='value' />
          </BSCard.Body>
        </BSCard>
      </Col>
    );
  else return <></>;
};

export default Card;
