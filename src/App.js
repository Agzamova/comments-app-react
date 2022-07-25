import React, { Component } from 'react'
import Form from './components/Form'
import CommentsList from './components/CommentsList'

export default class App extends Component {
  state = {
    comments: [
      {id: 1, author: 'Natalia Agzamova', text: 'Hello world', time: '9:00:15', date: '16.07.2022'},
      {id: 2, author: 'Vlad Ivanov', text: 'Hello there', time: '9:00:15', date: '18.07.2022'},
      {id: 3, author: 'Maksim Petrov', text: 'Hello people', time: '10:00:15', date: '24.07.2022'},
    ],
    author: '',
    text: '',
    time: '',
    date: '',
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({
        ...JSON.parse(localStorage.getItem('state'))
      })
    }
  }
  
  addComment = () => {
    const comments = [...this.state.comments]

    const comment = {
      id: `${(+new Date()).toString(16)}`,
      // id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // или так, чтобы попорядку выводились id 
      author: this.state.author,
      text: this.state.text,
      time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'}),
      date: new Date().getDate() + '.' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear(),
    }

    comments.push(comment)

    this.setState({
      comments,
      author: '',
      text: '',
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  addAuthor = (e) => {
    this.setState({author: e.target.value})
  }

  addText = (e) => {
    this.setState({text: e.target.value})
  }

  deleteItem = (id) => {
    const comments = this.state.comments.filter(item => item.id !== id)
    this.setState({
        comments
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  render() {
    // console.log(this.state);
    return (
      <div className='wrapper'>
        <header>
          <h1 className='title'>Comments</h1>
        </header>
        <main>
          <Form 
            addComment={this.addComment}
            addAuthor={this.addAuthor}
            addText={this.addText}
            author={this.state.author}
            text={this.state.text}
          />
          <CommentsList comments={this.state.comments} deleteItem={this.deleteItem} />
        </main>
      </div>
    )
  }
}