const birdimage = document.getElementById('birdvolume');      //bird image fade
    const bird1 = document.getElementById('bird1');
    const bird2 = document.getElementById('bird2');

    birdimage.addEventListener('input', () => {
        const value = parseFloat(birdimage.value);
        bird1.style.opacity = 1 - value;
        bird2.style.opacity = value;
    });
    bird1.style.opacity = 1;
    bird2.style.opacity = 0;

    
    const rainimage = document.getElementById('rainvolume')    //rain image fade
    const rain1 = document.getElementById('rain1')
    const rain2 = document.getElementById('rain2')
     
    rainimage.addEventListener('input', () => {
        const value = parseFloat(rainimage.value);
        rain1.style.opacity = 1 - value;
        rain2.style.opacity = value;
    });
    rain1.style.opacity = 1;
    rain2.style.opacity = 0;


    const waveimage = document.getElementById('wavevolume')    //wave image fade
    const wave1 = document.getElementById('wave1')
    const wave2 = document.getElementById('wave2')
     
    waveimage.addEventListener('input', () => {
        const value = parseFloat(waveimage.value);
        wave1.style.opacity = 1 - value;
        wave2.style.opacity = value;
    });
    wave1.style.opacity = 1;
    wave2.style.opacity = 0;


    const thunderimage = document.getElementById('thundervolume')    //thunder image fade
    const thunder1 = document.getElementById('thunder1')
    const thunder2 = document.getElementById('thunder2')
     
    thunderimage.addEventListener('input', () => {
        const value = parseFloat(thunderimage.value);
        thunder1.style.opacity = 1 - value;
        thunder2.style.opacity = value;
    });
    thunder1.style.opacity = 1;
    thunder2.style.opacity = 0;


    const waterimage = document.getElementById('watervolume')    //water image fade
    const water1 = document.getElementById('water1')
    const water2 = document.getElementById('water2')
     
    waterimage.addEventListener('input', () => {
        const value = parseFloat(waterimage.value);
        water1.style.opacity = 1 - value;
        water2.style.opacity = value;
    });
    water1.style.opacity = 1;
    water2.style.opacity = 0;


    const windchimeimage = document.getElementById('windchimevolume')    //windchime image fade
    const windchime1 = document.getElementById('windchime1')
    const windchime2 = document.getElementById('windchime2')
     
    windchimeimage.addEventListener('input', () => {
        const value = parseFloat(windchimeimage.value);
        windchime1.style.opacity = 1 - value;
        windchime2.style.opacity = value;
    });
    windchime1.style.opacity = 1;
    windchime2.style.opacity = 0;


    const forestimage = document.getElementById('forestvolume')    //forest image fade
    const forest1 = document.getElementById('forest1')
    const forest2 = document.getElementById('forest2')
     
    forestimage.addEventListener('input', () => {
        const value = parseFloat(forestimage.value);
        forest1.style.opacity = 1 - value;
        forest2.style.opacity = value;
    });
    forest1.style.opacity = 1;
    forest2.style.opacity = 0;


    const windimage = document.getElementById('windvolume')    //wind image fade
    const wind1 = document.getElementById('wind1')
    const wind2 = document.getElementById('wind2')
     
    windimage.addEventListener('input', () => {
        const value = parseFloat(windimage.value);
        wind1.style.opacity = 1 - value;
        wind2.style.opacity = value;
    });
    wind1.style.opacity = 1;
    wind2.style.opacity = 0;


    const fireimage = document.getElementById('firevolume')    //fire image fade
    const fire1 = document.getElementById('fire1')
    const fire2 = document.getElementById('fire2')
     
    fireimage.addEventListener('input', () => {
        const value = parseFloat(fireimage.value);
        fire1.style.opacity = 1 - value;
        fire2.style.opacity = value;
    });
    fire1.style.opacity = 1;
    fire2.style.opacity = 0;