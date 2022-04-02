import React, { useState } from 'react';

function Example() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
          Clique para atualizar o cont
      </button>

      <button onClick={() => setCount(count == 0)}>
          Clique para zerar
      </button>

    </div>
  );
}

export default Example;