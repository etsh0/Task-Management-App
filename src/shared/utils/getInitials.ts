export const getInitials = (name: string = '') => {
  return name
    .trim()
    .split('')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
};

// trim to remove spaces from first , last of name
// split >> بيقسم الاسم لكلمات في مصفوفه
// filter(Boolean) >> to remove spaces and [null , undefined] from array
// slice(0,2) << first and scound words from array
