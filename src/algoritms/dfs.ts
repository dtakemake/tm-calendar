type Graph = {
  [key: string]: Array<string>
}

const graph: Graph = {
  you: ['alice', 'bob', 'claire'],
  claire: ['thom', 'johny'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  anuj: [],
  peggy: [],
  thom: [],
  johny: []
}

type Dfs = {
  ( start_vertex: string, end_vertex: string ): boolean | Array<string>
}

const visited: Array<string> = []

const dfs: Dfs = ( start_vertex, end_vertex ) => {

  // если достигли нужной вершины
  if( start_vertex === end_vertex ) {
    return true
  }

  // если уже была проверка
  if(visited.includes( start_vertex )) {
    return false
  }

  visited.push( start_vertex )

  for( let vertex of graph[start_vertex] ) {
    if( !visited.includes(vertex) ) {

      const reached = dfs( vertex, end_vertex )

      if(reached) {
        return true
      }
    }
  }

  return false
}

export default dfs
