import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import Container from './components/Container/Container'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'

const App = () => {
	return (
		<>
			<Container>
				<h1>Phonebook</h1>
				<ContactForm />
				<SearchBox />
				<ContactList />
			</Container>
		</>
	)
}

export default App
