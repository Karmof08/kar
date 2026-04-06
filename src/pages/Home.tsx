import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { IMAGES } from "../lib/images";
import { TESTIMONIALS } from "../constants/data";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Hero Footwear"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Student-Friendly Pricing
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
              YOUR TRUSTED <br />
              <span className="text-amber-500">FOOTWEAR PLUG</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              From expert repairs to the freshest kicks. We keep you moving in style without breaking your student budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-bold py-6 px-10 rounded-full text-lg shadow-xl shadow-amber-500/20 group">
                <Link to="/shop">
                  Order Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white font-bold py-6 px-10 rounded-full text-lg">
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Brief */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Complete Footwear Solutions</h2>
              <p className="text-white/60 text-lg">We don't just sell shoes; we care for them. Our master craftsmen ensure your favorite pairs last a lifetime.</p>
            </div>
            <Link to="/services" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Premium Repair", desc: "Expert stitching, sole replacement, and structural restoration.", icon: <CheckCircle2 className="text-amber-500" /> },
              { title: "Deep Polishing", desc: "Mirror-shine finish for your corporate and leather footwear.", icon: <CheckCircle2 className="text-amber-500" /> },
              { title: "Curated Sales", desc: "Hand-picked sneakers and shoes for the modern student lifestyle.", icon: <CheckCircle2 className="text-amber-500" /> }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-amber-500/30 transition-colors group"
              >
                <div className="mb-6 bg-amber-500/10 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/60 mb-6">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Past Work & New Arrivals</h2>
          <p className="text-white/60 max-w-xl mx-auto">Take a look at what we've been working on recently for our satisfied clients.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[IMAGES.category_sneakers, IMAGES.category_corporate, IMAGES.repair_before_after, IMAGES.gallery].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img src={img} alt="Gallery item" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What The Tribe Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/5 p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-lg italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-amber-500/20" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <span className="text-sm text-white/40">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">READY TO STEP UP <br />YOUR GAME?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-black text-white hover:bg-zinc-900 rounded-full px-12 py-8 text-xl font-bold shadow-2xl">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-black/20 text-black hover:bg-black/10 rounded-full px-12 py-8 text-xl font-bold">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Home;