import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
            <ul className={css.contactList}>
                {contacts.map(contact => (
                    <li className={css.contactListItem} key={contact.id}><p className={css.contactName}>{contact.name}: {contact.number}</p> <button className={css.deleteButton} onClick={() => handleDeleteContact(contact.id)}>X</button></li>
                ))}
            </ul>)
}

export {ContactList}
