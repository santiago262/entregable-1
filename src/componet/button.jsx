import React from 'react';

export default function Button({ onClick }) { // Usar onClick para mantener la consistencia
  return (
    <div class="btn"><button class="" onClick={onClick}>Cambiar frase</button></div>
  );
}
