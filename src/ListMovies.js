import React, { Component } from 'react';
import ListLikedUsers from './ListLikedUsers';

class ListMovies extends Component {
  
	render() {  
      console.log(this.props.likedUsers)
    return (
      <div>
      {Object.keys(this.props.movies).map((id) => (
      <div>
     <h2 key={id}>{this.props.movies[id].name}</h2>
	 <ListLikedUsers likedUsers={this.props.likedUsers.filter(liked => liked.movieID == id)} users={this.props.users} />
	</div>
    ))}
	</div>
     
      )
    }
}

export default ListMovies