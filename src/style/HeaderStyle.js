import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: `1rem`,
  },
}))(Badge);

export const StyledShoppingCartIcon = withStyles((theme) => ({
  root: {
    fontSize: `3rem`,
    color: `white`,
  },
}))(ShoppingCartIcon);

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  min-height: 5rem;
`;
