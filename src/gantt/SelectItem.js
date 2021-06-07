import h from '../h';

export default function SelectItem({
  styles, data, rowHeight, offsetY, selectedWidth
}) {
  return (    
    <g>
      <text x={selectedWidth / 2} y={offsetY * 0.5} style={styles.text3}></text>             
      {data.map((v, i) => (
        <foreignObject 
          width={selectedWidth} 
          height={rowHeight} 
          x={0}
          y={(i) * rowHeight + offsetY}          
        >
          <input type="checkbox" style={{marginTop: `${(rowHeight - 13) / 2}px`}} data-id={v.id} class={"construe__checkbox"} />          
        </foreignObject>        
      ))}
    </g>    
  );
}
