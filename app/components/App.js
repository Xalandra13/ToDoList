var React = require('react');

var TodoApp = React.createClass({
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

    render: function() {
        return (
            <div>
                <h1>To-Do-List</h1>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
});

var TodoForm = React.createClass({
    render: function() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    Task: <input ref={(a) => this._inputElement = a} placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});

var TodoItem = React.createClass({
    /*removeNode: function(event) {
        event.preventDefault();
    },*/

    render: function() {
       // var todoEntries = this.props.entries;

        return (
            <li key={item.key}>{item.text}
            <div>
                <button type="button" onClick={this.removeNode}>X</button>
            </div>
            </li>
        );

    }
});

var TodoList = React.createClass({

    render: function(){
        var listItems = todoEntries.map(function(item) {
            return (
                <TodoItem entries={this.state.items} />
            );
        });

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
});

module.exports = TodoApp;