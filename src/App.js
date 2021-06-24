import ClassForm from './Component/ClassComponent/ClassForm';
import FucntionForm from './Component/FucntionComponent/FucntionForm';
import './App.css';

function App() {
  return (
    <div className="App">

      <FucntionForm 
      name={'qwajo monies'}
      email ={'example@gamil.com'}
      password = {'password'}
      />
      <hr/>
      <ClassForm 
      name={'ephyah fosuwaa'}
      email ={'example@yahoo.com'}
      password ={'password'}
      />
    </div>
  );
}

export default App;
