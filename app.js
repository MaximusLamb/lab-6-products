import renderInstruments from './renderInstruments.js';
import brokenInstruments from './brokenInstruments.js';

const instrumentContainer = document.getElementById('container');

for (let i = 0; i < brokenInstruments.length; i++) {

    const instrument = brokenInstruments[i];
    const instrumentList = renderInstruments(instrument);
    
    instrumentContainer.appendChild(instrumentList);
}