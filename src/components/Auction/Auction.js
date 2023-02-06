
import React, { useEffect } from 'react';
import { useState } from 'react';
import playerData from '../../fakedata/MOCK_DATA.json';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Auction.css'

const Auction = () => {
    const [plData, setPlData] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

    useEffect(() => {
        setPlData(playerData);
        console.log(plData);
    }, [])

    return (
        <div className="auction-container">

            <div className="player-container">
                {
                    plData.map(player => <Player
                        pl={player}
                        handleAddProduct={handleAddProduct}
                    ></Player>)
                }
            </div>

            <div className="cart-container">
            
                <Cart cart={cart}> </Cart>
           


            </div>

        </div>

    );
};

export default Auction;