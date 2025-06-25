import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    querytype: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [resultMsg, setResultMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.querytype) newErrors.querytype = 'Please select a query type.';
    if (!formData.message) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    setErrors({});
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // You can replace this with an actual API call
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setResultMsg('Your message has been sent successfully!');
    } catch (error) {
      setResultMsg('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Name"
          />
          <div className="__error">{errors.username}</div>
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div className="__error">{errors.email}</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <div className="__error">{errors.phone}</div>
        </div>
        <div className="col-md-6">
          <div className="custom-select-wrapper mb-3">
            <select name="querytype" value={formData.querytype} onChange={handleChange}>
              <option value="">Query Type/Section</option>
              <option value="Distribution Inquiry">Distribution Inquiry</option>
              <option value="Production Collaboration">Production Collaboration</option>
              <option value="General Info">General Info</option>
            </select>
          </div>
          <div className="__error">{errors.querytype}</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="7"
            placeholder="Message"
          ></textarea>
          <div className="__error mt-1">{errors.message}</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center mt-3">
          <button type="submit" disabled={loading} className="button contact_send">
            {loading ? 'Sending...' : 'Send Us Now'}
          </button>
        </div>
        <div className="contact-result text-center">{resultMsg}</div>
      </div>
    </form>
  );
}
