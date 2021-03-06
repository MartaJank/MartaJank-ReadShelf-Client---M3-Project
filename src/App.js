import React, { Component, Profiler } from "react";
import "./App.css";
import 'mdbreact/dist/css/mdb.css';
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import AuthProvider from "./lib/AuthProvider";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Home from "./pages/Home";
import SearchBooks from "./pages/SearchBooks";
import BookDetails from "./pages/BookDetails";
import BookAdd from "./pages/BookAdd";
import faq from "./pages/faq";
import BookEdit from "./pages/BookEdit";
import EditProfile from "./pages/EditProfile"
import CreatedBooks from "./pages/CreatedBooks";
import CreatedDetails from "./pages/CreatedDetails";
import GetAllClubs from "./pages/GetAllClubs";
import ClubDetails from "./pages/ClubDetails";
import Bookshelf from "./pages/Bookshelf";
import Tracking from "./pages/Tracking";
import AddClub from "./pages/AddClub";
import CreatedClubs from "./pages/CreatedClubs";
import BookshelfPaper from "./pages/BookshelfPaper";
import BookshelfEbooks from "./pages/BookshelfEbooks";
import BookshelfAudiobooks from "./pages/BookshelfAudiobooks";
import JoinedClubs from "./pages/JoinedClubs";
import ClubEdit from "./pages/ClubEdit";
import TrackingPending from "./pages/TrackingPending";
import TrackingProgress from "./pages/TrackingProgress";
import TrackingRead from "./pages/TrackingRead";



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
        <Navbar /> 
          <Switch>
        
            <Route exact path='/' component={Home} />
            <Route exact path='/books' component={SearchBooks} />
            <Route exact path='/books/:id' component={BookDetails} />
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Private} />
            <PrivateRoute exact path='/profile/:id/edit' component={EditProfile} />
            <PrivateRoute exact path='/books/book/add' component={BookAdd} />
            <PrivateRoute exact path='/books/:id/edit' component={BookEdit} />
            <PrivateRoute exact path='/books/created/:id' component={CreatedBooks} />
            <PrivateRoute exact path='/books/created/one/:id' component={CreatedDetails} />
            <Route exact path='/book-clubs' component={GetAllClubs} />
            <PrivateRoute exact path='/book-clubs/:id' component={ClubDetails} />
            <PrivateRoute exact path='/book-clubs/club/add' component={AddClub} />
            <PrivateRoute exact path='/book-clubs/:id/created' component={CreatedClubs} />
            <PrivateRoute exact path='/book-clubs/:id/joined' component={JoinedClubs} />
            <PrivateRoute exact path='/book-clubs/:id/edit' component={ClubEdit} />
            <PrivateRoute exact path='/bookshelf' component={Bookshelf} />
            <PrivateRoute exact path='/bookshelf/paper' component={BookshelfPaper} />
            <PrivateRoute exact path='/bookshelf/ebook' component={BookshelfEbooks} />
            <PrivateRoute exact path='/bookshelf/audiobook' component={BookshelfAudiobooks} />
            <PrivateRoute exact path='/tracking' component={Tracking} />
            <PrivateRoute exact path='/tracking/pending' component={TrackingPending} />
            <PrivateRoute exact path='/tracking/progress' component={TrackingProgress} />
            <PrivateRoute exact path='/tracking/read' component={TrackingRead} />
            <Route exact path='/faq' component={faq} />
          </Switch>

          <Footer />
        </div>
      </AuthProvider>
    );
  }
}

export default App;