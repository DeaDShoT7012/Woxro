import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
        <section>
            <div className='contact-section'>
                <div className='contact-textbox'>
                    <div className='contact-text'>
                        <p>We offer all kinds of IT services that ensure your success</p>
                    </div>
                    <div className='contact-btnCont'>
                        <a className='inline-button'>
                            <i class='fa fa-comment'></i>&nbsp;Let's Talk
                        </a>
                        <a className='inline-button'>
                        <i class="fa-solid fa-phone"></i>&nbsp;Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact