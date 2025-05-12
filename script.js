function firstWord(s) {
  // Trim leading spaces, then split and return first segment
  s = s.trim();
  const index = s.indexOf(' ');
  if (index === -1) return s;
  return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
