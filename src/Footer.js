import React from 'react';
import ContactForm from './Contact_form';
const Footer = () => {
  return (
    <footer className="footer  bg-white text-dark">
     <div className="flex-grow-1 container-fluid">
        <div className="row px-2 pb-3 p-md-5 shadow-lg" style={{ marginTop: 'auto', backgroundColor: "aliceblue", borderRadius: "10px" }}>
          <div className="col-md-6" >
           

            
           
              <div  style={{ marginTop: '35%', color: '#1e3a8a' }}>
               <h5>Contact Information</h5>
               <p><a className='text-reset text-decoration-none' href='mailto:bhutani123@gmail.com'>Email: bhutani123@gmail.com</a></p>
                <p><a className='text-reset text-decoration-none' href='tel:123-456-7890'>Phone: 123-456-7890</a></p>
              </div>
          
           
            
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Merriweather, sans-serif', color: '#1e3a8a' }}>M3M The Line</h2>
            <p style={{ fontFamily: 'Merriweather, sans-serif', color: '#1e3a8a' }}>
              M3M Sector 72 Noida
            </p>
           <ContactForm/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
