interface CommonProps {
  color: string;
  ctx: CanvasRenderingContext2D;
}

interface Coordinates {
  x: number;
  y: number;
}

interface BallProps {
  angleStart?: number;
  angleEnd?: number;
  radius?: number;
}

export function drawBall(props: CommonProps & Coordinates & BallProps): CanvasRenderingContext2D {
  const { angleEnd = Math.PI * 2, angleStart = 0, color, ctx, radius = 10, x, y } = props;
  ctx.beginPath();
  ctx.arc(x, y, radius, angleStart, angleEnd);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
  return ctx;
}
