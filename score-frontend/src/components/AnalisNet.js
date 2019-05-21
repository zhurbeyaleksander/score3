import React,{Component} from 'react'
import axios from 'axios'

export class AnalisisNet extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            isNetTrain: 0,
            netTraining: 0, 
        }
      }

      componentDidMount(){
          let url = 'http://localhost:3210/getNetParams';

          axios.get(url)
          .then((response) => {
              console.log('Статус сети' + response.data.isNetTrain);
              this.setState({isNetTrain: response.data.isNetTrain});
          })
      }

      componentDidUpdate(){
        console.log(this.state)
      }

      renderNetStatus = (isNetTrainStatus) => {
          if(isNetTrainStatus === 1 && this.state.netTraining === 0){
            return <div>Сеть обучена</div>
          } else if (isNetTrainStatus === 0 && this.state.netTraining === 1){
            return (
              <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
              </div>
            );
          } else {
            return (<div>Сеть не обучена</div>)
          }
      }

      trainNet = () => {
        let url = 'http://localhost:3210/trainNet';

        this.setState({netTraining: 1});

        axios.get(url)
        .then((response) => {
            console.log('Статус сети' + response.data.isNetTrain);
            this.setState({
              isNetTrain: response.data.isNetTrain,
              netTraining: 0,
            });
        })
    }
    
      render() {
      
      
        return (
          <div className='block'>
         
         <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Параметры</th>
      <th scope="col">Данные/Статусы</th>
      <th scope="col">Действия</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Статус сети</th>
      <td>{this.renderNetStatus(this.state.isNetTrain)}</td>
      <td><button type="button" class="btn btn-primary btn-sm" onClick={this.trainNet}>Обучить сеть</button></td>
    </tr>
  </tbody>
</table>

          </div>
        );
      }
}



  

export default AnalisisNet