import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/formatCurrency';
import Button from './Button';

type CartItemProps = {
  id: number;
  quantity: number;
  price: number;
  name: string;
};

export function CartItem({ id, quantity, price, name }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  return (
    <div className="flex">
      <div>
        <div className="text-lg">
          {name}{' '}
          {quantity > 1 && (
            <span className="text-slate-500 text-xs">x {quantity}</span>
          )}
        </div>
        <div className="text-xs text-slate-500">{formatCurrency(price)}</div>
      </div>
      <div className="ml-auto flex justify-center items-center gap-3">
        <div>{formatCurrency(price * quantity)}</div>
        <Button onClick={() => removeFromCart(id)}>&times;</Button>
      </div>
    </div>
  );
}
