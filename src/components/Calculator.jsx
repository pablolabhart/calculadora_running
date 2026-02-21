import { createSignal } from 'solid-js';

export default function Calculator() {
  const [distance, setDistance] = createSignal('');
  const [time, setTime] = createSignal('');
  const [avgHr, setAvgHr] = createSignal('');
  const [age, setAge] = createSignal('');
  const [maxHr, setMaxHr] = createSignal('');
  const [weeklyKm, setWeeklyKm] = createSignal('');

  const [result, setResult] = createSignal(null);
  const [debugInfo, setDebugInfo] = createSignal(null);
  const [showDebug, setShowDebug] = createSignal(false);

  const calculate = (e) => {
    e.preventDefault();

    // --- Calculation Logic ---
    const ageVal = parseInt(age(), 10);
    const calculatedMaxHr = maxHr() ? parseInt(maxHr(), 10) : 207 - 0.7 * ageVal;
    const intensity = parseInt(avgHr(), 10) / calculatedMaxHr;
    const weeklyKmVal = weeklyKm() ? parseFloat(weeklyKm()) : 0;

    let tlim;

    if (weeklyKmVal <= 15) {
      if (intensity > 0.9) {
        tlim = 25;
      } else if (intensity >= 0.8) {
        tlim = 50;
      } else {
        tlim = 100;
      }
    } else if (weeklyKmVal <= 22) {
      if (intensity > 0.9) {
        tlim = 35;
      } else if (intensity >= 0.8) {
        tlim = 75;
      } else {
        tlim = 150;
      }
    } else { // weeklyKmVal > 22
      if (intensity > 0.9) {
        tlim = 45;
      } else if (intensity >= 0.8) {
        tlim = 100;
      } else {
        tlim = 200;
      }
    }

    const timeVal = parseInt(time(), 10);
    const coefficient = tlim / timeVal;
    const finalDistance = parseFloat(distance()) * coefficient;

    setResult(finalDistance.toFixed(2));
    setDebugInfo({
      calculatedMaxHr,
      intensity,
      weeklyKmVal,
      tlim,
      coefficient,
      finalDistance,
    });
  };

  return (
    <div>
      <form class="calculator-form" onSubmit={calculate}>
        <div class="form-grid">
          <div class="form-group">
            <label for="distance">Distancia (km)</label>
            <input type="number" step="any" id="distance" required value={distance()} onInput={(e) => setDistance(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="time">Tiempo (min)</label>
            <input type="number" id="time" required value={time()} onInput={(e) => setTime(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="avgHr">Frecuencia Cardíaca Media (lpm)</label>
            <input type="number" id="avgHr" required value={avgHr()} onInput={(e) => setAvgHr(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="age">Edad</label>
            <input type="number" id="age" required value={age()} onInput={(e) => setAge(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="maxHr">Frecuencia Cardíaca Máxima (opcional)</label>
            <input type="number" id="maxHr" value={maxHr()} onInput={(e) => setMaxHr(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="weeklyKm">Kilómetros semanales (opcional)</label>
            <input type="number" step="any" id="weeklyKm" value={weeklyKm()} onInput={(e) => setWeeklyKm(e.target.value)} />
          </div>
        </div>
        <button type="submit" class="calculate-button">Calcular</button>
      </form>

      {result() && (
        <div class="results">
          <h2>Distancia Máxima en Carrera:</h2>
          <p class="final-result">{result()} km</p>
          <button class="debug-button" onClick={() => setShowDebug(!showDebug())}>
            {showDebug() ? 'Ocultar' : 'Mostrar'} Depuración
          </button>
          {showDebug() && (
            <div class="debug-info">
              <h3>Cálculos Intermedios:</h3>
              <ul>
                <li>FCM Calculada: {debugInfo().calculatedMaxHr.toFixed(2)}</li>
                <li>Intensidad (I): {debugInfo().intensity.toFixed(2)}</li>
                <li>Km Semanales: {debugInfo().weeklyKmVal}</li>
                <li>Tlim: {debugInfo().tlim} min</li>
                <li>Coeficiente: {debugInfo().coefficient.toFixed(2)}</li>
                <li>Distancia Final: {debugInfo().finalDistance.toFixed(2)} km</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
