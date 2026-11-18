import type { Device } from '../types/device';

const key = import.meta.env.VITE_STORAGE_KEY;
export function saveDevices(devices: readonly Device[]): void {
  localStorage.setItem(key, JSON.stringify(devices));
}

export function loadDevices(): Device[] | null {
  const text = localStorage.getItem(key);
  if (text === null) return null;
  try {
    const data: unknown = JSON.parse(text);
    if (Array.isArray(data) && data.every(isDevice)) return data;
  } catch {}
  return null;
}

function isDevice(x: unknown): x is Device {
  if (typeof x !== 'object' || x === null) return false;

  const d = x as Record<string, unknown>;
  return (
    typeof d.id === 'number' &&
    typeof d.code === 'string' &&
    typeof d.room === 'string' &&
    typeof d.broken === 'boolean'
  );
}
