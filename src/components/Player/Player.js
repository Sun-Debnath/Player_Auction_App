import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Player.css'

const Player = (props) => {
    const { first_name, last_name,img,salary, age} = props.pl;
    return (
        <div>
            <div className="player">

                <div className="image">
                    <img src={img} alt="" />
                </div>

                <div>

                    <h4 className='player-name'>{first_name} {last_name}</h4>
                    <br />
          
                   
                    <p>Salary: {salary}tk</p>
                    <p><small>Age: {age}</small></p>
                    <br /><br /><br /><br />

                    <button className="btn btn-success"
                        onClick={() => props.handleAddProduct(props.pl)}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        add to cart </button>

                </div>

            </div>
           
        </div>
    );
};

export default Player;
