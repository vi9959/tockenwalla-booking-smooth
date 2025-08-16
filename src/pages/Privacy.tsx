import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
              <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
              <CardDescription>
                Last updated: {new Date().toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. This Policy explains how Tokenwalla.com collects, uses, and protects your information.
                </p>
              </section>

              <Separator />

              {/* What We Collect */}
              <section>
                <h2 className="text-xl font-semibold mb-3">What We Collect</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Name, email, phone number, address (when you register or place orders)</li>
                  <li>Payment information (processed securely via Razorpay)</li>
                  <li>Device and browser information (for analytics)</li>
                </ul>
              </section>

              <Separator />

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>To process your orders and deliver products/services</li>
                  <li>To communicate important updates and offers</li>
                  <li>For internal analytics and improvements</li>
                  <li>To comply with legal requirements</li>
                </ul>
              </section>

              <Separator />

              {/* Sharing of Information */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Sharing of Information</h2>
                <p className="text-muted-foreground">
                  We do not sell or share your personal information except as necessary to fulfill your order (e.g., with payment processors and delivery partners).
                </p>
              </section>

              <Separator />

              {/* Data Security and PCI DSS Compliance */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Data Security and PCI DSS Compliance</h2>
                <p className="text-muted-foreground">
                  TokenWalla uses SSL/TLS encryption for all data transmission. All payment processing is handled by Razorpay, a PCI DSS Level 1 certified payment gateway. TokenWalla does not store, process, or transmit sensitive card information on our servers. We implement multi-factor authentication for administrative access and conduct regular security audits to maintain compliance with industry standards and regulatory requirements.
                </p>
              </section>

              <Separator />

              {/* Cookies */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Cookies</h2>
                <p className="text-muted-foreground">
                  Our website may use cookies to enhance user experience and for analytics.
                </p>
              </section>

              <Separator />

              {/* Access & Correction */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Access & Correction</h2>
                <p className="text-muted-foreground">
                  You may request access or corrections to your information anytime by contacting us.
                </p>
              </section>

              <Separator />

              {/* Policy Changes */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Policy Changes</h2>
                <p className="text-muted-foreground">
                  This policy may be updated without prior notice. Check this page regularly for changes.
                </p>
              </section>

              <Separator />

              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>For questions about this policy, contact:</p>
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

export default Privacy;