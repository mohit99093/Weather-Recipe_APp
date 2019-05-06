import React, { Component } from 'react';
import Main from './components/main'
import Cards from './components/cards/cards'
import './App.css';


const Api_Key1 ='589bfb59651115613ff14c439f9dc0f3'
const Api_Key ='4c3761b1b3298bb52f1e8e9d19c28116';

let search =`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${Api_Key1}&q=shredded%20chicken`


class App extends Component {
    state ={
      dish:null,
      recipes :[],
      loading :false
    }
    change =(e)=>{
      this.setState({ dish:e.target.value  });
    }
    
   
    getdata =async (e)=>{
        this.setState({ loading:true  });
        e.preventDefault();
        let api_call
        try {
          search =  `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${Api_Key1}&q=${this.state.dish}`
           api_call = this.state.dish !== null ? await fetch(search) :' '
          const data = await api_call.json();
          console.log(data);
          this.setState({ recipes: data.recipes  });
          this.setState({ loading:false  });
          if(this.state.recipes.length === 0  && this.state.dish !== null  ){ 
            alert('No Recipe Found Or Spelling is Wrong ')
         
          }
        } catch (error) {
            alert(error.message)
        }
        
    }
  render() {
          
    let loader = this.state.loading ? <div className="spinner-border loader" role="status"></div> : <Cards recipes={this.state.recipes} />
          
    return (
      <div className="App">
          <Main change={this.change} submit={this.getdata}/>
          {loader}
      </div>
    );
  }
}

export default App;
