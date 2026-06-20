import React from 'react'
import AdBanner from '../components/AdBanner'
import ContactForm from '../components/ContactForm'

export default function OrientationGuide({ lang, onBack }) {
  const content = {
    en: {
      title: "Step-by-Step Orientation Guide",
      subtitle: "Your comprehensive roadmap to studying in Italy for free",
      backLink: "← Back to Home",
      intro: "Italy is one of the most affordable study destinations in Europe, offering low public tuition and extensive regional scholarships. However, the administrative process can be complex. Follow this official chronological checklist to secure your admission, visa, and funding.",
      steps: [
        {
          num: "1",
          title: "Program Selection & Entry Exams",
          desc: "Identify your target English-taught courses. Prepare necessary certifications.",
          details: [
            "Verify requirements: Most degrees require 12 years of previous schooling.",
            "English Proficiency: Secure a B2 Certificate (IELTS 6.0+, TOEFL 80+, or university exemption letters).",
            "Entrance Exams: Medicine requires the IMAT exam. Engineering and Economics require TOLC exams (TOLC-I, TOLC-E, or TOLC-F) or SAT/GMAT scores. Register early on CISIA portal."
          ]
        },
        {
          num: "2",
          title: "Universitaly Pre-Enrollment",
          desc: "Apply on the official ministerial portal to register your study intent.",
          details: [
            "Submit your application directly on the official universitaly.it portal.",
            "Upload your transcripts, diploma, English cert, and passport. Select your university and course.",
            "Wait for the university to validate your application. Once validated, download the 'Summary/Form A'. This document is mandatory for your visa appointment."
          ]
        },
        {
          num: "3",
          title: "Regional Scholarships (DSU/ER-GO)",
          desc: "Prepare foreign income documents to waive tuition and secure housing/stipends.",
          details: [
            "Regional organizations (DSU, ER-GO, Laziodisco, Edisu, etc.) grant scholarships based on financial need (ISEE), not just GPA.",
            "Collect documents from your home country: 1) Family status certificate, 2) Annual gross income statements, 3) Real estate certificates (or proof of renting).",
            "Translate documents into Italian and legalize/Apostille them at the Italian Embassy.",
            "Submit these to a CAF Center in Italy online to obtain your ISEE/ISEEU score (usually must be below €25,000 to get a full waiver, free room, and €6,000+ cash stipend)."
          ]
        },
        {
          num: "4",
          title: "Embassy Visa Application (Type D)",
          desc: "Book your visa center appointment and compile your financial dossier.",
          details: [
            "Create an account on the local visa booking portal (VFS Global, TLScontact, or directly with the embassy depending on your country).",
            "Compile your folder: Universitaly validation summary, university acceptance letter, legalized qualifications (or CIMEA statement), travel insurance, proof of accommodation (hostel/lease), and proof of financial means (minimum €6,000 in personal/family bank account).",
            "Attend your interview and pay the €50 visa fee. Processing takes 2-4 weeks."
          ]
        },
        {
          num: "5",
          title: "Arrival Protocols in Italy",
          desc: "Apply for your residence permit, tax code, and health insurance within your first days.",
          details: [
            "Permesso di Soggiorno (Residence Permit): Within 8 days of arrival, go to a Poste Italiane branch, request the 'yellow kit' (Kitt Giallo), fill it, and mail it (costs approx. €120). You will get a fingerprinting appointment date.",
            "Codice Fiscale: Go to the local Agenzia delle Entrate (Tax Office) to request your fiscal code card. You need this to sign lease contracts, open bank accounts, or get SIM cards.",
            "Health Insurance (SSN): Register with the Italian National Health Service (approx. €150/year for students) for full access to family doctors and public clinics."
          ]
        }
      ],
      supportTitle: "Need Personalized Help?",
      supportDesc: "Email us directly or fill out the question form below. Our volunteer senior student advisors will review your query and reply directly to your inbox.",
      supportBtn: "Send an Email Question"
    },
    ar: {
      title: "دليل التوجيه خطوة بخطوة",
      subtitle: "خارطة طريقك الشاملة للدراسة المجانية في إيطاليا",
      backLink: "← العودة للرئيسية",
      intro: "تعد إيطاليا واحدة من أكثر الوجهات الدراسية ملاءمة من حيث التكلفة في أوروبا، حيث تقدم رسوماً جامعية حكومية منخفضة ومنحاً دراسية إقليمية سخية. ومع ذلك، يمكن أن تكون الإجراءات الإدارية معقدة. اتبع هذا الدليل الزمني الرسمي لتأمين قبولك، وتأشيرتك، وتمويلك الدراسي.",
      steps: [
        {
          num: "١",
          title: "اختيار التخصص واختبارات القبول",
          desc: "حدد الجامعات والبرامج التي تدرس باللغة الإنجليزية وحضّر الشهادات اللازمة.",
          details: [
            "التحقق من الشروط: تتطلب معظم درجات البكالوريوس 12 عاماً دراسياً كحد أدنى.",
            "إتقان اللغة: احصل على شهادة B2 في الإنجليزية (IELTS 6.0+ أو TOEFL 80+ أو خطاب إعفاء جامعي).",
            "اختبارات القبول: يتطلب تخصص الطب اختبار IMAT الوطني. تتطلب الهندسة والاقتصاد اختبارات TOLC (TOLC-I أو TOLC-E أو TOLC-F) أو نتائج SAT/GMAT. سجل مبكراً عبر بوابة CISIA."
          ]
        },
        {
          num: "٢",
          title: "التسجيل المسبق على بوابة Universitaly",
          desc: "سجل طلب رغبتك في الدراسة على البوابة الوزارية الرسمية.",
          details: [
            "قم بتقديم طلبك مباشرة عبر بوابة universitaly.it الرسمية.",
            "ارفع كشوف النقاط، شهادة التخرج، شهادة اللغة وجواز سفرك. حدد جامعتك وتخصصك.",
            "انتظر موافقة الجامعة وتصديقها على طلبك. بعد القبول، قم بتحميل نموذج ملخص التسجيل (Summary/Form A) وهو وثيقة إجبارية لموعد الفيزا."
          ]
        },
        {
          num: "٣",
          title: "المنح الإقليمية (DSU/ER-GO)",
          desc: "جهّز وثائق الدخل العائلي للإعفاء الكامل من الرسوم والحصول على سكن وراتب سنوي.",
          details: [
            "تمنح الهيئات الإقليمية (DSU ،ER-GO ،Laziodisco ،Edisu إلخ) منحاً دراسية بناءً على الوضع المادي للأسرة (ISEE) وليس المعدل الدراسي فقط.",
            "اجمع الأوراق من بلدك: 1) شهادة الحالة العائلية (دفتر العائلة)، 2) شهادة الدخل السنوي للوالدين، 3) شهادات العقارات والأملاك (أو كشف يفيد بعدم الملكية).",
            "ترجم الوثائق للغة الإيطالية وصادق عليها لدى السفارة الإيطالية أو احصل على الأبوستيل.",
            "أرسل الأوراق لمركز CAF إيطالي معتمد عبر الإنترنت لحساب درجة ISEE الخاصة بك (يجب أن تكون عموماً أقل من 25,000 يورو للحصول على إعفاء، سكن مجاني، وراتب نقدي يصل لـ 6,000 يورو سنويًا)."
          ]
        },
        {
          num: "٤",
          title: "طلب تأشيرة الطالب (Type D)",
          desc: "احجز موعداً في مركز التأشيرات وجهّز ملف الدعم المالي والضمانات.",
          details: [
            "أنشئ حساباً على بوابة حجز التأشيرة المحلية الخاصة ببلدك (VFS Global أو TLScontact أو السفارة مباشرة).",
            "جهّز ملف الفيزا: ملخص Universitaly المصدق، خطاب قبول الجامعة، الشهادات الدراسية المترجمة والمصدقة، تأمين طبي للسفر، إثبات السكن (حجز فندق أو عقد إيجار)، وإثبات القدرة المالية (حساب بنكي شخصي أو عائلي به 6000 يورو كحد أدنى).",
            "احضر المقابلة الشخصية وادفع رسوم التأشيرة (50 يورو). تستغرق المعالجة من أسبوعين إلى 4 أسابيع."
          ]
        },
        {
          num: "٥",
          title: "إجراءات الوصول إلى إيطاليا",
          desc: "تقدم بطلب تصريح الإقامة، واستخرج الرقم الضريبي، والتأمين الصحي في أيامك الأولى.",
          details: [
            "تصريح الإقامة (Permesso di Soggiorno): خلال 8 أيام من وصولك، اذهب لمكتب البريد الإيطالي، واطلب المجلد الأصفر (Kit Giallo)، واملأه ثم أرسله (التكلفة حوالي 120 يورو). ستحصل على موعد البصمات.",
            "الرقم الضريبي (Codice Fiscale): اذهب لمكتب الضرائب المحلي (Agenzia delle Entrate) للحصول عليه مجاناً. تحتاجه لتوقيع عقود الإيجار، فتح حساب بنكي وشراء شريحة اتصال.",
            "التأمين الصحي الحكومي (SSN): سجل في الخدمة الصحية الإيطالية (حوالي 150 يورو سنوياً للطلاب) للحصول على طبيب عائلي مجاني والخدمات الصحية العامة."
          ]
        }
      ],
      supportTitle: "هل تحتاج لمساعدة مخصصة؟",
      supportDesc: "راسلنا مباشرة عبر البريد الإلكتروني أو املأ نموذج الأسئلة أدناه. سيقوم مرشدونا الطلاب بمراجعة استفسارك والرد عليك مباشرة.",
      supportBtn: "إرسال استفسار بالبريد الإلكتروني"
    }
  }

  const t = content[lang]

  return (
    <div className="subpage-container orientation-guide-page">
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--terracotta)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {t.backLink}
        </button>
      </div>

      <header className="subpage-header">
        <h1>{t.title}</h1>
        <p className="tagline">{t.subtitle}</p>
      </header>

      <AdBanner slot="horizontal" />

      <div className="subpage-body">
        <div className="orientation-intro">
          <p>{t.intro}</p>
        </div>

        <div className="timeline-container">
          {t.steps.map((step, idx) => (
            <div className="timeline-step" key={idx}>
              <div className="timeline-badge">{step.num}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p className="step-summary"><strong>{step.desc}</strong></p>
                <ul className="step-details-list">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <AdBanner slot="horizontal" />

        <div className="orientation-whatsapp-box">
          <h3>{t.supportTitle}</h3>
          <p>{t.supportDesc}</p>
          <a
            href="mailto:mohamedgadda2@gmail.com"
            className="btn-terracotta"
            style={{ display: 'inline-block', marginTop: '1rem' }}
          >
            {t.supportBtn}
          </a>
        </div>

        <ContactForm lang={lang} />
      </div>
    </div>
  )
}
