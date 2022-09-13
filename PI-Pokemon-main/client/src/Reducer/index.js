

const initialState = {
    pokemons : [],
    allPokes:[],
    tipos:[],
    detail:[]
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
                    : created
                }

        case 'FILTER_ATK':
            const allPokemons3 = state.allPokes
            const  filteredMinMaxAtk =action.payload ==='minAtk'?
            allPokemons3.filter(p=>p.attack<50)
            : allPokemons3.filter(p=>p.attack>50)
            return {
                ...state,
                pokemons: action.payload === 'all' ?
                allPokemons3
                :filteredMinMaxAtk.slice(0,5)
            }

        case 'ORDER_BY_NAME':
            // console.log(state.pokemons);
            let  sortedApl = action.payload === 'ascAlp' ?
            state.pokemons.sort(function(a,b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
            : state.pokemons.sort(function(a,b){
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1;
                  }
                  if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1;
                  }
                  return 0;
            })
                return {
                    ...state,
                    pokemons: action.payload==='DEFAULT'?state.allPokes:sortedApl
                }
         case 'ORDER_BY_ATK':
                let  sortedMinMax = [...state.pokemons]
                sortedMinMax = action.payload === 'ascAtk' ?
                sortedMinMax.sort(function(a,b){
                    return a.attack - b.attack
                }): sortedMinMax.sort(function(a,b){
                    return b.attack - a.attack
                })
                    return {
                        ...state,
                        pokemons: action.payload==='DEFAULT'?state.allPokes:sortedMinMax
                    }

        case 'POST_POKEMON':
                return{
                    ...state.pokemons,
                }
        case 'GET_ALL_TYPES':
                return {
                    ...state,
                    tipos: action.payload
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
            case 'RESET_DETAIL':
                return{
                    ...state,
                    detail: action.payload
                }
        default:
                return state;
    }
}

export default rootPokemon;