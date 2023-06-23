type sumArrayNumber = {
  ( arr: Array<number> ): number
}

const sumArrayNumber: sumArrayNumber = arr => {
  
  if( !arr.length ) {
    return 0
  }

  if( arr.length === 1 ) {
    return arr[0]
  }

  const [ first, ...rest ] = arr

  return first + sumArrayNumber( rest )
}

export default sumArrayNumber
