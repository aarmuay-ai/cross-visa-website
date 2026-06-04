export type Language = 'en' | 'th';

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      apply: 'Apply Now',
      contact: 'Contact',
      applyBtn: 'Apply Now',
    },

    // Hero
    hero: {
      tagline: 'Your Trusted Visa Partner',
      subtitle:
        'We provide professional visa consulting services with years of expertise. Fast approvals, expert guidance, and full support from application to approval.',
      applyBtn: 'Apply Now',
      servicesBtn: 'View Services',
      badge: 'Trusted by 1,000+ clients',
    },

    // Why Choose Us
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'We bring expertise, speed, and dedication to every visa application.',
      items: [
        {
          title: 'Years of Experience',
          description: 'Over 10 years helping clients successfully obtain visas worldwide.',
        },
        {
          title: 'Fast Approval',
          description: 'Our streamlined process ensures the quickest possible approval times.',
        },
        {
          title: 'Expert Team',
          description: 'Our certified visa specialists know every requirement inside out.',
        },
        {
          title: 'Full Service',
          description: 'From document prep to submission — we handle everything for you.',
        },
      ],
    },

    // Services Preview
    servicesPreview: {
      title: 'Our Services',
      subtitle: 'We offer visa consulting for top destinations around the world.',
      viewAll: 'View All Services',
      items: [
        {
          country: '🇯🇵 Japan',
          type: 'Tourist / Business Visa',
          description: 'Fast processing for Japan tourist and business visas with high success rate.',
        },
        {
          country: '🇬🇧 United Kingdom',
          type: 'Tourist Visa',
          description: 'Expert guidance for UK visitor visas with complete document support.',
        },
        {
          country: '🇦🇺 Australia',
          type: 'Tourist / Student Visa',
          description: 'Comprehensive support for Australian tourist and student visa applications.',
        },
      ],
      applyBtn: 'Apply',
    },

    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Our simple 4-step process makes visa applications stress-free.',
      steps: [
        { title: 'Fill the Form', description: 'Complete our simple online application form.' },
        { title: 'Prepare Documents', description: 'We guide you through every required document.' },
        { title: 'Submit Application', description: 'We submit your application to the embassy.' },
        { title: 'Receive Your Visa', description: 'Get your visa and start your journey!' },
      ],
    },

    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Thousands of happy travelers trust Cross Visa Consulting.',
      items: [
        {
          name: 'Somchai W.',
          country: 'Japan Visa',
          text: 'Cross Visa made everything so easy! Got my Japan tourist visa in just 5 days. Highly recommend their professional service.',
          rating: 5,
        },
        {
          name: 'Nattaporn K.',
          country: 'UK Visa',
          text: 'The team was incredibly helpful throughout the entire process. My UK visa was approved first time with no issues.',
          rating: 5,
        },
        {
          name: 'Apinya S.',
          country: 'Australia Visa',
          text: 'Very professional and fast. They helped me gather all the documents and my student visa was approved quickly.',
          rating: 5,
        },
      ],
    },

    // CTA Banner
    cta: {
      title: 'Ready to Apply?',
      subtitle: 'Let our experts handle your visa application from start to finish.',
      btn: 'Apply Now',
    },

    // Footer
    footer: {
      description: 'Your trusted partner for professional visa consulting services worldwide.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      officeHours: 'Mon–Sat 9:00–18:00',
      copyright: '© 2024 Cross Visa Consulting. All rights reserved.',
    },

    // Services Page
    servicesPage: {
      title: 'Our Services',
      subtitle: 'Professional visa consulting for destinations worldwide',
      processingTime: 'Processing Time',
      startingPrice: 'Starting Price',
      documents: 'Required Documents',
      applyBtn: 'Apply Now',
      services: [
        {
          flag: '🇯🇵',
          country: 'Japan',
          type: 'Tourist / Business Visa',
          processing: '7–14 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport (6+ months)',
            'Passport photos (4.5×3.5cm)',
            'Bank statement (3 months)',
            'Hotel reservation',
            'Flight booking',
            'Employment letter',
          ],
        },
        {
          flag: '🇨🇳',
          country: 'China',
          type: 'Tourist / Business Visa',
          processing: '4–7 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport (6+ months)',
            'Passport photos',
            'Bank statement',
            'Hotel reservation',
            'Flight booking',
            'Invitation letter (Business)',
          ],
        },
        {
          flag: '🇬🇧',
          country: 'United Kingdom',
          type: 'Tourist Visa',
          processing: '15–21 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'UK visa application form',
            'Bank statement (6 months)',
            'Proof of employment',
            'Travel itinerary',
            'Accommodation proof',
          ],
        },
        {
          flag: '🇺🇸',
          country: 'USA',
          type: 'Tourist / Business Visa',
          processing: '60–90 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'DS-160 form completed',
            'Bank statement',
            'Employment/business proof',
            'Travel itinerary',
            'Ties to home country',
          ],
        },
        {
          flag: '🇸🇬',
          country: 'Singapore',
          type: 'Tourist Visa',
          processing: '3–5 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'Passport photos',
            'Bank statement',
            'Hotel reservation',
            'Return flight booking',
          ],
        },
        {
          flag: '🇦🇺',
          country: 'Australia',
          type: 'Tourist / Student Visa',
          processing: '21–30 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'Biometrics',
            'Bank statement (6 months)',
            'Health insurance',
            'Enrollment letter (Student)',
            'English proficiency proof',
          ],
        },
        {
          flag: '🇩🇪',
          country: 'Germany / Schengen',
          type: 'Tourist Visa',
          processing: '10–15 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'Schengen visa application form',
            'Travel insurance (€30,000 min)',
            'Bank statement (3 months)',
            'Hotel/accommodation booking',
            'Round-trip flight booking',
          ],
        },
        {
          flag: '🇰🇷',
          country: 'South Korea',
          type: 'Tourist Visa',
          processing: '5–7 business days',
          price: '฿X,XXX',
          documents: [
            'Valid passport',
            'Passport photos',
            'Bank statement',
            'Hotel reservation',
            'Flight booking',
            'Employment certificate',
          ],
        },
      ],
    },

    // Pricing Page
    pricingPage: {
      title: 'Pricing & Packages',
      subtitle: 'Transparent pricing with no hidden fees',
      recommended: 'Recommended',
      selectBtn: 'Select This Package',
      packages: [
        {
          name: 'Basic',
          price: '฿X,XXX',
          description: 'Perfect for straightforward visa applications',
          features: [
            'Initial consultation',
            'Document checklist',
            'Application form assistance',
            'Email support',
          ],
        },
        {
          name: 'Standard',
          price: '฿X,XXX',
          description: 'Our most popular package for most visa types',
          features: [
            'Everything in Basic',
            'Status tracking',
            'Document revision (2 rounds)',
            'Phone & chat support',
            'Embassy submission',
          ],
        },
        {
          name: 'Premium',
          price: '฿X,XXX',
          description: 'Full-service premium visa consulting',
          features: [
            'Everything in Standard',
            'Express processing',
            'Dedicated consultant',
            'Priority support 7 days',
            'Document collection service',
            'Money-back guarantee',
          ],
        },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How long does the visa application process take?',
          answer:
            'Processing times vary by country and visa type, ranging from 3 to 90 business days. We will provide an accurate estimate during your consultation.',
        },
        {
          question: 'What documents do I need to prepare?',
          answer:
            'Required documents vary by destination country and visa type. After selecting your visa type, we will provide you with a complete checklist.',
        },
        {
          question: 'Is approval guaranteed?',
          answer:
            'While we cannot guarantee visa approval (as final decisions rest with embassies), our expert team maximizes your chances with thorough preparation and professional documentation.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept bank transfer, credit card, and PromptPay. Embassy fees are paid separately and vary by country.',
        },
        {
          question: 'Can I upgrade my package after applying?',
          answer:
            'Yes, you can upgrade your package at any time before your application is submitted. Contact our team to discuss the upgrade options.',
        },
      ],
    },

    // Apply Page
    applyPage: {
      title: 'Apply for Visa',
      subtitle: 'Complete the form below and our team will contact you within 24 hours.',
      steps: ['Personal Info', 'Visa Details', 'Contact'],
      step1: {
        title: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        dob: 'Date of Birth',
        nationality: 'Nationality',
        passportNo: 'Passport Number',
        passportExpiry: 'Passport Expiry Date',
      },
      step2: {
        title: 'Visa Information',
        country: 'Destination Country',
        visaType: 'Visa Type',
        travelDate: 'Travel Date',
        duration: 'Duration of Stay (days)',
        travelers: 'Number of Travelers',
        package: 'Selected Package',
        visaTypes: ['Tourist', 'Business', 'Student', 'Work'],
        packages: ['Basic', 'Standard', 'Premium'],
        countries: [
          'Japan', 'China', 'United Kingdom', 'USA',
          'Singapore', 'Australia', 'Germany / Schengen', 'South Korea',
        ],
      },
      step3: {
        title: 'Contact Information',
        phone: 'Phone Number',
        email: 'Email Address',
        lineId: 'Line ID',
        notes: 'Additional Notes',
        terms: 'I accept the Terms & Conditions and Privacy Policy',
      },
      prevBtn: 'Previous',
      nextBtn: 'Next',
      submitBtn: 'Submit Application',
      successTitle: 'Application Submitted!',
      successMsg: 'Thank you! Our team will contact you within 24 hours to confirm your application details.',
      newAppBtn: 'Submit Another Application',
    },

    // Contact Page
    contactPage: {
      title: 'Contact Us',
      subtitle: 'We are here to help. Reach out to us anytime.',
      form: {
        title: 'Send a Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submitBtn: 'Send Message',
        subjects: [
          'General Inquiry',
          'Visa Consultation',
          'Document Help',
          'Application Status',
          'Other',
        ],
        successMsg: 'Your message has been sent! We will reply within 1 business day.',
      },
      info: {
        title: 'Contact Information',
        email: 'crossvisa.info@gmail.com',
        phone1: '+66 90 799 5449',
        phone2: '+66 89 492 3959',
        line: '@crossvisa',
        hours: 'Mon–Sat 9:00–18:00',
        address: '123 Sukhumvit Road, Bangkok, Thailand 10110',
      },
    },
  },

  th: {
    // Navbar
    nav: {
      home: 'หน้าแรก',
      services: 'บริการ',
      pricing: 'ราคา',
      apply: 'สมัครเลย',
      contact: 'ติดต่อ',
      applyBtn: 'สมัครเลย',
    },

    // Hero
    hero: {
      tagline: 'พาร์ทเนอร์วีซ่าที่คุณไว้วางใจ',
      subtitle:
        'บริการให้คำปรึกษาวีซ่าอย่างมืออาชีพด้วยประสบการณ์มากกว่า 10 ปี อนุมัติรวดเร็ว ผู้เชี่ยวชาญพร้อมดูแล ครบครันตั้งแต่ยื่นจนได้วีซ่า',
      applyBtn: 'สมัครเลย',
      servicesBtn: 'ดูบริการ',
      badge: 'ไว้วางใจโดยกว่า 1,000 ท่าน',
    },

    // Why Choose Us
    whyUs: {
      title: 'ทำไมต้องเลือกเรา',
      subtitle: 'เรามีความเชี่ยวชาญ รวดเร็ว และทุ่มเทในทุกคำขอวีซ่า',
      items: [
        {
          title: 'ประสบการณ์กว่า 10 ปี',
          description: 'ช่วยลูกค้าได้รับวีซ่าสำเร็จมากกว่า 10 ปี จากทั่วโลก',
        },
        {
          title: 'อนุมัติรวดเร็ว',
          description: 'กระบวนการที่คล่องตัวช่วยให้ได้รับการอนุมัติรวดเร็วที่สุด',
        },
        {
          title: 'ทีมผู้เชี่ยวชาญ',
          description: 'ผู้เชี่ยวชาญวีซ่าที่ได้รับการรับรอง รู้ทุกข้อกำหนดอย่างละเอียด',
        },
        {
          title: 'บริการครบวงจร',
          description: 'ตั้งแต่เตรียมเอกสารถึงการยื่น — เราจัดการทุกอย่างให้คุณ',
        },
      ],
    },

    // Services Preview
    servicesPreview: {
      title: 'บริการของเรา',
      subtitle: 'บริการให้คำปรึกษาวีซ่าสำหรับจุดหมายปลายทางชั้นนำทั่วโลก',
      viewAll: 'ดูบริการทั้งหมด',
      items: [
        {
          country: '🇯🇵 ญี่ปุ่น',
          type: 'วีซ่าท่องเที่ยว / ธุรกิจ',
          description: 'ดำเนินการรวดเร็ว วีซ่าญี่ปุ่นประเภทท่องเที่ยวและธุรกิจ อัตราสำเร็จสูง',
        },
        {
          country: '🇬🇧 สหราชอาณาจักร',
          type: 'วีซ่าท่องเที่ยว',
          description: 'คำแนะนำจากผู้เชี่ยวชาญสำหรับวีซ่าเยี่ยมเยียนสหราชอาณาจักร พร้อมสนับสนุนเอกสารครบครัน',
        },
        {
          country: '🇦🇺 ออสเตรเลีย',
          type: 'วีซ่าท่องเที่ยว / นักศึกษา',
          description: 'บริการครอบคลุมสำหรับวีซ่าท่องเที่ยวและนักศึกษาออสเตรเลีย',
        },
      ],
      applyBtn: 'สมัคร',
    },

    // How It Works
    howItWorks: {
      title: 'ขั้นตอนการทำงาน',
      subtitle: '4 ขั้นตอนง่ายๆ ที่ทำให้การสมัครวีซ่าไม่ใช่เรื่องยาก',
      steps: [
        { title: 'กรอกฟอร์ม', description: 'กรอกแบบฟอร์มสมัครออนไลน์ง่ายๆ ของเรา' },
        { title: 'เตรียมเอกสาร', description: 'เราแนะนำทุกเอกสารที่จำเป็นให้คุณ' },
        { title: 'ส่งคำขอ', description: 'เราส่งคำขอของคุณไปยังสถานทูต' },
        { title: 'รับวีซ่า', description: 'รับวีซ่าและเริ่มการเดินทางของคุณ!' },
      ],
    },

    // Testimonials
    testimonials: {
      title: 'เสียงจากลูกค้าของเรา',
      subtitle: 'ลูกค้าหลายพันรายไว้วางใจ Cross Visa Consulting',
      items: [
        {
          name: 'สมชาย ว.',
          country: 'วีซ่าญี่ปุ่น',
          text: 'Cross Visa ทำทุกอย่างง่ายมาก! ได้วีซ่าท่องเที่ยวญี่ปุ่นแค่ 5 วัน แนะนำบริการมืออาชีพนี้มากๆ',
          rating: 5,
        },
        {
          name: 'ณัฐพร ก.',
          country: 'วีซ่าสหราชอาณาจักร',
          text: 'ทีมงานช่วยเหลืออย่างดีมากตลอดกระบวนการ วีซ่าสหราชอาณาจักรได้รับการอนุมัติครั้งแรกโดยไม่มีปัญหา',
          rating: 5,
        },
        {
          name: 'อภิญญา ส.',
          country: 'วีซ่าออสเตรเลีย',
          text: 'มืออาชีพและรวดเร็วมาก ช่วยรวบรวมเอกสารทั้งหมดและวีซ่านักศึกษาได้รับการอนุมัติอย่างรวดเร็ว',
          rating: 5,
        },
      ],
    },

    // CTA Banner
    cta: {
      title: 'พร้อมสมัครแล้วใช่ไหม?',
      subtitle: 'ให้ผู้เชี่ยวชาญของเราจัดการคำขอวีซ่าตั้งแต่ต้นจนจบ',
      btn: 'สมัครเลย',
    },

    // Footer
    footer: {
      description: 'พาร์ทเนอร์ที่เชื่อถือได้สำหรับบริการให้คำปรึกษาวีซ่ามืออาชีพทั่วโลก',
      quickLinks: 'ลิงก์ด่วน',
      contactInfo: 'ข้อมูลติดต่อ',
      officeHours: 'จ.–ส. 9:00–18:00 น.',
      copyright: '© 2024 Cross Visa Consulting สงวนลิขสิทธิ์',
    },

    // Services Page
    servicesPage: {
      title: 'บริการของเรา',
      subtitle: 'บริการให้คำปรึกษาวีซ่ามืออาชีพสำหรับจุดหมายปลายทางทั่วโลก',
      processingTime: 'ระยะเวลาดำเนินการ',
      startingPrice: 'ราคาเริ่มต้น',
      documents: 'เอกสารที่ต้องใช้',
      applyBtn: 'สมัคร',
      services: [
        {
          flag: '🇯🇵',
          country: 'ญี่ปุ่น',
          type: 'วีซ่าท่องเที่ยว / ธุรกิจ',
          processing: '7–14 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง (อายุ 6+ เดือน)',
            'รูปถ่าย (4.5×3.5 ซม.)',
            'Statement บัญชีธนาคาร (3 เดือน)',
            'การจองโรงแรม',
            'การจองตั๋วเครื่องบิน',
            'หนังสือรับรองการทำงาน',
          ],
        },
        {
          flag: '🇨🇳',
          country: 'จีน',
          type: 'วีซ่าท่องเที่ยว / ธุรกิจ',
          processing: '4–7 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง (อายุ 6+ เดือน)',
            'รูปถ่าย',
            'Statement บัญชีธนาคาร',
            'การจองโรงแรม',
            'การจองตั๋วเครื่องบิน',
            'จดหมายเชิญ (ธุรกิจ)',
          ],
        },
        {
          flag: '🇬🇧',
          country: 'สหราชอาณาจักร',
          type: 'วีซ่าท่องเที่ยว',
          processing: '15–21 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'แบบฟอร์มวีซ่า UK',
            'Statement บัญชีธนาคาร (6 เดือน)',
            'หลักฐานการทำงาน',
            'แผนการเดินทาง',
            'หลักฐานที่พัก',
          ],
        },
        {
          flag: '🇺🇸',
          country: 'สหรัฐอเมริกา',
          type: 'วีซ่าท่องเที่ยว / ธุรกิจ',
          processing: '60–90 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'แบบฟอร์ม DS-160',
            'Statement บัญชีธนาคาร',
            'หลักฐานการทำงาน/ธุรกิจ',
            'แผนการเดินทาง',
            'หลักฐานความผูกพันในประเทศ',
          ],
        },
        {
          flag: '🇸🇬',
          country: 'สิงคโปร์',
          type: 'วีซ่าท่องเที่ยว',
          processing: '3–5 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'รูปถ่าย',
            'Statement บัญชีธนาคาร',
            'การจองโรงแรม',
            'ตั๋วเครื่องบินไป-กลับ',
          ],
        },
        {
          flag: '🇦🇺',
          country: 'ออสเตรเลีย',
          type: 'วีซ่าท่องเที่ยว / นักศึกษา',
          processing: '21–30 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'ลายนิ้วมือ Biometrics',
            'Statement บัญชีธนาคาร (6 เดือน)',
            'ประกันสุขภาพ',
            'จดหมายตอบรับ (นักศึกษา)',
            'หลักฐานความสามารถภาษาอังกฤษ',
          ],
        },
        {
          flag: '🇩🇪',
          country: 'เยอรมนี / เชงเก้น',
          type: 'วีซ่าท่องเที่ยว',
          processing: '10–15 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'แบบฟอร์มวีซ่าเชงเก้น',
            'ประกันการเดินทาง (ขั้นต่ำ €30,000)',
            'Statement บัญชีธนาคาร (3 เดือน)',
            'การจองโรงแรม',
            'ตั๋วเครื่องบินไป-กลับ',
          ],
        },
        {
          flag: '🇰🇷',
          country: 'เกาหลีใต้',
          type: 'วีซ่าท่องเที่ยว',
          processing: '5–7 วันทำการ',
          price: '฿X,XXX',
          documents: [
            'หนังสือเดินทาง',
            'รูปถ่าย',
            'Statement บัญชีธนาคาร',
            'การจองโรงแรม',
            'การจองตั๋วเครื่องบิน',
            'หนังสือรับรองการทำงาน',
          ],
        },
      ],
    },

    // Pricing Page
    pricingPage: {
      title: 'ราคาและแพ็กเกจ',
      subtitle: 'ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อนเร้น',
      recommended: 'แนะนำ',
      selectBtn: 'เลือกแพ็กเกจนี้',
      packages: [
        {
          name: 'Basic',
          price: '฿X,XXX',
          description: 'เหมาะสำหรับการสมัครวีซ่าทั่วไป',
          features: [
            'คำปรึกษาเบื้องต้น',
            'รายการตรวจสอบเอกสาร',
            'ช่วยกรอกแบบฟอร์มสมัคร',
            'สนับสนุนทางอีเมล',
          ],
        },
        {
          name: 'Standard',
          price: '฿X,XXX',
          description: 'แพ็กเกจยอดนิยมสำหรับวีซ่าส่วนใหญ่',
          features: [
            'ทุกอย่างใน Basic',
            'ติดตามสถานะคำขอ',
            'แก้ไขเอกสาร (2 รอบ)',
            'สนับสนุนทางโทรศัพท์และแชท',
            'ยื่นเอกสารสถานทูต',
          ],
        },
        {
          name: 'Premium',
          price: '฿X,XXX',
          description: 'บริการให้คำปรึกษาวีซ่าแบบครบวงจร',
          features: [
            'ทุกอย่างใน Standard',
            'บริการด่วน',
            'ที่ปรึกษาส่วนตัว',
            'สนับสนุนตลอด 7 วัน',
            'บริการรับเอกสาร',
            'รับประกันคืนเงิน',
          ],
        },
      ],
      faqTitle: 'คำถามที่พบบ่อย',
      faqs: [
        {
          question: 'กระบวนการสมัครวีซ่าใช้เวลานานแค่ไหน?',
          answer:
            'ระยะเวลาดำเนินการขึ้นอยู่กับประเทศและประเภทวีซ่า อยู่ระหว่าง 3 ถึง 90 วันทำการ เราจะแจ้งเวลาที่แม่นยำในระหว่างการให้คำปรึกษา',
        },
        {
          question: 'ต้องเตรียมเอกสารอะไรบ้าง?',
          answer:
            'เอกสารที่ต้องใช้แตกต่างกันตามประเทศและประเภทวีซ่า หลังจากเลือกประเภทวีซ่าแล้ว เราจะจัดเตรียมรายการตรวจสอบที่ครบถ้วนให้คุณ',
        },
        {
          question: 'รับประกันการอนุมัติไหม?',
          answer:
            'แม้เราไม่สามารถรับประกันการอนุมัติวีซ่าได้ (เนื่องจากการตัดสินใจขั้นสุดท้ายขึ้นอยู่กับสถานทูต) แต่ทีมผู้เชี่ยวชาญของเราช่วยเพิ่มโอกาสสำเร็จด้วยการเตรียมการอย่างละเอียดถี่ถ้วน',
        },
        {
          question: 'รับชำระเงินวิธีไหนบ้าง?',
          answer:
            'รับโอนเงินธนาคาร บัตรเครดิต และ PromptPay ค่าธรรมเนียมสถานทูตชำระแยกต่างหากและแตกต่างกันตามประเทศ',
        },
        {
          question: 'สามารถอัพเกรดแพ็กเกจหลังสมัครได้ไหม?',
          answer:
            'ได้ คุณสามารถอัพเกรดแพ็กเกจได้ตลอดเวลาก่อนที่คำขอจะถูกส่ง ติดต่อทีมงานของเราเพื่อพูดคุยเรื่องการอัพเกรด',
        },
      ],
    },

    // Apply Page
    applyPage: {
      title: 'สมัครขอวีซ่า',
      subtitle: 'กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อคุณภายใน 24 ชั่วโมง',
      steps: ['ข้อมูลส่วนตัว', 'ข้อมูลวีซ่า', 'ติดต่อ'],
      step1: {
        title: 'ข้อมูลส่วนตัว',
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        dob: 'วันเกิด',
        nationality: 'สัญชาติ',
        passportNo: 'เลขพาสปอร์ต',
        passportExpiry: 'วันหมดอายุพาสปอร์ต',
      },
      step2: {
        title: 'ข้อมูลวีซ่า',
        country: 'ประเทศที่ต้องการขอวีซ่า',
        visaType: 'ประเภทวีซ่า',
        travelDate: 'วันที่ต้องการเดินทาง',
        duration: 'จำนวนวันที่พัก',
        travelers: 'จำนวนผู้เดินทาง',
        package: 'แพ็กเกจที่เลือก',
        visaTypes: ['ท่องเที่ยว', 'ธุรกิจ', 'นักศึกษา', 'ทำงาน'],
        packages: ['Basic', 'Standard', 'Premium'],
        countries: [
          'ญี่ปุ่น', 'จีน', 'สหราชอาณาจักร', 'สหรัฐอเมริกา',
          'สิงคโปร์', 'ออสเตรเลีย', 'เยอรมนี / เชงเก้น', 'เกาหลีใต้',
        ],
      },
      step3: {
        title: 'ข้อมูลการติดต่อ',
        phone: 'เบอร์โทรศัพท์',
        email: 'อีเมล',
        lineId: 'Line ID',
        notes: 'หมายเหตุเพิ่มเติม',
        terms: 'ฉันยอมรับเงื่อนไขการใช้บริการและนโยบายความเป็นส่วนตัว',
      },
      prevBtn: 'ย้อนกลับ',
      nextBtn: 'ถัดไป',
      submitBtn: 'ส่งคำขอ',
      successTitle: 'ส่งคำขอเรียบร้อย!',
      successMsg: 'ขอบคุณ! ทีมงานจะติดต่อคุณภายใน 24 ชั่วโมงเพื่อยืนยันรายละเอียดคำขอของคุณ',
      newAppBtn: 'ส่งคำขอใหม่',
    },

    // Contact Page
    contactPage: {
      title: 'ติดต่อเรา',
      subtitle: 'เราพร้อมช่วยเหลือ ติดต่อเราได้ตลอดเวลา',
      form: {
        title: 'ส่งข้อความ',
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        subject: 'เรื่อง',
        message: 'ข้อความ',
        submitBtn: 'ส่งข้อความ',
        subjects: [
          'สอบถามทั่วไป',
          'ขอคำปรึกษาวีซ่า',
          'ช่วยเรื่องเอกสาร',
          'ติดตามสถานะคำขอ',
          'อื่นๆ',
        ],
        successMsg: 'ส่งข้อความเรียบร้อย! เราจะตอบกลับภายใน 1 วันทำการ',
      },
      info: {
        title: 'ข้อมูลติดต่อ',
        email: 'crossvisa.info@gmail.com',
        phone1: '+66 90 799 5449',
        phone2: '+66 89 492 3959',
        line: '@crossvisa',
        hours: 'จ.–ส. 9:00–18:00 น.',
        address: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
      },
    },
  },
};

export type Translations = typeof translations.en;
