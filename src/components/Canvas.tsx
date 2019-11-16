import React, { FunctionComponent, useEffect, useRef } from 'react';

import { drawArc } from '../helpers/canvas';

export const Canvas: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let x = canvas.width / 2;
    let y = canvas.height - 30;

    while (x < canvas.width) {
      drawArc({ ctx, x, y });
      x += 2;
      y += -2;
    }
  });

  return <canvas id="canvas" width={640} height={480} ref={canvasRef} />;
};
