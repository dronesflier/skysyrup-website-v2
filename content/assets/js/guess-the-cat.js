const cats = ['Susie', 'Calvin', 'Helmut'];

const catImages = {
  Susie: [
    '/assets/cats/susie/69229805980__9ED5004E-C917-4AEE-963C-A215742E8FDC.png',
    '/assets/cats/susie/IMG_1828.png',
    '/assets/cats/susie/IMG_3648.png',
    '/assets/cats/susie/IMG_3803.png',
    '/assets/cats/susie/IMG_3829.png',
    '/assets/cats/susie/IMG_3870.png',
    '/assets/cats/susie/IMG_3919.png',
    '/assets/cats/susie/IMG_4035.png',
    '/assets/cats/susie/IMG_1633.png',
    '/assets/cats/susie/IMG_2047.png',
    '/assets/cats/susie/IMG_3649.png',
    '/assets/cats/susie/IMG_3805.png',
    '/assets/cats/susie/IMG_3834.png',
    '/assets/cats/susie/IMG_3916.png',
    '/assets/cats/susie/IMG_3920.png',
    '/assets/cats/susie/IMG_1710.png',
    '/assets/cats/susie/IMG_3250.png',
    '/assets/cats/susie/IMG_3713.png',
    '/assets/cats/susie/IMG_3807.png',
    '/assets/cats/susie/IMG_3860.png',
    '/assets/cats/susie/IMG_3918.png',
    '/assets/cats/susie/IMG_4014.png',
  ],
  Calvin: [
    '/assets/cats/calvin/69196053068__FD6FC2E9-EB00-4772-AA28-B8836CE462BF.png',
    '/assets/cats/calvin/IMG_1697.png',
    '/assets/cats/calvin/IMG_1828.png',
    '/assets/cats/calvin/IMG_3001.png',
    '/assets/cats/calvin/IMG_3500.png',
    '/assets/cats/calvin/IMG_3650.png',
    '/assets/cats/calvin/IMG_3699.png',
    '/assets/cats/calvin/IMG_3920.png',
    '/assets/cats/calvin/69228843954__956D98BC-C9A4-4620-B0FF-A8F213ACA3D8.png',
    '/assets/cats/calvin/IMG_1698.png',
    '/assets/cats/calvin/IMG_1830.png',
    '/assets/cats/calvin/IMG_3033.png',
    '/assets/cats/calvin/IMG_3502.png',
    '/assets/cats/calvin/IMG_3651.png',
    '/assets/cats/calvin/IMG_3731.png',
    '/assets/cats/calvin/IMG_3938.png',
    '/assets/cats/calvin/69506402998__6C561C85-3C5D-4F49-A941-AD553E3B5DF7.png',
    '/assets/cats/calvin/IMG_1714.png',
    '/assets/cats/calvin/IMG_2030.png',
    '/assets/cats/calvin/IMG_3263.png',
    '/assets/cats/calvin/IMG_3542.png',
    '/assets/cats/calvin/IMG_3670.png',
    '/assets/cats/calvin/IMG_3801.png',
    '/assets/cats/calvin/IMG_4027.png',
    '/assets/cats/calvin/69826195512__A04C87B3-4D18-4232-B18B-85986676B0B9.png',
    '/assets/cats/calvin/IMG_1728.png',
    '/assets/cats/calvin/IMG_2031.png',
    '/assets/cats/calvin/IMG_3276.png',
    '/assets/cats/calvin/IMG_3631.png',
    '/assets/cats/calvin/IMG_3681.png',
    '/assets/cats/calvin/IMG_3855.png',
    '/assets/cats/calvin/IMG_4028.png',
    '/assets/cats/calvin/69849643662__AF9BEB50-49C3-4662-8ADA-63EAB7F3C6E5.png',
    '/assets/cats/calvin/IMG_1772.png',
    '/assets/cats/calvin/IMG_2906.png',
    '/assets/cats/calvin/IMG_3314.png',
    '/assets/cats/calvin/IMG_3635.png',
    '/assets/cats/calvin/IMG_3685.png',
    '/assets/cats/calvin/IMG_3870.png',
    '/assets/cats/calvin/IMG_4061.png',
    '/assets/cats/calvin/IMG_1639.png',
    '/assets/cats/calvin/IMG_1827.png',
    '/assets/cats/calvin/IMG_2927.png',
    '/assets/cats/calvin/IMG_3315.png',
    '/assets/cats/calvin/IMG_3648.png',
    '/assets/cats/calvin/IMG_3698.png',
    '/assets/cats/calvin/IMG_4086.png',
  ],
  Helmut: [
    '/assets/cats/helmut/69576217057__DD107E89-6B75-47F0-959C-CEEF0CA3B262.png',
    '/assets/cats/helmut/IMG_0311.png',
    '/assets/cats/helmut/IMG_1827.png',
    '/assets/cats/helmut/IMG_3508.png',
    '/assets/cats/helmut/IMG_3660.png',
    '/assets/cats/helmut/IMG_3874.png',
    '/assets/cats/helmut/IMG_3984.png',
    '/assets/cats/helmut/IMG_4002.png',
    '/assets/cats/helmut/IMG_0287.png',
    '/assets/cats/helmut/IMG_1631.png',
    '/assets/cats/helmut/IMG_1828.png',
    '/assets/cats/helmut/IMG_3509.png',
    '/assets/cats/helmut/IMG_3671.png',
    '/assets/cats/helmut/IMG_3998.png',
    '/assets/cats/helmut/IMG_4063.png',
    '/assets/cats/helmut/IMG_0309.png',
    '/assets/cats/helmut/IMG_1730.png',
    '/assets/cats/helmut/IMG_1866.png',
    '/assets/cats/helmut/IMG_3510.png',
    '/assets/cats/helmut/IMG_3702.png',
    '/assets/cats/helmut/IMG_3904.png',
    '/assets/cats/helmut/IMG_3999.png',
    '/assets/cats/helmut/IMG_0310.png',
    '/assets/cats/helmut/IMG_1735.png',
    '/assets/cats/helmut/IMG_2047.png',
    '/assets/cats/helmut/IMG_3642.png',
    '/assets/cats/helmut/IMG_3812.png',
    '/assets/cats/helmut/IMG_3983.png',
    '/assets/cats/helmut/IMG_4001.png',
  ],
};

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function initializeGame() {
  const imageEl = document.getElementById('cat-image');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  const playAgainButton = document.getElementById('play-again-btn');

  if (!imageEl || !optionsEl || !resultEl || !playAgainButton) {
    return;
  }

  let correctCat = '';

  function startGame() {
    resultEl.textContent = '';
    correctCat = randomItem(cats);
    const randomImage = randomItem(catImages[correctCat]);
    imageEl.src = randomImage;
    generateOptions();
  }

  function generateOptions() {
    optionsEl.innerHTML = '';
    const shuffledCats = shuffle(cats);

    shuffledCats.forEach((cat) => {
      const button = document.createElement('button');
      button.textContent = cat;
      button.style.padding = '10px 20px';
      button.style.fontSize = '16px';
      button.style.cursor = 'pointer';
      button.style.borderRadius = '4px';
      button.style.border = '2px solid #333';
      button.style.backgroundColor = 'var(--secondary)';
      button.style.fontWeight = 'bold';
      button.addEventListener('click', () => checkAnswer(cat));
      optionsEl.appendChild(button);
    });
  }

  function checkAnswer(selectedCat) {
    if (selectedCat === correctCat) {
      resultEl.textContent = 'CORRECT!!!!';
    } else {
      resultEl.textContent = `WRONG!!!! It was ${correctCat}.`;
    }
  }

  // Remove old listeners if they exist
  const newPlayAgainButton = playAgainButton.cloneNode(true);
  playAgainButton.parentNode.replaceChild(newPlayAgainButton, playAgainButton);
  
  newPlayAgainButton.addEventListener('click', startGame);
  startGame();
}

document.addEventListener('nav', initializeGame);

// Also run on initial page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGame);
} else {
  initializeGame();
}
