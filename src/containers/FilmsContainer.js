import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';

class FilmsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'Sausage Party', text: 'Showtimes'},
        {id: 2, title: 'Cafe Society', text: 'Showtimes'},
        {id: 3, title: 'Morgan', text: 'Showtimes'},
        {id: 4, title: 'The 9th Life of Louis Drax', text: 'Showtimes'},
        {id: 5, title: 'Naam Hai Akira', text: 'Showtimes'},
        {id: 6, title: 'Equity', text: 'Showtimes'},
        {id: 7, title: 'Things to Come', text: 'Showtimes'}
      ]
    };
  }
  render(){
    return(
      <div className='comment-box'>
        <h2>UK Opening This Week</h2>
        <FilmList data ={this.state.data}/>
      </div>
    )
  }
}

export default FilmsContainer;
