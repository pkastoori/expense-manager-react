import { TransactionCard } from "../components/Shared/TransactionCard";
import { SearchForm } from "../components/Search/SearchForm";

export const Search = () => {
  return (
    <div className="grid sm:grid-cols-3 p-5">
      <div className="sm:col-span-1">
        <SearchForm />
      </div>
      <div className="sm:col-span-2">
        <h2 className="m-4 text-sm text-center">Latest 10 Transactions</h2>
        <TransactionCard
          expense={{
            name: "onion",
            price: 35,
            quantity: "1 kg",
            comment: "",
            purchaseDate: "2022-09-24",
          }}
          color="green"
        />
      </div>
    </div>
  );
};
