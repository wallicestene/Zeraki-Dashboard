import { Alert } from "@mui/material";
import Sidebar from "../components/Sidebar";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Schools = () => {
  const { data, loading, error } = useFetch("http://localhost:3030/schools");
  return (
    <div className=" flex w-full h-full">
      <Sidebar />
      <div className="px-2 py-20 w-full h-full space-y-3">
        <h3 className=" text-2xl my-2 font-bold">Schools</h3>
        {loading && <p>Loading...</p>}
        {error && <Alert severity="error">{error}</Alert>}
        {!loading && !error && (
          <ul className=" space-y-2  w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
            {data.map((school) => (
              <li
                key={school.id}
                className=" relative  border shadow-md rounded-md p-10 bg-jade-950 text-jade-50 h-full"
              >
                <Link to={`/schools/${school.id}`}>
                  <div>
                    <h3 className="text-xl text-wrap font-bold">
                      {school.name}
                    </h3>
                  </div>
                  <div className=" absolute text-sm bottom-2 z-10 right-4  bg-jade-200 px-2 rounded-md text-jade-900">
                    <p>{school.type}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Schools;
