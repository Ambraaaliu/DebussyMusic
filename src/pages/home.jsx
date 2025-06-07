import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <div className="frontPage">
        <div className="homeicons">
          <li>
            <a className="homeicon1" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="homeicon2" href="/Album">
              Albums
            </a>
          </li>
          <li>
            <a className="homeicon3" href="/album1">
              Chouchou
            </a>
          </li>
          <li>
            <a className="homeicon4" href="/album2">
              River
            </a>
          </li>
          <li>
            <a className="homeicon5" href="album3">
              Snqaoud
            </a>
          </li>
        </div>

        <h1 className="hometitle">Debussy. Music</h1>

        <div className="homenews">
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
}
