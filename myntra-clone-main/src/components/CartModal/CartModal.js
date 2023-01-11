import React from "react";
import classes from "./CartModal.module.css";
import Modal from "../Modal/Modal";
import Product from "../Product/Product";



const CartModal = (props) => {



    const { onClose, productList = [] } = props;

    const totalStrickPrice = productList.reduce((previousValue, currentValue) => {
        return Number(previousValue) + Number(currentValue.strickPrice) },0);
    
    const totalDiscount = productList.reduce((previousValue, currentValue) => {
        return Number(previousValue) + Number(currentValue.discount);
    },0)    

    const totalFinalPrice = productList.reduce((previousValue, currentValue) => {
        return Number(previousValue) + Number(currentValue.finalPrice);
    },0) 

    return (
        <Modal>
            <div className={classes.productSection}>
        <div className={classes.productImage}>
          {
            productList.map((element, idx) => {
              return <Product product={element} />
            })
          }
        </div>
        <div className={classes.productInnerSection}>
            <div>
                <span>Total Items</span>
                <span>{productList.length}</span>
            </div>

            <div>
                <span>Total Original Price</span>
                <span>{totalStrickPrice}</span>
            </div>

            <div>
                <span>Total Discount</span>
                <span>{totalDiscount}</span>
            </div>

            <div>
                <span>Final Price</span>
                <span>{totalFinalPrice}</span>
            </div>
            <button>Buy</button>
        </div>
       
        <div className={classes.closeBtnSection} onClick={onClose}>X</div>
      </div>
        </Modal>
    )
}

export default CartModal