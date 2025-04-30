export default function Credit760Website() {
  return (
    <div className="bg-white text-[#333333]">
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/ChatGPT Image Apr 29, 2025, 11_57_12 PM.png" alt="760 Advisors Logo" className="h-12" />
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#policy" className="hover:underline">Policy</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center text-[#333333] text-center py-32 px-4 border-b-4 border-black" style={{ backgroundImage: 'url("/black-gold-minimalist.jpg")' }}>
        <div className="bg-black bg-opacity-60 py-10 px-6 rounded-xl inline-block">
          <h1 className="text-4xl font-bold mb-4 text-[#D4AF37]">Build Confidence With Clean Credit</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-white">Start your journey to better credit and stronger financial opportunities with expert help and elite support — the 760 way.</p>
          <a href="#contact" className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-500 transition">Get Started Today</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">About 760 Advisors</h2>
        <p className="text-lg">Founded by Michael Endara, 760 Advisors was born from a desire to help people break free from bad credit. After rebuilding his own financial life, Michael set out to help others do the same through education, dispute strategies, and credit-building tools.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#D4AF37] text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow border border-black">
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Credit Solutions</h3>
              <p>We remove inaccurate items like late payments, collections, charge-offs, and more through professional dispute letters and compliance-backed tactics.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-black">
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Credit Building</h3>
              <p>We show you how to strategically build credit using tradelines, secured cards, and responsible credit management techniques.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-black">
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">1-on-1 Coaching</h3>
              <p>Monthly check-ins with personalized action plans, score monitoring, and guidance tailored to your credit profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-[#D4AF37] text-center">Pricing</h2>
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-black text-center">
          <p className="text-2xl font-semibold text-[#D4AF37] mb-2">$34.99 to get started</p>
          <p className="text-lg mb-4">Then $120/month for full-service credit solutions, a tracking portal, and 1-on-1 monthly reviews with our expert team.</p>
          <a href="#contact" className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">Sign Up</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white text-[#333333] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">Phone: (561) 677-9592</p>
          <p className="mb-4">Email: info@760advisors.com</p>
          <p className="mb-4">Address: 6586 West Atlantic Ave Apt 1302, Delray Beach, FL 33446</p>
          <a href="mailto:info@760advisors.com" className="underline text-[#D4AF37]">Email Us Now</a>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policy" className="max-w-4xl mx-auto py-16 px-4 text-sm text-[#333333]">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Privacy Policy & Opt-In Agreement</h2>
        <p className="mb-2">By submitting your information on this website, you agree to receive communications from 760 Advisors via email, text, or phone regarding our services. We value your privacy and will never sell your information to third parties.</p>
        <p className="mb-2">You may opt out at any time by replying “STOP” to any text message or by emailing us directly at info@760advisors.com.</p>
        <p className="mb-2">All data is handled securely and in accordance with applicable consumer privacy laws, including the FCRA and GLBA.</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        © 2025 760 Advisors. All rights reserved.
      </footer>
    </div>
  );
}
