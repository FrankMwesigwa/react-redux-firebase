import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content:''
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content:''})
    }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="content">Add New Todo Item:</label>
                <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
            </div>

            <button >Submit</button>
        
        </form>
        
      </div>
    );
  }
}

export default AddTodo;
