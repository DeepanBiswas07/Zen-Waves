const bgButton = document.getElementById('bgbutton');
    const body = document.getElementById('mainbody');

    const backgrounds = [
      "images/bg2.jpg",
      "images/bg3.jpg",
      "images/bg4.jpg",
      "images/bg5.jpg",
      "images/bg6.jpg",
      "images/bg7.jpg",
      "images/bg8.jpg",
      "images/bg9.jpg",
      "images/bg10.jpg",
      "images/bg1.jpg"
    ];

    let currentIndex = 0;

    bgButton.addEventListener('click', () => {
      const img = new Image(); // Create a temporary Image object
      img.src = backgrounds[currentIndex];

      img.onload = () => {
      // Set the next background
      body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
      body.style.backgroundSize = 'cover'; // optional styling
      body.style.backgroundPosition = 'center';

      // Update index
      currentIndex = (currentIndex + 1) % backgrounds.length;
    };
    });