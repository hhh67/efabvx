import React from 'react';
import Card from '../components/card/Card';

export default function Page() {
  return (
    <main style={{ padding: 32, display: 'grid', gap: 24 }}>
      <h1>@efabvx PoC Dashboard</h1>
      <section style={{ display: 'grid', gap: 16 }}>
        <h2>自前コンポーネント (Card)</h2>
        <Card interactive aria-label="サンプルカード">
          <h3 style={{ marginTop: 0 }}>Card 見出し</h3>
          <p style={{ margin: 0 }}>自前 tokens を用いた Card コンポーネント。Hover/Focus で elevation / transform を確認。</p>
        </Card>
      </section>
    </main>
  );
}
