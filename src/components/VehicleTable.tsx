import { useNavigate } from "@tanstack/react-router";
import { Route, TableSort } from "../routes/vehicle.$vin";

const VehicleTable = () => {
  const sort = Route.useSearch({ select: (search) => search.sort });
  const navigate = useNavigate({ from: Route.fullPath });
  const lastRendered = new Date().toLocaleString();

  const hanldeSortChange = () => {
    const newSort: TableSort = sort == "asc" ? "desc" : "asc";
    navigate({
      to: "/vehicle/$vin",
      search: (prev) => ({ ...prev, sort: newSort }),
    });
  };

  return (
    <>
      <h3>I am table with Sorting {sort}</h3>
      <button onClick={hanldeSortChange}>Change Sort!</button>
      <p>{lastRendered}</p>
    </>
  );
};

export default VehicleTable;
