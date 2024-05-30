import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Schools from "./Pages/Schools";
import SingleSchool from "./Pages/SingleSchool";
import { Toaster } from "sonner";
import CreateInvoice from "./components/CreateInvoice";
const App = () => {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/:id" element={<SingleSchool />} />
        <Route path="/edit/invoice/:invoiceId" element={<CreateInvoice />} />
      </Routes>
    </Router>
  );
};

export default App;
