import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [challenge, setChallenge] = useState("");

  const { a, b, sum } = useMemo(() => {
    const a = Math.floor(Math.random() * 5) + 2; // 2..6
    const b = Math.floor(Math.random() * 5) + 2; // 2..6
    return { a, b, sum: a + b };
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // likely bot
    if (parseInt(challenge) !== sum) {
      toast({ title: "Please solve the quick check", description: "Enter the correct sum to send your message." });
      return;
    }

    const subject = encodeURIComponent(`Inquiry — ${name || "TockenWalla Website"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:tokentraq@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Your Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share a bit about your clinic/hospital and how we can help." rows={4} required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Quick check: What is {a} + {b}?</label>
          <Input value={challenge} onChange={(e) => setChallenge(e.target.value)} inputMode="numeric" pattern="[0-9]*" placeholder="Answer" required />
        </div>
        <Button type="submit" variant="hero" className="w-full md:w-auto">Send Inquiry</Button>
      </div>
    </form>
  );
};

export default ContactForm;