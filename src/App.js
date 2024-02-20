import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <body>

        <navbar className="categoryNavbar">
          <button id='toogleButton'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
          <span className=''>All Categories</span>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Contact Us</a>
        </navbar>

        <div className="parentDiv">
          <div className="toogleBar">
            <a href="#">Offer</a>
            <a href="#">Grocery</a>
            <a href="#">Others</a>
          </div>

          <div className="landingSection">
            <div className="card1">
              <p>Up to <span className='blackFriday'>80%</span> free</p>
              <h1>Online Fashion Collection</h1>
              <button>Buy Now</button>
            </div>
            <div className="card2 landingImage">
              <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708448442/image_b1oqi3.png'></img>
            </div>
          </div>
        </div>


        <div className="displaySection">
          <div className="card">
            <div className="div">
              <p>product</p>
              <h3>20% sale</h3>
            </div>
            <div className="div">
              <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
            </div>

          </div>

          <div className="card">
            <div className="div">
              <p>product</p>
              <h3>20% sale</h3>
            </div>
            <div className="div">
              <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
            </div>

          </div>


          <div className="card">
            <div className="div">
              <p>product</p>
              <h3>20% sale</h3>
            </div>
            <div className="div">
              <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
            </div>

          </div>


          <div className="card">
            <div className="div">
              <p>product</p>
              <h3>20% sale</h3>
            </div>
            <div className="div">
              <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
            </div>
          </div>
        </div>

        <div className="titleSection">
          <h2>Featured Item</h2>
        </div>


        <div className="productSection">
          <div className="serviceSection">
            <div className="card">
              <h3>Free Shipping</h3>
              <p>min price 90$</p>
            </div>
            <div className="card">
              <h3>Free Shipping</h3>
              <p>min price 90$</p>
            </div>
            <div className="card">
              <h3>Free Shipping</h3>
              <p>min price 90$</p>
            </div>
            <div className="card">
              <h3>Free Shipping</h3>
              <p>min price 90$</p>
            </div>
          </div>


          <div className="featureSection">

            <div className="card">
              <div className="divImage">
                <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
              </div>
              <div className="divProduct">
                <h3>product name</h3>
                <div className="nestedDiv">
                  <p className='rating'>5 star</p>
                  <p>available</p>
                </div>
                <div className="priceDiv">
                  <p className='price'>$20.00</p>
                  <del>available</del>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="divImage">
                <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
              </div>
              <div className="divProduct">
                <h3>product name</h3>
                <div className="nestedDiv">
                  <p className='rating'>5 star</p>
                  <p>available</p>
                </div>
                <div className="priceDiv">
                  <p className='price'>$20.00</p>
                  <del>available</del>
                </div>
              </div>
            </div>



            <div className="card">
              <div className="divImage">
                <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
              </div>
              <div className="divProduct">
                <h3>product name</h3>
                <div className="nestedDiv">
                  <p className='rating'>5 star</p>
                  <p>available</p>
                </div>
                <div className="priceDiv">
                  <p className='price'>$20.00</p>
                  <del>available</del>
                </div>
              </div>
            </div>



            <div className="card">
              <div className="divImage">
                <img src='https://res.cloudinary.com/dgmtxifae/image/upload/v1708454440/online-learning_2704433_jwh57a.png'></img>
              </div>
              <div className="divProduct">
                <h3>product name</h3>
                <div className="nestedDiv">
                  <p className='rating'>5 star</p>
                  <p>available</p>
                </div>
                <div className="priceDiv">
                  <p className='price'>$20.00</p>
                  <del>available</del>
                </div>
              </div>
            </div>




          </div>
        </div>





      </body>
    </div>
  );
}



export default App;
