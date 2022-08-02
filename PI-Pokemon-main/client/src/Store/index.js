import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootPokemon from '../Reducer/index.js';

export const store = createStore(rootPokemon, composeWithDevTools(applyMiddleware(thunk)));
