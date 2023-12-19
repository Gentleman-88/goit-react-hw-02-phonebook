import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { AddProfileForm } from './AddProfileForm.jsx/AddProfileForm'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'

export class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }

  handleAddContact = (formData) => {
    const hasDublicates = this.state.contacts.some(contact => contact.name.toLowerCase() === formData.name.toLowerCase())
    if (hasDublicates) {
      alert(`${formData.name} is already in contacts`)
      return
    }
    
    this.setState((prevState) => {

      const finalContact = { ...formData, id: nanoid() }

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