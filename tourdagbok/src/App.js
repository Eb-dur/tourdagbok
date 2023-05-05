
import React from 'react';
import './App.css'

class entry {
  constructor(name, text, date){
    this.name = name;
    this.text = text;
    this.date = date;
  }
}


let inputs = [new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni'),new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni'),new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni'),new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni'),new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni'),new entry('Malte', 'idag har jag fått donten', '9 Juni'), new entry('Malte', 'idag har jag fick jag inte donten', '10 Juni') ];

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {namn: '', text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    const name = event.target.name;    
    this.setState({[name]: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='dform'>
      <form className='formform' onSubmit={this.handleSubmit}>        
        <label>
        Namn:
        </label>
        <input type="text" name='namn' value={this.state.namn} onChange={this.handleChange}/>
        <label>
        Text:
        </label>  
        <textarea className='longtext' type="text"name='text' value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" value="Skicka" />
      </form>
      </div>
    );
  }
}


function Diary(){
  let mapped = inputs.map(ent => {
     return(<li>
            <h3>{ent.name + ' ' + ent.date}</h3>
            <p>{ent.text}</p>
            </li>)} 
            );
  return(
    <ul className='dagbok'>{mapped}</ul>
  );
  
}


export default function App(){
  return(
    <div className='main'>
      <DiaryForm/>
    
      <Diary/>
    </div>

  );

} 