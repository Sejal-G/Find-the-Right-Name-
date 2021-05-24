import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import ResultsContainer from './ResultsContainer'


const name = require('@rstacruz/startup-name-generator')

//JS classes render method to return html/jsx
class App extends React.Component {
    //lifecycle, states, prop 
    //returns html


    state = {
        headerText: 'Find the Right Name!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (Inputtext) => {
        this.setState({
            suggestedNames: Inputtext ? name(Inputtext) : [],
            headerExpanded: !Inputtext
        });
        // name(Inputtext);  

        // alert Doooooo NOTTT DO this: 
        // this.state.headerExpanded = false this is wrong
        // Inputtext.length === 0 ? this.setState({ headerExpanded: true }) : this.setState({ headerExpanded: false });
        // Inputtext.length === 0 ? [] : this.setState({ suggestedNames: name(Inputtext) });
    }
    render() {
        // console.log(name('cloud'));
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
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
