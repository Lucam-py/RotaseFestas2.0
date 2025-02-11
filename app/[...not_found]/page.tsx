import { notFound } from 'next/navigation';

import { type Metadata } from 'next';

const Page = (): never => {
  notFound();
};

export const metadata: Metadata = {
  title: 'Erro 404 - Desculpa! Página não Encontrada.',
};

export default Page;
