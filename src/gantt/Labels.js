import h from '../h';

export default function Labels({
  styles, data, onClick, rowHeight, offsetY, maxTextWidth, selectedWidth
}) {
  return (    
    <g>
      <text x={selectedWidth + maxTextWidth / 2} y={offsetY * 0.5} style={styles.text3}>Title</text>
      {data.map((v, i) => (
        <text
          key={i}
          x={selectedWidth + 5}
          y={(i + 0.5) * rowHeight + offsetY}
          class="gantt-label"
          style={styles.label}
          onClick={() => onClick(v)}
        >
          {v.text}
        </text>
      ))}
    </g>    
  );
}
