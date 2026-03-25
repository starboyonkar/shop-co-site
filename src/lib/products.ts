import tshirtTape from "@/assets/products/tshirt-tape-details.jpg";
import skinnyJeans from "@/assets/products/skinny-jeans.jpg";
import checkeredShirt from "@/assets/products/checkered-shirt.jpg";
import sleeveStriped from "@/assets/products/sleeve-striped.jpg";
import verticalStriped from "@/assets/products/vertical-striped.jpg";
import courageGraphic from "@/assets/products/courage-graphic.jpg";
import bermudaShorts from "@/assets/products/bermuda-shorts.jpg";
import fadedSkinnyJeans from "@/assets/products/faded-skinny-jeans.jpg";
import poloContrast from "@/assets/products/polo-contrast.jpg";
import gradientGraphic from "@/assets/products/gradient-graphic.jpg";
import poloTipping from "@/assets/products/polo-tipping.jpg";
import blackStriped from "@/assets/products/black-striped.jpg";
import oneLifeGraphic from "@/assets/products/one-life-graphic.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  ratingCount: string;
}

export const newArrivals: Product[] = [
  { id: "1", name: "T-shirt with Tape Details", image: tshirtTape, price: 120, rating: 4.5, ratingCount: "4.5/5" },
  { id: "2", name: "Skinny Fit Jeans", image: skinnyJeans, price: 240, originalPrice: 260, discount: 20, rating: 3.5, ratingCount: "3.5/5" },
  { id: "3", name: "Checkered Shirt", image: checkeredShirt, price: 180, rating: 4.5, ratingCount: "4.5/5" },
  { id: "4", name: "Sleeve Striped T-shirt", image: sleeveStriped, price: 130, originalPrice: 160, discount: 30, rating: 4.5, ratingCount: "4.5/5" },
];

export const topSelling: Product[] = [
  { id: "5", name: "Vertical Striped Shirt", image: verticalStriped, price: 212, originalPrice: 232, discount: 20, rating: 5.0, ratingCount: "5.0/5" },
  { id: "6", name: "Courage Graphic T-shirt", image: courageGraphic, price: 145, rating: 4.0, ratingCount: "4.0/5" },
  { id: "7", name: "Loose Fit Bermuda Shorts", image: bermudaShorts, price: 80, rating: 3.0, ratingCount: "3.0/5" },
  { id: "8", name: "Faded Skinny Jeans", image: fadedSkinnyJeans, price: 210, rating: 4.5, ratingCount: "4.5/5" },
];

export const categoryProducts: Product[] = [
  { id: "9", name: "Gradient Graphic T-shirt", image: gradientGraphic, price: 145, rating: 3.5, ratingCount: "3.5/5" },
  { id: "10", name: "Polo with Tipping Details", image: poloTipping, price: 180, rating: 4.5, ratingCount: "4.5/5" },
  { id: "11", name: "Black Striped T-shirt", image: blackStriped, price: 120, originalPrice: 150, discount: 30, rating: 5.0, ratingCount: "5.0/5" },
  { id: "2", name: "Skinny Fit Jeans", image: skinnyJeans, price: 240, originalPrice: 260, discount: 20, rating: 3.5, ratingCount: "3.5/5" },
  { id: "3", name: "Checkered Shirt", image: checkeredShirt, price: 180, rating: 4.5, ratingCount: "4.5/5" },
  { id: "4", name: "Sleeve Striped T-shirt", image: sleeveStriped, price: 130, originalPrice: 160, discount: 30, rating: 4.5, ratingCount: "4.5/5" },
  { id: "5", name: "Vertical Striped Shirt", image: verticalStriped, price: 212, originalPrice: 232, discount: 20, rating: 5.0, ratingCount: "5.0/5" },
  { id: "6", name: "Courage Graphic T-shirt", image: courageGraphic, price: 145, rating: 4.0, ratingCount: "4.0/5" },
  { id: "7", name: "Loose Fit Bermuda Shorts", image: bermudaShorts, price: 80, rating: 3.0, ratingCount: "3.0/5" },
];

export const relatedProducts: Product[] = [
  { id: "12", name: "Polo with Contrast Trims", image: poloContrast, price: 212, originalPrice: 242, discount: 20, rating: 4.0, ratingCount: "4.0/5" },
  { id: "9", name: "Gradient Graphic T-shirt", image: gradientGraphic, price: 145, rating: 3.5, ratingCount: "3.5/5" },
  { id: "10", name: "Polo with Tipping Details", image: poloTipping, price: 180, rating: 4.5, ratingCount: "4.5/5" },
  { id: "11", name: "Black Striped T-shirt", image: blackStriped, price: 120, originalPrice: 150, discount: 30, rating: 5.0, ratingCount: "5.0/5" },
];

export const productDetail = {
  id: "13",
  name: "One Life Graphic T-Shirt",
  image: oneLifeGraphic,
  images: [oneLifeGraphic, oneLifeGraphic, oneLifeGraphic],
  price: 260,
  originalPrice: 300,
  discount: 40,
  rating: 4.5,
  ratingCount: "4.5/5",
  description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: ["#4F4631", "#314F4A", "#31344F"],
  sizes: ["Small", "Medium", "Large", "X-Large"],
};

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

export const cartItems: CartItem[] = [
  { id: "9", name: "Gradient Graphic T-shirt", image: gradientGraphic, price: 145, size: "Large", color: "White", quantity: 1 },
  { id: "3", name: "Checkered Shirt", image: checkeredShirt, price: 180, size: "Medium", color: "Red", quantity: 1 },
  { id: "2", name: "Skinny Fit Jeans", image: skinnyJeans, price: 240, size: "Large", color: "Blue", quantity: 1 },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  { id: "1", name: "Samantha D.", rating: 4.5, text: "\"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.\"", date: "Posted on August 14, 2023", verified: true },
  { id: "2", name: "Alex M.", rating: 5, text: "\"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.\"", date: "Posted on August 15, 2023", verified: true },
  { id: "3", name: "Ethan R.", rating: 3.5, text: "\"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.\"", date: "Posted on August 16, 2023", verified: true },
  { id: "4", name: "Olivia P.", rating: 5, text: "\"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.\"", date: "Posted on August 17, 2023", verified: true },
  { id: "5", name: "Liam K.", rating: 4, text: "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"", date: "Posted on August 18, 2023", verified: true },
  { id: "6", name: "Ava H.", rating: 4.5, text: "\"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"", date: "Posted on August 19, 2023", verified: true },
];
