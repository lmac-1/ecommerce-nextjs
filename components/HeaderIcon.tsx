import Image from 'next/image';

export default function HeaderIcon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} width="24" height="24" alt={alt} />;
}
