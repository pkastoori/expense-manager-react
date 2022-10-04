import { MdOutlineDashboard, MdOutlineAccountBalance } from "react-icons/md";
import { AiOutlineGroup, AiOutlineSearch } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="sm:col-span-1">
      <Link className="flex justify-between items-center sm:justify-center">
        <h2 className="p-6 text-center font-bold text-lg">Expense Manager</h2>
        <MdMenu
          className="inline mr-10 sm:hidden"
          size={30}
          onClick={() => setShow(!show)}
        />
      </Link>
      <SideNav />
      {show && <TopNav show={show} setShow={setShow} />}
    </nav>
  );
};

const SideNav = () => {
  return (
    <ul className="hidden sm:block sm:py-10 sm:px-8">
      <Link
        to="/"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3">Dashboard</p>
        <MdOutlineDashboard size={24} />
      </Link>
      <Link
        to="/transaction"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3">Transaction</p>
        <MdOutlineAccountBalance size={24} />
      </Link>
      <Link
        to="/category"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3">Category</p>
        <AiOutlineGroup size={24} />
      </Link>
      <Link
        to="/search"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3">Search</p>
        <AiOutlineSearch size={24} />
      </Link>
    </ul>
  );
};

const TopNav = ({ show, setShow }) => {
  return (
    <ul className="flex flex-col justify-center items-center sm:hidden">
      <Link
        to="/"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3" onClick={() => setShow(!show)}>
          Dashboard
        </p>
      </Link>
      <Link
        to="/transaction"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3" onClick={() => setShow(!show)}>
          Transaction
        </p>
      </Link>
      <Link
        to="/category"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3" onClick={() => setShow(!show)}>
          Category
        </p>
      </Link>
      <Link
        to="/search"
        className="py-2 font-medium text-sm flex justify-end items-center"
      >
        <p className="mr-3" onClick={() => setShow(!show)}>
          Search
        </p>
      </Link>
    </ul>
  );
};
