import React from 'react';
import ReactPaginate from 'react-paginate';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    const { url, perPage } = this.props;
    this.state = {
      url,
      blogs: [],
      page: 0,
      perPage,
    };
  }

  componentDidMount() {
    this.loadDateFromServer();
  }

  loadDateFromServer() {
    const {
      url, page, query, perPage,
    } = this.state;
    $.ajax({
      url: `${url}?_page=${page + 1}&_limit=${perPage}`.concat(`${query ? `&q=${query}` : ''}`),
      type: 'GET',
      success: (data, textStatus, request) => {
        this.setState({
          data,
          pageCount: Math.ceil(request.getResponseHeader('X-Total-Count') / perPage),
        }, () => {
          document.getElementById('query').value = '';
          this.setState({ query: undefined });
        });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
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

  componentDidMount() {
    const fetchBlogs = (callback) => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch('http://127.0.0.1:3000/blogs', requestOptions)
        .then((response) => response.json())
        .then((res) => {
          callback({ blogs: [...res] });
        })
        .catch((error) => console.log('error', error));
    };

    fetchBlogs(this.setState.bind(this));
  }

  render() {
    const { blogs } = this.state;
    return (
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
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          // pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick.bind(this)}
          containerClassName="pagination"
          subContainerClassName="pagespagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

export default Blog;
