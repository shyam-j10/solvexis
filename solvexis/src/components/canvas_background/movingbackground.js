import React, { useRef, useEffect } from "react";

const MovingBackground = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const yPos = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure the canvas element is available
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure the context is available
    const image = new Image();
    image.src =
      "https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/66d04542d958f0eebabe07ff_background-spline.webp";
    imageRef.current = image;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, yPos.current, canvas.width, canvas.height);
      ctx.drawImage(
        image,
        0,
        yPos.current - canvas.height,
        canvas.width,
        canvas.height
      );
      yPos.current += 1;
      if (yPos.current >= canvas.height) {
        yPos.current = 0;
      }
      requestAnimationFrame(draw);
    };

    image.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    return () => {
      cancelAnimationFrame(draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default MovingBackground;
