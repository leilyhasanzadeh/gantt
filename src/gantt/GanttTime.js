import h from '../h';

export default function GanttTime({
  styles, data, onClick, rowHeight, offsetY, maxTextWidth, maxDurationWidth, selectedWidth
}) {
  return (    
    <g>
      <text x={maxTextWidth + selectedWidth + maxDurationWidth / 2} y={offsetY * 0.5} style={styles.text3}>Start/End</text>
      {data.map((v, i) => (
        <text
          key={i}
          x={selectedWidth + maxTextWidth + 5}
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
