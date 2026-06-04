'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
  passportNo: string;
  passportExpiry: string;
  country: string;
  visaType: string;
  travelDate: string;
  duration: string;
  travelers: string;
  package: string;
  phone: string;
  email: string;
  lineId: string;
  notes: string;
  terms: boolean;
};

export default function ApplicationForm() {
  const { t } = useLanguage();
  const ap = t.applyPage;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const step1Fields: (keyof FormData)[] = [
    'firstName', 'lastName', 'dob', 'nationality', 'passportNo', 'passportExpiry',
  ];
  const step2Fields: (keyof FormData)[] = [
    'country', 'visaType', 'travelDate', 'duration', 'travelers', 'package',
  ];

  const handleNext = async () => {
    const fields = step === 1 ? step1Fields : step2Fields;
    const valid = await trigger(fields);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
  const errorClass = 'text-red-500 text-xs mt-1';

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#f0f4ff' }}
        >
          <CheckCircle size={40} style={{ color: '#1a56db' }} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{ap.successTitle}</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">{ap.successMsg}</p>
        <button
          onClick={() => { setSubmitted(false); setStep(1); }}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{ backgroundColor: '#1a56db' }}
        >
          {ap.newAppBtn}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress bar */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          {ap.steps.map((label, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step > i + 1
                      ? 'text-white'
                      : step === i + 1
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                  style={step >= i + 1 ? { backgroundColor: '#1a56db' } : {}}
                >
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span
                  className={`text-xs mt-1.5 font-medium ${
                    step === i + 1 ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < ap.steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 sm:w-28 mx-2 mb-5 transition-colors ${
                    step > i + 1 ? '' : 'bg-gray-200'
                  }`}
                  style={step > i + 1 ? { backgroundColor: '#1a56db' } : {}}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{ap.step1.title}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>{ap.step1.firstName} *</label>
                <input
                  {...register('firstName', { required: true })}
                  className={inputClass}
                  placeholder={ap.step1.firstName}
                />
                {errors.firstName && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step1.lastName} *</label>
                <input
                  {...register('lastName', { required: true })}
                  className={inputClass}
                  placeholder={ap.step1.lastName}
                />
                {errors.lastName && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step1.dob} *</label>
                <input
                  type="date"
                  {...register('dob', { required: true })}
                  className={inputClass}
                />
                {errors.dob && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step1.nationality} *</label>
                <input
                  {...register('nationality', { required: true })}
                  className={inputClass}
                  placeholder={ap.step1.nationality}
                />
                {errors.nationality && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step1.passportNo} *</label>
                <input
                  {...register('passportNo', { required: true })}
                  className={inputClass}
                  placeholder="AA123456"
                />
                {errors.passportNo && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step1.passportExpiry} *</label>
                <input
                  type="date"
                  {...register('passportExpiry', { required: true })}
                  className={inputClass}
                />
                {errors.passportExpiry && <p className={errorClass}>Required</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{ap.step2.title}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>{ap.step2.country} *</label>
                <select {...register('country', { required: true })} className={inputClass}>
                  <option value="">— Select / เลือก —</option>
                  {ap.step2.countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.country && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step2.visaType} *</label>
                <select {...register('visaType', { required: true })} className={inputClass}>
                  <option value="">— Select / เลือก —</option>
                  {ap.step2.visaTypes.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                {errors.visaType && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step2.travelDate} *</label>
                <input
                  type="date"
                  {...register('travelDate', { required: true })}
                  className={inputClass}
                />
                {errors.travelDate && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step2.duration} *</label>
                <input
                  type="number"
                  min="1"
                  {...register('duration', { required: true })}
                  className={inputClass}
                  placeholder="7"
                />
                {errors.duration && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step2.travelers} *</label>
                <input
                  type="number"
                  min="1"
                  {...register('travelers', { required: true })}
                  className={inputClass}
                  placeholder="1"
                />
                {errors.travelers && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step2.package}</label>
                <select {...register('package')} className={inputClass}>
                  <option value="">— Select / เลือก —</option>
                  {ap.step2.packages.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{ap.step3.title}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>{ap.step3.phone} *</label>
                <input
                  type="tel"
                  {...register('phone', { required: true })}
                  className={inputClass}
                  placeholder="+66 80 000 0000"
                />
                {errors.phone && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step3.email} *</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
                {errors.email && <p className={errorClass}>Required</p>}
              </div>
              <div>
                <label className={labelClass}>{ap.step3.lineId}</label>
                <input
                  {...register('lineId')}
                  className={inputClass}
                  placeholder="@yourline"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>{ap.step3.notes}</label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className={inputClass}
                  placeholder="..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('terms', { required: true })}
                    className="mt-0.5 w-4 h-4 rounded"
                    style={{ accentColor: '#1a56db' }}
                  />
                  <span className="text-sm text-gray-600">{ap.step3.terms}</span>
                </label>
                {errors.terms && <p className={errorClass}>Required</p>}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={16} />
              {ap.prevBtn}
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1a56db' }}
            >
              {ap.nextBtn}
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1a56db' }}
            >
              {ap.submitBtn}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
