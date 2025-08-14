   const icon = document.getElementById('imageid');         //play and pause image
   const Masterbutton = document.getElementById('buttonid');  //play pause button
   const mainvolume = document.getElementById('mainvolume');  //main volume slider

   const birdvolume = document.getElementById('birdvolume');  //bird sound slider
   const birdsound = document.getElementById('birdsound');  //bird sound

   const rainvolume = document.getElementById('rainvolume'); //rain sound slider
   const rainsound = document.getElementById('rainsound');  //rain sound


   const wavevolume = document.getElementById('wavevolume'); //wave sound slider
   const wavesound = document.getElementById('wavesound');  //wave sound


   const windchimevolume = document.getElementById('windchimevolume'); //windchime sound slider
   const windchimesound = document.getElementById('windchimesound');  //windchime sound


   const forestvolume = document.getElementById('forestvolume'); //forest sound slider
   const forestsound = document.getElementById('forestsound');  //forest sound


   const thundervolume = document.getElementById('thundervolume'); //thunder sound slider
   const thundersound = document.getElementById('thundersound');  //thunder sound


   const watervolume = document.getElementById('watervolume'); //water sound slider
   const watersound = document.getElementById('watersound');  //water sound


   const windvolume = document.getElementById('windvolume'); //wind sound slider
   const windsound = document.getElementById('windsound');  //wind sound


   const firevolume = document.getElementById('firevolume'); //fire sound slider
   const firesound = document.getElementById('firesound');  //fire sound


   const allAudios = [birdsound,rainsound,wavesound,windchimesound,forestsound,thundersound, watersound, windsound, firesound];                        //add the sound in this
   allAudios.forEach(audio => audio.loop = true);

   let mainslider = parseFloat(mainvolume.value);              //declare the sounds sliders
   let birdslider = parseFloat(birdvolume.value);
   let rainslider = parseFloat(rainvolume.value);
   let waveslider = parseFloat(wavevolume.value);
   let windchimeslider = parseFloat(windchimevolume.value);
   let forestslider = parseFloat(forestvolume.value);
   let thunderslider = parseFloat(thundervolume.value);
   let waterslider = parseFloat(watervolume.value);
   let windslider = parseFloat(windvolume.value);
   let fireslider = parseFloat(firevolume.value);

   let isPaused = true;
  


    function applysound() {                                             // Apply volumes
      birdsound.volume = mainslider * birdslider;
      rainsound.volume = mainslider * rainslider;
      wavesound.volume = mainslider * waveslider;
      windchimesound.volume = mainslider * windchimeslider;
      forestsound.volume = mainslider * forestslider;
      thundersound.volume = mainslider * thunderslider;
      watersound.volume = mainslider * waterslider;
      windsound.volume = mainslider * windslider;
      firesound.volume = mainslider * fireslider;
    }


    Masterbutton.addEventListener('click', () => {   //play and pause audio when clicked with image change
      if (isPaused) {
        allAudios.forEach(audio => audio.play());
        icon.src = "images/pause.png";
      } else {
        allAudios.forEach(audio => audio.pause());
        icon.src = "images/play.png";
      }
      isPaused = !isPaused;
    });



  mainvolume.addEventListener('input', () => {        // Master volume affects all sounds
    mainslider = parseFloat(mainvolume.value);
   applysound();
  });

  birdvolume.addEventListener('input', () => {      // Bird sound's own volume
      birdslider = parseFloat(birdvolume.value);
     applysound();
    });

  rainvolume.addEventListener('input', () => {      // rain sound's own volume
      rainslider = parseFloat(rainvolume.value);
     applysound();
    });

  wavevolume.addEventListener('input', () => {      // wave sound's own volume
      waveslider = parseFloat(wavevolume.value);
     applysound();
    });


  windchimevolume.addEventListener('input', () => {      // windchime sound's own volume
      windchimeslider = parseFloat(windchimevolume.value);
     applysound();
    });


  forestvolume.addEventListener('input', () => {      // forest sound's own volume
      forestslider = parseFloat(forestvolume.value);
     applysound();
    });


    thundervolume.addEventListener('input', () => {      // thunder sound's own volume
      thunderslider = parseFloat(thundervolume.value);
     applysound();
    });


    watervolume.addEventListener('input', () => {      // water sound's own volume
      waterslider = parseFloat(watervolume.value);
     applysound();
    });


    windvolume.addEventListener('input', () => {      // wind sound's own volume
      windslider = parseFloat(windvolume.value);
     applysound();
    });


    firevolume.addEventListener('input', () => {      // fire sound's own volume
      fireslider = parseFloat(firevolume.value);
     applysound();
    });

    // Initial volume setup
 applysound();
