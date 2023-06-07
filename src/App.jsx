import { useState } from 'react';
import { USERS } from './constants/users';
const App = () => {
	const [userIndex, setUserIndex] = useState(0);
	const isFirstUser = userIndex === 0;
	const isLastUser = userIndex === USERS.length - 1;
	return (
		<>
			<img
				src={USERS[userIndex].profileImage}
				alt={USERS[userIndex].name}
			></img>
			<h1>Name: {USERS[userIndex].name}</h1>
			<p>Username: {USERS[userIndex].username}</p>
			<p>Email: {USERS[userIndex].email}</p>
			<button
				disabled={isFirstUser}
				onClick={() => previusUser(userIndex, setUserIndex)}
			>
				Previus
			</button>
			<button
				disabled={isLastUser}
				onClick={() => nextUser(userIndex, setUserIndex)}
			>
				Next
			</button>
		</>
	);
};
const previusUser = (userIndex, setUserIndex) => {
	setUserIndex(userIndex - 1);
};
const nextUser = (userIndex, setUserIndex) => {
	setUserIndex(userIndex + 1);
};

export default App;
