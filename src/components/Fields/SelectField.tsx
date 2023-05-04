import { ISelectField } from '../../lib/interfaces/fields'
import FieldLayout from './FieldLayout'

function SelectField({
	name,
	label,
	value,
	options,
	error,
	touched,
	onChange,
	onBlur
}: ISelectField): JSX.Element {
	const selectColors =
		error && touched
			? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
			: 'bg-gray-50 border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

	return (
		<FieldLayout name={name} label={label} error={error} touched={touched}>
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className={`block w-full p-2.5 border text-sm rounded-lg outline-none hover:cursor-pointer ${selectColors}`}>
				<option className="bg-gray-100" value={' '} disabled hidden>
					Wybierz opcję
				</option>
				{options?.map((option) => (
					<option key={option.key} value={option.value}>
						{option.key}
					</option>
				))}
			</select>
		</FieldLayout>
	)
}

export default SelectField
