'use client';
export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>smt wrong {error.message}</h1>;
}
