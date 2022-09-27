import { SpendByCategory } from "../components/Dashboard/SpendByCategory";
import { SpendByMonths } from "../components/Dashboard/SpendByMonths";
import { SpendByOrdered } from "../components/Dashboard/SpendByOrdered";
import { TopTenSpends } from "../components/Dashboard/TopTenSpends";

export const Home = () => {
  return (
    <div className="grid md:grid-cols-2 px-2 py-2">
      <SpendByCategory />
      <SpendByMonths />
      {/* <SpendByOrdered /> */}
      <TopTenSpends />
    </div>
  );
};
