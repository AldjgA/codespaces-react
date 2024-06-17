import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

function formatFileName(fileName) {
  let nameWithoutExtension = fileName.replace(/\.\w+$/, '');
  let formattedName = nameWithoutExtension
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .trim();

  return formattedName;
}

function Lado(args) {

    const items = [
        {
          src: args.src1,
          key: 1,
        },
        {
          src: args.src2,
          key: 2,
        },
        {
          src: args.src3,
          key: 3,
        },
        /*
        {
          src: args.src4,
          key: 4,
        },
        {
          src: args.src5,
          key: 5,
        },
        */
        
      ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={formatFileName(item.src)} style={{width:"500px",height:"500px"}}/>
        <CarouselCaption
          captionText={"Beizaga Marquez Ricardo Andres"}
          captionHeader={formatFileName(item.src)}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Lado;