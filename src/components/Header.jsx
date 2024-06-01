import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiFillShopping } from "react-icons/ai";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../features/auth/authSlice";
import { store } from "../store";
import axios from "axios";
import { clearWishlist, updateWishlist } from "../features/wishlist/wishlistSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.auth);

  const loginState = useSelector((state) => state.auth.isLoggedIn);


  const fetchWishlist = async () => {
    if(loginState){
      try {
        const getResponse = await axios.get(`http://localhost:8080/user/${localStorage.getItem("id")}`);
        const userObj = getResponse.data;
  
        store.dispatch(updateWishlist({userObj}));
        
       
      } catch (error) {
        console.error(error);
      }
    }else{
      store.dispatch(clearWishlist());
    }

  };


  useEffect(() => {
      fetchWishlist();
    
  }, [loginState]);

  return (
    <>
      <div className="navbar bg-base-100 mx-auto fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-black text-accent-content"
          >
            <AiFillShopping />
            RMsolusi14
          </Link>
        </div>
        <div className="flex-1">
            <div className="navbar-bottom-menu border-y border-gray-800">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
      
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">
                  <HiMiniBars3BottomLeft className="text-4xl" />
                </label>
              </div>
              <div className="drawer-side z-10">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                        
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
                <label htmlFor="my-drawer" className="btn drawer-button">
                <FaWindowClose className="text-3xl ml-auto" />
                </label>
                  {/* Sidebar content here */}
                  <li className="text-xl">
                    <NavLink className="text-accent-content" to="/">
                      Beranda
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink className="text-accent-content" to="/about-us">
                      Tentang Kami
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink className="text-accent-content" to="/contact">
                      Kontak
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container text-2xl navlinks-container">
              <NavLink className="text-accent-content" to="/">
                Beranda
              </NavLink>
              <NavLink className="text-accent-content" to="/about-us">
                Tentang Kami
              </NavLink>
              <NavLink className="text-accent-content" to="/contact">
                Kontak
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button
            className="text-accent-content btn btn-ghost btn-circle text-xl"
            onClick={() => dispatch(changeMode())}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
