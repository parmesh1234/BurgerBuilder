

import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Meat', type : 'meat'}

]

const buildControls = (props) => {

  return (
    <div className={classes.BuildControls} > 
    <p> Current Price : <strong> ${props.price.toFixed(2)} </strong></p>
        {
            controls.map(ingredient =>{
               return <BuildControl 
                        key={ingredient.label} 
                        label={ingredient.label} 
                        added = {() => props.ingredientAdded(ingredient.type)}
                        removed = {() => props.ingredientRemoved(ingredient.type)}
                        disabled = {props.disabledInfo[ingredient.type]}/>
            })
        }
    <button className={classes.OrderButton}
        disabled = {!props.purchasable}
        onClick={props.purchasing}> ORDER NOW  </button>
    </div>
  )  
};


export default buildControls;