const slider = document.getElementById('mainvolume');      //code for sound changing icon with the volume slider
const soundimage = document.getElementById('soundid');
const soundbutton = document.getElementById('soundbutton');

  slider.addEventListener('input', () => {
    const value = parseFloat(slider.value);

    if (value === 0) {
      soundimage.src = "images/mute.png"; 
    } else if (value < 0.5) {
      soundimage.src = "images/midsound.png"; 
    } else{
      soundimage.src = "images/sound.png"; 
    }
  });

soundbutton.addEventListener('click', () => {               //code for clicking sound make it mute and clicking it again unmute it
  if (parseFloat(slider.value) === 0) {
    slider.value = 1;
  } else {
    slider.value = 0;
  }
   slider.dispatchEvent(new Event('input'));
   });


  const resetbutton = document.getElementById('resetbutton');                   //reset button functions

  const resetslider = ['birdvolume', 'rainvolume', 'wavevolume', 'thundervolume', 'watervolume',
     'windchimevolume', 'forestvolume', 'windvolume', 'firevolume'];

    resetbutton.addEventListener('click', () => {
      resetslider.forEach(id => {
        const slider = document.getElementById(id);
        if (slider) {
          slider.value = 0;
          slider.dispatchEvent(new Event('input'));          
        }
      });
    });