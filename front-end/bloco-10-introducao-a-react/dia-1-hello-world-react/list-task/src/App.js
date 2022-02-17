import logo from './logo.svg';
import './App.css';

const commitments = ['Acordar','Malhar','Estudar','Comer','Orar','Meditar','Namorar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listCommitments = () => {
  return (
    commitments.map((value) => Task(value) )
  );
}


function App() {
  return (
    listCommitments()
  );
}

export default App;
