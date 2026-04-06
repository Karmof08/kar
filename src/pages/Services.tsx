import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SERVICES } from "../constants/data";

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">OUR SERVICES</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            We offer professional footwear care that extends the life of your favorite pairs. 
            From deep cleaning to major structural repairs, our team handles every shoe with precision.
          </p>
        </motion.div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 1 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-500">{service.title}</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-zinc-900 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-white text-black hover:bg-amber-500 hover:text-black font-bold py-6 px-10 rounded-full group">
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1 w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <span className="text-amber-500 font-bold block mb-1">PRO TIP</span>
                  <p className="text-sm text-white/80">Regular maintenance doubles the lifespan of premium leather footwear.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-32 bg-zinc-900 rounded-[3rem] p-12 md:p-20 border border-white/5">
          <h2 className="text-4xl font-bold mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Drop Off", desc: "Bring your shoes to Room 117 or we pick up." },
              { step: "02", title: "Assessment", desc: "We analyze and give you a clear price." },
              { step: "03", title: "Execution", desc: "Our craftsmen work their magic." },
              { step: "04", title: "Delivery", desc: "Fresh kicks back in your hands." }
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="text-6xl font-black text-amber-500/20 block">{item.step}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;