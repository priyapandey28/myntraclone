import React from "react";
import classes from "./Header.module.css";
import CartSvg from '../../shopping-cart-solid.svg';

const Header = (props) => {

  const { onCartClick, counter} = props;
  return (
    <header>
      <nav className={classes.headerSection}>
        <div className={`icon-holder ${classes.logo}`}></div>
        <div className={classes.searchSection}>
            <div class="input-group input-group-sm mb-3">
                <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search your product"
                />
            </div>  
        <div className={classes.cartIconContainer} onClick={onCartClick}>
          <img src={CartSvg} width = "20px" height ="20px" />
          {counter > 0 && <span className={classes.cartCount}>{counter}</span> }
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
