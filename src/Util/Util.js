export function toEnglishDigits(str) {
  if (!str) return str;
  const regex1 = /[\u0660-\u0669]/g;
  const regex2 = /[\u06f0-\u06f9]/g;
  return str
    .replace(regex1, function (c) {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(regex2, function (c) {
      return c.charCodeAt(0) - 0x06f0;
    });
}

export function toPersianDigits(str) {
  if (!str) return str;
  const regex = /[0-9]/g;
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(regex, function (w) {
    return id[+w];
  });
}
