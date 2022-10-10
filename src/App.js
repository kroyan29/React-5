import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


// class App extends React.Component {
//     constructor() {
//       super();
//       this.state = { value: 'Привет!' }
//     }
//     render() {
//       return(

//       <div>
//         <input value={this.state.value} />
//         </div>
//       );
//   }
//   }


// _______________________________________________________


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { value: 'Привет!' }
//   }
//   handleChange(event) {
//     // console.log('!!!');


//     // console.log(event.target);
//     // console.log(event.target.value)

//     this.setState({ value: event.target.value });

//   }
//   render() {
//     return (

//       <div>
//         <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//       </div>
//     );
//   }
// }

// _______________________________________________________


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { value: 'Привет!' }
//   }
//   handleChange(event) {

//     this.setState({value: event.target.value});

//   }

//   render() {
//     return (<div>
//       <p>Текст из нашего input-а: {this.state.value}</p>
//       <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//     </div>
//     );
//   }
// }


// _______________________________________________________

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { value: 'Привет!' }
//   }
//   handleChange(event) {

//     this.setState({ value: event.target.value });

//   }
//   handleSubmit(event) {
//     alert(this.state.value); 
//     event.preventDefault(); 
//   }


//   render() {
//     return (
//     //   <div>
//     //   <p>Текст из нашего input-а: {this.state.value.toUpperCase()}</p>
//     //   <input value={this.state.value} onChange={this.handleChange.bind(this)} />

//     // </div>


//       // <form>
//       //   <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//       //   <input type="submit" />
//       // </form>


//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//         <input type="submit" className='knop' />
//       </form>


//     );
//   }
// }


// _______________________________________________________


// Задания для самостоятельного выполнения

// 1.	Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически появлялся в этом абзаце.

// class App extends React.Component {
//   
//    state = { value: '',}

//   onChange = ({ target: { value } }) => {
//     this.setState({ value });
//   }

//   render() {
//     const text = this.state.value.split();

//     return (
//       <div>
//         <input onChange={this.onChange} /><br></br>
//         <p className='p1'>Текст: {text[0]}</p>

//       </div>
//     );
//   }
// }


// 2.	Модифицируйте предыдущую задачу так, чтобы текст в абзац выводился в верхнем регистре.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { value:'' }
//   }
//   handleChange(event) {

//     this.setState({ value: event.target.value });

//   }
//   handleSubmit(event) {
//     alert(this.state.value); 
//     event.preventDefault(); 
//   }

//   render() {

//     return (
//       <div>

//         <input value={this.state.value} onChange={this.handleChange.bind(this)} />

//       <p className='p1'>Текст: {this.state.value.toUpperCase()}</p>
//       </div>
//     );
//   }
// }

// 3.	Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста в абзаце автоматически появлялся год рождения пользователя.

// class App extends React.Component {
//   
//    state = { value: '', }


//   onChange = ({ target: { value } }) => {
//     this.setState({ value });
//   }

//   render() {
//     const text = this.state.value.split(2022 -{ value:''});

//     return (
//       <div>
//         <input onChange={this.onChange} /><br></br>
//         <p className='p1'>Текст: {text[0]}</p>

//       </div>
//     );
//   }
// }



// 4.	Дан инпут и 3 абзаца.В инпут вводится ФИО пользователя через пробел.Сделайте так, чтобы при наборе текста в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.

// class App extends React.Component {

//    state = { value: '',}


//   onChange = ({ target: { value } }) => {
//     this.setState({ value });
//   }

//   render() {
//     const imya = this.state.value.split(/\s+/);

//     return (
//       <div>
//         <input onChange={this.onChange} />
//         <p>Фамилия: {imya[0]} </p><br></br>
//         <p>, Имя: {imya[1]}</p><br></br>
//         <p>, Отчество: {imya[2]}</p><br></br>
//         {imya[3] && <p>Неверно! {imya.slice(3)}</p>}
//       </div>
//     );
//   }
// }


// _______________________________________________

// 1.	Дан инпут и кнопка submit.В инпут вводится текст.Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой - нибудь абзац.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { value: '' }
//   }
//   handleChange(event) {

//     this.setState({ value: event.target.value });

//   }
//   handleSubmit(event) {
//     alert(this.state.value); 
//     event.preventDefault(); 
//   }


//   render() {
//     return (

//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//         <input type="submit" className='knop' />
//       </form>
//     );
//   }
// }

// 2.	Даны два инпута и кнопка. В инпуты вводятся числа. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелась сумма этих чисел.

class App extends React.Component {
  constructor() {
    super();
    this.state = { value1: '', value2:'' }
  }
  handleChange(event) {

    this.setState({ value1: event.target.value });
    this.setState({ value2: event.target.value });

  }
  handleSubmit(event) {
    alert(this.state.value1 * this.state.value2); 
    event.preventDefault(); 
  }


  render() {
    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value1={this.state.value1} onChange={this.handleChange.bind(this)} />
        <input value2={this.state.value2} onChange={this.handleChange.bind(this)} />
        <input type="submit" className='knop' />
      </form>
    );
  }
}

//3.	Даны 3 инпута и кнопка. В инпуты вводится имя, фамилия и отчество. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелось полное ФИО пользователя.

// class App extends React.Component {
//   state = {
//     value: '',
//   }

//   onChange = ({ target: { value } }) => {
//     this.setState({ value });
//   }
//     handleSubmit(event) {
//     alert(this.state.value); 
//     event.preventDefault(); 
//   }
//  handleChange(event) {

//     this.setState({ value1: event.target.value });
//     this.setState({ value2: event.target.value });

//   }
//   render() {
//     const name = this.state.value.split(/\s+/);

//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>

//         <input value1={this.state.value} onChange={this.handleChange.bind(this)} />
//         <input value1={this.state.value} onChange={this.handleChange.bind(this)} />
//         <input value1={this.state.value} onChange={this.handleChange.bind(this)} />
        
//         {name[3] && <p>Неверно {name.slice(3)}</p>}
//         <input type="submit" className='knop' />
//     </form>
//         );
//   }
// }
export default App;
