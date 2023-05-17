import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ datapoints }) => {
  const dataPointValues = datapoints.map((datapoint) => datapoint.value);
  const maximumValue = Math.max(...dataPointValues);
  console.log(dataPointValues, maximumValue);

  return (
    <div className="chart">
      {datapoints.map(({ value, label }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={maximumValue}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
