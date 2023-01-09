import { PropsWithChildren } from 'react';

export default function FormOrButtonContainer({
  children,
}: PropsWithChildren<any>) {
  return <div className="mb-6">{children}</div>;
}
