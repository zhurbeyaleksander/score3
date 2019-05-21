import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {

    render(){
        return(
            <div className='container-fluid headerWrap'>
            <div className='container header'>
               <Link to='/' className="menuItem">Главная</Link>
               <Link to='/credit/' className="menuItem">Подать заявку</Link> 
               <Link to='/analisisNet/' className="menuItem">Анализ нейронной сети</Link>
               <Link to='/settings/' className="menuItem">Настройки</Link>  
               </div>
            </div>
        )
    }
}

export default Header