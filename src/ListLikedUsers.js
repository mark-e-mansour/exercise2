import React, { Component } from 'react';

class ListLikedUsers extends Component
{
  render() {
    if(this.props.likedUsers.length > 0)
    {
      return (
        <div>
        <p>Liked By:</p>
      <ul>
        {this.props.likedUsers.map((liked) => (
        <li key={liked.LikedUser}>{this.props.users[liked.LikedUser].name}</li>
      
      ))}  
      </ul>
</div>
      )
    }
    else
    {
      return (
      <p>No users liked this movie</p>
      )
    }
  }
}

export default ListLikedUsers