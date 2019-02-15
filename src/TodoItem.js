import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { del } = this.props;
        del();
    }

    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }
}

export default TodoItem;