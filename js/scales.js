// js/scales.js
// Escalas y modos para 31-TET

// Escalas principales del sistema 31-TET
const scales = {
  // Ninguna escala
  none: [],
  
  // Modos Griegos adaptados a 31-TET
  ionian: [0, 5, 10, 13, 18, 23, 28],        // Jónico (Mayor)
  dorian: [0, 5, 8, 13, 18, 23, 26],         // Dórico
  phrygian: [0, 3, 8, 13, 18, 21, 26],       // Frigio
  lydian: [0, 5, 10, 15, 18, 23, 28],        // Lidio
  mixolydian: [0, 5, 10, 13, 18, 23, 26],    // Mixolidio
  aeolian: [0, 5, 8, 13, 18, 21, 26],        // Eólico (Menor natural)
  locrian: [0, 3, 8, 13, 16, 21, 26],        // Locrio
  
  // Escalas especiales adaptadas a 31-TET
  chromatic: [
    // Escala cromática completa de 31 notas
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ],
  
  wholeTone: [0, 5, 10, 15, 20, 25],          // Tonos enteros
  
  // Escalas pentatónicas
  pentatonicMajor: [0, 5, 10, 18, 23],        // Pentatónica mayor
  pentatonicMinor: [0, 8, 13, 18, 26],        // Pentatónica menor
  
  // Escala blues
  blues: [0, 8, 13, 16, 18, 26],              // Escala blues de 6 notas
  
  // Escala armónica menor
  harmonicMinor: [0, 5, 8, 13, 18, 21, 28],   // Armónica menor
  
  // Escalas adicionales microtonales
  quarterTone: [0, 1, 5, 6, 10, 11, 15, 16, 18, 19, 23, 24, 28, 29], // Cuartos de tono
  
  // Escalas experimentales 31-TET
  heptonic1: [0, 4, 9, 13, 17, 22, 26],       // Escala heptáfona experimental 1
  heptonic2: [0, 6, 11, 13, 19, 24, 28],      // Escala heptáfona experimental 2
  
  // Escalas basadas en divisiones específicas de 31-TET
  fiveTone1: [0, 6, 12, 19, 25],              // Escala de 5 tonos 1
  fiveTone2: [0, 7, 14, 21, 28],              // Escala de 5 tonos 2
  
  // Escalas simétricas
  symmetric8: [0, 4, 8, 11, 15, 19, 23, 27],  // Escala simétrica octatónica
  symmetric9: [0, 3, 7, 10, 14, 17, 21, 24, 28], // Escala simétrica de 9 notas
  
  // Escalas justas aproximadas en 31-TET
  justMajor: [0, 5, 10, 13, 18, 23, 28],      // Mayor justa aproximada
  justMinor: [0, 5, 8, 13, 18, 21, 26],       // Menor justa aproximada
};

// Nombres legibles de las escalas
const scaleNames = {
  none: 'Ninguna',
  ionian: 'Jónico (Mayor)',
  dorian: 'Dórico',
  phrygian: 'Frigio',
  lydian: 'Lidio',
  mixolydian: 'Mixolidio',
  aeolian: 'Eólico (Menor)',
  locrian: 'Locrio',
  chromatic: 'Cromática (31 notas)',
  wholeTone: 'Tonos Enteros',
  pentatonicMajor: 'Pentatónica Mayor',
  pentatonicMinor: 'Pentatónica Menor',
  blues: 'Blues',
  harmonicMinor: 'Armónica Menor',
  quarterTone: 'Cuartos de Tono',
  heptonic1: 'Heptáfona Experimental 1',
  heptonic2: 'Heptáfona Experimental 2',
  fiveTone1: 'Cinco Tonos 1',
  fiveTone2: 'Cinco Tonos 2',
  symmetric8: 'Simétrica Octatónica',
  symmetric9: 'Simétrica Eneatónica',
  justMajor: 'Mayor Justa',
  justMinor: 'Menor Justa'
};

