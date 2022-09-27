import React from "react";
import { TransactionCard } from "../Shared/TransactionCard";

export const TopTenSpends = () => {
  return (
    <div className="w-4/5 mx-auto">
      <p className="text-sm mb-5">Top Five Spends</p>
      <div>
        <TransactionCard
          expense={{
            name: "onion",
            price: 35,
            quantity: "1 kg",
            comment: "",
            purchaseDate: "2022-09-24",
          }}
          color="indigo"
        />
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
        <TransactionCard
          expense={{
            name: "onion",
            price: 35,
            quantity: "1 kg",
            comment: "",
            purchaseDate: "2022-09-24",
          }}
          color="orange"
        />
        <TransactionCard
          expense={{
            name: "onion",
            price: 35,
            quantity: "1 kg",
            comment: "",
            purchaseDate: "2022-09-24",
          }}
          color="red"
        />
        <TransactionCard
          expense={{
            name: "onion",
            price: 35,
            quantity: "1 kg",
            comment: "",
            purchaseDate: "2022-09-24",
          }}
          color="yellow"
        />
      </div>
    </div>
  );
};
