// Data

export const Testing = () => {
  const data = [
    1440, 2580, 1613, 450, 359, 874, 756, 2587, 1195, 69858, 5778, 8561, 438, 8467, 1484, 691, 792,
    2599, 1489, 1348, 1956, 1378, 1204, 1440, 2580, 1613, 450, 359,
  ];

  // Hitung rata-rata
  const xBar = data.reduce((sum, value) => sum + value, 0) / data.length;

  // Hitung (x - xBar)^3 untuk setiap nilai x
  const result = data.map((x) => Math.pow(x - xBar, 4));

  // Hitung jumlah semua nilai dalam result
  const sumOfResult = result.reduce((sum, value) => sum + value, 0);

  console.log('Sum of (x - xBar)^4:', sumOfResult);
};
