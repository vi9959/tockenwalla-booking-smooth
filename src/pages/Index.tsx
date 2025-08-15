import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Activity, BadgeCheck, Clock, HeartPulse, LayoutList, ShieldCheck, Stethoscope, Users } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="text-muted-foreground text-base md:text-lg">{children}</div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About TockenWalla">
          <p>
            TockenWalla was built to solve a simple but critical problem: long, stressful waiting times in clinics and hospitals.
            By combining real-time token booking with intelligent queue management, we bring transparency for patients and a calmer, more
            organized flow for doctors and staff.
          </p>
        </Section>

        <Section id="how" title="How It Works">
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 text-primary font-semibold"><LayoutList className="h-5 w-5" /> 1. Booking</div>
              <p className="mt-2">Patients choose a department/doctor and book a token in real-time.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 text-primary font-semibold"><BadgeCheck className="h-5 w-5" /> 2. Payment</div>
              <p className="mt-2">Secure, transparent payment options keep billing clear and fast.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 text-primary font-semibold"><HeartPulse className="h-5 w-5" /> 3. Confirmation</div>
              <p className="mt-2">Instant token confirmation and live queue position updates.</p>
            </div>
          </div>
        </Section>

        <Section id="benefits" title="Benefits at a Glance">
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="glass rounded-xl p-5 flex flex-col items-start gap-2">
              <Clock className="text-primary" />
              <div className="font-semibold">Time-saving</div>
              <p className="text-sm">Reduce waiting room crowding and speed up patient flow.</p>
            </div>
            <div className="glass rounded-xl p-5 flex flex-col items-start gap-2">
              <LayoutList className="text-primary" />
              <div className="font-semibold">Transparent Queue</div>
              <p className="text-sm">Patients see their live position and estimated time to consult.</p>
            </div>
            <div className="glass rounded-xl p-5 flex flex-col items-start gap-2">
              <Users className="text-primary" />
              <div className="font-semibold">Patient-Friendly</div>
              <p className="text-sm">Simple, mobile-first booking experience for every age.</p>
            </div>
            <div className="glass rounded-xl p-5 flex flex-col items-start gap-2">
              <Stethoscope className="text-primary" />
              <div className="font-semibold">Doctor-Friendly</div>
              <p className="text-sm">Organized, predictable patient flow for less burnout.</p>
            </div>
          </div>
        </Section>

        <Section id="policies" title="Our Policies">
          <div className="space-y-8">
            {/* Terms & Conditions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Terms & Conditions</h3>
              <div className="space-y-3">
                <p><strong>Eligibility:</strong> You must be at least 18 years old and capable of entering into a legally binding contract to use our services.</p>
                <p><strong>Services:</strong> Tokenwalla.com provides hospital token booking services to reduce wait times and streamline patient management.</p>
                <p><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account details and for all activities under your account.</p>
                <p><strong>Payments:</strong> All payments on Tokenwalla.com must comply with our payment partner requirements, including Razorpay. Orders are processed only after successful payment.</p>
                <p><strong>Cancellations & Refunds:</strong> If you cancel a token, the payment is non-refundable. Please review our cancellation policy carefully before booking.</p>
                <p><strong>Prohibited Conduct:</strong> You agree not to misuse our platform for unlawful or prohibited activities.</p>
                <p><strong>Limitation of Liability:</strong> Tokenwalla.com is not liable for any direct or indirect damages resulting from your use of the website.</p>
                <p><strong>Governing Law:</strong> These Terms are governed by and construed per the laws of India.</p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Privacy Policy</h3>
              <div className="space-y-3">
                <p><strong>What We Collect:</strong> Name, email, phone number, address (when you register or place orders), payment information (processed securely via Razorpay), and device/browser information for analytics.</p>
                <p><strong>How We Use Your Information:</strong> To process your orders and deliver services, communicate important updates and offers, for internal analytics and improvements, and to comply with legal requirements.</p>
                <p><strong>Sharing of Information:</strong> We do not sell or share your personal information except as necessary to fulfill your order (e.g., with payment processors and delivery partners).</p>
                <p><strong>Security:</strong> Your data is stored securely. We use industry-standard security measures to protect your personal information.</p>
                <p><strong>Cookies:</strong> Our website may use cookies to enhance user experience and for analytics.</p>
                <p><strong>Access & Correction:</strong> You may request access or corrections to your information anytime by contacting us.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <h4 className="font-semibold">Contact Information</h4>
              <div className="text-sm space-y-1">
                <p><strong>Tokenwalla.com</strong></p>
                <p>HINDUPUR - NIMPALLI ROAD - 515201, AP</p>
                <p>Email: tokentraq@gmail.com</p>
                <p>WhatsApp: +91 93532 92757</p>
              </div>
            </div>
          </div>
        </Section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-3">Reach out directly</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919353292757?text=Hi%20TockenWalla%2C%20I%27d%20like%20to%20inquire%20about%20hospital%20token%20booking."
                    target="_blank" rel="noopener"
                  >
                    <Button variant="secondary" className="hover-scale">WhatsApp: +91 9353292757</Button>
                  </a>
                  <a href="mailto:tokentraq@gmail.com">
                    <Button variant="outline" className="hover-scale">tokentraq@gmail.com</Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-3">We typically respond within a few hours.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-3">Inquiry Form</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10">
          <div className="container text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span>© {new Date().getFullYear()} TockenWalla. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;