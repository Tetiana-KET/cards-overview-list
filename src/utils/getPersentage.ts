export const getPercentage = (used: number, max: number): number => {
  return Math.floor((used / max) * 100);
};
