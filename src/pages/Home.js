import React from 'react';

function Home() {
  return (
    <div> 
      <h1>Carousel</h1>
      <div className="horitzontal-scroll">
        <ul className="hs">
          <li className="item">
            <img className="cards-img" alt="flying books and boy in the forest" src="../images/2375391.jpg" />
            <h5 className="card-title">FIND AMAZING BOOKS</h5>
            <hr className="card-hr" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lectus vitae ipsum convallis sodales eu a leo.</p>
            <button className="card-btn">Book finder</button>
          </li>
          <li className="item">
            <img className="cards-img" alt="opened book with bookshelf background" src="../images/5920.jpg" />
            <h5 className="card-title">BUILD YOUR BOOKSHELF</h5>
            <hr className="card-hr" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lectus vitae ipsum convallis sodales eu a leo.</p>
            <button className="card-btn">Build a Bookshelf</button>
          </li>
          <li className="item">
            <img className="cards-img" alt="coffee and book and lavender" src="../images/coffee-2151200.jpg" />
            <h5 className="card-title">YOUR READING HABITS</h5>
            <hr className="card-hr" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lectus vitae ipsum convallis sodales eu a leo.</p>
            <button className="card-btn">Track your reads</button>
          </li>
          <li className="item">
            <img className="cards-img" alt="girl with socks and a coffee reading" src="../images/books-3454381.jpg" />
            <h5 className="card-title">JOIN A BOOK CLUB</h5>
            <hr className="card-hr" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lectus vitae ipsum convallis sodales eu a leo.</p>
            <button className="card-btn">Join</button>
          </li>
        </ul>  
      </div>
      <div className="home-bookshelf">
        <div className="home-bk-left">
          <img className="description-img" alt="book and coffee and raffaello" src="../images/coffee-2784289 copy.jpg" />
        </div>
        <div className="home-bk-right">
          <h4 className="home-right-title">SORT YOUR BOOKSHELF</h4>
          <hr className="home-right-hr" />
          <p className="home-right-p">Once you create your bookshelf you'll be able to sort your books by the ones you own in paper, ebook or audiobook.</p>
          <p className="home-right-p">You can also sort them by the ones you've read, the ones you have in progress and the pending ones you'd love to read!</p>
        </div>
      </div>
      <div className="home-club-all">
        <hr className="main-hr" />
        <div className="home-club">  
          <div className="home-club-left">
            <h4 className="home-right-title">CREATE A BOOK CLUB</h4>
            <hr className="home-club-hr" />
            <p className="home-right-p">You can either join or create a book club!</p>
            <p className="home-right-p">If you're not into any of the book clubs that you find you can always create and manage your own!</p>
            <p className="home-right-p">It's easier than you think!</p>
            <button className="card-btn">TRY IT HERE</button>
          </div>
          <div className="home-club-right">
            <img className="description-img-club" alt="person in socks on a blankett reading" src="../images/book-1031359.jpg" />
          </div>
        </div>
        <hr className="main-hr" />
      </div>
      
    </div>
  )
}

export default Home;