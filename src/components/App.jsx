import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { AddProfileForm } from './AddProfileForm.jsx/AddProfileForm'

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: ''
  }

  handleAddContact = (formData) => {
    const hasDublicates = this.state.contacts.some(contact => contact.name === formData.name)
    if (hasDublicates) {
      alert(`${formData.name} is already in contacts`)
      return
    }
    const finalContact = { ...formData, id: nanoid() }
    
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, finalContact]
      }
    })
  }
  
  render() {
    return (
      <div>
        <AddProfileForm
          handleAddContact = {this.handleAddContact}
        />
      </div>
    )
  }
}