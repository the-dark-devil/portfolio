import React, { useState } from 'react';
import { Mail, Linkedin, Github, Facebook, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContact } from '../lib/supabase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hossainmdbsabbir@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hossain-mdb-sabbir/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/hossainmdbsabbir',
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://web.facebook.com/hossainmdbsabbir11',
      color: 'hover:text-blue-500 dark:hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-navy-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Feel free to reach out through any of these channels
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-navy-500 dark:hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                <Mail className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                <a
                  href="mailto:hossainmdbsabbir@gmail.com"
                  className="text-navy-600 dark:text-emerald-500 hover:underline"
                >
                  hossainmdbsabbir@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all hover:scale-110 ${link.color}`}
                      aria-label={link.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700"
            >
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-navy-600 dark:focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-navy-600 dark:focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-navy-600 dark:focus:border-emerald-500 transition-colors"
                    placeholder="Message subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-navy-600 dark:focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex gap-2 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 animate-fade-in">
                    <CheckCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" size={20} />
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex gap-2 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-2 border-red-200 dark:border-red-700 animate-fade-in">
                    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-600 hover:bg-navy-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 duration-300"
                >
                  <Send size={20} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
