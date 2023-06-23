type BinarySearch = {
  <T>( arr: Array<T>, value: T ): number
}

const binarySearch: BinarySearch = ( arr, value ) => {

  /**
   * в базовом случае, когда в массиве 0 элементов - сразу вернется -1
   * когда 1 элемент, цикл while выполнится 1 раз
   * для этих проверок не обязательно что-то писать отдельно 
   */

  let low = 0,
      high = (arr.length - 1)

  while( low <= high ) {

    let middle = Math.floor((low + high) / 2)
    let current = arr[middle]

    if( current === value ) {
      return middle
    } 
    else if( current > value ) {
      high = middle - 1
    }
    else if( current < value ) {
      low = middle + 1
    }

  }

  return -1
}

export default binarySearch
