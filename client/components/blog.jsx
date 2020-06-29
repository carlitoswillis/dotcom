import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
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
        <h2>
          Blog
        </h2>
        <ul className="bloggy">
          {blogs.map((x) => (
            <li key={x.id}>
              <p>{x.id}</p>
              <h2>
                title of blog
              </h2>
              <p>
                {x.content}
              </p>
              <h3>
                {x.username}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Blog;
