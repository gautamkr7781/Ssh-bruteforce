function calculateRisk(attempts, timeGap, failures) {
  let score = 0;

  if (attempts > 5) score += 40;
  if (timeGap < 3) score += 30;
  if (failures > 3) score += 30;

  return score;
}

function classify(score) {
  if (score > 70) return "Brute Force";
  if (score > 40) return "Suspicious";
  return "Normal";
}

module.exports = { calculateRisk, classify };