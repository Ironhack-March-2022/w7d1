import React from 'react'

export default function Details(props) {
	console.log(props.name)
	return (
		<>
			<h3>Name: {props.name}</h3>
			<h3>Email: {props.email}</h3>
		</>
	)
}
