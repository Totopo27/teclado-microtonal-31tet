# Teclado Microtonal 31-TET

Un teclado hexagonal interactivo para explorar música microtonal en el sistema de temperamento igual de 31 notas por octava (31-TET / 31-EDO).

## Características

- **Disposición hexagonal** de teclas para fácil visualización de intervalos
- **Sistema 31-TET completo**: 2 octavas completas + 14 notas adicionales (76 teclas totales)
- **Visualización de escalas** con resaltado de notas
- **Modo de combinación de escalas** para explorar superposiciones armónicas
- **Modos griegos** adaptados al temperamento 31-TET
- **Escalas especiales**: Cromática, tonos enteros, pentatónicas, blues, armónica menor
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Monitor de polifonía en tiempo real**: 
  - Visualización de todas las notas activas simultáneamente
  - Contador de voces activas
  - Información de frecuencia y octava por cada nota
  - Chips de colores según la octava
  - Orden cronológico de notas pulsadas
- **Información monofónica**: Muestra la última nota tocada
- **Integración con Max/MSP** mediante `window.max.outlet()`
- **Soporte completo de teclado QWERTY** (31 teclas + controles)
- **Diseño responsive** que se adapta a diferentes tamaños de pantalla

## Uso

### Online
Simplemente abre `index.html` en tu navegador web moderno (Chrome, Firefox, Edge, Safari).

### Con Max/MSP
1. Abre el proyecto en Max/MSP
2. Carga el archivo HTML en un objeto `jweb`
3. El teclado enviará mensajes mediante `window.max.outlet(noteValue, noteName, velocity)`

## Escalas incluidas

### Modos Griegos
- **Jónico (Mayor)**: Do-Re-Mi-Fa-Sol-La-Si
- **Dórico**: Do-Re-Mib-Fa-Sol-La-Sib
- **Frigio**: Do-Reb-Mib-Fa-Sol-Lab-Sib
- **Lidio**: Do-Re-Mi-Fa#-Sol-La-Si
- **Mixolidio**: Do-Re-Mi-Fa-Sol-La-Sib
- **Eólico (Menor)**: Do-Re-Mib-Fa-Sol-Lab-Sib
- **Locrio**: Do-Reb-Mib-Fa-Solb-Lab-Sib

### Escalas Especiales
- **Cromática**: Las 31 notas del sistema
- **Tonos Enteros**: 6 notas separadas por tonos enteros
- **Pentatónica Mayor**: 5 notas en modo mayor
- **Pentatónica Menor**: 5 notas en modo menor
- **Blues**: Escala blues de 6 notas
- **Armónica Menor**: Escala armónica menor de 7 notas

## Controles

### Ratón
- **Clic en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación
- **Clic en chip de nota**: Detener nota específica en modo polifonía

### Teclado QWERTY - Octava Baja Completa (31 notas)

#### Notas musicales:
```
┌──────────────────────────────────────────────┐
│ Fila 1-0:  1 2 3 4 5 6 7 8 9 0              │
│           Do Do+ Do# Reb Re- Re Re+ Re# Mib Mi-│
│           (0)(1)(2)(3)(4)(5)(6)(7)(8)(9)    │
├──────────────────────────────────────────────┤
│ Fila Q-P:  Q W E R T Y U I O P              │
│           Mi Mi+ Fa- Fa Fa+ Fa# Solb Sol- Sol Sol+│
│           (10)(11)(12)(13)(14)(15)(16)(17)(18)(19)│
├──────────────────────────────────────────────┤
│ Fila A-Ñ:  A S D F G H J K L Ñ              │
│           Sol# Lab La- La La+ La# Sib Si- Si Si+│
│           (20)(21)(22)(23)(24)(25)(26)(27)(28)(29)│
├──────────────────────────────────────────────┤
│ Fila Z:    Z                                 │
│           Do-                                │
│           (30)                               │
└──────────────────────────────────────────────┘
```

#### Controles de octava:
- **↑ Flecha Arriba**: +8va (subir octava)
- **↓ Flecha Abajo**: -8va (bajar octava)  
- **Barra Espaciadora**: Reset octava a 0

### Controles de interfaz
- **+8va / -8va**: Transponer octavas (también con flechas ↑↓)
- **Reset Octava**: Volver a octava base (también con Espacio)
- **Selector de escala**: Elegir escala o modo
- **Combinar escalas**: Activar modo de superposición de escalas
- **Limpiar escalas**: Resetear visualización de escalas

### Atajos útiles
- Mantén presionadas múltiples teclas para tocar acordes
- Usa las flechas mientras tocas para cambiar de octava en tiempo real
- El espacio te permite volver rápidamente a la octava central

## Teoría del 31-TET

El temperamento igual de 31 notas divide la octava en 31 partes iguales:
- **Razón**: 2^(1/31) ≈ 1.0226
- **Intervalo**: 1200/31 ≈ 38.71 centavos por paso
- **Frecuencia base**: A0 = 27.5 Hz

### Fórmula para calcular frecuencias:
```
f(n) = f₀ × 2^(n/31)
```
Donde:
- `f₀` es la frecuencia base (27.5 Hz)
- `n` es el número de pasos desde la nota base


## Comparación con otros temperamentos

| Intervalo | 12-TET | 31-TET | Justo | Error 31-TET |
|-----------|--------|--------|-------|--------------|
| Tercera Mayor | 400¢ | 387¢ | 386¢ | +1¢ (excelente!) |
| Tercera Menor | 300¢ | 310¢ | 316¢ | -6¢ |
| Quinta Justa | 700¢ | 697¢ | 702¢ | -5¢ (muy bueno) |
| Cuarta Justa | 500¢ | 503¢ | 498¢ | +5¢ |

## Disposición del teclado

- **Octava baja (b)**: valores 70-100 (31 notas)
- **Octava media (m)**: valores 101-131 (31 notas)
- **Octava alta parcial (a)**: valores 132-145 (14 notas)

**Total**: 76 teclas hexagonales

## Compositores que han usado 31-TET

- **Christiaan Huygens** (siglo XVII) - Propuso el sistema
- **Adriaan Fokker** - Constructor del órgano de 31 tonos
- **Joel Mandelbaum** - Compositor y teórico
- **Ivor Darreg** - Experimentador microtonal
- **Easley Blackwood Jr.** - Etudes for Microtonal Piano