import React, {Component} from 'react';

class Film extends Component{
  render(){
    return(
      <div className="film-row">
        <h4 className="film-showtimes">{this.props.film}</h4>
      </div>
    )
  }
}

export default Film;

// --------- {this.props.film.text}
