import { Provider } from 'react-redux';
import './App.css';
import StepperForm from './components/Stepper';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App mx-5 my-5">
        <StepperForm />
      </div>
    </Provider>
  );
}

export default App;
