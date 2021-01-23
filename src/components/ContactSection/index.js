import React from 'react';
import './contact.css';
import img from '../images/contact.png';
import {SectionCont, Title, Sub} from '../Section';
import {Contact, ContactContent, Img,} from './ContactElements';
import {init, sendForm} from 'emailjs-com';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  init('user_EiPYoEC4zJyW3dRgs0ZrZ');
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    sendForm('service_kyp7aqo', 'template_by8sixt', '#contact-form')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    reset();
  };
  

  return (
    <Contact id="contact">
      <SectionCont>
        <Title>Contact</Title>
        <Sub>let's work together?</Sub>

        <ContactContent>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="form">
                <div className="field">
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                      placeholder="Name / Company" 
                      name="name"
                      ref={register({ 
                        required: 'Name/Company is Required',
                      })}
                    />
                    {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                </div>
                <div className="field">
                    <input 
                      type="email" 
                      
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                      placeholder="Email Address" 
                      name="email"
                      ref={register({ 
                        required: 'Email is required',
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: 'Email is not valid.'
                        }
                      })}
                    />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                </div>
                <div className="field">
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                      id="" cols="8" rows="8" 
                      placeholder="Your message" 
                      name="message"
                      ref={register({ 
                        required: 'Message is Required',
                      })}
                    />
                    {errors.message && <p className="errorMsg">{errors.message.message}</p>}
                </div>
                <div className="contact__btn" >
                    <input 
                      className="btnContact" 
                      type="submit" 
                      value="Send Message" 
                    />
                </div>
            </div>
          </form>
          <Img> <img src={img} alt="img"/> </Img>
        </ContactContent>
      </SectionCont>
    </Contact>
  )
}

export default ContactSection
