import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../images/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

function Header(props) {
    return (
       <React.Fragment>
           <header className={classes.header}>
               <h1>OrderMeals</h1>
               <HeaderCardButton />
           </header>
           
           <div className={classes['main-image']}>
               <img src={mealsImage} alt="A table full of delicious food!"/>
           </div>
       </React.Fragment>
    )
}

export default Header
