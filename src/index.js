import React,{Component} from 'react';
import ReactDOM from 'react-dom'; //lib
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCFqD9M9nYqPNkTgRCAvTm8M5OBHnBsL-0' ;



//Boilerplate . vanilla.js
//https://babeljs.io/

//Create new component . produce some HTML
//class :

class App extends  Component{
    constructor(props){
        super(props);

        this.state = {videos:[]};

        YTSearch({key:API_KEY, term :'surfboards' } , (videos) => {
            this.setState({videos}); // {videos: videos}
        });

    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };


}




//use funciton 
// const App = ()=> {
//     //this
//     return ( 
//     <div>
//         <SearchBar />
//     </div>
//     ); //jsx
// };


// class ; not instance 

    // const App = function () {
    //     return React.createElement(
    //         "div",
    //         null,
    //         "Hi! Gina"
    //     );
    // };
//take this componet's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));