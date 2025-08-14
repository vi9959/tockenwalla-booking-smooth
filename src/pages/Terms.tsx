import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <nav className="container flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Terms & Conditions</CardTitle>
              <CardDescription>
                Last updated: {new Date().toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to Tokenwalla.com. By accessing or using our website, you agree to be bound by these Terms & Conditions. Please read them carefully before using our services.
                </p>
              </section>

              <Separator />

              {/* Eligibility */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
                <p className="text-muted-foreground">
                  You must be at least 18 years old and capable of entering into a legally binding contract to use our services.
                </p>
              </section>

              <Separator />

              {/* Services */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Services</h2>
                <p className="text-muted-foreground">
                  Tokenwalla.com provides hospital token booking services to reduce wait times and streamline patient management.
                </p>
              </section>

              <Separator />

              {/* Account Responsibility */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Account Responsibility</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account details and for all activities under your account.
                </p>
              </section>

              <Separator />

              {/* Payments */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Payments</h2>
                <p className="text-muted-foreground">
                  All payments on Tokenwalla.com must comply with our payment partner requirements, including Razorpay. Orders are processed only after successful payment.
                </p>
              </section>

              <Separator />

              {/* Cancellations & Refunds */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Cancellations & Refunds</h2>
                <p className="text-muted-foreground">
                  If you cancel a token, the payment is non-refundable. Please review our cancellation policy carefully before booking.
                </p>
              </section>

              <Separator />

              {/* Prohibited Conduct */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Prohibited Conduct</h2>
                <p className="text-muted-foreground">
                  You agree not to misuse our platform for unlawful or prohibited activities.
                </p>
              </section>

              <Separator />

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Tokenwalla.com is not liable for any direct or indirect damages resulting from your use of the website.
                </p>
              </section>

              <Separator />

              {/* Changes to Terms */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to revise these Terms at any time. Continued use of the site constitutes acceptance of any changes.
                </p>
              </section>

              <Separator />

              {/* Governing Law */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms are governed by and construed per the laws of India.
                </p>
              </section>

              <Separator />

              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Tokenwalla.com</strong></p>
                  <p>HINDUPUR - NIMPALLI ROAD - 515201, AP</p>
                  <p>Email: tokentraq@gmail.com</p>
                  <p>WhatsApp: +91 93532 92757</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Terms;