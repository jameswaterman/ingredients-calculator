import React from 'react';
import '../reset.css';
import './ingredient-list.css'

import Ingredient from '../ingredient/ingredient.js';

class IngredientList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div class="sub-container new-recipie">
				<h3 class="title">New Recipe</h3>
					<div>
							{
								this.props.list.map((ingredient, index) => {
									ingredient.key = index;
									return (
										<Ingredient key={index} 
										ingredientObject={ingredient}
                                        onRemove={this.props.onRemove} />
										);
								})
                            }
					</div>
				</div>
			)
	}
}

export default IngredientList;