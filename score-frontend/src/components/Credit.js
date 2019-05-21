import React,{Component} from 'react'
import axios from 'axios'

export class Credit extends Component{
    constructor(props) {
        super(props);
        this.state = {
          age: 0,
          pe: 0,
          creditDecision: 0,
          creditAmount: 0,
          income: 0,
          coIncome: 0,
          sex: 0,
          married: 0,
          dependents: 0,
          edu: 0,
          selfEmp: 0,
          creditHistory: 0,
          area: 0,
          loanTerm: 0,
          decision: 0,
          isRequest: 0,
          waitAnswer: 0,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
      }

      
    
      handleInputChange(event) {
        event.preventDefault();
        switch(event.target.name){
           case 'age': this.setState({age: +event.target.value})
           break
           case 'sex': this.setState({sex: +event.target.value})
           break
           case 'married': this.setState({married: +event.target.value})
           break
           case 'creditAmount': this.setState({creditAmount: +event.target.value})
           break
           case 'income': this.setState({income: +event.target.value})
           break
           case 'coIncome': this.setState({coIncome: +event.target.value})
           break
           case 'dependents': this.setState({dependents: +event.target.value})
           break
           case 'edu': this.setState({edu: +event.target.value})
           break
           case 'selfEmp': this.setState({selfEmp: +event.target.value})
           break
           case 'creditHistory': this.setState({creditHistory: +event.target.value})
           break
           case 'area': this.setState({area: +event.target.value})
           break
           case 'loanTerm': this.setState({loanTerm: +event.target.value})
           break
           default: console.log('Ничего не поменялось.')
        }
      }
    
      handleSubmit(event) {
        event.preventDefault();

        var url = 'http://localhost:3210/net';
   
        axios.post(url, {
          age: this.state.age,
          sex: this.state.sex,
          married: this.state.married,
          creditAmount: this.state.creditAmount,
          income: this.state.income,
          coIncome: this.state.coIncome,
          dependents: this.state.dependents,
          edu: this.state.edu,
          selfEmp: this.state.selfEmp,
          creditHistory: this.state.creditHistory,
          area: this.state.area,
          loanTerm: this.state.loanTerm,
        })
        .then(function (response) {
          console.log('---')
          console.log(response.data.output);
        })
        .catch(function (error) {
          console.log(error);
        });

        this.setState({
          waitAnswer: 1,
          isRequest: 1,
        })
        
         setTimeout(() => {
          axios.get('http://localhost:3210/net')
          .then((response) => {
            console.log('+++')
            console.log(response);
            console.log(+response.data.creditDecision.result)
            const decision = response.data.creditDecision.result > 0.7 ? 1 : 0;
            this.setState({
              isRequest: 1,
              decision: decision,
              waitAnswer: 0,
            });
          })
         }, 5000)
        
       

      }

      handleReject()
      {
        this.setState({
          isRequest: 0,
          decision: 0,
        });
      }

      handleApprove(event){
         
        event.preventDefault();

        var url = 'http://localhost:3210/add_to_credit_poll';
   
        axios.post(url, {
          age: this.state.age,
          sex: this.state.sex,
          married: this.state.married,
          creditAmount: this.state.creditAmount,
          income: this.state.income,
          coIncome: this.state.coIncome,
          dependents: this.state.dependents,
          edu: this.state.edu,
          selfEmp: this.state.selfEmp,
          creditHistory: this.state.creditHistory,
          area: this.state.area,
          loanTerm: this.state.loanTerm,
          decision: this.state.decision,
        })
        .then(function (response) {
          console.log(response);
        
        })
        .catch(function (error) {
          console.log(error);
        });

      }


      renderAnswerBlock = (isRequest) => {
        if(isRequest){
          return <div className='answerBlock'>
          <div className='answerBlocText'> Результат кредитного решения </div>
          <div className='answerBlocText'> {this.creditDecision(this.state.decision)}</div>
             <br/><br/><br/><br/>
             <button className='btn btn-primary label' onClick={this.handleApprove}>Одобрить</button> 	&nbsp;	&nbsp;
            <button className='btn btn-primary label' onClick={this.handleReject}>Отклонить</button>
              </div>
        } else{
          return <div>Запрос не отправлен</div>
        }
      }

      creditDecision = (des) => {
        if (this.state.waitAnswer === 1) {
          return(
            <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
          );
        } else {
        if(des === 1){
          return <div className='creditDecisionYes'>Положительное решение</div>
        } else if(des === 0){
          return <div className='creditDecisionNo'>Отрицательное решение</div>
        } else {
          return <div className='creditDecisionNoAnswer'>Нет решения.</div>
        }
      }
      }
    
      render() {
        console.log(this.state)
        
        if (this.state.isRequest === 0) {
        return (
          <div className='block creditForm'>
         <form onSubmit={this.handleSubmit}>
         <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Фамилия <br/>
              <input className='inputMy'
                name="LastName"
                 />
            </label >
            </div>
         <div className='itemAnketa'>
         <label className='label'>
             Имя <br/>
              <input
                name="name"
                 />
            </label>
            </div>
            <div className='itemAnketa'>
            <label className='label'>
             Отчество <br/>
              <input
                name="middleName"
                 />
            </label>
            </div>
            </div>
            <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Размер ссуды <br/>
              <input className='inputMy'
                 name="creditAmount"
                 type="number"
                 value={this.state.creditAmount}
                 onChange={this.handleInputChange} 
                 />
            </label >
            </div>
         <div className='itemAnketa'>
         <label className='label'>
             Официальный доход <br/>
              <input
                  name="income"
                  type="number"
                  value={this.state.income}
                  onChange={this.handleInputChange}
                 />
            </label>
            </div>
            <div className='itemAnketa'>
            <label className='label'>
             Дополнительный доход <br/>
              <input
                name="coIncome"
                type="number"
                value={this.state.coIncome}
                onChange={this.handleInputChange}
                 />
            </label>
            </div>
            </div>
            <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Возраст<br/>
              <input className='inputMy'
                 name="age"
                 type="number"
                 value={this.state.age}
                 onChange={this.handleInputChange} 
                 />
            </label >
            </div>
         <div className='itemAnketa'>
         <label className='label'>
             Пол <br/>
             <select class="custom-select" value={this.state.sex} name="sex" onChange={this.handleInputChange}>
    <option value="0" selected>Не задан</option>
    <option value="1">Мужской</option>
    <option  value="2">Женский</option>
  </select>
            </label>
            </div>
            <div className='itemAnketa'>
            <label className='label'>
             Семейное положение <br/>
             <select class="custom-select" value={this.state.married} name="married" onChange={this.handleInputChange}>
    <option value="0" selected>Не указано</option>
    <option value="0">Холост/Не замужем</option>
    <option  value="1">Женат/Замужем</option>
  </select>
            </label>
            </div>
            </div>
         <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Членов семьи<br/>
              <input className='inputMy'
                 name="dependents"
                 type="number"
                 value={this.state.dependentse}
                 onChange={this.handleInputChange} 
                 />
            </label >
            </div>
         <div className='itemAnketa'>
         <label className='label'>
            Высшее образование <br/>
             <select class="custom-select" value={this.state.edu} name="edu" onChange={this.handleInputChange}>
    <option value="0">Отсутствует</option>
    <option  value="1">Высшее</option>
  </select>
            </label>
            </div>
            <div className='itemAnketa'>
            <label className='label'>
            Самозанятость <br/>
            <select class="custom-select" value={this.state.selfEmp} name="selfEmp" onChange={this.handleInputChange}>
    <option value="0">Работа по найму</option>
    <option  value="1">Самозанятый</option>
  </select>
            </label>
            </div>
            </div>
            <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Кредитная история<br/>
             <select class="custom-select" value={this.state.creditHistory} name="creditHistory" onChange={this.handleInputChange}>
    <option value="0">Нет</option>
    <option  value="1">Есть</option>
  </select>
            </label >
            </div>
         <div className='itemAnketa'>
         <label className='label'>
             Регион проживания <br/>
             <select class="custom-select" value={this.state.area} name="area" onChange={this.handleInputChange}>
    <option value="1">Город</option>
    <option  value="0">Сельская местность</option>
  </select>
            </label>
            </div>
            <div className='itemAnketa'>
            <label className='label'>
            Место работы <br/>
              <input
                name="job"
                type="number"
                value={this.state.job}
                onChange={this.handleInputChange}
                 />
            </label>
            </div>
            </div>
            <div className='blocAnketa'>
         <div className='itemAnketa'>
         <label className='label'>
             Срок кредита в мес. <br/>
              <input className='inputMy'
                 name="loanTerm"
                 type="number"
                 value={this.state.loanTerm}
                 onChange={this.handleInputChange} 
                 />
            </label >
            </div>
            </div>
           <br/><br/><br/>
            <input type="submit" className='btn btn-primary label'  onSubmit={this.handleSubmit} value="Отправить" />
          
          </form>
          </div>
        );
        } else {
          return(
            <div className='block desBlock'>
               {this.renderAnswerBlock(this.state.isRequest)}
            </div>
          );
        }
      }
}



  

export default Credit