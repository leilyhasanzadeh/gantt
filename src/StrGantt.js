import h from './h';
import Gantt from './gantt';
import render from './render/string';
import { minDate, maxDate } from './utils';

export default class StrGantt {
  constructor(data, width, options = {}) {
    this.format(data);
    this.options = options;    
    this.width = width;
  }
  format(data) {
    this.data = data;
    let start = null;
    let end = null;
    data.forEach((v) => {
      start = minDate(start, v.start);
      end = maxDate(end, v.end);
    });
    this.start = start || new Date();
    this.end = end || new Date();
  }
  setData(data) {
    this.format(data);
  }
  setOptions(options) {
    this.options = { ...this.options, ...options };
  }
  render() {
    const {
      data, start, end, options
    } = this;
    const props = { ...options, start, end };
    console.log("StrGantt", this.width);
    return render(<Gantt data={data} width={this.width} {...props} />);
  }
}
