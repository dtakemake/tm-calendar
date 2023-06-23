// граф
const graph: { [key: string]: { [key: string]: number } } = {
  start: { 
    a: 6,
    b: 2
  },
  a: {
    fin: 1
  },
  b: {
    a: 3,
    fin: 5
  },
  fin: {}
}

/*** Алгоритм обновляет содержимое двух хэшей parents и costs ***/
// таблица родителей
let parents: { [key: string]: string | null } = {
  a: 'start',
  b: 'start',
  fin: null
}

// первоначальная стоимость узлов
let costs: { [key: string]: number } = {
  a: 6,
  b: 2,
  fin: Infinity
}
/*** поэтому в них пожно получить результат ***/

// обработанные узлы
const processed: Array<string> = []

// поиск узла с наименьшей стоимостью из необработанных
const find_lowest_cost_node = ( costs: { [key: string]: number } ) => {
  let lowest_cost = Infinity
  let lowest_cost_node = ''

  for( let node in costs ) {
    // стоимость текущего узла
    const cost = costs[node]

    if( cost < lowest_cost && ! processed.includes( node ) ) {
      lowest_cost = cost
      lowest_cost_node = node
    }
  }

  return lowest_cost_node
}

const findDeikstry = () => {
  let node = find_lowest_cost_node( costs )

  // пока есть необработанные узлы
  while( node ) {

    // получим стоимость текущего узла
    const cost = costs[node]

    // дочерние узлы
    const neirbors = graph[node]

    // пройдемся по дочерним узлам
    for( let n in neirbors ) {

      // обновим стоимость узла
      const new_cost = cost + neirbors[n]

      if( new_cost < costs[n] ) {
        costs[n] = new_cost
        parents[n] = node
      }
    }

    processed.push(node)
    node = find_lowest_cost_node( costs )
  }
}

export default findDeikstry
