'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type ContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useLanguage();
  const cp = t.contactPage;
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>();

  const onSubmit = (data: ContactData) => {
    console.log('Contact form:', data);
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
  const errorClass = 'text-red-500 text-xs mt-1';

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#f0f4ff' }}
        >
          <CheckCircle size={32} style={{ color: '#1a56db' }} />
        </div>
        <p className="text-gray-700 font-medium">{cp.form.successMsg}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">{cp.form.title}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className={labelClass}>{cp.form.name} *</label>
          <input
            {...register('name', { required: true })}
            className={inputClass}
            placeholder={cp.form.name}
          />
          {errors.name && <p className={errorClass}>Required</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>{cp.form.email} *</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className={inputClass}
              placeholder="you@example.com"
            />
            {errors.email && <p className={errorClass}>Required</p>}
          </div>
          <div>
            <label className={labelClass}>{cp.form.phone}</label>
            <input
              type="tel"
              {...register('phone')}
              className={inputClass}
              placeholder="+66 80 000 0000"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>{cp.form.subject} *</label>
          <select {...register('subject', { required: true })} className={inputClass}>
            <option value="">— Select / เลือก —</option>
            {cp.form.subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <p className={errorClass}>Required</p>}
        </div>

        <div>
          <label className={labelClass}>{cp.form.message} *</label>
          <textarea
            {...register('message', { required: true })}
            rows={5}
            className={inputClass}
            placeholder="..."
          />
          {errors.message && <p className={errorClass}>Required</p>}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-colors"
          style={{ backgroundColor: '#1a56db' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e429f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a56db')}
        >
          <Send size={16} />
          {cp.form.submitBtn}
        </button>
      </form>
    </div>
  );
}
