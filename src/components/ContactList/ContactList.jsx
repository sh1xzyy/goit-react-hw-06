import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'

const ContactList = () => {
	const contacts = useSelector(state => state.contacts.items)
	const filter = useSelector(state => state.filter.name)

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	)

	return (
		<>
			<ul className={css.userList}>
				{filteredContacts.map(contact => {
					return <Contact key={contact.id} contact={contact} />
				})}
			</ul>
		</>
	)
}

export default ContactList
