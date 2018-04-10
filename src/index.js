import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/App';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';


const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component></Component>
        </Provider>,
        document.getElementById('root')
    );
}

render(App);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
