
import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import axios from '../../axios-orders';


const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon : 0.4,
    cheese : 0.6,
    meat  : 0.9
}
class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat  : 0
        },
        price : 4,
        purchasable : false,
        purchasing : false
    };
    updatePurchasable = (updatedIingredients) =>  {
        const sum  = Object.keys(updatedIingredients)
        .map(igKey => {
            return updatedIingredients[igKey];
        })
        .reduce((sum, el)=>{
            return sum + el;
        },0);
        this.setState({purchasable : sum > 0 });
    }

    addIngredients = (type) => {
        let ingredientOldCount = this.state.ingredients[type];
        let ingredientnewCount = ingredientOldCount + 1;
        let ingredients = {
            ...this.state.ingredients
        }
        ingredients[type] = ingredientnewCount;
        let ingredientPrice = INGREDIENT_PRICES[type];
        let addedPrice = this.state.price + ingredientPrice;
        this.setState({ingredients : ingredients,price : addedPrice});
        this.updatePurchasable(ingredients);
        
    }
    removeIngredients = (type) => {
        let ingredientOldCount = this.state.ingredients[type];
        if(ingredientOldCount > 0){
            let ingredientnewCount = ingredientOldCount - 1;
            let ingredients = {
                ...this.state.ingredients
            }
            ingredients[type] = ingredientnewCount;
            let ingredientPrice = INGREDIENT_PRICES[type];
            let deductedPrice = this.state.price - ingredientPrice;
            this.setState({ingredients : ingredients,price : deductedPrice});
            this.updatePurchasable(ingredients);           
        }
    };
    updatePurchasing = () => {
        this.setState({purchasing : true});
    }
    closeBackdrop = () => {
        this.setState({purchasing : false})
    }
    
    purchaseContinueHandler = () => {
        const orderObject = {
            ingredients : this.state.ingredients,
            price : this.state.price.toFixed(2),
            customer : {
                name : 'Parmeshwar',
                address : {
                    street : 'Nacharam',
                    zipCode : 500076,
                    country : 'India'
                },
                email : 'parmesh1042@gmail.com',
                deliveryMethod : 'fastest'
            }
        }
        axios.post('/orders.json',orderObject)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        });
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Backdrop show={this.state.purchasing} clicked={this.closeBackdrop} />
                <Modal show={this.state.purchasing}
                    >
                    <OrderSummary  
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.price}
                        clickedContinue = {this.purchaseContinueHandler}
                        cancelClicked={this.closeBackdrop}/> 
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientAdded = { this.addIngredients }
                    ingredientRemoved = {this.removeIngredients}
                    disabledInfo = {disabledInfo}
                    price = {this.state.price}
                    purchasable = {this.state.purchasable}
                    purchasing = {this.updatePurchasing}/>
            </Aux>
        )
    }

};

export default BurgerBuilder;