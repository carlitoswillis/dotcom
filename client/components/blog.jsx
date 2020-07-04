import React from 'react';
import ReactPaginate from 'react-paginate';

const $ = require('jquery');

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://127.0.0.1:3000/blogs',
      blogs: [],
      page: 0,
      perPage: 3,
    };
  }

  componentDidMount() {
    this.loadDateFromServer();
  }

  loadDateFromServer() {
    window.scrollTo(0, 0);
    const {
      url, page, query, perPage,
    } = this.state;

    $.ajax({
      url: `${url}?page=${page + 1}&limit=${perPage}`.concat(`${query ? `&q=${query}` : ''}`),
      type: 'GET',
      success: (data, textStatus, request) => {
        this.setState({
          blogs: [...data.results],
          pageCount: data.count / perPage,
        }, () => {
          document.getElementById('query').value = '';
          this.setState({ query: undefined });
        });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      },
    });
  }

  handlePageClick(data) {
    const { selected } = data;
    this.setState({ page: selected }, () => {
      this.loadDateFromServer();
    });
  }

  handleKeyPress(e) {
    let { query } = this.state;
    query = query === undefined
      ? ''
      : query;
    if (e.key === 'Enter') {
      this.loadDateFromServer();
    } else {
      this.setState({
        query: query + e.key,
      });
    }
  }

  render() {
    const { blogs, pageCount } = this.state;
    return (
      <div>
        <div className="blog">
          <input className="query" id="query" onKeyPress={this.handleKeyPress.bind(this)} placeholder="search for something" />
          <ul className="bloggy">
            {blogs.map((x) => (
              <li key={x.id}>
                <h2 className="blogTitle">
                  {x.title}
                </h2>
                <p className="blogContent">
                  {x.content}
                </p>
                <h3 className="blogAuthor">
                  {x.username}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName="pagination"
          subContainerClassName="pagespagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

export default Blog;
