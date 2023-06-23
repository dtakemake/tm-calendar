type quickSort = {
  (arr: Array<number>): Array<number>
}

/**
 * лучший случай = средний случай если всегд выбирать случайный элемент в массиве  O(n * log n)
 * худший случай если пивотная точка первый элемент массива o(n ** 2)
 * @param array numbers
 * @returns array sort
 */
const quickSort: quickSort = arr => {

  // базовый случай
  if( arr.length < 2 ) {
    return arr
  }

  const left: typeof arr = []
  const right: typeof arr = []

  // индекс пивотной точки
  const pivotIndex = Math.floor( Math.random() * arr.length )

  // значение пивотной точки
  // удалим из массива выбранный элемент
  const pivot = arr.splice(pivotIndex, 1)

  for ( let i = 0; i < arr.length; i++ ) {

    if( arr[i] >= pivot[0] ) {
      right.push( arr[i] )
    } else {
      left.push( arr[i] )
    }
  }

  return quickSort( left ).concat(pivot, quickSort(right))
}

export default quickSort
