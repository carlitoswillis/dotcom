const con = require('./myConfig');

const getBlogCount = (query, callback) => {
  const qstr = query.replace('*', 'count(*)');
  console.log(qstr);
  con.query(qstr, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

const readAllBlogs = (query, callback) => {
  const { limit, page, q } = query;
  const offset = page * limit;
  let qstr = 'select * from blogs';
  let qforcount = qstr;
  if (q) {
    qstr = qstr.concat(` where content like '%${q}%'`);
    qforcount = qforcount.concat(` where content like '%${q}%'`);
  }
  qstr = qstr.concat(` order by id desc limit ${offset}, ${limit}`);
  con.query(qstr, (err, result) => {
    if (err) throw err;
    getBlogCount(qforcount, (ce, count) => {
      callback(null, { results: result, count: count[0]['count(*)'] });
    });
  });
};

const createBlogs = () => {};
const updateBlogs = () => {};
const deleteBlogs = () => {};

module.exports = {
  createBlogs, readAllBlogs, updateBlogs, deleteBlogs, getBlogCount,
};
