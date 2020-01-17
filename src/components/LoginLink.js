import React from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';
const LoginLink = () => {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);

  if (user.token) {
    return (<button className="login-btn"
      onClick={() => {
        userLogout();
        clearCart();
      }} >Logout</button>);
  }
  return (
    <li><Link to="/login">Login</Link></li>
  );
};
export default LoginLink;