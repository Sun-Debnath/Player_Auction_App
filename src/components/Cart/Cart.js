import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.salary, 0);

    let length = cart.length

    const cartName = () => {
       
        if (length === 1) {
            return <h4>Player Name</h4>
        }
        else if (length > 1) {
            return <h4>Players Name</h4>
        }

    }

    // if(cart.id === onclick)
    // {
    //    return <h3>select another player</h3>
    // }

     
    

    // const number = () => {
    //     for (let i = 0; i <= length; i++) {
    //         i = i + length;
    //         return <p>{i}</p>
    //     }
    //}
    

    const tax = (total/10);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>

            <h3>O summary</h3>
            <p>How many player you add= {cart.length}</p>
            <p>{cartName()}</p>
            {
                cart.map(pl =>/*{number()}*/
                {
                    return(
                        <div>

                        <p> name : {pl.first_name} {pl.last_name},</p>
                        <p><small> salary: {pl.salary} </small></p>
                        <p><small>age : {pl.age}</small></p>
                        </div>

                    )
                }
                
                )
            }
            
           
            <p><small>tax + vat: {formatNumber(tax)}</small></p>
            <p>total budget: {(total + Number(tax)).toFixed(2)}</p>

        </div>
    );



};

export default Cart;