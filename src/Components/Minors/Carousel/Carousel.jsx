import React, { useState, useEffect, useRef } from "react";
import styles from "./CarouselStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import classNames from "classnames/bind";

function Carousel(props) {
  // Drag events

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(0);

  const carouselElement = useRef();

  function handleMouseDown(e) {
    e.preventDefault(); // Чтобы не перетаскивать картинки
    setIsDown(true);

    if (e.pageX === undefined) {
      setStartX(e.touches[0].pageX - carouselElement.current.offsetLeft);
    } else {
      setStartX(e.pageX - carouselElement.current.offsetLeft);
    }

    setScrollLeftState(carouselElement.current.scrollLeft);
    setMouseMoved(0);
  }

  function handleMouseMove(e) {
    if (!isDown) return;

    const currentMousePosition =
      e.pageX === undefined
        ? e.touches[0].pageX - carouselElement.current.offsetLeft
        : e.pageX - carouselElement.current.offsetLeft;

    setMouseMoved(currentMousePosition - startX);
  }

  useEffect(() => {
    carouselElement.current.scrollLeft = scrollLeftState - mouseMoved;
  }, [scrollLeftState, mouseMoved]);

  // Arrows events

  let cardRefs = useRef([]);

  // useEffect(() => {
  //   cardRefs.current = cardRefs.current.slice(0, props.projects.length);
  // }, [props.projects]);

  const arr = props.projects.map((el, index) => {
    return (
      <ProjectCard
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        key={index}
        name={el.name}
        description={el.description}
        image={el.image}
        darkTheme={props.darkTheme}
      />
    );
  });

  function onClickScrollSlider(e) {
    let cardWidth =
      cardRefs.current[0].clientWidth + cardRefs.current[0].clientWidth / 8;
    e.currentTarget.classList.contains(styles.leftArrow)
      ? (carouselElement.current.scrollLeft -= cardWidth)
      : (carouselElement.current.scrollLeft += cardWidth);
  }

  let usingStyleClass = isDown
    ? `${styles.carouselContainer} ${styles.dragging}`
    : styles.carouselContainer;

  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.mainProjectContainer} ${darkStyles}`}>
      <p
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={onClickScrollSlider}
      ></p>
      <div
        className={usingStyleClass}
        ref={carouselElement}
        // Mouse events
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => setIsDown(false)}
        onMouseLeave={() => setIsDown(false)}
        onMouseMove={(e) => handleMouseMove(e)}
        //touch events
        onTouchStart={(e) => handleMouseDown(e)}
        onTouchEnd={() => setIsDown(false)}
        onTouchCancel={() => setIsDown(false)}
        onTouchMove={(e) => handleMouseMove(e)}
      >
        {arr}
      </div>
      <p
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={onClickScrollSlider}
      ></p>
    </div>
  );
}

export default Carousel;
