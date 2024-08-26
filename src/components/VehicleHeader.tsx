import { useNavigate } from "@tanstack/react-router";
import { Route } from "../routes/vehicle.$vin";

const VehicleHeader = () => {
  const { vin } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const lastRendered = new Date().toLocaleString();

  const hanldeVinChange = () => {
    const newVin = `TESTVIN${Math.floor(Math.random() * 999 + 1)
      .toString()
      .padStart(3, "0")}`;
    navigate({
      to: "/vehicle/$vin",
      params: { vin: newVin },
      search: (prev) => ({...prev}),
    });
  };

  return (
    <>
      <h3>I am Vehicle Header {vin}</h3>
      <button onClick={hanldeVinChange}>Change VIN!</button>
      <p>{lastRendered}</p>
    </>
  );
};

export default VehicleHeader;
