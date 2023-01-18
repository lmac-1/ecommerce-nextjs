import Link from 'next/link';
import { useShoppingCart } from '../context/ShoppingCartContext';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <header className="h-16 items-center shadow-md flex justify-between px-6">
      <div className="flex gap-10">
        <Link href="/products">All Products</Link>
      </div>
      <div>
        <p className="tracking-tighter text-lg">lucy&apos;s shop</p>
      </div>
      <div className="flex gap-6">
        {/* <HeaderIcon src="/search.svg" alt="Icon for search" />
         */}
        <HeaderIcon src="/account.svg" alt="Icon for your account" />
        <button onClick={openCart} className="rounded-full p-2 relative">
          <HeaderIcon src="/basket.svg" alt="Icon for shopping basket" />
          {cartQuantity > 0 && (
            <div className="rounded-full flex justify-center bg-red-700 text-xs text-white absolute w-4 h-4 bottom-0 right-0 transform-">
              {cartQuantity}
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
