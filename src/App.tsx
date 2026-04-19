import { motion } from 'motion/react';
import { Phone, Book, Briefcase, Scale, Mail, MapPin } from 'lucide-react';

export default function App() {
  const phoneNumber = "56500551";
  const whatsappUrl = `https://wa.me/965${phoneNumber}`; // Assuming Kuwait based on 8 digit format starting with 5 (common) or general fallback
  const telUrl = `tel:${phoneNumber}`;

  const services = [
    {
      title: "القضايا المدنية",
      icon: <Scale className="w-8 h-8 text-[#c5a059]" />,
      description: "تمثيل قانوني شامل في مطالبات التعويض، النزاعات العقارية، ومراجعة العقود والالتزامات المدنية لضمان حقوقك كاملة."
    },
    {
      title: "القضايا التجارية",
      icon: <Briefcase className="w-8 h-8 text-[#c5a059]" />,
      description: "تأسيس الشركات، صياغة العقود التجارية، وتسوية المنازعات المالية والمصرفية وحقوق الملكية للشركات والأفراد."
    },
    {
      title: "الأحوال الشخصية",
      icon: <Book className="w-8 h-8 text-[#c5a059]" />,
      description: "معالجة قضايا الطلاق، الحضانة، النفقة، والمواريث، مع مراعاة الخصوصية التامة والسرية المطلقة لعملائنا."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-serif selection:bg-[#c5a059] selection:text-black overflow-x-hidden relative">
      
      {/* Floating Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.5 }}
        className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-[100] flex flex-col gap-4"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="relative group flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#c5a059] opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></span>
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#9a7b40] to-[#e2c792] rounded-full flex items-center justify-center shadow-2xl text-black hover:scale-110 transition-transform duration-300 border border-[#fff]/20 backdrop-blur-sm">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.296.657 4.437 1.761 6.309L.15 24l5.961-1.57A11.954 11.954 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.031S18.669 0 12.031 0zm0 21.996c-1.928 0-3.791-.506-5.441-1.464l-.391-.231-4.043 1.065 1.078-3.94-.251-.403A9.972 9.972 0 012.035 12.031c0-5.522 4.494-10.016 10.012-10.016 5.518 0 10.016 4.494 10.016 10.016 0 5.522-4.498 10.016-10.032 10.016zm5.541-7.535c-.303-.153-1.803-.893-2.083-.996-.28-.103-.485-.153-.688.153-.203.306-.79 1.003-.968 1.203-.18.203-.358.231-.663.078-.303-.153-1.286-.475-2.454-1.517-.905-.811-1.518-1.815-1.696-2.12-.18-.306-.02-.472.132-.625.138-.138.303-.356.456-.534.153-.18.203-.306.303-.51.103-.203.05-.381-.026-.534-.078-.153-.688-1.658-.943-2.271-.248-.598-.501-.517-.688-.527-.18-.01-.385-.01-.588-.01-.203 0-.534.078-.813.385-.28.306-1.073 1.047-1.073 2.553 0 1.506 1.1 2.964 1.253 3.167.153.203 2.158 3.294 5.234 4.62 1.342.58 1.954.722 2.656.903.74.201 1.414.173 1.942.105.592-.077 1.803-.737 2.056-1.447.253-.71.253-1.318.18-1.447-.078-.128-.283-.203-.588-.356z"/>
            </svg>
          </div>
        </a>
        <a href={telUrl} className="relative group flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#c5a059] opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></span>
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#9a7b40] to-[#e2c792] rounded-full flex items-center justify-center shadow-2xl text-black hover:scale-110 transition-transform duration-300 border border-[#fff]/20 backdrop-blur-sm">
            <Phone className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" />
          </div>
        </a>
      </motion.div>

      {/* Thin Gold Top Linear Gradient Highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-40 z-50"></div>

      {/* Ambient Center Glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-[#c5a059] opacity-[0.06] blur-[120px] pointer-events-none rounded-full z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-[#c5a059]/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5 sm:py-6">
            <div className="flex items-center gap-3">
              <h1 className="text-[14px] tracking-[2px] uppercase text-[#c5a059] font-semibold">مكتب المحاماة</h1>
            </div>
            
            <div className="hidden sm:flex items-center gap-6">
              <div className="font-mono text-lg text-white" dir="ltr">{phoneNumber}</div>
            </div>
            
            <div className="sm:hidden text-white flex items-center justify-center opacity-80 pl-2">
              <span className="font-mono" dir="ltr">{phoneNumber}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Background Watermark */}
        <div className="absolute top-[45%] -translate-y-1/2 left-[-50px] sm:left-[-100px] text-[180px] sm:text-[300px] md:text-[400px] font-black z-0 whitespace-nowrap pointer-events-none text-[#c5a059] opacity-[0.02] mix-blend-screen">
          قانون
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-6 bg-gradient-to-br from-[#ffffff] via-[#e2c792] to-[#9a7b40] bg-clip-text text-transparent pb-[33px] text-center"
            >
              رتاج المطيري
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-[#c5a059] mb-12 max-w-[600px] leading-[1.6] opacity-90 drop-shadow-sm font-sans font-light"
            >
              محامية متخصصة تقدم استشارات قانونية دقيقة وحلولاً متكاملة في القضايا المدنية، التجارية، وقضايا الأحوال الشخصية.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/20 pt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col gap-4 group p-6 -m-6 rounded-2xl hover:bg-[#c5a059]/5 border border-transparent hover:border-[#c5a059]/20 transition-all duration-500"
              >
                <div className="mb-2 p-4 bg-[#c5a059]/10 rounded-xl w-max group-hover:scale-110 group-hover:bg-[#c5a059]/20 transition-all duration-500 border border-[#c5a059]/20">
                  {service.icon}
                </div>
                <div>
                  <span className="block text-[12px] uppercase tracking-[2px] text-[#c5a059] mb-3 font-sans font-semibold">{service.title}</span>
                  <span className="block text-lg text-[#aaa] leading-relaxed font-sans font-light group-hover:text-[#eee] transition-colors duration-500">{service.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/20 pt-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <a href={telUrl} className="relative group overflow-hidden bg-gradient-to-r from-[#c5a059] to-[#9a7b40] text-black px-12 py-5 rounded-[2px] text-xl font-bold inline-flex items-center justify-center transition-all hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] min-w-[200px] text-center border border-[#e2c792]">
              <span className="relative z-10">حجز موعد استشارة</span>
              <div className="absolute inset-0 h-full w-[200%] bg-gradient-to-r from-transparent via-[#ffffff40] to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:translate-x-[150%] transition-transform duration-700"></div>
            </a>
            
            <div className="text-right">
               <div className="text-[12px] text-[#c5a059] mb-2 uppercase tracking-[2px] font-sans font-semibold">تواصل الآن</div>
               <div className="text-5xl sm:text-[60px] font-extralight font-sans text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" dir="ltr">{phoneNumber}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-[#888] py-16 border-t border-[#c5a059]/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start text-start">
            
            <div className="flex flex-col items-start space-y-5">
              <h3 className="text-[16px] tracking-[3px] uppercase text-[#c5a059] font-bold">رتاج المطيري</h3>
              <p className="text-sm max-w-xs leading-relaxed font-sans">
                مكتب محاماة رائد متخصص في تقديم الحلول القانونية الشاملة والمبتكرة لعملائنا بكل سرية واحترافية.
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <h4 className="font-bold text-white text-lg font-serif">تواصل معنا</h4>
              <div className="flex flex-col gap-4 font-sans text-sm">
                <a href={telUrl} className="flex items-center gap-3 hover:text-[#c5a059] transition-colors group">
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span dir="ltr" className="group-hover:translate-x-[-4px] transition-transform">{phoneNumber}</span>
                </a>
                <span className="flex items-center gap-3 cursor-pointer hover:text-[#c5a059] transition-colors group">
                  <Mail className="w-4 h-4 text-[#c5a059]" />
                  <span className="group-hover:translate-x-[-4px] transition-transform">info@retaj-lawyer.com</span>
                </span>
                <span className="flex items-center gap-3 cursor-pointer hover:text-[#c5a059] transition-colors group">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  <span className="group-hover:translate-x-[-4px] transition-transform">دولة الكويت</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <h4 className="font-bold text-white text-lg font-serif">ساعات العمل</h4>
              <div className="text-sm space-y-3 font-sans leading-relaxed">
                <p>الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                <p>الجمعة والسبت: <span className="text-[#555]">مغلق</span></p>
                <p className="text-[#c5a059] font-medium pt-2 text-[13px] tracking-wide">نستقبل الطوارئ القانونية على مدار الساعة</p>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-[#c5a059]/10 text-sm flex flex-col justify-between items-center gap-4 font-sans uppercase tracking-[2px] text-[11px] text-[#555]">
            <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} المحامية رتاج المطيري</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

