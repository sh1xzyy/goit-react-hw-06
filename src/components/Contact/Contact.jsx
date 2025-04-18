import { useDispatch } from 'react-redux'
import css from '../Contact/Contact.module.css'
import { deleteContact } from '../../redux/contactsSlice'

const Contact = ({ contact }) => {
	const dispatch = useDispatch()
	return (
		<>
			<li className={css.userItem}>
				<div className={css.userInfo}>
					<div className={css.userItemWrapper}>
						<img src='/img/user.svg' alt='user icon' width={16} height={16} />
						<p className='user-text'>{contact.name}</p>
					</div>
					<div className={css.userItemWrapper}>
						<img src='/img/phone.svg' alt='phone icon' width={16} height={16} />
						<p className='user-text'>{contact.number}</p>
					</div>
				</div>
				<button
					className={css.userItemBtn}
					type='button'
					onClick={() => dispatch(deleteContact(contact.id))}
				>
					Delete
				</button>
			</li>
		</>
	)
}

export default Contact
