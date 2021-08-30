import React from 'react';

class SearchInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {entry : ''}
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }

    render(){
        return(
            <div className='ui segment'>
                <form  onSubmit = {this.onFormSubmit} className="ui form" action="">
                    <div className="ui field">
                        <div className="ui massive icon input">
                            <input type="text" 
                            placeholder="Search for Pics...."
                            onChange = {(event) => this.setState({entry : event.target.value})} 
                            value = {this.state.entry}
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default SearchInput;