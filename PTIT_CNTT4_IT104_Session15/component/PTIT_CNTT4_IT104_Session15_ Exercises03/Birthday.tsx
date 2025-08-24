// import React, { Component } from "react";

// type State = {
//   birthday: string;
//   submitted: string;
// };

// export default class Birthday extends Component<object, State> {
//     state: State = { birthday: "", submitted: "" };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ birthday: e.target.value });
//   };

//   handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     this.setState({ submitted: this.state.birthday });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Ngày sinh:</label><br />
//           <input
//             type="date"
//             value={this.state.birthday}
//             onChange={this.handleChange}
//           /><br /><br />
//           <button type="submit">Submit</button>
//         </form>

//         {this.state.submitted && (
//           <p>Ngày sinh: {this.state.submitted}</p>
//         )}
//       </div>
//     );
//   }
// }
import React, { Component } from 'react'
type StateType = {
    birthday: string,
    submitted:string
}

export default class Birthday extends Component {
    state: StateType = {
        birthday: "",
        submitted: ""
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({birthday:e.target.value})
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submitted: this.state.birthday })
 
        
    }
  render() {
    return (
        <div>
            <form action="" onSubmit={this.handleSubmit}>
                  {this.state.submitted && (
          <p>Ngày sinh: {this.state.submitted}</p>
          )}
                <input type="date" value={this.state.birthday} onChange={this.handleChange}></input> <br />
                <button type="submit">Submit</button>
            </form>
            
            
      </div>
    )
  }
}
