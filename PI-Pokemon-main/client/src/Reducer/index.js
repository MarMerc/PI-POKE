

const initialState = {
    pokemons : [],
    allPokes:[],
    tipos:[],
    detail:{}
};

function rootPokemon (state= initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokes: action.payload,
            }
        case 'POKES_BY_TYPES':
            const allPokemons = state.allPokes
            const typesFiltered = action.payload === 'all'? 
            allPokemons 
            : allPokemons.filter(p=>p.types.includes(action.payload))
            return {
                ...state,
                pokemons: typesFiltered
            }
        case 'FILTER_BD':
                const allPokemons2 = state.allPokes
                const created = action.payload ==='db'?
                allPokemons2.filter(p=> !Number.isInteger(p.id))
                :allPokemons2.filter(p=> Number.isInteger(p.id))
                return {
                    ...state,
                    pokemons: action.payload === 'all' ?
                    allPokemons2
                    :created
                }
        case 'ORDER_BY_NAME':
            const allPokes = state.pokemons
            const sortedPokessAlph = action.payload === 'ascAlp'?
            allPokes.sort(function(a,b){
                    if(a.name>b.name){return 1}
                    if(b.name>a.name){return -1}
                    return 0;
                }):
                allPokes.sort(function(a,b){
                    if(a.name>b.name){return -1}
                    if(b.name>a.name){return 1}
                    return 0;
                })
                return {
                    ...state,
                    pokemons: sortedPokessAlph
                }
         case 'ORDER_BY_ATK':
                let  sortedMinMax = [...state.allPokes]
                sortedMinMax = action.payload === 'ascAtk' ?
                sortedMinMax.sort(function(a,b){
                    return a.attack - b.attack
                }): sortedMinMax.sort(function(a,b){
                    return b.attack - a.attack
                })
                    return {
                        ...state,
                        pokemons: sortedMinMax
                    }
        case 'POST_POKEMON':
                return{
                    ...state,
                }
        case 'GET_ALL_TYPES':
                return {
                    ...state,
                    types: action.payload
                }
        case 'GET_NAME_POKE':
                return {
                    ...state,
                    pokemons: action.payload
                }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        default:
                // return {...state};
                return state;

    }
}

export default rootPokemon;