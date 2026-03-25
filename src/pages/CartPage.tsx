import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Trash2, Tag, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { cartItems as initialCartItems } from "@/lib/products";

const CartPage = () => {
  const [items, setItems] = useState(initialCartItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <Layout>
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Cart</span>
        </div>

        <h1 className="font-integral text-3xl md:text-4xl mb-6">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 border border-border rounded-lg divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 md:p-5">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-secondary shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Size: {item.size}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Color: {item.color}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-discount">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg md:text-xl">${item.price}</span>
                    <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                      <button onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                      <span className="font-medium text-sm w-5 text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 border border-border rounded-lg p-5 md:p-6 h-fit">
            <h2 className="font-bold text-xl mb-5">Order Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount (-20%)</span>
                <span className="font-bold text-discount">-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-bold">${deliveryFee}</span>
              </div>
              <hr />
              <div className="flex justify-between text-base">
                <span>Total</span>
                <span className="font-bold text-xl">${total}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <div className="relative flex-1">
                <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-secondary rounded-full pl-9 pr-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium">
                Apply
              </button>
            </div>

            <button className="w-full bg-primary text-primary-foreground rounded-full py-3.5 mt-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Go to Checkout <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
