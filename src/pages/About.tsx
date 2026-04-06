import { motion } from "framer-motion";
import { ShieldCheck, Zap, Wallet, Users } from "lucide-react";
import { IMAGES } from "../lib/images";

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            NOT JUST A <br />
            <span className="text-amber-500">BUSINESS,</span> IT'S A PASSION.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 leading-relaxed"
          >
            SoleSavvy started in a small hostel room with a simple mission: to help fellow students look their best without spending their entire allowance. What began as helping friends polish their formal shoes for presentations grew into a full-scale footwear hub.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="rounded-[2rem] overflow-hidden">
            <img src={IMAGES.hero} alt="Workshop" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Our Philosophy</h2>
            <p className="text-lg text-white/60">
              We believe quality footwear shouldn't be a luxury reserved for the elite. By combining traditional craftsmanship with modern sourcing, we bring premium footwear care and sales to the campus community.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <Wallet className="text-amber-500" />, label: "Affordable", desc: "Student-centered pricing." },
                { icon: <ShieldCheck className="text-amber-500" />, label: "Reliable", desc: "Guaranteed craftsmanship." },
                { icon: <Zap className="text-amber-500" />, label: "Fast", desc: "Quick turnaround times." },
                { icon: <Users className="text-amber-500" />, label: "Community", desc: "Built by students, for students." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="bg-zinc-900 w-10 h-10 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-white/10">
          {[
            { value: "500+", label: "Shoes Repaired" },
            { value: "200+", label: "Happy Clients" },
            { value: "50+", label: "Custom Sourced" },
            { value: "117", label: "Hostel Room" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-5xl font-black text-amber-500 block mb-2">{stat.value}</span>
              <span className="text-white/40 font-medium uppercase tracking-widest text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;