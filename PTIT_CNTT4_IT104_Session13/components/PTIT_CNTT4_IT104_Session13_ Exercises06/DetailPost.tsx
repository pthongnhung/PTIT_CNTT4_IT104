import React, { Component } from 'react'
import ListPost from "./ListPost"
type article = {
    id: number,
    title: string,
    content: string,
    author: string
};
type StateType = {
    articles: article[];
}
export default class DetailPost extends Component<object, StateType> {
    state: StateType = {
        articles: [
             {
            id: 1,
            title: "tai sao len hoc react",
            content: "hoc react de di lam",
            author: "Linda"
        },
        {
            id: 2,
            title: "props trong react",
            content: "props giup truyen du lieu tu component con xuong component cha",
            author: "David"
        },
        {
            id: 3,
            title: "state tromg reactJS la gi ?",
            content: "State giup tru trang thai du lieu ben trong mot component",
            author:"nhung"
        }
        ]
    }
  render() {
    return (
      <div>
            <ListPost articles={this.state.articles}></ListPost>
      </div>
    )
  }
}
