import { useNavigate } from "@tanstack/react-router";
import { ChartSignal, Route } from "../routes/vehicle.$vin";

const VehicleChart = () => {
    const chartSignal = Route.useSearch({ select: (search) => search.chartSignal });
  const navigate = useNavigate({ from: Route.fullPath });
  const lastRendered = new Date().toLocaleString();

  const hanldeSignalChange = () => {
    const newSignal: ChartSignal = chartSignal == "voltage" ? "current" : "voltage";
    navigate({
      to: "/vehicle/$vin",
      search: (prev) => ({ ...prev, chartSignal: newSignal }),
    });
  };

  return (
    <>
      <h3>I am chart with signal {chartSignal}</h3>
      <button onClick={hanldeSignalChange}>Change Signal!</button>
      <p>{lastRendered}</p>
    </>
  );
};

export default VehicleChart;
