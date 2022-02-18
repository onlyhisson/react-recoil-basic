import React, { useState } from "react";
import "./Error.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Error = ({ props: { status, message } }) => {
  const { width, height } = useWindowDimensions();
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  let pageX = width;
  let pageY = height;

  function handleMouseMove(event) {
    const mouseY = event.pageY;
    const yAxis = ((height / 2 - mouseY) / height) * 300;
    const mouseX = event.pageX / -width;
    const xAxis = -mouseX * 100 - 100;
    setMousePosition({ mouseX: xAxis, mouseY: yAxis });
  }

  return (
    <div className="box__container" onMouseMove={(e) => handleMouseMove(e)}>
      <div className="box">
        <div className="box__ghost">
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>

          <div className="box__ghost-container">
            <div
              className="box__ghost-eyes"
              style={{
                transform:
                  "translate(" +
                  mousePosition.mouseX +
                  "%,-" +
                  mousePosition.mouseY +
                  "%)",
              }}
            >
              <div className="box__eye-left"></div>
              <div className="box__eye-right"></div>
            </div>
            <div className="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="box__ghost-shadow"></div>
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">{status}</div>
            <div className="box__description-text">{message}</div>
          </div>

          <a
            href="https://codepen.io/diogo_ml_gomes/"
            target="_blank"
            className="box__button"
          >
            Go back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
