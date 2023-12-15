'use client'

import React, { useState } from 'react'

import classes from './index.module.scss'

const CartItem = ({ product, title, metaImage, qty, addItemToCart, index }) => {
  const [quantity, setQuantity] = useState(qty)
  return (
    <li className={classes.item} key={title}>
      <h6>title</h6>
    </li>
  )
}

export default CartItem
