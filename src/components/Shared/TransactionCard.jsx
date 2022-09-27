import { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export const TransactionCard = ({ expense, color }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`px-1 py-2 mb-3 rounded-lg bg-${color}-400/50`}>
      <div className="flex justify-around">
        <span className="text-sm text-center">{expense.name}</span>
        <span className="text-sm text-center">{expense.price}</span>
        {show ? (
          <BsChevronDown onClick={() => setShow(!show)} />
        ) : (
          <BsChevronRight onClick={() => setShow(!show)} />
        )}
      </div>
      {show ? (
        <div className="flex flex-col justify-evenly items-center text-xs mt-2">
          <div className="w-full flex justify-evenly my-2">
            <span>{expense.quantity}</span>
            <span>{expense.purchaseDate}</span>
          </div>
          <div>
            <span>{expense.comment}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
