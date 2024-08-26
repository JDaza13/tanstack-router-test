import { createFileRoute } from "@tanstack/react-router";
import VehicleHeader from "../components/VehicleHeader";
import VehicleTable from "../components/VehicleTable";
import VehicleChart from "../components/VehicleChart";

export type ChartSignal = "voltage" | "current";

export type TableSort = "asc" | "desc";

export type VehicleSearch = {
  sort: TableSort;
  chartSignal: ChartSignal;
};

const VehicleComponent = () => {
  return (
    <>
      <VehicleHeader />
      <VehicleChart />
      <VehicleTable />
    </>
  );
};

export const Route = createFileRoute("/vehicle/$vin")({
  component: VehicleComponent,
  validateSearch: (search: Record<string, unknown>): VehicleSearch => {
    // validate and parse the search params into a typed state
    return {
      sort: (search.sort as TableSort) || "desc",
      chartSignal: (search.chartSignal as ChartSignal) || "voltage",
    };
  },
});
