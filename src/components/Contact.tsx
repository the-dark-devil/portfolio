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
    setFormData(prev => ({ ...prev, [name]: value }));
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
      console.error('Submission Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
            <div className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <Mail className="text-red-600" size={24} />
              <div>
                <h4 className="font-semibold dark:text-white">Email</h4>
                <p className="text-navy-600 dark:text-emerald-500">hossainmdbsabbir@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" placeholder="Name" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" placeholder="Email" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" placeholder="Subject" />
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" placeholder="Message"></textarea>
              
              {status === 'success' && <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-2"><CheckCircle size={20}/> Sent successfully!</div>}
              {status === 'error' && <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2"><AlertCircle size={20}/> {errorMessage}</div>}

              <button type="submit" disabled={status === 'loading'} className="w-full py-3 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all">
                <Send size={20} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};