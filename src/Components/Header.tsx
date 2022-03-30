import React from "react";
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
  return (
    <>
      <div className='header'>
        <h1 className='header_h1'>Shopify</h1>
        <IconButton aria-label='cart'>
          <StyledBadge badgeContent={4} color='primary'>
            <ShoppingCartIcon
              style={{ color: "whitesmoke" }}
              fontSize='large'
            />
          </StyledBadge>
        </IconButton>
        <h4>Login/Signup</h4>
      </div>
      <div>
        <Category />
      </div>
    </>
  );
}
