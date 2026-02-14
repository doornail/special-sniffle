import {
  LitElement,
  html,
  css
} from 'https://cdn.jsdelivr.net/npm/lit@3/+esm';

// Class-level constants for re-use
const DEFAULT_PRIORITY = '5';
const DEFAULT_ICON = 'mdi:checkbox-blank-outline';
const DEFAULT_CARD_BACKGROUND = 'var(--ha-card-background)';
const DEFAULT_CARD_COLOR = 'var(--ha-card-background)';
const DEFAULT_COMPLETED_COLOR = 'var(--success-color)';
const DEFAULT_ICON_BACKGROUND = 'rgba(128, 128, 128, 0.2)';
const DEFAULT_TEXT_COLOR = 'var(--text-primary-color)';
const DEFAULT_COMPLETED_TEXT_COLOR = 'var(--text-accent-color)';

// Rest of the file is identical - only the import line changed
