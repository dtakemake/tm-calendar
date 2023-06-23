type Intersection = [number, number]
type Intersections = Array<Intersection>

type IntersectionFn = {
  ( user1: Intersections, user2: Intersections ): Intersections
}

// example
// User1  [ [5,11], [14,20] ]
// User2  [ [2,4],  [7,10],  [12,16], [18,22] ]
// output [ [7,10], [14,16], [18,20] ]

const findIntersection: IntersectionFn = ( user1, user2 ) => {
  const intersections: Intersections = []

  // надо хранить текущий просматриваемый индекс для каждого пользователя
  let user1Index = 0,
      user2Index = 0

  // выходим из цикла, как только закончим просматривать один из массивов
  while( 
    user1Index < user1.length && 
    user2Index < user2.length 
  ) {

    // пересечение
    const intersection: Intersection = [ -1, -1 ]

    // сначала возьмем индекс 0
    const user1Timeline = user1[user1Index]
    const user2Timeline = user2[user2Index]

    // найдем начало пересечения
    if( user1Timeline[0] >= user2Timeline[0] && user1Timeline[0] <= user2Timeline[1] ) {          // 5 >= 7 && 5 <= 10
      intersection[0] = user1Timeline[0]
    } else if( user2Timeline[0] >= user1Timeline[0] && user2Timeline[0] <= user1Timeline[1] ) {   // 7 >= 5 && 7 <= 11 - true
      intersection[0] = user2Timeline[0]
    }

    // if intersection is exists
    if( intersection[0] !== -1 ) {

      // найдем окончание пересечения
      if( user1Timeline[1] <= user2Timeline[1] && user1Timeline[1] >= user2Timeline[0] ) {          // 11 <= 10 && 11 >= 7
        intersection[1] = user1Timeline[1]
      } else if( user2Timeline[1] <= user1Timeline[1] && user2Timeline[1] >= user1Timeline[0] ) {   // 10 <= 11 && 10 >= 5 - true
        intersection[1] = user2Timeline[1]
      }

      // add intersection
      intersections.push( intersection )
    }

    // если пересечение есть и оно заканчивается в одно время,
    // следующая итерация начинается с увеличения обоих индексов 
    if( user1Timeline[1] === user2Timeline[1] ) {
      ++user1Index
      ++user2Index
    } else {
      // всегда оставляем intersection у которого более бозднее окончание
      // возможно будет еще одно перечение 
      // или 
      // возможно все же будет пересечение
      if ( user1Timeline[1] > user2Timeline[1] ) {
        ++user2Index
      } else {
        ++user1Index
      }
    }
  }

  return intersections
}

export {
  findIntersection
}

export type {
  Intersections
}
