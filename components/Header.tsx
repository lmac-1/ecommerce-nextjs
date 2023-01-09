import Link from 'next/link';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <header className="h-16 items-center shadow-md flex justify-between px-6">
      <div className="flex gap-10">
        <Link href="/products">All Products</Link>
      </div>
      <div>
        <p className="tracking-tighter text-lg">lucy&apos;s shop</p>
      </div>
      <div className="flex gap-6">
        <HeaderIcon src="/search.svg" alt="Icon for search" />
        <HeaderIcon src="/account.svg" alt="Icon for your account" />
        <HeaderIcon src="/basket.svg" alt="Icon for shopping basket" />
      </div>
    </header>
  );
}
