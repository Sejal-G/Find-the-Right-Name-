import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
//JS classes render method to return html/jsx
class App extends React.Component {
    //lifecycle, states, prop 
    //returns html

    state = {
        headerText: 'Find the Right Name!'
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox />
                {/* <h3>{this.state.headerText}</h3>
                <button
                    onClick={() => {
                        // this.state.headerText = "somethign"
                        this.setState({
                            headerText: "Magic happens"
                        })
                    }}
                >
                    Magic happens here!</button> */}


            </div>
        )
    }
}

//one separate file for each component. So we export that file so that it can be imported wherever necessary
export default App
