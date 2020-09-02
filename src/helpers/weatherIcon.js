const icons = {
  [2]: '11d',
  [3]: '09d',
  [6]: '13d',
  [7]: '50d',
  [5]: rainFn,
  [8]: dayNightFn,
};

export function rainFn(id, icon) {
  if (Number(id) >= 520) return '09d';
  if (Number(id) === 511) return '13d';

  return '10d';
}

export function dayNightFn(id, icon) {
  return icon;
}

export function mapIcon({ icon, id }) {
  if (!icon) return '';

  const [groupId] = String(id).split('');
  let iconId = icons[groupId];

  if (typeof iconId === 'function') {
    iconId = icons[groupId](id, icon);
  }

  return iconId;
}
