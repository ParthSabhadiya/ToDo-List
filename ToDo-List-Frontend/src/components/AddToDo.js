import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react'

const AddToDo = ({ addTodo }) => {
	const [name, setName] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = e => {

		e.preventDefault();
		if (!name) {
			alert('Please enter name');
			return
		}

		addTodo({ name, status });

		setName("");
		setStatus(false);
	};

	return (

		<Form onSubmit={handleSubmit}>
			<br />
			<Row className="align-items-center add-new-todo ">
				<Col sm={8} className="my-1">

					<Form.Control
						type="text"
						className="input"
						value={name}
						onChange={e => { setName(e.target.value); setStatus(false) }}
						placeholder="Enter your task" />

				</Col>
				<Col xs="auto" className="my-1 ">
					<button type="submit" className='add-button'>Add Task</button>
				</Col>
			</Row>
			<br />
		</Form>
	);
}

export default AddToDo

