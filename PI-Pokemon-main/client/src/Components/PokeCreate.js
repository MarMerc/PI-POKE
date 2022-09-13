import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link,useHistory} from 'react-router-dom';
import { postPokemon,getAllTypes, filterPokesByBd } from '../Actions';
import Style from '../Styles/PokeCreate.module.css';

function validate(e){

  const pattern = new RegExp('^[A-Z]+$', 'i');
  const soloNum = new RegExp('/^[0-9]+$/');
  
  const urlImg = (url) => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
  };
  let errors = {};
  //--------Name----------------
  if(!e.name){
    errors.name = 'Se requiere un nombre'
  }else if(e.name.lenght>20){
    errors.name = 'El nombre no puede tener mas de 20 caracteres'
  }else if(!pattern.test(e.name)){
    errors.name = 'El nombre solo puede contener letras';
    //-------Tipos---------------
  }else if (e.type.length<1){
    errors.types = 'Se debe ingresar al menos un tipo'
  //--------------Numbers HP----------------
  }else if(!pattern.test(e.name) || e.hp<0 || e.hp>200){
  errors.hp = 'El rango debe ser entre 0 y 200';
    //--------------Numbers Attack----------------
  }else if(e.attack<0 || e.attack>100){
    errors.attack = 'El rango debe ser entre 0 y 100';
  //--------------Numbers Defense----------------
    }else if(e.defense<0 || e.defense>100){
      errors.defense = 'El rango debe ser entre 0 y 100';
  //--------------Numbers speed----------------
    }else if(e.speed<0 || e.speed>100){ 
    errors.speed = 'El rango debe ser entre 0 y 100';
  //--------------Numbers weight----------------
    }else if(e.weight<0 || e.weight>100){ 
  errors.weight = 'El rango debe ser entre 0 y 100';
  //--------------Numbers height----------------
  }else if(e.height<0 || e.height>100){ 
    errors.height = 'El rango debe ser entre 0 y 100';
  }
  return errors;
};

export default function PokeCreate() {

const dispatch = useDispatch();
const [errors,setErrors]=useState({})
const history = useHistory();
const type = useSelector((state)=>state.tipos);

const [input, setInput] = useState({
  name:'',
  hp:'',
  attack:'',
  defense:'',
  speed:'',
  height:'',
  weight:'',
  image:'',
  type:[]
});


const btnDisabled = !(
  input.name &&
  input.hp &&
  input.attack &&
  input.speed &&
  input.height &&
  input.weight &&
  input.type.length
);

function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
  console.log(input)
}

function handleCheck(e){
  console.log('target',e.target.value);
  if(e.target.checked){
    setInput({
      ...input,
      type: [...input.type,e.target.value]
    })
    setErrors(validate({
      ...input,
      type: [...input.type,e.target.value]
    }));
  }else{
    setInput({
      ...input,
      type: input.type.filter(t=>t!==e.target.value)
    })
    setErrors(validate({
      ...input,
      type: input.type.filter(t=>t!==e.target.value)
    }));
  }
};

console.log('err',errors);

function handleSubmit(e){
  e.preventDefault();
  console.log(input)
  dispatch(postPokemon(input))
  alert('Pokemon Creado!')
  setInput({
    name:'',
    hp:'',
    attack:'',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    image:'',
    type:[]
  })
  history.push('/home')
}

