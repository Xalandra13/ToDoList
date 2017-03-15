var React = require('react');

var TodoItems = React.createClass({
    removeNode: function(event) {
        event.preventDefault();
    },

    render: function() {
        var todoEntries = this.props.entries;

        function createTasks(item) {
            return (
                <li key={item.key}>{item.text}
                <div>
                    <button type="button" onClick={this.removeNode}>X</button>
                </div>
                </li>
            );
        }

        var listItems = todoEntries.map(createTasks);

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
});

var ToDoList = React.createClass({
   getInitialState: function() {
       return {
           items: []
       };
   },

    addItem: function(event) {
        var itemArray = this.state.items;

        // add submitted text
        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()  // current time as unique id
            }
        );

        this.setState({
            items: itemArray
        });

        // empty text input field
        this._inputElement.value = "";

        // prevent POST behavior
        event.preventDefault();
    },

    render: function(){
        return (
            <div>
                <h1>To-Do-List</h1>
                <form onSubmit={this.addItem}>
                    Task: <input ref={(a) => this._inputElement = a} placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
});

module.exports = ToDoList;