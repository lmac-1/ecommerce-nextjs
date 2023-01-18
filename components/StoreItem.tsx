import Image from 'next/image';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/formatCurrency';
import Button from './Button';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
};

export default function StoreItem({ id, name, price }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="max-w-xs mx-auto p-3">
      <Image
        src="https://picsum.photos/300/200"
        alt="Image of product"
        width="300"
        height="200"
      />
      <div className="flex flex-col gap-3 my-3">
        <div className="font-mono text-center mb-1">
          <h2>{name}</h2>
          <p className="text-xs">{price && formatCurrency(price)}</p>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="py-2 px-4"
              fullWidth
              onClick={() => increaseCartQuantity(id, price, name)}
            >
              + Add to cart
            </Button>
          ) : (
            <div className="flex items-center justify-center flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  py={0}
                  onClick={() => decreaseCartQuantity(id, price, name)}
                >
                  -
                </Button>
                <p>{quantity} in cart</p>
                <Button
                  py={0}
                  onClick={() => increaseCartQuantity(id, price, name)}
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                color="bg-red-400"
                className="py-2 px-3"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
