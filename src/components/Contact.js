import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bx7fhce', 'template_m9ebzlg', e.target, 'tbuScqCg_Kjiy9imi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

//*still gotta work on emailjs

// const styles = {
//     contactStyle: {
//     justifyContent: 'center',
//     position: 'absolute',
//     },
//   };
