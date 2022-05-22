import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {

    const styles = {
        formStyle: {
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        },
      };

    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();

        emailjs.sendForm('service_bx7fhce', 'template_m9ebzlg', e.target, 'tbuScqCg_Kjiy9imi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div style={styles.formStyle} >
            <form ref={form} onSubmit={sendEmail}>

                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </form>
        </div>
    )
}