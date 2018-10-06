import React from 'react';
import AddForm from './AddForm';
import '../../../new.css';
import { UserBooksListWrap } from '../container';

class UserBooks extends React.Component {

  componentWillMount() {
    const { userId, getUserBooks } = this.props;
    getUserBooks(userId);
  }

  render() {
    const { userId, getUserBooks, addBookToDB } = this.props;
    return (
      <div>
        <div className="flex outer">
          <div className="add-form">
            <AddForm
              bookOwner={userId}
              getUserBooks={getUserBooks}
              addBookToDB={addBookToDB}
            />
          </div>
          <div className="user-books-list">
            <UserBooksListWrap />
          </div>
        </div>
      </div>
    )
  }
}

export default UserBooks;
