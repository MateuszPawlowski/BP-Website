import './App.css';
import menu from './images/BPmenu.jpeg'
function App() {
  return (
    <div>
      <div className='text'>
        <div className=''>The website is under construction.. Please comeback soon</div>
        <hr></hr>
        <div className='margin_btm flex'>
          <div>
              Checkout our socials <div><a className='link' href='https://www.instagram.com/bartollinipizza/?igshid=YmMyMTA2M2Y%3D'> 
              Instagram</a> | <a className='link' href='https://www.facebook.com/people/Bartollini-Pizza/100088858897153/'>
              Facebook
            </a></div>
          </div>
          <div>Contact Us <div>0892063068</div></div>
        </div>
      </div>
      <div className='imageDiv'>
        {/** 
          <img className='image' src={menu} /> 
      */}
      </div>
      <div className='margin_top text'>
        Our Location: H91 WC5P
      </div>
    </div>
  );
}

export default App;
