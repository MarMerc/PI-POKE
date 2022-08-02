import axios from "axios";

 export const GET_POKEMONS = "GET_POKEMONS";
 export const POKES_BY_TYPES = "POKES_BY_TYPES";
 export const FILTER_BD = "FILTER_BD";
 export const ORDER_BY_NAME = "ORDER_BY_NAME";
 export const ORDER_BY_ATK = "ORDER_BY_ATK";
 export const GET_ALL_TYPES = "GET_ALL_TYPES";
 export const GET_NAME_POKE = "GET_NAME_POKE";
 export const GET_DETAIL = "GET_DETAIL";
 export const RUTA_GET = 'http://localhost:3001/pokemons';

export function getAllPokemons(){
    return async function (dispatch){
        let respuesta=await axios.get(RUTA_GET);
        return dispatch({
            type: GET_POKEMONS,
            payload: respuesta.data
        })
    }
}

export function filterPokesByTypes(payload){
        return {
            type: 'POKES_BY_TYPES',
            payload
        }
}

export function filterPokesByBd(payload){
    return async function (dispatch){  
        return dispatch({
            type: "FILTER_BD",
            payload
        })
    }
}

export function sorterByName(payload){
    return async function (dispatch){
        return dispatch({
            type: "ORDER_BY_NAME",
            payload
        })
    }
}

export function sortAtk(payload){
    return async function (dispatch){
        return dispatch({
            type: 'ORDER_BY_ATK',
            payload
        })
    }
}
 export function postPokemon(payload){
    return async function(dispatch){
        const respuesta = await axios.post('http://localhost:3001/pokemons/post', payload);
        return respuesta;
    }
}

export function getAllTypes(){
    return async function(dispatch){
        var respuesta = await axios.get('http://localhost:3001/types');
        return dispatch({
            type:GET_ALL_TYPES,
            payload: respuesta.data
        })
    }
}

export function getNamepoke(name){
    return async function (dispatch){
        try{
            var respuesta = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type:'GET_NAME_POKE',
                payload: respuesta.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getDetail(id){
    return async function (dispatch){
        try {
            var respuesta = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: 'GET_DETAIL',
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}




