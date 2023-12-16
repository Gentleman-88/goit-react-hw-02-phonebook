import React, { Component } from 'react'
import css from './AddProfileForm.module.css'

export class AddProfileForm extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault();


        const name = event.currentTarget.elements.name.value;

        const formData = {
            name,
        }

        this.props.handleAddContact(formData);
    }

    render() {
        return (
                <form className={css.form} onSubmit={this.handleFormSubmit}>
                    <h2 className={css.formTitle}>Phonebook</h2>
                    <label className={css.formLabel}>
                        <span className={css.formLabelText}>Name</span>
                        <input
                            className={css.formInput}
                            type="text"
                            name="name" 
                            required />
                    </label>
                    <button className={css.formButton} type='submit'>Add contact</button>
                </form>
        )
    }
}
