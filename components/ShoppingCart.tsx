import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className={`top-0 right-0 w-100 md:w-[35vw] bg-white px-5 fixed h-full z-40 ease-in-out duration-300 ${
        isOpen
          ? 'translate-x-0 shadow-[0_0_0_10000px_rgba(0,0,0,.70)]'
          : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between my-5">
        <h2 className="text-2xl">Cart</h2>
        <button
          className="flex text-2xl items-center cursor-pointer bg-inherit"
          onClick={closeCart}
        >
          &times;
        </button>
      </div>
      <div className="flex gap-6 flex-col">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ml-auto font-bold text-lg">
          Total:{' '}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              return total + (cartItem?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
