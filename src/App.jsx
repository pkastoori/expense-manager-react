import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Shared/Navbar";
import { Home } from "./pages/Home";
import { Transaction } from "./pages/Transaction";
import { Search } from "./pages/Search";
import { Category } from "./pages/Category";

function App() {
  return (
    <div className="grid sm:grid-cols-4">
      <Navbar />
      <div className="sm:col-span-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
