import MetricsCard from "../components/Dashboard/MetricsCard";
import PieChart from "../components/Dashboard/PieChart";
import Sidebar from "../components/Sidebar";
import useFetch from "../hooks/useFetch";
import Barchart from "../components/Dashboard/Barchart";
import InvoicesList from "../components/Dashboard/InvoicesList";

const Dashboard = () => {
  // const [metrics, setMetrics] = useState([]);

  // fetch metrics data
  const {
    data: metrics,
    loading: metricsLoading,
    error: metricsError,
  } = useFetch("http://localhost:3030/metrics");

  // fetch Pie chart data
  const {
    data: pieData,
    loading: pieDataLoading,
    error: pieDataError,
  } = useFetch("http://localhost:3030/pieData");

  // fetch Bar chart data
  const {
    data: barData,
    loading: barDataLoading,
    error: barDataError,
  } = useFetch("http://localhost:3030/barData");

  // fetch Pie chart data
  const {
    data: InvoicesData,
    loading: InvoicesLoading,
    error: InvoicesError,
  } = useFetch("http://localhost:3030/invoices");

  const { data: schools, loading: schoolsLoading, error: schoolsError } = useFetch("http://localhost:3030/schools");
  // handling loading state
  if (metricsLoading || pieDataLoading || barDataLoading || InvoicesLoading || schoolsLoading)
    return <p>Loading...</p>;

  // handling errors
  if (metricsError || pieDataError || barDataError || InvoicesError || schoolsError)
    return <p>Error loading data!</p>;

  return (
    <div className=" flex w-full h-full">
      <Sidebar />
      <div className="px-2 py-20 w-full h-full bg-gray-100 space-y-3">
        <div className=" w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <MetricsCard
            title={"Total collections"}
            value={metrics?.collections}
          />
          <MetricsCard title={"Sign-ups"} value={metrics?.signups} />
          <MetricsCard title={"Total Revenue"} value={metrics?.revenue} />
          <MetricsCard
            title={"Bounced Cheque"}
            value={metrics?.bouncedCheques}
          />
        </div>
        <div className="w-full h-full grid  lg:grid-cols-2 grid-cols-1 place-items-center">
          <PieChart data={pieData} title={"Targets Visualization"} />
          <Barchart data={barData} title={"Signups Overview"} />
        </div>
        <div className="w-full h-full">
          <h3 className=" text-2xl my-2 font-bold">Upcoming Invoices</h3>
          <InvoicesList invoices={InvoicesData} schools={schools}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
