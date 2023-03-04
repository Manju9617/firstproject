import React from 'react'

const Menu2 = () => {
  return (
    <div class="container">
        <ul class="dropdown">
            <li> <a href="#">HOME</a></li>
            <li> <a href="#">PRODUCTS</a>
            <ul class="product">
                <li><a href="#">soap</a></li>
                <li><a href="#">sampoo</a>
                <ul class="sampu">
                    <li> <a href="#">CHICK</a></li>
                    <li> <a href="#">PANTENE</a></li>
                    <li> <a href="#">TRESEMME</a></li>
                    <li> <a href="#">SUNSILK</a></li>
                    <li> <a href="#">MAMAEARTH</a></li>
                </ul></li>
                <li><a href="#">buiscuit</a></li>
                <li><a href="#">chacolate</a></li>
                <li><a href="#">icecream</a></li>
            </ul></li>
            <li> <a href="#">SERVICES</a></li>
            <li> <a href="#">HELP</a></li>
        </ul>
    </div>
  )
}

export default Menu2