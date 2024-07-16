// NAMEEN:
// NAMERU:Фильтрация и агрегация данных о продажах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndSummarizeSales`, которая фильтрует массив записей о продажах по минимальной сумме продажи и диапазону дат, а затем суммирует и возвращает общую сумму продаж для отфильтрованных записей.

Функция принимает 4 параметра:
* salesData - массив объектов [{ date: "2024-03-01", amount: 200 }, ...],
* minAmount - минимальная сумма (number),
* startDate - начальная дата (string),
* endDate - дата окончания (string).


Примеры запуска функции:
```javascript
const salesData = [
  { date: "2024-03-01", amount: 200 },
  { date: "2024-03-15", amount: 150 },
  { date: "2024-04-01", amount: 300 },
  { date: "2024-05-15", amount: 250 }
];

console.log(filterAndSummarizeSales(salesData, 200, "2024-03-01", "2024-04-30"));
// Вывод: 500 (сумма продаж 200 и 300, попадающих в критерии)
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndSummarizeSales(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndSummarizeSales(salesData, minAmount, startDate, endDate) {
  return salesData
      .filter(({amount, date}) => amount >= minAmount && date >= startDate && date <= endDate)
      .reduce((acc, {amount}) => acc + amount, 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAndSummarizeSales', () => {
  expect(filterAndSummarizeSales).to.be.a('function');
});

it("Function filterAndSummarizeSales should include filter method", () => {
  const result = filterAndSummarizeSales.toString();
  expect(result).to.include('.filter(');
});

it("filterAndSummarizeSales([{date: '2024-03-01', amount: 200}, {date: '2024-04-01', amount: 300}], 200, '2024-03-01', '2024-04-30') should return 500", () => {
  const salesData = [
    { date: "2024-03-01", amount: 200 },
    { date: "2024-04-01", amount: 300 }
  ];
  expect(filterAndSummarizeSales(salesData, 200, "2024-03-01", "2024-04-30")).to.equal(500);
});

it("filterAndSummarizeSales([], 100, '2024-03-01', '2024-04-30') should return 0", () => {
  expect(filterAndSummarizeSales([], 100, "2024-03-01", "2024-04-30")).to.equal(0);
});

it("filterAndSummarizeSales([{date: '2024-04-15', amount: 250}], 300, '2024-03-01', '2024-04-30') should return 0 as no sales meet the minimum amount", () => {
  const salesData = [
    { date: "2024-04-15", amount: 250 }
  ];
  expect(filterAndSummarizeSales(salesData, 300, "2024-03-01", "2024-04-30")).to.equal(0);
});

it("filterAndSummarizeSales([{date: '2024-03-15', amount: 150}, {date: '2024-04-01', amount: 300}], 200, '2024-03-01', '2024-04-30') should return 300", () => {
  const salesData = [
    { date: "2024-03-15", amount: 150 },
    { date: "2024-04-01", amount: 300 }
  ];
  expect(filterAndSummarizeSales(salesData, 200, "2024-03-01", "2024-04-30")).to.equal(300);
});

it("filterAndSummarizeSales([{date: '2024-03-01', amount: 200}], 200, '2024-03-01', '2024-03-01') should return 200 as the sale date matches exactly the start and end dates", () => {
  const salesData = [
    { date: "2024-03-01", amount: 200 }
  ];
  expect(filterAndSummarizeSales(salesData, 200, "2024-03-01", "2024-03-01")).to.equal(200);
});

it("filterAndSummarizeSales([{date: '2024-02-28', amount: 500}, {date: '2024-03-01', amount: 200}], 100, '2024-03-01', '2024-03-01') should return 200 as only one sale is within the date range", () => {
  const salesData = [
    { date: "2024-02-28", amount: 500 },
    { date: "2024-03-01", amount: 200 }
  ];
  expect(filterAndSummarizeSales(salesData, 100, "2024-03-01", "2024-03-01")).to.equal(200);
});

it("filterAndSummarizeSales([{date: '2024-04-30', amount: 300}, {date: '2024-05-01', amount: 500}], 250, '2024-04-01', '2024-04-30') should return 300 as only the sale on the last day of April meets the criteria", () => {
  const salesData = [
    { date: "2024-04-30", amount: 300 },
    { date: "2024-05-01", amount: 500 }
  ];
  expect(filterAndSummarizeSales(salesData, 250, "2024-04-01", "2024-04-30")).to.equal(300);
});

it("filterAndSummarizeSales([{date: '2024-03-15', amount: 150}, {date: '2024-04-01', amount: 300}, {date: '2024-04-02', amount: 450}], 150, '2024-04-01', '2024-04-15') should return 750 as it includes multiple sales within the date range", () => {
  const salesData = [
    { date: "2024-03-15", amount: 150 },
    { date: "2024-04-01", amount: 300 },
    { date: "2024-04-02", amount: 450 }
  ];
  expect(filterAndSummarizeSales(salesData, 150, "2024-04-01", "2024-04-15")).to.equal(750);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
