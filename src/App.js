import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Books from './containers/books/UI/Books';
import IndexPage from './containers/IndexPage';
import { UserBooksWrap } from './containers/profile/container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import HtmlToReactParser from 'html-to-react';


//click one more time back
class App extends Component {
  render() {

 
    var htmlInput = `<div class="w3-top">
          <div class="w3-bar w3-pale-blue w3-card" id="myNavbar">
            <a href="#home" class="w3-bar-item w3-button w3-wide">PASS IT ON!</a>
            <div class="w3-right w3-hide-small">
              <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
              <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
              <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
              <a href="#login" class="w3-bar-item w3-button"><i class="fa fa-pencil-square-o"></i> LOGIN</a>
            </div>
            <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </div>
        <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
          <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
          <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT</a>
          <a href="#team" onclick="w3_close()" class="w3-bar-item w3-button">TEAM</a>
          <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
          <a href="#login" onclick="w3_close()" class="w3-bar-item w3-button">LOGIN</a>
        </nav>
        <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
          <div class="w3-display-left w3-text-black" style="padding:48px">
            <br>
            <br>
            <br>
            <span class="w3-jumbo w3-hide-small">Have a book?</span><br>
            <span class="w3-jumbo w3-hide-small">Pass it on!</span><br>
            <span class="w3-large">Create opportunities by passing on your unwanted, useful books! </span>
            <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more about us!</a></p>
          </div> 
        </header>
        <div class="w3-container" style="padding:128px 16px" id="about">
            
          <h3 class="w3-center">ABOUT THE COMPANY</h3>
        <div class="w3-container w3-light-grey w3-padding-64">
            <div class="w3-row-padding">
              <div class="w3-col m6">
                <h3>About us!</h3>
                <p>Pass it on! seeks to provide a meaningful way to share unwanted, useful books with others, and create a community of readers with sharing economy mindset. </p>
                <p>With Pass it On! , you can share a book, look for available books and track the location of books that are currently being read.  </p>
                <p>Registered user will be able to add books to our library, request a book, and share a book. The user will also have the opportunity to interact with other users and have online discussions through our blog.</p>
          
            </div>
              <div class="w3-col m6">
                <br>
                <br>
                <p></p>
                <img class="w3-col m10 w3-opacity" src="./assets/content_pics/sharing.jpg" alt="Sharing">
                </p>
            </div>
          </div>
          <p class="w3-center w3-xlarge">Key features</p>
          <div class="w3-row-padding w3-center" style="margin-top:64px">
            <div class="w3-third">
              <button class="w3-button">
              <i class="fa fa-search w3-margin-bottom w3-jumbo w3-center"></i>
              <p class="w3-large">Search books</p>
              </button>
              <p>Looking for a specific book? Search inside our library</p>
            </div>
            <div class="w3-third">
              <button class="w3-button">
              <i class="fa fa-book w3-margin-bottom w3-jumbo"></i>
              <p class="w3-large">Add New Book</p>
            </button>
              <p>Have a book to share? Add it in our library</p>
            </div>
            
            <div class="w3-third">
              <button class="w3-button">
                <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
                <p class="w3-large">Support</p>
              </button>
              <p>Have a problem? Contact our support team</p>
            </div>
          </div>
        </div>
        <!-- Team Section -->
        <div class="w3-container" style="padding:128px 16px" id="team">
          <h3 class="w3-center">THE TEAM</h3>
          <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-card">
                <img src="./assets/profile_pics/Celio.jpg" alt="Celio" style="width:100%">
                <div class="w3-container">
                  <h3>Celio </h3>
                  <p class="w3-opacity">Co-founder</p>
                  <p>Celio enjoys running and reading about new technology.</p>
                  <p><button class="w3-button w3-teal w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-card">
                <img src="./assets/profile_pics/david.jpg" alt="David" style="width:100%">
                <div class="w3-container">
                  <h3>David</h3>
                  <p class="w3-opacity">Co-founder</p>
                  <p>David enjoys swimming, coding and IoT</p>
                  <p><button class="w3-button w3-teal w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-card">
                <img src="./assets/profile_pics/oleksii.jpg" alt="Oleksii" style="width:100%">
                <div class="w3-container">
                  <h3>Oleksii </h3>
                  <p class="w3-opacity">Co-founder</p>
                  <p>Oleksii enjoys reading and learning new technology.</p>
                  <p><button class="w3-button w3-teal w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
              <div class="w3-card">
                <img src="./assets/profile_pics/velimir.jpg" alt="Velimir" style="width:100%">
                <div class="w3-container">
                  <h3>Velimir</h3>
                  <p class="w3-opacity">Co-founder</p>
                  <p>Velimir enjoys reading and creating websites.</p>
                  <p><button class="w3-button w3-teal w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Promo Section "Statistics" -->
        <div class="w3-container w3-row w3-center w3-teal w3-padding-64">
        <h1 class="w3-xxlarge">Our progress</h1>
          <div class="w3-quarter">
            <span class="w3-xxlarge">14+</span>
            <br>States
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">55+</span>
            <br>Books Shared
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">89+</span>
            <br>Users
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">30+</span>
            <br>Blog Posts
          </div>
        </p>
        </div>
        <!-- Work Section -->
        <div class="w3-container" style="padding:128px 16px" id="work">
            <h3 class="w3-center">Reading a book?</h3>
            <p class="w3-col w3-center">
                <img class="w3-row w3-center w3-opacity" src="./assets/content_pics/books1.jpg" style="width:50%" onclick="onClick(this)" class="w3-hover-opacity" alt="books1">
              </p>
            <p class="w3-center">Share your thoughts in our blog! </p>
            <p class="w3-center">Click below!</p>
            <p class="w3-center">
              <button class="w3-button">
                <i class="fa fa-pencil w3-xxlarge w3-margin-right"></i>
              </button>
          </div>
        <!-- Modal for full size images on click-->
        <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
          <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
          <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" class="w3-image">
            <p id="caption" class="w3-opacity w3-large"></p>
          </div>
        </div>
        <!-- Contact Section -->
        <div class="w3-container w3-light-grey" style="padding:128px 16px" style="text-align:center" id="contact">
          <h3 class="w3-center">CONTACT</h3>
          <p class="w3-center w3-large">Need to stay in touch or support? Send us a message:</p>
          <div class="w3-row-padding" style="margin-top:60px">
            <div class="w3-center">
              <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> New York, US</p>
              <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +800 3455682</p>
              <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: passiton@mail.com</p>
              <br>
              <form action="/action_page.php" target="_blank">
                <p><input class="w3-input w3-center" type="text" placeholder="Name" required name="Name"></p>
                <p><input class="w3-input w3-center" type="text" placeholder="Email" required name="Email"></p>
                <p><input class="w3-input w3-center" type="text" placeholder="Subject" required name="Subject"></p>
                <p><input class="w3-input w3-center" type="text" placeholder="Message" required name="Message"></p>
                <p>
                  <button class="w3-button w3-teal" type="submit">
                    <i class="fa fa-paper-plane"></i> SEND MESSAGE
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <footer class="w3-center w3-teal w3-padding-64">
          <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-center"></i></a>
          <div class="w3-xlarge w3-section">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
          </div>
        </footer>`;
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(htmlInput);
    var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);


    return (
      <div className="App">
        <HashRouter>
            <Switch>
              <Route path = "/" exact = "exact" component = {reactElement}/>
              <Route path = "/search" component = {Books}/>
              <Route path = "/profile" component = {UserBooksWrap}/>
            </Switch>
         </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);

// <UserBooksWrap />
// <Books />
