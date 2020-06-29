const con = require('./myConfig');

const readAllBlogs = (callback) => {
  const perPage = 5;
  const currentPage = 0;
  const offset = currentPage * perPage;
  con.query(`select * from blogs order by id desc limit ${offset}, ${perPage}`, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

const createBlogs = () => {};
const updateBlogs = () => {};
const deleteBlogs = () => {};

module.exports = {
  createBlogs, readAllBlogs, updateBlogs, deleteBlogs,
};
