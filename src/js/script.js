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
















