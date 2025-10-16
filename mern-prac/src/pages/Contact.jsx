import React from 'react'

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  }
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type='text' name='name' value={form.name} onChange={handleChange}
        placeholder='Enter your name' />
        <br />
        <label htmlFor="">Email:</label>
        <input type='email' name='email' value={form.email} onChange={handleChange}
        placeholder='Enter your email' />
        <br />
        <label htmlFor="">Message:</label>
        <textarea name='message' value={form.message} onChange={handleChange}
        placeholder='Enter your message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact