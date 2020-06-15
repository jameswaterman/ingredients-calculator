import React from 'react';
import '../reset.css';
import './form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.ingredientInput = React.createRef();
        
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleNewPeopleChange= this.handleNewPeopleChange.bind(this);
        this.handleOrigionalPeopleChange = this.handleOrigionalPeopleChange.bind(this);
	}

	handleKeyPress(event) {
        if (event.key === "Enter") {
            this.props.onAdd();
            event.preventDefault();
            this.ingredientInput.current.focus();
        }
    }

    handleClick(event) {
    	this.props.onAdd();
        this.ingredientInput.current.focus();
    }

    handleNewPeopleChange(event) {
    	this.props.onNewPeopleChange(event);
    	this.props.onUpdateNewPeople();
 	}

 	handleOrigionalPeopleChange(event) {
 		this.props.onOrigionalPeopleChange(event);
 		this.props.onUpdateOrigionalPeople();
 	}


	render() {
		return (
				<div className="sub-container form">

                <div className="form-top max-width">
                	<div className="num-people">
						<label for="origal-num-people">The original recipe is for:</label>
						<input type="number" id="origal-num-people" value={this.props.state.origionalPeople} onChange={this.handleOrigionalPeopleChange} onKeyUp={this.handleKeyPress} required></input>
					</div>
					
	                <div className="num-people">
						<label for="new-num-people">New recipe is for:</label>
						<input type="number" id="new-num-people" value={this.props.state.newPeople} onChange={this.handleNewPeopleChange} onKeyUp={this.handleKeyPress} required/>
					</div>
				</div>
				
                <section id="ingredients-container" className="ingredients-container max-width">
                	<div>
						<label for="ingredient">Ingredient:</label>
						<input type="text" id="ingredient" ref={this.ingredientInput} value={this.props.state.ingredient} onChange={this.props.onIngredientsChange} onKeyUp={this.handleKeyPress} required/>
					</div>
                	<div className="units-container">
	                	<div>
							<label for="quantity">Quantity/volume:</label>
							<input type="number" id="quantity" value={this.props.state.quantity} onChange={this.props.onQuantityChange} onKeyUp={this.handleKeyPress} required/>
				        </div>

				        <div>
							<label for="unit">Unit:</label>
							<input type="text" list="units" id="unit" value={this.props.state.units} onChange={this.props.onUnitsChange} onKeyUp={this.handleKeyPress} />
							<datalist id="units">
								<option value="ml"></option>
								<option value="g"></option>
								<option value="kg"></option>
								<option value="oz"></option>
								<option value="tsp"></option>
								<option value="tb"></option>
								<option value="cup"></option>
								<option value="fl oz"></option>
								<option value="l"></option>
							</datalist>
					    </div>
				    </div>
		        </section>

				<button className="add-btn center"
						onClick={this.handleClick}
						onKeyUp={this.handleKeyPress} >Add</button>

			</div>
			);
	}
}

export default Form;



