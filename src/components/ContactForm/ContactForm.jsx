import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import s from './ContactForm.module.css'
import { addContact } from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux'

const ContactForm = () => {
	const dispatch = useDispatch()

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long')
			.required('Required'),
		number: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long')
			.required('Required'),
	})

	const onFormSubmit = (value, actions) => {
		dispatch(addContact({ ...value, id: crypto.randomUUID() }))
		actions.resetForm()
	}

	const initialValues = {
		name: '',
		number: '',
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onFormSubmit}
				validationSchema={validationSchema}
			>
				<Form className={s.form}>
					<Field name='name' type='text' />
					<ErrorMessage name='name' component={'p'} />
					<Field name='number' type='tel' />
					<ErrorMessage name='number' component={'p'} />
					<button type='submit'>Add</button>
				</Form>
			</Formik>
		</>
	)
}

export default ContactForm
