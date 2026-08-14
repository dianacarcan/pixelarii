function ContactPage() {
<<<<<<< HEAD
  return <h1>Contact</h1>
}

export default ContactPage
=======
  return (
    <div className="container">
      <h1>Get in Touch</h1>

      <h4>
        Have a story to share? A restaurant to recommend? I'd love to hear from
        you.
      </h4>

      <form style={{ opacity: 0.7 }}>
        <p>Name</p>
        <input type="text" placeholder="Your name" />

        <p>Email</p>
        <input type="email" placeholder="your.email@example.com" />

        <p>Message</p>
        <textarea placeholder="Your message..." />

        <br />
        <input type="submit" value="Send Message" />
      </form>

      <h2>Other Ways to Reach Me</h2>

      <p>Email: hello@foodninja.com</p>
      <p>Twitter: @foodninja</p>
      <p>Instagram: @foodninja.eats</p>
    </div>
  )
}

export default ContactPage
>>>>>>> lexi
