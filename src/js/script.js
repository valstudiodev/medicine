"use strict"

import { initInputMode } from './inputMode';
import { initDropdowns } from './dropdownMenu';
import { initEffects } from './effects';
import { formUtils } from './formUtils';
import { initUtils } from './initUtils';
import { initLoader } from './initAnimation';
// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   initInputMode()
   initLoader()
   initUtils()
   // initDropdowns()
   initEffects()
   // movingElements()
   // formUtils()
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initApp);
} else {
   initApp();
}








const input = document.getElementById('appointment');
const dropdown = document.getElementById('slots-dropdown');
const grid = document.getElementById('slots-grid');
const hiddenInput = document.getElementById('final-time');

// 1. Генеруємо слоти з 09:00 до 18:00 кожні 30 хв
const startTime = 9 * 60; // 09:00 в хвилинах
const endTime = 18 * 60;   // 18:00
const step = 30;

for (let time = startTime; time <= endTime; time += step) {
   const hours = Math.floor(time / 60).toString().padStart(2, '0');
   const minutes = (time % 60).toString().padStart(2, '0');
   const timeString = `${hours}:${minutes}`;

   const btn = document.createElement('button');
   btn.type = 'button';
   btn.className = 'slot-btn';
   btn.textContent = timeString;

   // Обробка вибору
   btn.onclick = () => {
      input.value = timeString; // Візуально в інпут
      hiddenInput.value = timeString; // Для відправки форми
      dropdown.style.display = 'none'; // Закрити вікно
   };

   grid.appendChild(btn);
}

// 2. Відкриваємо при фокусі
input.onfocus = () => {
   dropdown.style.display = 'block';
};

// 3. Закриваємо, якщо клікнули поза межами
document.addEventListener('click', (e) => {
   if (!e.target.closest('.booking-container')) {
      dropdown.style.display = 'none';
   }
});










