var React = require('react');

var TodoItems = React.createClass({
    render: function() {
        function deleteTask(){
            console.log('deleteTask()');

        }

        var todoEntries = this.props.entries;

        function createTasks(item){
            return (
                <li key={item.key}>

                    {item.text} <button onClick={deleteTask} >X</button>
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

var TodoListApp = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },

    addItem: function(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    },

    deleteItem: function(key) {
        var newItems = this.state.items.filter(function(item) {
            return item.key !== key;
        });
        console.log(newItems);
        this.setState({
            items: newItems
        });
    },

    render: function() {
        return (
            <div>
                <h1>To-Do-List</h1>
                <div>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
            </div>
        );
    }
});

module.exports = TodoListApp;