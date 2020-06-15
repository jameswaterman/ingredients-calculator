import React from 'react';
import '../reset.css';
import './ingredient.css';

class Ingredient extends React.Component {
	constructor(props) {
		super(props);

		this.newIngredient = this.newIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this)
	}
    
    newIngredient() {
    	return this.props.ingredientObject.newIngredients(this.props.ingredientObject.origional, this.props.ingredientObject.new, this.props.ingredientObject.quantity);
    }

    removeIngredient() {
    	this.props.onRemove(this.props.ingredientObject);
    }

	render() {
		return (
				<div className="list-item">
				    <p className="list-component">{this.newIngredient()}<span className="unit">{this.props.ingredientObject.units}</span></p> 
				    <p className="list-component">{this.props.ingredientObject.ingredient}</p>
				    <div className="list-component">
				        <button className="remove" onClick={this.removeIngredient}>&#x2715;</button>
				    </div>
				</div>
			)
	}
}

export default Ingredient;