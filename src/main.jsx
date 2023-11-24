import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import UserForm from './components/UserForm.jsx';
import UserDisplay from './components/UserDisplay.jsx';
import userReducer from './components/userReducer';
import './index.css'

const rootReducer = combineReducers({
    userReducer,
});

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <div>
            <UserForm />
            <UserDisplay />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));