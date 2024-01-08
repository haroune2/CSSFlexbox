document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const numSquaresInput = document.getElementById('numSquares');
    const justifyContentSelect = document.getElementById('justifyContentSelect');
    const alignItemsSelect = document.getElementById('alignItemsSelect');
  
    function updateStyles() {
      const numSquares = parseInt(numSquaresInput.value, 10);
      
      container.innerHTML = '';
      
      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
      }
  
      const justifyContentValue = justifyContentSelect.value;
      const alignItemsValue = alignItemsSelect.value;
  
      container.style.justifyContent = justifyContentValue;
      container.style.alignItems = alignItemsValue;
    }
  
    numSquaresInput.addEventListener('input', updateStyles);
    justifyContentSelect.addEventListener('change', updateStyles);
    alignItemsSelect.addEventListener('change', updateStyles);
  
    updateStyles(); // Appeler la fonction une fois au chargement de la page
  });
  