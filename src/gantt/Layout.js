import h from '../h';

export default function Layout({
  styles, width, height, offsetY, maxTextWidth, maxDurationWidth, selectedWidth
}) {
  const x0 = 0;
  const W = width ;
  const H = height;  

  return (
    <g>
      <rect x={x0} y={x0} width={W} height={H} style={styles.box} />
      <line x1={0} x2={width} y1={offsetY - x0} y2={offsetY - x0} style={styles.bline} />
      <line x1={selectedWidth + maxTextWidth + maxDurationWidth} x2={width} y1={offsetY / 2} y2={offsetY / 2} style={styles.line} />
    </g>
  );
}
