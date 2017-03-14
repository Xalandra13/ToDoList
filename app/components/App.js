var React = require('react');

var ToDoList = React.createClass({
   getInitialState: function() {
       return {
           tasks: []
       };
   },

    addTask: function(event) {
        this.setState.tasks;
    },

    render: function(){
        return (
            <div>
                <h1>To-Do-List</h1>
                <form onSubmit={this.addTask}>
                    Task: <input placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = ToDoList;