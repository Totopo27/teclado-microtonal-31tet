// js/app.js
// Inicialización y gestión de eventos para 31-TET

document.addEventListener('DOMContentLoaded', function() {
  // Generar teclado al cargar
  generateKeyboard();
  
  // Controles de octava
  document.getElementById('octave-up').addEventListener('click', () => {
    currentOctave = Math.min(currentOctave + 1, 2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('octave-down').addEventListener('click', () => {
    currentOctave = Math.max(currentOctave - 1, -2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('reset-octave').addEventListener('click', () => {
    currentOctave = 0;
    document.getElementById('current-octave').textContent = 0;
  });

  // Selector de escala
  document.getElementById('scale-selector').addEventListener('change', (e) => {
    const selectedScale = e.target.value;
    
    if (combineMode) {
      // En modo combinación, agregar a la lista si no es 'none'
      if (selectedScale !== 'none') {
        combinedScales.add(selectedScale);
        updateCombinedScalesList();
        // Resetear el selector para poder agregar más
        e.target.value = 'none';
      }
    } else {
      // En modo normal, PRIMERO limpiar todo, LUEGO cambiar la escala
      currentScale = selectedScale;
      combinedScales.clear();
      updateCombinedScalesList();
    }
    
    // Siempre actualizar la visualización después de cambiar
    updateScaleDisplay();
  });

  // Checkbox de combinación de escalas
  document.getElementById('combine-scales').addEventListener('change', (e) => {
    combineMode = e.target.checked;
    const combinationPanel = document.getElementById('scale-combination');
    
    if (combineMode) {
      combinationPanel.style.display = 'block';
      // Si hay una escala seleccionada, agregarla a las combinadas
      if (currentScale !== 'none') {
        combinedScales.add(currentScale);
      }
    } else {
      combinationPanel.style.display = 'none';
      // Al desactivar, mantener solo la última escala como actual
      if (combinedScales.size > 0) {
        currentScale = Array.from(combinedScales).pop();
        document.getElementById('scale-selector').value = currentScale;
      }
      combinedScales.clear();
    }
    
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Botón de limpiar escalas
  document.getElementById('clear-scales').addEventListener('click', () => {
    combinedScales.clear();
    currentScale = 'none';
    document.getElementById('scale-selector').value = 'none';
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // ============================================
  // SOPORTE COMPLETO DE TECLADO QWERTY PARA 31-TET
  // ============================================
  
  // Mapeo completo para las 31 notas de la octava baja
  // Distribución: 4 filas del teclado QWERTY
  const keyMap = {
    // Fila 1 (números): Notas 0-9
    '1': '0b',   // Do (0)
    '2': '1b',   // Do+ (1)
    '3': '2b',   // Do# (2)
    '4': '3b',   // Reb (3)
    '5': '4b',   // Re- (4)
    '6': '5b',   // Re (5)
    '7': '6b',   // Re+ (6)
    '8': '7b',   // Re# (7)
    '9': '8b',   // Mib (8)
    '0': '9b',   // Mi- (9)
    
    // Fila 2 (QWERTY): Notas 10-19
    'q': '10b',  // Mi (10)
    'w': '11b',  // Mi+ (11)
    'e': '12b',  // Fa- (12)
    'r': '13b',  // Fa (13)
    't': '14b',  // Fa+ (14)
    'y': '15b',  // Fa# (15)
    'u': '16b',  // Solb (16)
    'i': '17b',  // Sol- (17)
    'o': '18b',  // Sol (18)
    'p': '19b',  // Sol+ (19)
    
    // Fila 3 (ASDFGH): Notas 20-29
    'a': '20b',  // Sol# (20)
    's': '21b',  // Lab (21)
    'd': '22b',  // La- (22)
    'f': '23b',  // La (23)
    'g': '24b',  // La+ (24)
    'h': '25b',  // La# (25)
    'j': '26b',  // Sib (26)
    'k': '27b',  // Si- (27)
    'l': '28b',  // Si (28)
    'ñ': '29b',  // Si+ (29)
    ';': '29b',  // Si+ (29) - alternativa para teclados ingleses
    
    // Fila 4 (ZXCV): Nota 30
    'z': '30b'   // Do- (30)
  };

  // Teclas especiales para controles
  const controlKeys = {
    'ArrowUp': 'octave-up',      // Flecha arriba: +8va
    'ArrowDown': 'octave-down',  // Flecha abajo: -8va
    ' ': 'reset-octave'          // Barra espaciadora: Reset octava
  };

  // Set para rastrear teclas presionadas (evitar repetición)
  const pressedKeys = new Set();

  // Evento keydown para tocar notas y controles
  document.addEventListener('keydown', (e) => {
    // Prevenir comportamiento por defecto de las flechas y espacio
    if (controlKeys[e.key]) {
      e.preventDefault();
    }

    // Manejar controles de octava
    if (controlKeys[e.key] && !pressedKeys.has(e.key)) {
      pressedKeys.add(e.key);
      const buttonId = controlKeys[e.key];
      document.getElementById(buttonId).click();
      
      // Feedback visual en el botón
      const button = document.getElementById(buttonId);
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
      return;
    }

    // Manejar notas musicales
    const key = e.key.toLowerCase();
    if (keyMap[key] && !pressedKeys.has(key)) {
      pressedKeys.add(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        playNote(config);
      }
    }
  });

  // Evento keyup para detener notas
  document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    
    // Limpiar teclas de control presionadas
    if (controlKeys[e.key]) {
      pressedKeys.delete(e.key);
      return;
    }
    
    // Detener notas musicales
    if (keyMap[key]) {
      pressedKeys.delete(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        stopNote(config);
      }
    }
  });

  // Mostrar ayuda de teclado al inicio
  showKeyboardHelp();
});

// Función para mostrar ayuda de teclado
function showKeyboardHelp() {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║          CONTROLES DE TECLADO QWERTY - 31-TET            ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  🎹 OCTAVA BAJA (31 notas completas):                    ║
║                                                          ║
║  Fila 1-0:  1 2 3 4 5 6 7 8 9 0  → Notas 0-9            ║
║            Do Do+ Do# Reb Re- Re Re+ Re# Mib Mi-        ║
║                                                          ║
║  Fila Q-P:  Q W E R T Y U I O P  → Notas 10-19          ║
║            Mi Mi+ Fa- Fa Fa+ Fa# Solb Sol- Sol Sol+     ║
║                                                          ║
║  Fila A-Ñ:  A S D F G H J K L Ñ  → Notas 20-29          ║
║            Sol# Lab La- La La+ La# Sib Si- Si Si+       ║
║                                                          ║
║  Fila Z:    Z                    → Nota 30               ║
║            Do-                                           ║
║                                                          ║
║  🎚️ CONTROLES:                                           ║
║  ↑ Flecha Arriba   → +8va (subir octava)                ║
║  ↓ Flecha Abajo    → -8va (bajar octava)                ║
║  Espacio           → Reset octava                        ║
║                                                          ║
║  💡 CONSEJO: Mantén varias teclas presionadas            ║
║     simultáneamente para crear acordes!                  ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
  `);
}