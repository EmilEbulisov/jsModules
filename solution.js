import { getTriangleArea } from './myMathModule';

// Создаем функцию для вычисления площади треугольника
function calculateTriangleArea(n) {
  const base = (n * n) / 2;
  return getTriangleArea(n, base);
}

// Экспортируем созданную функцию по умолчанию
export default calculateTriangleArea;
