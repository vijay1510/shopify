import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { InitialState } from "../Redux/Reducer";
import { Products } from "../Redux/Action";
import { Link } from "react-router-dom";
import Category from "./Category";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const auth = getAuth();
  const cart = useSelector((state: InitialState) => state.cart) as Products[];
  const user = useSelector((state: InitialState) => state.user);
  return (
    <>
      <div className='header'>
        <div className='header_top'>
          <Link to='/' className='header_link'>
            <h1 className='header_h1'>Shopify</h1>
          </Link>
          <Link to='/allcart'>
            <IconButton aria-label='cart'>
              <StyledBadge badgeContent={cart.length} color='error'>
                <ShoppingCartIcon
                  style={{ color: "whitesmoke" }}
                  fontSize='large'
                />
              </StyledBadge>
            </IconButton>
          </Link>
          {user && (
            <Link to='/' className='header_login'>
              <h2
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      console.log("user signed out");
                    })
                    .catch((error: any) => {
                      console.log("error", error);
                    });
                }}>
                Logout
              </h2>
            </Link>
          )}
          {!user && (
            <Link to='/enter/login' className='header_login'>
              <h2>Login/SignUp</h2>
            </Link>
          )}
        </div>
        <div>
          <Category />
        </div>
      </div>
    </>
  );
}
