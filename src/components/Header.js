import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import {
  StyledBadge,
  StyledShoppingCartIcon,
  StyledHeader,
} from "../style/HeaderStyle";

const Header = ({ counter }) => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/products");
  };
  const handleOnClick = () => {
    history.push("/cart");
  };

  return (
    <StyledHeader>
      <h2 onClick={goToHomePage}>Kicks Store</h2>
      <IconButton aria-label="cart" onClick={handleOnClick}>
        <StyledBadge badgeContent={counter} color="secondary">
          <StyledShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Header);
