import React,{Component} from 'react'
import axios from 'axios'

export class AnalisisNet extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            isNetTrain: 0,
        }
      }

      componentDidMount(){
          let url = 'http://localhost:3210/getNetParams';

          axios.get(url)
          .then((response) => {
              console.log(response)
          })
      }

    
      render() {
      
      
        return (
          <div className='block'>
         
         Компонент для анализа

          </div>
        );
      }
}



  

export default AnalisisNet