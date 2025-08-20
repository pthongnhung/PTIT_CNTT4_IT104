import React, { Component } from 'react'
type article = {
    id: number,
    title: string,
    content: string,
    author: string
};
type Props = {
    articles: article[];
}
export default class ListPost extends Component< Props> {
  render() {
    return (
        <div>
            <h2>Danh sach bai viet</h2>
            {this.props.articles.map((item, index) =>
            <div key={index}>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>content: {item.content}</p>
                <p>author: {item.author}</p>
                <hr />
          </div>
        )}
      </div>
    )
  }
}
