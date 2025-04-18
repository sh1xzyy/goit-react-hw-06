import { useDispatch } from 'react-redux'
import css from '../SearchBox/SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

const SearchBox = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const onInputChange = value => {
		setValue(value)
		dispatch(changeFilter(value))
	}

	const id = nanoid()

	return (
		<>
			<form>
				<label className={css.searchLabel} htmlFor={id}>
					Find contacts by name
				</label>
				<input
					type='text'
					value={value}
					id={id}
					onChange={e => onInputChange(e.target.value)}
				/>
			</form>
		</>
	)
}

export default SearchBox
