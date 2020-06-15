import React from 'react';
import'../reset.css';
import './App.css';

import Form from '../form/form.js';
import IngredientsList from '../ingredient-list/ingredient-list.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            origionalPeople: '',
            newPeople: '',
            ingredient: '',
            quantity: '',
            units: ''
        }

        this.handleOrigionalPeopleChange = this.handleOrigionalPeopleChange.bind(this);
        this.handleNewPeopleChange = this.handleNewPeopleChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleUnitsChange = this.handleUnitsChange.bind(this);
        this.addIngrediant = this.addIngrediant.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.updateNewPeople = this.updateNewPeople.bind(this);
        this.updateOrigionalPeople = this.updateOrigionalPeople.bind(this);
    }

    handleOrigionalPeopleChange(event) {
        this.setState({origionalPeople: event.target.value});
    }

    handleNewPeopleChange(event) {
        this.setState({newPeople: event.target.value});
    }

    handleIngredientChange(event) {
        this.setState({ingredient: event.target.value});
    }

    handleQuantityChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleUnitsChange(event) {
        this.setState({units: event.target.value});
    }  

    newIngredients(origionalPeople, newPeople, quantity) {
        const ratio = quantity / origionalPeople;
        const newQuantity = Math.round(ratio * newPeople * 10) / 10;
        return newQuantity;
    }

    addIngrediant() {
        if (!this.state.origionalPeople || !this.state.newPeople || !this.state.quantity || !this.state.ingredient) {
            return alert('Please enter all required fields. (*)');
        };
        const ingrediant = {
            origional: this.state.origionalPeople,
            new: this.state.newPeople,
            ingredient: this.state.ingredient,
            quantity: this.state.quantity,
            units: this.state.units,
            newIngredients: this.newIngredients
        };
        this.state.list.push(ingrediant);
        this.setState({list: this.state.list});

        this.setState({
            ingredient: '',
            quantity: '',
            units: ''
        });

    }

    removeIngredient(ingredientList) {
        const updateList = this.state.list.filter(ingredients => ingredients.key !== ingredientList.key);
        this.setState({list: updateList});
    }

    updateOrigionalPeople() {
        if (this.state.list.length > 0) {
            setTimeout(() => {
                const updatedArray = [];
                this.state.list.forEach(ingredient => {
                    ingredient.origional = this.state.origionalPeople;
                    updatedArray.push(ingredient);
                })
                this.setState({list: updatedArray})
            }, 300)
        }
    }

    updateNewPeople() {
        if (this.state.list.length > 0) {
            setTimeout(() => {
                console.log('i work')
                const updatedArray = [];
                this.state.list.forEach(ingredient => {
                    ingredient.new = this.state.newPeople;
                    updatedArray.push(ingredient);
                })
                this.setState({list: updatedArray})
            }, 300)
        }
    }



    render() {
        return (
                <div className="body">
                    <div className="overlay">
                        <h1 className="main-title">Ingredients Calculator</h1>
                        <p className="description center">1) Add how many people the original recipe is for.<br/> 2) Then add how many people you would like the recipe to be for.<br/> 3) Finally, add your ingredients and get the updated recipe below.</p>

                        <div className="main-container center">
                            <Form
                                onUpdateOrigionalPeople={this.updateOrigionalPeople}
                                onUpdateNewPeople={this.updateNewPeople}
                                onOrigionalPeopleChange={this.handleOrigionalPeopleChange}
                                onNewPeopleChange={this.handleNewPeopleChange}
                                onIngredientsChange={this.handleIngredientChange}
                                onQuantityChange={this.handleQuantityChange} 
                                onUnitsChange={this.handleUnitsChange}
                                onAdd={this.addIngrediant}
                                state={this.state} />
                            <IngredientsList list={this.state.list}
                                            onRemove={this.removeIngredient} />
                        </div>
                    </div>
                </div>
            );
    }
}
export default App;
