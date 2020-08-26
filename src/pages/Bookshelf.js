import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";


class Bookshelf extends Component {
    render() {
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/audiobook`}><button>Audiobooks</button></Link>
            </div>
        )
    }
}

export default withAuth(Bookshelf)