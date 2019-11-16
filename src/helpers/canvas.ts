interface CommonProps {
  ctx: CanvasRenderingContext2D;
}

interface Coordinates {
  x: number;
  y: number;
}

export function drawArc(props: CommonProps & Coordinates): CanvasRenderingContext2D {
  const { ctx, x, y } = props;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  return ctx;
}
