import React, { useState } from 'react'

export default function ContactForm({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  })
  const [status, setStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'

  const content = {
    en: {
      title: "Ask our Student Community",
      subtitle: "Got a question? Send it to our volunteer advisors. We'll reply directly to your email.",
      nameLabel: "Your Name",
      emailLabel: "Your Email Address",
      categoryLabel: "Question Category",
      categories: {
        general: "General Inquiry",
        visa: "Student Visa (Type D)",
        scholarship: "DSU & Regional Scholarships",
        admission: "University Admissions",
        housing: "Student Accommodation"
      },
      messageLabel: "Your Question",
      messagePlaceholder: "Write your question in detail (include your target university or course if applicable)...",
      submitBtn: "Send Question",
      submittingBtn: "Sending...",
      successTitle: "Question Received! 🎉",
      successDesc: "Thank you for reaching out! Your question has been forwarded to our student advisors. We will review it and reply directly to your email at",
      successBackBtn: "Send another question",
      errorDesc: "Oops! Something went wrong while sending your question. Please try again or contact us directly at mohamedgadda2@gmail.com."
    },
    ar: {
      title: "اطرح سؤالك على مجتمع الطلاب",
      subtitle: "هل لديك سؤال؟ أرسله إلى مرشدينا المتطوعين وسنجيبك مباشرة على بريدك الإلكتروني.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      categoryLabel: "تصنيف السؤال",
      categories: {
        general: "استفسار عام",
        visa: "تأشيرة الطالب (Type D)",
        scholarship: "منح DSU والمنح الإقليمية",
        admission: "القبول الجامعي",
        housing: "السكن الطلابي"
      },
      messageLabel: "سؤالك بالتفصيل",
      messagePlaceholder: "اكتب سؤالك بالتفصيل (اذكر اسم الجامعة أو التخصص المستهدف إذا أمكن)...",
      submitBtn: "إرسال السؤال",
      submittingBtn: "جاري الإرسال...",
      successTitle: "تم استلام سؤالك بنجاح! 🎉",
      successDesc: "شكراً لتواصلك معنا! تم تحويل سؤالك إلى مرشدينا الطلاب، وسنقوم بمراجعته والرد عليك مباشرة على بريدك الإلكتروني:",
      successBackBtn: "إرسال سؤال آخر",
      errorDesc: "عذراً! حدث خطأ أثناء إرسال سؤالك. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على mohamedgadda2@gmail.com."
    }
  }

  const t = content[lang]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohamedgadda2@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Category: t.categories[formData.category],
          Message: formData.message,
          "_subject": `New Student Inquiry: ${t.categories[formData.category]}`
        })
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-success" style={{ padding: '3rem 2rem', textAlign: 'center', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border)', maxWidth: '600px', margin: '2rem auto' }}>
        <h3 style={{ color: 'var(--navy)', fontSize: '1.6rem', marginBottom: '1rem' }}>{t.successTitle}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          {t.successDesc} <strong style={{ color: 'var(--terracotta)' }}>{formData.email}</strong>.
        </p>
        <button
          onClick={() => {
            setFormData({ name: '', email: '', category: 'general', message: '' })
            setStatus('idle')
          }}
          className="btn-terracotta"
          style={{ padding: '0.75rem 2rem' }}
        >
          {t.successBackBtn}
        </button>
      </div>
    )
  }

  return (
    <div className="contact-form-wrapper" style={{ maxWidth: '650px', margin: '2rem auto', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--shadow)' }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '0.5rem', textAlign: 'center' }}>
        {t.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', textAlign: 'center' }}>
        {t.subtitle}
      </p>

      {status === 'error' && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
          {t.errorDesc}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>{t.nameLabel}</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit' }}
          />
        </div>

        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>{t.emailLabel}</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit' }}
          />
        </div>

        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>{t.categoryLabel}</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', background: '#FFFFFF' }}
          >
            <option value="general">{t.categories.general}</option>
            <option value="visa">{t.categories.visa}</option>
            <option value="scholarship">{t.categories.scholarship}</option>
            <option value="admission">{t.categories.admission}</option>
            <option value="housing">{t.categories.housing}</option>
          </select>
        </div>

        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>{t.messageLabel}</label>
          <textarea
            name="message"
            required
            rows="5"
            placeholder={t.messagePlaceholder}
            value={formData.message}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', resize: 'vertical', lineHeight: '1.6' }}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-terracotta"
          style={{ padding: '0.9rem', width: '100%', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.5rem', cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
        >
          {status === 'submitting' ? t.submittingBtn : t.submitBtn}
        </button>
      </form>
    </div>
  )
}
