import { Provider } from 'react-redux';
import store from './store/store';
import SearchPanel from './components/searchPanel/searchPanel';

function App() {
  return (
      <Provider store={store}>
       <SearchPanel />
      </Provider>
  );
}

export default App;
