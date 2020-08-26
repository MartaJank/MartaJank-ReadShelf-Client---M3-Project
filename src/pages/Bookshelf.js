import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link, Switch } from 'react-router-dom';
import PrivateRoute from "../components/PrivateRoute";

import BookshelfPaper from "./BookshelfPaper";
import BookshelfEbooks from "./BookshelfEbooks";
import BookshelfAudiobooks from "./BookshelfAudiobooks";

class Bookshelf extends Component {
    render() {
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/bookshelf/paper`}><button>Paper</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/ebook`}><button>Ebooks</button></Link>
                <Link to={`/lists/${this.props.user._id}/bookshelf/audiobook`}><button>Audiobooks</button></Link>
                <div>
                    <Switch>
                        <PrivateRoute exact path='/lists/:id/bookshelf/paper' component={BookshelfPaper} />
                        <PrivateRoute exact path='/lists/:id/bookshelf/ebook' component={BookshelfEbooks} />
                        <PrivateRoute exact path='/lists/:id/bookshelf/audiobook' component={BookshelfAudiobooks} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withAuth(Bookshelf)