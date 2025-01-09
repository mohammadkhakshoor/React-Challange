export const generateFibonacci = (count: number) => {
  if (count <= 0) return [];
  const sequence = [0, 1];
  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(1, count);
};