// Información adicional sobre las escalas
const scaleInfo = {
  ionian: {
    intervals: ['1', '9/8', '5/4', '4/3', '3/2', '5/3', '15/8'],
    description: 'Modo mayor tradicional, brillante y alegre'
  },
  dorian: {
    intervals: ['1', '9/8', '6/5', '4/3', '3/2', '5/3', '9/5'],
    description: 'Modo menor con sexta mayor, suave y nostálgico'
  },
  phrygian: {
    intervals: ['1', '16/15', '6/5', '4/3', '3/2', '8/5', '9/5'],
    description: 'Modo menor con segunda menor, exótico y misterioso'
  },
  lydian: {
    intervals: ['1', '9/8', '5/4', '45/32', '3/2', '5/3', '15/8'],
    description: 'Modo mayor con cuarta aumentada, etéreo y flotante'
  },
  mixolydian: {
    intervals: ['1', '9/8', '5/4', '4/3', '3/2', '5/3', '9/5'],
    description: 'Modo mayor con séptima menor, bluesy y relajado'
  },
  aeolian: {
    intervals: ['1', '9/8', '6/5', '4/3', '3/2', '8/5', '9/5'],
    description: 'Modo menor natural, melancólico y expresivo'
  },
  locrian: {
    intervals: ['1', '16/15', '6/5', '4/3', '64/45', '8/5', '9/5'],
    description: 'Modo menor con quinta disminuida, tenso y disonante'
  }
};

// Función para obtener las notas de una escala en una octava específica
function getScaleNotes(scaleName, octave = 0) {
  const scalePattern = scales[scaleName] || [];
  return scalePattern.map(note => note + (octave * 31));
}

// Función para verificar si una nota está en una escala
function isNoteInScale(noteIndex, scaleName) {
  const scalePattern = scales[scaleName] || [];
  const noteInOctave = noteIndex % 31;
  return scalePattern.includes(noteInOctave);
}

// Función para obtener el grado de una nota en una escala
function getScaleDegree(noteIndex, scaleName) {
  const scalePattern = scales[scaleName] || [];
  const noteInOctave = noteIndex % 31;
  const degree = scalePattern.indexOf(noteInOctave);
  return degree >= 0 ? degree + 1 : null;
}

// Función para transponer una escala
function transposeScale(scaleName, semitones) {
  const scalePattern = scales[scaleName] || [];
  return scalePattern.map(note => (note + semitones) % 31);
}

// Función para generar acordes a partir de una escala
function generateChord(scaleName, root = 0, chordType = 'triad') {
  const scalePattern = scales[scaleName] || [];
  const rootIndex = scalePattern.indexOf(root % 31);
  
  if (rootIndex === -1) return [];
  
  switch (chordType) {
    case 'triad':
      return [
        scalePattern[rootIndex],
        scalePattern[(rootIndex + 2) % scalePattern.length],
        scalePattern[(rootIndex + 4) % scalePattern.length]
      ];
    case 'seventh':
      return [
        scalePattern[rootIndex],
        scalePattern[(rootIndex + 2) % scalePattern.length],
        scalePattern[(rootIndex + 4) % scalePattern.length],
        scalePattern[(rootIndex + 6) % scalePattern.length]
      ];
    case 'ninth':
      return [
        scalePattern[rootIndex],
        scalePattern[(rootIndex + 2) % scalePattern.length],
        scalePattern[(rootIndex + 4) % scalePattern.length],
        scalePattern[(rootIndex + 6) % scalePattern.length],
        scalePattern[(rootIndex + 1) % scalePattern.length]
      ];
    default:
      return [scalePattern[rootIndex]];
  }
}

// Exportar para uso en otros módulos (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    scales,
    scaleNames,
    scaleInfo,
    getScaleNotes,
    isNoteInScale,
    getScaleDegree,
    transposeScale,
    generateChord
  };
}
