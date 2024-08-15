import React, { useState } from 'react';
import './Home.css';
import Image1 from '../assets/images/image-product-1.jpg';
import Image2 from '../assets/images/image-product-2.jpg';
import Image3 from '../assets/images/image-product-3.jpg';
import Image4 from '../assets/images/image-product-4.jpg';
import CartIcon from '../assets/images/icon-cart.svg';

const Home = () => {
    const [mainImage, setMainImage] = useState(Image2);
    const [quantity, setQuantity] = useState(0); 

    const handleThumbnailClick = (imagePath) => {
        setMainImage(imagePath);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const addToCart = () => {
        setQuantity(prevQuantity => prevQuantity + 1); 
    };

    return (
        <div className="home-container">
            <div className="product-section">
                <div className="product-images">
                    <img 
                        src={mainImage} 
                        alt="Main Sneaker" 
                        className="main-image"
                    />
                    <div className="thumbnail-images">
                        <img src={Image2} alt="Thumbnail 1" onClick={() => handleThumbnailClick(Image2)} />
                        <img src={Image3} alt="Thumbnail 2" onClick={() => handleThumbnailClick(Image3)} />
                        <img src={Image4} alt="Thumbnail 3" onClick={() => handleThumbnailClick(Image4)} />
                        <img src={Image1} alt="Thumbnail 4" onClick={() => handleThumbnailClick(Image1)} />
                    </div>
                </div>
                <div className="product-details">
                    <h3>SNEAKER COMPANY</h3>
                    <h1>Fall Limited Edition <br /> Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
                    <div className="price-section">
                        <span className="current-price">$125.00</span>
                        <span className="discount">50%</span>
                    </div>
                    <p className="original-price">$250.00</p>

    <div className='add'>
    <div className="quantity-section">
                        <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="add-to-cart-btn" onClick={addToCart}>
                        <img src={CartIcon} alt="Cart Icon" />
                        Add to cart
                    </button>
    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Home;