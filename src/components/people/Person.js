import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

// Import individual thumbnails

// This is ugly, will fix later. sry
import placeholder from "./headshots/profile-placeholder.svg";
import truitt from "./headshots/Truitt.jpg";
import nair from "./headshots/Nair.jpg";
import gooneratne from "./headshots/Gooneratne.jpg";
import yanchencko from "./headshots/Yanchencko.jpg";
import rein from "./headshots/Rein.jpg";
import chua from "./headshots/Chua.jpg";
import wu from "./headshots/Wu.jpg";
import binette from "./headshots/Binette.jpg";
import luo from "./headshots/Luo.jpg";
import middlemiss from "./headshots/Middlemiss.png";
import gong from "./headshots/Gong.png";
import greenberg from "./headshots/Greenberg.jpg";
import yang from "./headshots/Yang.jpg";
import klett from "./headshots/Klett.jpg";
import williamson from "./headshots/Williamson.jpg";
import alqabandi from "./headshots/Alqabandi.jpg";
import baig from "./headshots/Baig.jpg";
import levy from "./headshots/Levy.jpg";
import moiseyev from "./headshots/Moiseyev.jpg";
import fan from "./headshots/Fan.jpg";
import wang from "./headshots/Wang.jpg";
import barnett from "./headshots/Barnett.jpg";
import tao from "./headshots/Tao.jpg";
import cuozzo from "./headshots/Alqabandi.jpg";
import focht from "./headshots/Alqabandi.jpg";
import yoon from "./headshots/Alqabandi.jpg";
import llave from "./headshots/Alqabandi.jpg";
import mehta from "./headshots/Alqabandi.jpg";
import wolf from "./headshots/Alqabandi.jpg";
import zhou from "./headshots/Alqabandi.jpg";
import buckvar from "./headshots/Alqabandi.jpg";
import gupta from "./headshots/Alqabandi.jpg";
import katariya from "./headshots/Alqabandi.jpg";
import gollapudy from "./headshots/Alqabandi.jpg";
import jain from "./headshots/Alqabandi.jpg";
import bhatt from "./headshots/Alqabandi.jpg";
import hobart from "./headshots/Alqabandi.jpg";

// compose dictionary of headshots for people that have headshots
const headshots = {
  "Luke	Truitt": truitt,
  "Varun Nair": nair,
  "Mary	Gooneratne": gooneratne,
  "Anna	Yanchencko": yanchencko,
  "David	Rein": rein,
  "Jia Rong	Chua": chua,
  "Lindsay	Wu": wu,
  "Olivier Binette": binette,
  "Qingying	Luo": luo,
  "Ryan	Middlemiss": middlemiss,
  "Yishu	Gong": gong,
  "Morris	Greenberg": greenberg,
  "Hang	Yang": yang,
  "Phoebe	Klett": klett,
  "Rachel	Williamson": williamson,
  "Tima	Alqabandi": alqabandi,
  "Yasa	Baig": baig,
  "Ben	Levy": levy,
  "Nicole	Moiseyev": moiseyev,
  "Shuyi	Fan": fan,
  "Bree Wang":wang,
  "Daniel	Tao":tao,
  "Alina Barnett":barnett,
  "Madeline Cuozzo":cuozzo,
  "Wyatt Focht":focht,
  "Christine Yoon":yoon,
  "Russell Llave":llave,
  "Raj Mehta":mehta,
  "Luiza Wolf":wolf,
  "Cady Zhou":zhou,
  "Anabella Buckvar":buckvar,
  "Sauren Gupta":gupta,
  "Jaiveer Katariya":katariya,
  "Ram Gallopudy": gollapudy,
  "Himanshu Jain": jain,
  "Suchir Bhatt": bhatt,
  "Niko Hobart": hobart
};

function Person(props) {
  console.log(props.img);
  console.log(props.linkedIn);

  const github =
    props.github != null ? (
      <a
        className="github-icon button ripple"
        style={{ float: "left" }}
        target="_blank"
        href={props.github}
      ></a>
    ) : (
      ""
    );

  const linkedin =
    props.linkedin != null ? (
      <a
        className="linkedin-icon button"
        style={{ float: "left" }}
        target="_blank"
        href={props.linkedin}
      ></a>
    ) : (
      ""
    );

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <div className="person-image">
        <img
          src={props.img === "" ? placeholder : headshots[props.name]}
          style={{
            height: "120px",
            width: "120px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
          onClick={props.onClick}
        />
      </div>
      <Row>
        <Col xl={12}>
          <center>
            <div style={{ display: "inline-block", padding: "0.5rem 0 0 0" }}>
              {linkedin}
              {github}
            </div>
          </center>
        </Col>
      </Row>
      <div style={{ color: "#f0efe5" }}>
        <div style={{ fontSize: "1.5rem" }}>{props.name} </div>
      </div>
    </Col>
  );
}
export default Person;
