import React from 'react';
import classes from './HeaderCartButton.module.css';
import CardIcon from '../Cart/CartIcon';

function HeaderCardButton(props) {
    return (
       
           <button className={classes.button}>
               <span className={classes.icon}>
                   <CardIcon/>
               </span>
               <span>Your Card</span>
               <span className={classes.badge}>3</span>
           </button>
    )
}

export default HeaderCardButton;
