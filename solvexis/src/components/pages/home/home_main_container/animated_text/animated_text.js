import React, { useState, useEffect } from "react";

const AnimatedText = ({ options, setDescription }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    if (subIndex === options[index].header.length + 1 && !reverse) {
      setPause(true);
      setTimeout(() => {
        setReverse(true);
        setPause(false);
      }, 1200);
      return;
    }

    if (subIndex === 0 && reverse) {
      setPause(true);
      setDescription(options[(index + 1) % options.length].description);
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % options.length);

        setPause(false);
      }, 1200);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, options, pause, setDescription]);

  return (
    <p className="home_main_header_experts_txt">
      {`${options[index].header.substring(0, subIndex)}_`}
    </p>
  );
};

export default AnimatedText;
