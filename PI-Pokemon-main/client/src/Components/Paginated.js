import Style from '../Styles/Paginated.module.css';

export default function Paginated({pokemonsPerPage,statePokes,paginado}) {

    const pageNumber = [];
    
    for(let i=0; i<Math.ceil(statePokes/pokemonsPerPage);i++){
        pageNumber.push(i+1)
    }
    return (
        <nav>
            <ul className={Style.listPages}>
                {pageNumber && pageNumber.map(number =>(
                    <li key={number} className={Style.liPag}>
                        <a onClick={()=>paginado(number)} className={Style.aPag}>{number}</a>
                    </li>
                ))}          
            </ul>
        </nav>
  )
}
