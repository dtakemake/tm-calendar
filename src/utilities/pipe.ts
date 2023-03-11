function pipe<A, B>(
  fn1: ( args: A ) => B
): ( argsFromFirstFn: A ) => B

function pipe<A, B, C>(
  fn1: ( args: A ) => B,
  fn2: ( args: B ) => C,
): ( argsFromFirstFn: A ) => C

function pipe<A, B, C, D>(
  fn1: ( args: A ) => B,
  fn2: ( args: B ) => C,
  fn3: ( args: C ) => D,
): ( argsFromFirstFn: A ) => D

function pipe<A, B, C, D, E>(
  fn1: ( args: A ) => B,
  fn2: ( args: B ) => C,
  fn3: ( args: C ) => D,
  fn4: ( args: D ) => E,
): ( argsFromFirstFn: A ) => E

function pipe<A, B, C, D, E, F>(
  fn1: ( args: A ) => B,
  fn2: ( args: B ) => C,
  fn3: ( args: C ) => D,
  fn4: ( args: D ) => E,
  fn5: ( args: E ) => F,
): ( argsFromFirstFn: A ) => F

function pipe( ...functions: Array<( args: any ) => any> ): any {

  type FirstFnType = typeof functions[0]
  type FirstFnArgs = FirstFnType extends ( a: infer A ) => ReturnType<FirstFnType> ? A : never

  return ( value: FirstFnArgs ) => {
    return functions.reduce( ( args, fn ) => fn(args), value )
  }
}

export default pipe
