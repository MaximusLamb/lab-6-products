// import instruments from 

// const list = document.getElementById('instruments');



// for (let i = 0; i < instruments.length; i++) {
//     const instrument = instruments[i];
//     const element = renderInstruments(instrument);
//     list.appendChild(element);
// }

const trumpet = {
    id: 'trumpet',
    category: 'brass',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimelinemusic.com%2Fproduct%2Fnew-rental-contract-for-trumpet-introductory-offer%2F&psig=AOvVaw0Il61_G7nqW4Te49CtBeXo&ust=1586296998394000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDykofn1OgCFQAAAAAdAAAAABAF',
    value: '1',
    description: 'Sort of works. Might\'ve looked like the trumpet in the picture.'
    price: 5
};

const drumkit {
    id: 'drums',
    category: 'drums',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zzounds.com%2Fitem--DRUPDCM2217&psig=AOvVaw0DBb1_qnm3NRJWdtT6tJhJ&ust=1586297535286000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDemfro1OgCFQAAAAAdAAAAABAE',
    value: '2',
    description: 'Ruined beyond repair.  Basically just garbage. Not the same drums in the picture.'
    price: 10
};

const guitar {
    id: 'guitar',
    category: 'strings',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gear4music.com%2Fus%2Fen%2FElectric_Guitars%2FTypes&psig=AOvVaw1t9JZ_USCu7Wp5OptxZWek&ust=1586297603288000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj7zprp1OgCFQAAAAAdAAAAABAG',
    value: '3',
    description: 'Definitely was smashed at the end of a concert.  Not the same guitar as the guitar in the picture.'
    price: 8
};

const bass {
    id: 'bass',
    category: 'bass',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Freverb.com%2Fp%2Fsquier-vintage-modified-jazz-bass-70s&psig=AOvVaw2TG5qKDiD1E3F_BG4uigKO&ust=1586297639424000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDn6Kvp1OgCFQAAAAAdAAAAABAK',
    value '4',
    description: 'Looks like its been in the bottom of a lake for 20 years.  Terrible condition.  Not the same bass in the picture.'
    price: 8
};

const triangle {
    id: 'triangle',
    category: 'other',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.long-mcquade.com%2F79466%2FDrums%2FConcert---Marching-Percussion%2FRemo%2FCrown-Percussion-Triangle---Chrome.htm&psig=AOvVaw2mHju1i6Alh-Y9VUf3ZXdL&ust=1586297693039000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjDq8bp1OgCFQAAAAAdAAAAABAD',
    value: '5',
    description: 'Missing two of the three sides.  Just one metal bar.  Not the same triangle in the picture.'
    price: .50
};

const synth {
    id: 'synth',
    category: 'keys',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sweetwater.com%2Fstore%2Fdetail%2FJupiterX--roland-jupiter-by-synthesizer&psig=AOvVaw0CMHzQvuv9IeVcUDp9gJYY&ust=1586297721555000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDV6tbp1OgCFQAAAAAdAAAAABAD',
    value: '6',
    description: 'Missing all but one key.  Not the same synth as the picture.'
    price: 1
};

const flute {
    id: 'flute',
    category: 'woodwind',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMerano-Nickel-Silver-Student-Beginners%2Fdp%2FB00CFTRCZK&psig=AOvVaw2nhS1RB_ZS_E0sS_VVr9Qt&ust=1586297826457000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiw-4bq1OgCFQAAAAAdAAAAABAD',
    value: '7',
    description: 'It\'s a broken piece of driftwood.  Not actually a flute.,
    price: 3
};

const instruments = [
    trumpet,
    drums,
    guitar,
    bass,
    triangle,
    synth,
    flute
];

export default instruments;