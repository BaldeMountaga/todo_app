import React from "react";


class TodoFilter extends React.Component{

    handleActive(){
        this.props.clickedActive && this.props.clickedActive();
    }

    handleAll() {
        this.props.clickedAll && this.props.clickedAll();
    }

    handleClearCompleted(){
        this.props.clearCompletedButton && this.props.clearCompletedButton()
    }

    handleCompleted() {
        this.props.clickedCompleted && this.props.clickedCompleted();
    }

    render(){
        let nowShowing=this.props.nowShowing;
        var clearButton=null;

        if(this.props.completedCount > 0){
            clearButton=(
            <button
                    className="clear-completed"
                    onClick={this.handleClearCompleted.bind(this)}>
                    Clear completed
               </button>
            );
        }

        return(
            <div>
                <footer className="footer">
                    <strong className="todo-count" >{this.props.count} left</strong>
                    <ul className="filters" >
                        <li>
                            <a onClick={this.handleActive.bind(this)} href="#" >All</a>
                        </li>
                        {"      "}
                        <li>
                            <a onClick={this.handleAll.bind(this)} href="#">Active</a>
                        </li>
                        {"      "}
                        <li>
                            <a onClick={this.handleCompleted.bind(this)} href="#">Completed</a>
                        </li>
                    </ul>
                    {clearButton}
                </footer>
            </div>

        );
    }
}

export default TodoFilter