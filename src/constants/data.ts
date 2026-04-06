import { IMAGES } from "../lib/images";

export const SERVICES = [
  {
    title: "Shoe Repair",
    description: "From heel replacements to sole stitching, we restore your favorite pairs to their former glory.",
    image: IMAGES.repair_before_after,
    features: ["Sole Restoration", "Stitching & Patching", "Heel Repair"]
  },
  {
    title: "Premium Polishing",
    description: "Give your leather footwear a mirror-like shine with our professional grade polishing service.",
    image: IMAGES.polishing,
    features: ["Deep Cleaning", "Conditioning", "High-Gloss Shine"]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "sneakers", name: "Sneakers", image: IMAGES.category_sneakers },
  { id: "sandals", name: "Sandals", image: IMAGES.category_sandals },
  { id: "corporate", name: "Corporate", image: IMAGES.category_corporate },
  { id: "slippers", name: "Slippers", image: IMAGES.category_slippers }
];

export const PRODUCTS = [
  { id: 1, name: "Urban Velocity X", price: 45000, category: "sneakers", image: IMAGES.category_sneakers },
  { id: 2, name: "Classic Monk Strap", price: 35000, category: "corporate", image: IMAGES.category_corporate },
  { id: 3, name: "Comfort Slides", price: 12000, category: "slippers", image: IMAGES.category_slippers },
  { id: 4, name: "Leather Glider Sandals", price: 18000, category: "sandals", image: IMAGES.category_sandals },
  { id: 5, name: "Vanguard Runners", price: 42000, category: "sneakers", image: IMAGES.category_sneakers },
  { id: 6, name: "Executive Oxford", price: 38000, category: "corporate", image: IMAGES.category_corporate }
];

export const TESTIMONIALS = [
  {
    name: "Tobi Adebayo",
    role: "Student",
    content: "The repair work on my Jordans was insane! You can't even tell where the tear was. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tobi"
  },
  {
    name: "Sarah Jenkins",
    role: "Young Professional",
    content: "My corporate shoes look brand new after the premium polish. Worth every penny.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Okafor",
    role: "Freelancer",
    content: "Found my dream sneakers through their custom order service. The price was way better than elsewhere.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];