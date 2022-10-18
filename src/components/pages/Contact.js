import React, {useState} from 'react';

const FORM_ENDPOINT = "";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <h4>We'll be in touch soon.</h4>
      </>
    );
  }

  return (
    <a id="contact">
    <section class="block">
        <div class="left">
          <h2>Contact Here</h2>
    </div>
        <div class="right"> 
       <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      // method="POST"
      // target="_blank"
      class="form"
    >
      <div>
        <input type="text" placeholder="Wait!" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Use email link below" name="email" required />
      </div>
      <div>
        <textarea placeholder="Dont use this" name="message" required />
      </div>
      <div>
        <button type="submit"> Making a new backend with cooler tools 😎 </button>
      </div>
    </form>
    </div>
   
    </section>
    </a>
  );
}
