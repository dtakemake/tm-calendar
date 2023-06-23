type FindLessValue = {
  <T>( arr: Array<T> ): number
}

const findLessValue: FindLessValue = arr => {
  let lessValue = arr[0],
      lessValueIndex = 0

  for( let i = 1; i < arr.length; i++ ) {
    if(arr[i] < lessValue ) {
      lessValue = arr[i]
      lessValueIndex = i
    }
  }

  return lessValueIndex
}

type SelectionSort = {
  <T>( arr: Array<T> ): Array<T>
}

// O(n ** 2)
const selectionSort: SelectionSort = ( arr ) => {
  const newArray: typeof arr = [],
        arrLength = arr.length // вынесем выше, чтобы не перезаписывалось в каждом цикле

  for( let i = 0; i < arrLength; i++ ) {
    const lessValueIndex = findLessValue(arr)

    // уменьшение количества проверяемых элементов
    const nextValue = arr.splice( lessValueIndex, 1 )

    newArray.push( ...nextValue )
  }

  return newArray
}

export default selectionSort
