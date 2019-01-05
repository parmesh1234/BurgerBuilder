


import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
            .map(igKey=>{
                return <li key={igKey}>
                            <span 
                                style={{textTransform: 'capatlize'}}>{igKey}
                            </span>: {props.ingredients[igKey]}
                        </li>;
            });
        return (
            <Aux>
                <h3>Your Order </h3>
                <p> A delicious burger with the following ingredients</p>
                <ul>
                   {ingredientsSummary}
                </ul> 
                <h3> Total Price: ${props.totalPrice.toFixed(2)}</h3>
                <Button btnType="Success" clicked={props.clickedContinue}>CONTINUE</Button> 
                <Button btnType="Danger" clicked={props.cancelClicked}>CANCEL</Button>
             </Aux>
        )
}


export default orderSummary;