useEffect(()=>{
    dispatch(getAllTypes());
}, []);

  return (
    <div className={Style.gral}>
        <div className={Style.Container}> 
          <form onSubmit={(e)=>handleSubmit(e)}>
            <h1 className={Style.titulo}>Create your Pokemon</h1>
            <div className={Style.horiz}>
              <label className={Style.titulo}>Name: </label>
              <input
                type='text'
                value={input.name}
                name='name'
                onChange={handleChange}
              />
                {errors.name && (
                  <p className={Style.errorName}>{errors.name}</p>
                )}                
            </div>
            <div className={Style.Columnas} >
              <div className={Style.tipos}>
                <label className={Style.titulo}>Tipos: </label>
                <label>Normal
                  <input
                    type='checkbox'
                    name='normal'
                    value='normal'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Fighting
                  <input
                    type='checkbox'
                    name='fighting'
                    value='fighting'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Flying
                  <input
                    type='checkbox'
                    name='flying'
                    value='flying'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Poison
                  <input
                    type='checkbox'
                    name='poison'
                    value='poison'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Ground
                  <input
                    type='checkbox'
                    name='ground'
                    value='ground'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Rock
                  <input
                    type='checkbox'
                    name='rock'
                    value='rock'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Bug
                  <input
                    type='checkbox'
                    name='bug'
                    value='bug'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Ghost
                  <input
                    type='checkbox'
                    name='ghost'
                    value='ghost'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Steel
                  <input
                    type='checkbox'
                    name='steel'
                    value='steel'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Fire
                  <input
                    type='checkbox'
                    name='fire'
                    value='fire'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Water
                  <input
                    type='checkbox'
                    name='water'
                    value='water'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Grass
                  <input
                    type='checkbox'
                    name='grass'
                    value='grass'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Electric
                  <input
                    type='checkbox'
                    name='electric'
                    value='electric'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Psychic
                  <input
                    type='checkbox'
                    name='psychic'
                    value='psychic'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Ice
                  <input
                    type='checkbox'
                    name='ice'
                    value='ice'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Dragon
                  <input
                    type='checkbox'
                    name='dragon'
                    value='dragon'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Dark
                  <input
                    type='checkbox'
                    name='dark'
                    value='dark'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Fairy
                  <input
                    type='checkbox'
                    name='fairy'
                    value='fairy'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Unknown
                  <input
                    type='checkbox'
                    name='unknown'
                    value='unknown'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
                <label>Shadow
                  <input
                    type='checkbox'
                    name='shadow'
                    value='shadow'
                    onChange={(e)=>handleCheck(e)}
                  />
                </label>
              </div>             
              <div className={Style.Filas}>
                <div className={Style.errorType}>
                  {errors.types && (
                    <p className={Style.errors}>{errors.types}</p>
                  )}
                  <ul><li>{input.type.map(t=>t+' ')}</li></ul>
                </div>
                <div className={Style.stadist}>
                  <div className={Style.horiz}>
                    <label>Life: </label>
                    <input
                      type='number'
                      min="1" 
                        max="100"
                      value={input.hp}
                      name='hp'
                      onChange={handleChange}
                    />
                   {errors.hp && (
                    <p className={Style.errors}>{errors.hp}</p>
                  )}
                  </div>   
                  <div className={Style.horiz}>
                    <label>Attack: </label>
                    <input
                      type='number'
                      min="1" 
                        max="100"
                      value={input.attack}
                      name='attack'
                      onChange={handleChange}
                    />
                    {errors.attack && (
                    <p className={Style.errors}>{errors.attack}</p>
                  )}
                  </div> 
                  <div className={Style.horiz}>
                    <label>Defense: </label>
                    <input
                      type='number'
                      min="1" 
                      max="100"
                      value={input.defense}
                      name='defense'
                      onChange={handleChange}
                    />
                    {errors.defense && (
                    <p className={Style.errors}>{errors.defense}</p>
                  )}
                  </div>   
                  <div className={Style.horiz}>
                    <label>Speed: </label>
                    <input
                      type='number'
                      min="1" 
                      max="100"
                      value={input.speed}
                      name='speed'
                      onChange={handleChange}
                    />
                    {errors.speed && (
                    <p className={Style.errors}>{errors.speed}</p>
                  )}
                  </div>            
                </div>
                  {/* <select>
                    {type?.map((t)=>{
                      return(
                        <option value={t.name} key={t.id}>{t.name}</option>
                      )
                      
                    })}
                  </select> */}
                <div>

                </div>
                <div className={Style.apariencia}>
                  <div className={Style.horiz}>
                      <label>Weight: </label>
                      <input
                        type='number'
                        min="1" 
                        max="100"
                        value={input.weight}
                        name='weight'
                        onChange={handleChange}
                      />
                    {errors.weight && (
                    <p className={Style.errors}>{errors.weight}</p>
                  )}
                    </div>   
                    <div className={Style.horiz}>
                      <label>Height: </label>
                      <input
                        type='number'
                        min="1" 
                        max="100"
                        value={input.height}
                        name='height'
                        onChange={handleChange}
                      />
                    </div>  
                </div>
                <div className={Style.imgVista}>
                    <div className={Style.horiz}>
                      <label>Image: </label>
                      <input
                        id='inputImg'
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={handleChange}
                      />
                      {errors.image && (
                        <p className={Style.errors}>{errors.image}</p>
                      )}
                      <img src={input.image} alt='' width='80px' height='80px' />
                    </div>  
                </div>
              </div>
            </div>
            <div className={Style.botonera}>
              <button type='submit' className={Style.btn} disabled={btnDisabled}>Create</button>            
              <Link to='/home' className={Style.Link}>
                <button className={Style.btn}>Back</button>
              </Link> 
            </div>
          </form>
        </div>      
    </div>

  )
}

