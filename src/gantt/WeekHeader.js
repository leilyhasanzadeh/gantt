import h from '../h';
import { getDates, addDays, DAY } from '../utils';
import YearMonth from './YearMonth';

export default function WeekHeader({
  styles, unit, minTime, maxTime, height, offsetY, maxTextWidth, maxDurationWidth, selectedWidth
}) {
  const dates = getDates(minTime, maxTime);
  const weeks = dates.filter((v) => (new Date(v)).getDay() === 0);
  weeks.push(maxTime);
  const ticks = [];
  const x0 = selectedWidth + maxTextWidth + maxDurationWidth;
  const y0 = offsetY;
  const RH = height - y0;
  const d = DAY / unit;
  const len = weeks.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(weeks[i]);
    const x = x0 + (weeks[i] - minTime) / unit;
    const curDay = cur.getDate();
    const prevDay = addDays(cur, -1).getDate();

    ticks.push((
      <g>
        <rect x={x} y={y0} width={56} height={RH} style={i%2 === 0? styles.weekGray : styles.weekWhite} />
        <line x1={x} x2={x} y1={offsetY / 2} y2={offsetY} style={styles.line} />
        <text x={x + 3} y={offsetY * 0.75} style={styles.text2}>{curDay}</text>
        {x - x0 > 28 ? (
          <text x={x - 3} y={offsetY * 0.75} style={styles.text1}>{prevDay}</text>
        ) : null}
      </g>
    ));
  }
  return (
    <g>
      <YearMonth
        styles={styles}
        unit={unit}
        dates={dates}
        offsetY={offsetY}
        minTime={minTime}
        maxTime={maxTime}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />
      {ticks}
    </g>
  );
}
