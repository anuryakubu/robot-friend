import react from 'react'

const Searchbox = ({ searchChange }) => {
		return (
			<div className="pa2">
				<input className="bg-lightest-blue pa3 ba b--green" type="search" placeholder="search robot friends" onChange={searchChange} />
			</div>
			)
}

export default Searchbox;