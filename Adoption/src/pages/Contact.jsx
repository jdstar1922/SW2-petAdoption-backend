function Contact (){
    return (
        <div className="antialiased bg-[#F6F4F3]">
          
    
          <div className="contact-general">
            <div className="form-general">
              <div className="form-general-1">
                <div className="form">
                  <h1 className="contact-title">Contact Us</h1>
                  <p className="contact-description">Please fill the form below, and you will be contacted soon!</p>
                </div>
    
                <div className="contact-container-1">
                  <div className="contact-container-2">
                    
                  <div className="contact-item-title">
                      
                      <span>Contact Information</span>
                    </div>
                    
                    <div className="contact-item">
                      
                      <span>Email - pawson@hotmail.com</span>
                    </div>
                    <div className="contact-item">
                      
                      <span>Cellphone - +506 8888-6666</span>
                    </div>
                    <div className="contact-item">
                      
                      <span>Location - San Jose, Costa Rica</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-container">
                <form action="" className="form-container-1">
                  <div>
                    <label htmlFor="" className="text-xl">Name</label>
                  </div>
                  <div>
                    <input type="text" placeholder="Your name" className="form-placeholder" />
                  </div>
                  
                  <div>
                    <label htmlFor="" className="text-xl">E-Mail</label>
                  </div>
                  <div>
                    <input type="text" placeholder="Your e-mail" className="form-placeholder" />
                  </div>
    
                  <div>
                    <label htmlFor="" className="text-xl">Subject</label>
                  </div>
                  <div>
                    <input type="text" placeholder="Your subject" className="form-placeholder" />
                  </div>
    
                  <div>
                    <label htmlFor="" className="text-xl">Message</label>
                    <textarea type="text" placeholder="Your message" rows="4" className="form-placeholder"></textarea>
                  </div>
    
                  <button className="form-send-button">Send</button>
                </form>
              </div>
            </div>
          </div>
    
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
      );
    }
export default Contact;