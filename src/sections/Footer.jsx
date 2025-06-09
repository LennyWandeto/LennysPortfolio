const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Achieving Greatness. At any and every cost.</p>
          
        </div>
  
        <div className="flex gap-3">
            <a href='https://github.com/LennyWandeto' target="_blank">
          <div className="social-icon" href='https://github.com/LennyWandeto'>
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" href='https://github.com/LennyWandeto'/>
          </div>
            </a>
            <a href='https://www.linkedin.com/in/lennywandeto/' target='_blank'>
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="twitter" className="w-7 h-7" style={{
              paddingBottom: '5px',
              paddingLeft: '3px',
            }}/>
          </div>
            </a>
            <a href='https://www.instagram.com/lennywandeto/' target='_blank'>
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" href='https://www.instagram.com/lennywandeto/' />
          </div>
            </a>
        </div>
  
        <p className="text-white-500">© 2025 Lenny Wandeto. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;