import React,{Component} from 'react';
// syntax sugar ,  the same :
// const Component = React.Component

// const SearchBar = () =>{
//     return <input /> ; 
 
// };

//class SearchBar extends React.Component{
// fucnitonal component won't have state ; only class component do ;

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term : 'starting value'};
    }
    render(){
       // return <input onChange={this.onInputChange} />;
       // return <input onChange= { (event) => console.log(event.target.value)} />;
         return (
            <div>
              <input
                value = {this.state.term}  
                onChange= { (event) => this.setState({term : event.target.value})} />
                Value of the input : {this.state.term}

            </div>

          );
         //vanilla.js 
    }
    // onInputChange (event){
    //     console.log(event.target.value);
    // }
    //event handler 
}
// render is a function 

export default SearchBar;
//react.createElement...