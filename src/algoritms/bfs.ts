type Graph = {
  [key: string]: Array<string>
}

const graph: Graph = {
  you:    ['alice', 'bob', 'claire'],
  claire: ['thom', 'johny'],
  bob:    ['anuj'],
  alice:  ['peggy'],
  anuj:  [],
  peggy: [],
  thom:  [],
  johny: []
}

type Dfs = {
  ( start_vertex: string, end_vertex: string ): false | Array<string>
}

const dfs: Dfs = ( start_vertex, end_vertex ) => {

  // объект с родителями для посторения пути
  const parents: { [ key: string ]: string } = {}

  // объект с посещенными вершинами
  const distances = {
    [start_vertex]: 0  // длина для точки
  }

  // очередь вершин
  const queue = [start_vertex]

  // итерация по списку смежностей
  while( queue.length ) {

    // текущая вершина
    const currentVertex = queue.shift() as string

    // а вдруг это наша вершина
    // если нет то мы пройдем по все вершинам
    if( currentVertex === end_vertex ) {
      break // выйдем из цикла
    }

    // проверка смежных вершин и добавление их в очередь
    for( let vertex of graph[currentVertex] ) {

      // только для непосещенных вершин, чтобы не было зацикливания
      if( !distances[vertex] ) {
        distances[vertex] = distances[currentVertex] + 1

        // добавляем в очередь потомков
        queue.push( vertex )

        // запишем родителя у этой вершины
        parents[ vertex ] = currentVertex
      }
    }
  }

  // проверим найдена ли нужная вершина
  if( distances[end_vertex] !== undefined ) {
    const path = [end_vertex]
    let parent = parents[end_vertex]

    // пока существуют родители
    while( parent ) {
      path.push( parent )
      parent = parents[parent]
    }

    return path.reverse()
  }

  return false
}

export default dfs
