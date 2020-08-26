import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link, Switch } from 'react-router-dom';
import PrivateRoute from "../components/PrivateRoute";

import TrackingPending from "./TrackingPending";
import TrackingProgress from "./TrackingProgress";
import TrackingRead from "./TrackingRead";

class Tracking extends Component {
    render() {
        return (
            <div>
                <Link to={`/lists/${this.props.user._id}/reads-tracking/pending`}><button>Pending</button></Link>
                <Link to={`/lists/${this.props.user._id}/reads-tracking/in-progress`}><button>In Progress</button></Link>
                <Link to={`/lists/${this.props.user._id}/reads-tracking/read`}><button>Read</button></Link>
                <div>
                    <Switch>
                        <PrivateRoute exact path='/lists/:id/reads-tracking/pending' component={TrackingPending} />
                        <PrivateRoute exact path='/lists/:id/reads-tracking/in-progress' component={TrackingProgress} />
                        <PrivateRoute exact path='/lists/:id/reads-tracking/read' component={TrackingRead} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withAuth(Tracking)