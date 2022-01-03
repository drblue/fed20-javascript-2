import Container from 'react-bootstrap/Container'
import LoginForm from './components/LoginForm/LoginForm'
import './assets/sass/App.scss';

function App() {
	return (
		<Container className="my-5">
			<LoginForm />
		</Container>
	);
}

export default App;
