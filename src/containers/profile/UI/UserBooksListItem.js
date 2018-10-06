import React from 'react';
import Modal from 'react-modal';
import AddForm from './AddForm';

class UserBooksListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBookOpen: false
    }
  }

  toggleIsBookOpen = () => {
    this.setState((prevState) => ({ isBookOpen: !prevState.isBookOpen }))
  }

  render() {

    const { isBookOpen } = this.state;
    const { title, author, status } = this.props.book;
    const { editBook, bookOwner, getUserBooks } = this.props;

    return (
      <div className="flex modal-add-form">
        <div onClick={this.toggleIsBookOpen}>
          {title && <p>{title}</p>}
          {author && <p>{author}</p>}
          {status && <p>Status: {status}</p>}
        </div>
        <Modal
          isOpen={isBookOpen}
          contentLabel='Book'
        >
          <div className="add-form-popup">
            <AddForm
              book={this.props.book}
              editBook={editBook}
              bookOwner={bookOwner}
              getUserBooks={getUserBooks}
            />
            <button onClick={this.toggleIsBookOpen}>Close</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default UserBooksListItem;

