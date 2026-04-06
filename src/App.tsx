import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import CustomOrders from "./pages/CustomOrders";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" expand={true} richColors />
    </Router>
  );
}

export default App;