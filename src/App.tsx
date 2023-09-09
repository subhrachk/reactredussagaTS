import { Provider } from 'react-redux';
import './App.css';
import { ProductMain } from './Products/ProductMain';
import store from './store';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductMain />
      </Provider>
    </div>
  );
}

export default App;




