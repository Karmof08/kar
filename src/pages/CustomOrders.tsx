import { motion } from "framer-motion";
import { Upload, Camera, MessageCircle, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { IMAGES } from "../lib/images";

const CustomOrders = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-amber-500 font-bold tracking-widest uppercase">Your Vision, Our Craft</span>
            <h1 className="text-5xl md:text-7xl font-black">GET THE SHOES YOU <span className="text-amber-500 underline decoration-white/20">WANT.</span></h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Saw a pair on Instagram or Pinterest that's way out of your budget? 
              Take a screenshot, send it to us, and we'll help you source or recreate a high-quality alternative at student-friendly prices.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Camera />, title: "Snap a Picture", desc: "Take a clear photo or screenshot of the footwear you desire." },
                { icon: <Send />, title: "Send to Us", desc: "WhatsApp us the image with your size and preferred color." },
                { icon: <MessageCircle />, title: "Get a Quote", desc: "We'll reply within 24 hours with the best possible price." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-amber-500 text-black p-3 rounded-2xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-8 px-12 rounded-full text-xl shadow-lg shadow-green-600/20 group">
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Start Custom Order
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border-8 border-zinc-900 shadow-2xl">
              <img src={IMAGES.gallery} alt="Custom footwear collage" className="w-full object-cover" />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl max-w-xs border border-zinc-200">
              <div className="flex gap-1 mb-2">
                <Upload size={20} className="text-amber-500" />
                <span className="text-black font-bold">100+ Custom Orders</span>
              </div>
              <p className="text-zinc-600 text-sm italic">"I sent a pic of some rare Dunks and they got me a perfect lookalike for half the price! Insane!"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;