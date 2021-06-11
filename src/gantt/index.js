import h from '../h';
import { DAY } from '../utils';
import Layout from './Layout';
import WeekHeader from './WeekHeader';
import Grid from './Grid';
import Labels from './Labels';
import GanttTime from './GanttTime';
import SelectItem from "./SelectItem";
import LinkLine from './LinkLine';
import Bar from './Bar';
import getStyles from './styles';

function NOOP() {}

export default function Gantt({
  data = [],
  onClick = NOOP,
  selectedWidth = 50,
  offsetY = 60,
  rowHeight = 40,
  barHeight = 16,
  thickWidth = 1.4,
  styleOptions = {},
  showDelay = true,
  start,
  end,
  width
}) {
  
  const maxTextWidth = width ? width * 0.15 : 140;
  const maxDurationWidth = width ? width * 0.15 : 140;
  const month = width ? width/((end.getTime() - start.getTime())/28) : 30 * DAY / 56;
  const unit = width ? month / 4 : 30 * DAY / 56;
  const minTime = start.getTime() - unit * 48;
  const maxTime = end.getTime() + unit * 48;
  const ganttWidth = width ? width : (maxTime - minTime) / unit + maxTextWidth + maxDurationWidth;
  const height = data.length * rowHeight + offsetY;
  const box = `0 0 ${ganttWidth} ${height}`;
  const current = Date.now();
  const styles = getStyles(styleOptions);

  return (
    <svg width={"100%"} height={height} viewBox={box} xmlns="http://www.w3.org/2000/svg">
      <Layout
        styles={styles}
        width={ganttWidth}
        height={height}
        offsetY={offsetY}
        thickWidth={thickWidth}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />      
      <WeekHeader
        styles={styles}
        unit={unit}
        height={height}
        offsetY={offsetY}
        minTime={minTime}
        maxTime={maxTime}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />     
      <Grid
        styles={styles}
        data={data}
        width={ganttWidth}
        height={height}
        offsetY={offsetY}
        rowHeight={rowHeight}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />
      <SelectItem
        styles={styles}
        data={data}
        onClick={onClick}
        offsetY={offsetY}
        rowHeight={rowHeight}
        selectedWidth={selectedWidth}
      />
      <Labels
        styles={styles}
        data={data}
        onClick={onClick}
        offsetY={offsetY}
        rowHeight={rowHeight}
        maxTextWidth={maxTextWidth}
        selectedWidth={selectedWidth}
      />
      <GanttTime
        styles={styles}
        data={data}
        onClick={onClick}
        offsetY={offsetY}
        rowHeight={rowHeight}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />
      <LinkLine
        styles={styles}
        data={data}
        unit={unit}
        height={height}
        current={current}
        offsetY={offsetY}
        minTime={minTime}
        rowHeight={rowHeight}
        barHeight={barHeight}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      />
      {/* <Bar
        styles={styles}
        data={data}
        unit={unit}
        height={height}
        current={current}
        offsetY={offsetY}
        minTime={minTime}
        onClick={onClick}
        showDelay={showDelay}
        rowHeight={rowHeight}
        barHeight={barHeight}
        maxTextWidth={maxTextWidth}
        maxDurationWidth={maxDurationWidth}
        selectedWidth={selectedWidth}
      /> */}
    </svg>
  );
}
