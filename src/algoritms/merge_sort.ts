type mergeArray = {
  ( arr1: Array<number>, arr2: Array<number> ): Array<number>
}

// сортировка слиянием
const mergeArray: mergeArray = ( arr1, arr2 ) => {
  const resultArray: Array<number> = []

  // надо сохранить указатель
  let index1 = 0,
      index2 = 0

  while( 
    index1 < arr1.length &&
    index2 < arr2.length
  ) {

    // надо выбрать меньшее число
    resultArray.push(
      arr1[index1] < arr2[index2] ? arr1[index1++] : arr2[index2++]
    )
  }

  return [
    ...resultArray,
    ...arr1.slice(index1),
    ...arr2.slice(index2)
  ]
}

type mergeSort = {
  ( arr: Array<number> ): Array<number>
}

const mergeSort: mergeSort = ( arr ) => {

  // базовый случай
  if( arr.length < 2 ) {
    return arr
  }

  const middle = Math.floor( arr.length * .5 )

  const left = arr.slice(0, middle)
  const right = arr.slice(middle)


  return mergeArray( mergeSort(left), mergeSort(right) )
}

export default mergeSort
