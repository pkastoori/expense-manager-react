import { TransactionCard } from "../components/Shared/TransactionCard";
import { SearchForm } from "../components/Search/SearchForm";

export const Search = () => {
  return (
    <div className="grid md:grid-cols-2 p-10">
      <div>
        <SearchForm />
        <div className="p-2 w-full">
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
    </div>
  );
};
