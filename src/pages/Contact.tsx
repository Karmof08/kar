import { motion } from "framer-motion";
import { MessageSquare, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours."
    });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="flex-1 space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">GET IN <br /><span className="text-amber-500">TOUCH.</span></h1>
              <p className="text-xl text-white/60">
                Have a question or need a repair? Reach out to us through any of these channels or visit us at the hostel.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-[2rem] flex items-center justify-center border border-white/5">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Location</h4>
                  <p className="text-xl font-medium">Room 117, Main Hostel, Uni-Campus</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-[2rem] flex items-center justify-center border border-white/5">
                  <Phone className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Phone / WhatsApp</h4>
                  <p className="text-xl font-medium">+234 800 SOLE SAVVY</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-[2rem] flex items-center justify-center border border-white/5">
                  <MessageSquare className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Email</h4>
                  <p className="text-xl font-medium">hello@solesavvy.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Send].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 bg-zinc-900 hover:bg-amber-500 hover:text-black transition-colors rounded-2xl flex items-center justify-center border border-white/5">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 h-14 rounded-2xl" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 h-14 rounded-2xl" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Shoe Repair Quote" className="bg-black/50 border-white/10 h-14 rounded-2xl" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us what you need..." className="bg-black/50 border-white/10 min-h-[150px] rounded-2xl" required />
              </div>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-8 rounded-2xl text-lg group">
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;