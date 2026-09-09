/**
 * Boot log lines — systemd-style.
 * Belal: replace the `text` values with your own lines.
 * The animation code only cares about `status` ('OK' | 'WARN') and `text`.
 *
 * Optional: `delay` (ms) to pause *before* this line prints.
 * Default delay between lines is ~80ms; use a longer value for dramatic pauses.
 */
export const bootLines = [
  { status: 'OK',   text: 'Starting kernel...' },
  { status: 'OK',   text: 'Loading initial ramdisk...' },
  { status: 'OK',   text: 'Reached target Local File Systems.' },
  { status: 'OK',   text: 'Started systemd-journald.service.' },
  { status: 'OK',   text: 'Mounting /dev/sda2 on /home...' },
  { status: 'OK',   text: 'Started NetworkManager.service.' },
  { status: 'WARN', text: 'Battery level at 18% — connect charger.' },
  { status: 'OK',   text: 'Started sway.service — window manager.' },
  { status: 'OK',   text: 'Loaded waybar — status bar.' },
  { status: 'OK',   text: 'Loaded foot — terminal emulator.' },
  { status: 'OK',   text: 'Configuring firewall rules...' },
  { status: 'OK',   text: 'Starting SOC monitoring daemon...' },
  { status: 'OK',   text: 'Loading threat intelligence feeds...' },
  { status: 'WARN', text: '3 suspicious connections flagged for review.' },
  { status: 'OK',   text: 'Starting IDS/IPS modules...' },
  { status: 'OK',   text: 'Log aggregation pipeline ready.' },
  { status: 'OK',   text: 'All services operational.' },
  { status: 'OK',   text: 'Welcome, Belal.', delay: 300 },
];
