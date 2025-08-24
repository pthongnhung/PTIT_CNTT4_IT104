import React, { Component } from 'react'
type StateType = {
    progress: number;
    submitted: number
}
export default class Range extends Component <object,StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            progress: 0,
            submitted:0
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({progress:Number(e.target.value)})
    }
   
     handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.progress });
  };
  render() {
    return (
      <div>
            <form action="" onSubmit={this.handleSubmit}>
              <p>  tien do hoan thanh {this.state.submitted > 0 ? this.state.submitted :0} %</p>
                
                <input type="range" value={this.state.progress} onChange={this.handleChange}/> 
                <button>Submit</button>
        </form>
      </div>
    )
  }
}
