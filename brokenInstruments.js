

const trumpet = {
    id: 1,
    name: 'Rusty trumpet',
    category: 'brass',
    image: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products62075-1200x1200-1649647.jpg',  
    value: '1',
    description: 'Sort of works. Might\'ve looked like the trumpet in the picture at one point.',
    price: 5
};

const drumkit = {
    id: 2,
    name: 'Destroyed drums',
    category: 'drums',
    image: 'https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1136796_33909_popup.jpg',
    value: '2',
    description: 'Ruined beyond repair.  Basically just garbage. Not the same drums in the picture.',
    price: 10
};

const guitar = {
    id: 3,
    name: 'Halved guitar',
    category: 'strings',
    image: 'https://d1aeri3ty3izns.cloudfront.net/media/25/251309/1200/preview_2.jpg',
    value: '3',
    description: 'Definitely was smashed at the end of a concert.  Not the same guitar as the guitar in the picture.',
    price: 8
};

const bass = {
    id: 4,
    name: 'Drowned bass',
    category: 'bass',
    image: 'https://images.reverb.com/image/upload/s--hLgzeFps--/f_auto,t_large/v1557248021/gpxirvi4bggpgmzsbrcs.jpg',   
    value: '4',
    description: 'Looks like its been in the bottom of a lake for 20 years.  Terrible condition.  Not the same bass in the picture.',
    price: 8
};

const triangle = {
    id: 5,
    name: '2/3rds missing triangle',
    category: 'other',
    image: 'https://i.pinimg.com/originals/40/70/f5/4070f5286ba0fff1940fe7026f35d606.jpg',    
    value: '5',
    description: 'Missing two of the three sides.  Just one metal bar.  Not the same triangle in the picture.',
    price: .50
};

const synth = {
    id: 6,
    name: 'Mostly missing synth',
    category: 'keys',
    image: 'https://cornermusic.com/images/products/49274.jpg',   
    value: '6',
    description: 'Missing all but one key.  Not the same synth as the picture.',
    price: 1
};

const flute = {
    id: 7,
    name: 'Stick',
    category: 'woodwind',
    image: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products98502-1200x1200-1202834.jpg',   
    value: '7',
    description: 'It\'s a broken piece of driftwood.  Not actually a flute.',
    price: 3
};

const instruments = [
    trumpet,
    drumkit,
    guitar,
    bass,
    triangle,
    synth,
    flute
];

export default instruments;