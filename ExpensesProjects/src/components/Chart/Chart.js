import Chartbar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <Chartbar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          ></Chartbar>
        );
      })}
    </div>
  );
};

export default Chart;
