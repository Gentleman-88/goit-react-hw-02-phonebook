import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { AddProfileForm } from './AddProfileForm.jsx/AddProfileForm'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'

export class App extends Component {
  state = {
  contacts: [],
    filter: '',
    name: '',
    number: '',
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

  handleChangeFilter = (event) => {
    const value = event.target.value
    this.setState({filter: value})
  }

  handleDeleteContact = contactId => {
    this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactId)})
  }
  
  render() {

    const filterdContacts = this.state.contacts.filter(contact => contact.name.includes(this.state.filter))


    return (

      <div>
        <AddProfileForm
          handleAddContact = {this.handleAddContact}
        />
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleChangeFilter = {this.handleChangeFilter}
        />
        <ContactList
          handleDeleteContact ={this.handleDeleteContact}
          contacts={filterdContacts} />
      </div>
    )
  }
}