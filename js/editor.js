import { state } from './state.js';
import { render, registerEffect } from './renderer.js';
import './uploader.js';
import exposure from './  effects/exposure.js';
import brightness from './  effects/brightness.js';
import contrast from './  effects/contrast.js';
import saturation from './  effects/saturation.js';

// Register effects
registerEffect(exposure);
registerEffect(brightness);
registerEffect(contrast);
registerEffect(saturation);

console.log('Editor Loaded');

// Wire up sliders
const controls = document.querySelectorAll('.control input[type="range"]');
controls.forEach(input => {
    const label = input.parentElement.querySelector('label');
    const effectName = label.textContent.toLowerCase();
    
    input.min = -100;
    input.max = 100;
    input.value = 0;
    
    input.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        
        // Map effect names to state properties
        if (effectName === 'exposure' || effectName === 'brightness' || 
            effectName === 'contrast' || effectName === 'saturation') {
            state.effects[effectName] = value;
        }
        
        if (state.source) {
            render();
        }
    });
});

// Export button
const exportBtn = document.querySelector('.primary');
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        if (!state.canvas) {
            alert('Please upload an image or video first');
            return;
        }
        
        const link = document.createElement('a');
        link.href = state.canvas.toDataURL('image/png');
        link.download = `visionfx-export-${Date.now()}.png`;
        link.click();
    });
}

// Clear button
const clearBtn = document.querySelector('.tool-group button:nth-child(2)');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        state.source = null;
        state.canvas = null;
        state.ctx = null;
        
        Object.keys(state.effects).forEach(key => {
            state.effects[key] = 0;
        });
        
        controls.forEach(input => input.value = 0);
        
        const preview = document.getElementById('preview');
        if (preview) {
            preview.innerHTML = '<div class="preview-placeholder"><h2>Drop an image or video</h2><p>Preview will appear here.</p></div>';
        }
    });
}

// Reset button
const resetBtn = document.querySelector('.tool-group button:nth-child(3)');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        Object.keys(state.effects).forEach(key => {
            state.effects[key] = 0;
        });
        
        controls.forEach(input => input.value = 0);
        
        if (state.source) {
            render();
        }
    });
}
