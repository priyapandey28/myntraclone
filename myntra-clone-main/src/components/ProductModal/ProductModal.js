import React from "react";
import classes from "./ProductModal.module.css";
import Modal from "../Modal/Modal";



const ProductModal = (props) => {

  const { product, onClose, onAddToCart } = props;

  const onAddBtnHandler = () => {
    onAddToCart(product);
    onClose();

  }

  return <Modal>
      <div className={classes.productSection}>
        <div className={classes.productImage}>
          {
            product.otherImages.map((element, idx) => {
              return <img key={idx} src={element} width={'160px'} />
            })
          }
        </div>
        <div className={classes.productInnerSection}>
          <h4>{product.name}</h4>
          <span>{product.description}</span>
          <span>Rs. {product.finalPrice}</span>
          <strike>Rs. {product.strickPrice}</strike>
          <span className={classes.discountSection}>{product.discount} %OFF</span>
          <div className={classes.sizeSection}>
            <h6>Size</h6>
            <span className={classes.size}>38</span>
            <span className={classes.size}>40</span>
            <span className={classes.size}>42</span>
            <span className={classes.size}>44</span>
            <span className={classes.size}>46</span>
          </div>
          <button className={classes.addToCart} onClick={onAddBtnHandler}>Add To Cart</button>
        </div>
        <div className={classes.closeBtnSection} onClick={onClose}>X</div>
      </div>
  </Modal>;
};

export default ProductModal;
