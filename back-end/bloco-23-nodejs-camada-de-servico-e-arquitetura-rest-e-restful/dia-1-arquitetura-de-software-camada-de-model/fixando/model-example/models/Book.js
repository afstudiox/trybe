const connection = require('./connection');

  const getByAuthorId = async (authorId) => {
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
    const [books] = await connection.execute(query, [authorId]);
    
    return books.map(({id, title, author_id}) => ({
      id,
      title,
      authorId: author_id,
    }));
  };

  const findById = async (id) => {
    const query = 'SELECT * FROM model_example.books WHERE id=?;';
    const [ booksData ] = await connection.execute(query, [id]);
    if ( booksData.length === 0) return null;
    return booksData.map(({id, title, author_id}) => ({
      id,
      title,
      authorId: author_id,
    }))[0];
  };

  const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books' 
  )
  return books.map(
    ({id, title, author_id}) => ({
      id,
      title,
      authorId: author_id,
    })
  );
};

module.exports = {
	getAll,
  getByAuthorId,
  findById
};

