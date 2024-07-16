// NAMEEN:
// NAMERU:Запасы плитки в магазине. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `tileStash` принимает один параметр – объект `tile`, который содержит следующие свойства:
* `sold` – количество проданной плитки, число;
* `damaged` – количество поврежденной плитки, число;
* `defect` – количество плитки с дефектом, число;
* `lost` – количество потерянной плитки, число;
* `available` – количество доступной плитки, число;

Необходимо переделать объект `tile`, объединив свойства `damaged`, `defect` и `lost` в одно свойство `nonConformance`.

Функция должна вернуть обновленный объект `tile`, в котором будут только свойства `sold`, `nonConformance` и `available`.

Пример запуска функции:
```javascript
tileStash({
  sold:100,
  damaged: 4,
  defect: 5,
  lost: 1,
  available: 90
})

// {sold: 100, nonConformance: 10, available: 90}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function tileStash(tile) {
  tile.nonConformance = tile.damaged + tile.defect + tile.lost;
  delete tile.damaged;
  delete tile.defect;
  delete tile.lost;
  return tile;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function tileStash', () => {
  expect(tileStash).to.be.a('function');
});

it('tileStash({sold:100, damaged: 4, defect: 5, lost: 1, available: 90}) // {sold: 100, nonConformance: 10, available: 90}', () => {
  expect(tileStash({ sold: 100, damaged: 4, defect: 5, lost: 1, available: 90 })).eql({
    sold: 100,
    nonConformance: 10,
    available: 90,
  });
});

it('tileStash({sold:50, damaged: 4, defect: 5, lost: 10, available: 40}) // {sold: 50, nonConformance: 19, available: 40}', () => {
  expect(tileStash({ sold: 50, damaged: 4, defect: 5, lost: 10, available: 40 })).eql({
    sold: 50,
    nonConformance: 19,
    available: 40,
  });
});

it('tileStash({sold:10, damaged: 40, defect: 501, lost: 41, available: 0}) // {sold: 10, nonConformance: 582, available: 0}', () => {
  expect(tileStash({ sold: 10, damaged: 40, defect: 501, lost: 41, available: 0 })).eql({
    sold: 10,
    nonConformance: 582,
    available: 0,
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
