import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Filter, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { PRODUCT_CATEGORIES, PRODUCTS } from "../constants/data";
import { toast } from "sonner";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productName: string) => {
    toast.success(`Added ${productName} to cart!`, {
      description: "Proceed to checkout to complete your order."
    });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-black mb-4">THE SHOP</h1>
            <p className="text-white/60">Curated footwear for the urban explorer.</p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
              <Input 
                placeholder="Search kicks..." 
                className="pl-10 bg-zinc-900 border-white/10 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-2 rounded-full border text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === "all" ? "bg-amber-500 border-amber-500 text-black" : "border-white/10 hover:border-amber-500/50"
                }`}
              >
                All
              </button>
              {PRODUCT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full border text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat.id ? "bg-amber-500 border-amber-500 text-black" : "border-white/10 hover:border-amber-500/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden bg-zinc-800">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="font-bold">₦{product.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{product.category}</span>
                  <h3 className="text-2xl font-bold mb-6">{product.name}</h3>
                  <div className="mt-auto">
                    <Button 
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full bg-white text-black hover:bg-amber-500 font-bold py-6 rounded-2xl flex items-center justify-center gap-2 group/btn"
                    >
                      <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-zinc-900 rounded-[2rem] border border-dashed border-white/10">
            <h3 className="text-2xl font-bold text-white/40 mb-2">No kicks found</h3>
            <p className="text-white/40">Try searching for something else or check another category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;