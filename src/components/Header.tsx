import React, {  } from "react";
import { themes } from "../redux/Themes";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();
  const handleThemaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedThema = e.target.value;
    dispatch(themes(selectedThema))

  };

  return (
    <div className="navbar bg-base-100 shadow-xl sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Favorit</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">MovieVaganza</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a></li>
          <li><a>Favorit</a></li>

        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <div className="input-group">
            <select className="select select-bordered w-full max-w-xs" onChange={handleThemaChange}>
              <option disabled selected>Pick Thema</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="forest">Forest</option>
              <option value="pastel">Pastel</option>
              <option value="garden">Garden</option>
              <option value="luxury">Luxury</option>
            </select>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
