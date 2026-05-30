
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Syllable
 * 
 */
export type Syllable = $Result.DefaultSelection<Prisma.$SyllablePayload>
/**
 * Model AudioFile
 * 
 */
export type AudioFile = $Result.DefaultSelection<Prisma.$AudioFilePayload>
/**
 * Model PracticeSession
 * 
 */
export type PracticeSession = $Result.DefaultSelection<Prisma.$PracticeSessionPayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model WeeklySummary
 * 
 */
export type WeeklySummary = $Result.DefaultSelection<Prisma.$WeeklySummaryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syllable`: Exposes CRUD operations for the **Syllable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Syllables
    * const syllables = await prisma.syllable.findMany()
    * ```
    */
  get syllable(): Prisma.SyllableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioFile`: Exposes CRUD operations for the **AudioFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioFiles
    * const audioFiles = await prisma.audioFile.findMany()
    * ```
    */
  get audioFile(): Prisma.AudioFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.practiceSession`: Exposes CRUD operations for the **PracticeSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeSessions
    * const practiceSessions = await prisma.practiceSession.findMany()
    * ```
    */
  get practiceSession(): Prisma.PracticeSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklySummary`: Exposes CRUD operations for the **WeeklySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySummaries
    * const weeklySummaries = await prisma.weeklySummary.findMany()
    * ```
    */
  get weeklySummary(): Prisma.WeeklySummaryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Syllable: 'Syllable',
    AudioFile: 'AudioFile',
    PracticeSession: 'PracticeSession',
    Prediction: 'Prediction',
    AuthSession: 'AuthSession',
    WeeklySummary: 'WeeklySummary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "syllable" | "audioFile" | "practiceSession" | "prediction" | "authSession" | "weeklySummary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Syllable: {
        payload: Prisma.$SyllablePayload<ExtArgs>
        fields: Prisma.SyllableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyllableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyllableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          findFirst: {
            args: Prisma.SyllableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyllableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          findMany: {
            args: Prisma.SyllableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>[]
          }
          create: {
            args: Prisma.SyllableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          createMany: {
            args: Prisma.SyllableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyllableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>[]
          }
          delete: {
            args: Prisma.SyllableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          update: {
            args: Prisma.SyllableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          deleteMany: {
            args: Prisma.SyllableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyllableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyllableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>[]
          }
          upsert: {
            args: Prisma.SyllableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllablePayload>
          }
          aggregate: {
            args: Prisma.SyllableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyllable>
          }
          groupBy: {
            args: Prisma.SyllableGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyllableGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyllableCountArgs<ExtArgs>
            result: $Utils.Optional<SyllableCountAggregateOutputType> | number
          }
        }
      }
      AudioFile: {
        payload: Prisma.$AudioFilePayload<ExtArgs>
        fields: Prisma.AudioFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          findFirst: {
            args: Prisma.AudioFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          findMany: {
            args: Prisma.AudioFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>[]
          }
          create: {
            args: Prisma.AudioFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          createMany: {
            args: Prisma.AudioFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>[]
          }
          delete: {
            args: Prisma.AudioFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          update: {
            args: Prisma.AudioFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          deleteMany: {
            args: Prisma.AudioFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudioFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>[]
          }
          upsert: {
            args: Prisma.AudioFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          aggregate: {
            args: Prisma.AudioFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioFile>
          }
          groupBy: {
            args: Prisma.AudioFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioFileCountArgs<ExtArgs>
            result: $Utils.Optional<AudioFileCountAggregateOutputType> | number
          }
        }
      }
      PracticeSession: {
        payload: Prisma.$PracticeSessionPayload<ExtArgs>
        fields: Prisma.PracticeSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PracticeSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PracticeSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          findFirst: {
            args: Prisma.PracticeSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PracticeSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          findMany: {
            args: Prisma.PracticeSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>[]
          }
          create: {
            args: Prisma.PracticeSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          createMany: {
            args: Prisma.PracticeSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PracticeSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>[]
          }
          delete: {
            args: Prisma.PracticeSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          update: {
            args: Prisma.PracticeSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          deleteMany: {
            args: Prisma.PracticeSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PracticeSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PracticeSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>[]
          }
          upsert: {
            args: Prisma.PracticeSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeSessionPayload>
          }
          aggregate: {
            args: Prisma.PracticeSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePracticeSession>
          }
          groupBy: {
            args: Prisma.PracticeSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticeSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PracticeSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PracticeSessionCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      WeeklySummary: {
        payload: Prisma.$WeeklySummaryPayload<ExtArgs>
        fields: Prisma.WeeklySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findFirst: {
            args: Prisma.WeeklySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findMany: {
            args: Prisma.WeeklySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          create: {
            args: Prisma.WeeklySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          createMany: {
            args: Prisma.WeeklySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          delete: {
            args: Prisma.WeeklySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          update: {
            args: Prisma.WeeklySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          upsert: {
            args: Prisma.WeeklySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          aggregate: {
            args: Prisma.WeeklySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySummary>
          }
          groupBy: {
            args: Prisma.WeeklySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    syllable?: SyllableOmit
    audioFile?: AudioFileOmit
    practiceSession?: PracticeSessionOmit
    prediction?: PredictionOmit
    authSession?: AuthSessionOmit
    weeklySummary?: WeeklySummaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    audioFiles: number
    authSessions: number
    weeklySummaries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    audioFiles?: boolean | UserCountOutputTypeCountAudioFilesArgs
    authSessions?: boolean | UserCountOutputTypeCountAuthSessionsArgs
    weeklySummaries?: boolean | UserCountOutputTypeCountWeeklySummariesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudioFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
  }


  /**
   * Count Type SyllableCountOutputType
   */

  export type SyllableCountOutputType = {
    targetSessions: number
    predictedIn: number
    weeklyMostPracticed: number
    weeklyNeedsImprovement: number
  }

  export type SyllableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetSessions?: boolean | SyllableCountOutputTypeCountTargetSessionsArgs
    predictedIn?: boolean | SyllableCountOutputTypeCountPredictedInArgs
    weeklyMostPracticed?: boolean | SyllableCountOutputTypeCountWeeklyMostPracticedArgs
    weeklyNeedsImprovement?: boolean | SyllableCountOutputTypeCountWeeklyNeedsImprovementArgs
  }

  // Custom InputTypes
  /**
   * SyllableCountOutputType without action
   */
  export type SyllableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyllableCountOutputType
     */
    select?: SyllableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SyllableCountOutputType without action
   */
  export type SyllableCountOutputTypeCountTargetSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSessionWhereInput
  }

  /**
   * SyllableCountOutputType without action
   */
  export type SyllableCountOutputTypeCountPredictedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }

  /**
   * SyllableCountOutputType without action
   */
  export type SyllableCountOutputTypeCountWeeklyMostPracticedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
  }

  /**
   * SyllableCountOutputType without action
   */
  export type SyllableCountOutputTypeCountWeeklyNeedsImprovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
  }


  /**
   * Count Type AudioFileCountOutputType
   */

  export type AudioFileCountOutputType = {
    sessions: number
    predictions: number
  }

  export type AudioFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AudioFileCountOutputTypeCountSessionsArgs
    predictions?: boolean | AudioFileCountOutputTypeCountPredictionsArgs
  }

  // Custom InputTypes
  /**
   * AudioFileCountOutputType without action
   */
  export type AudioFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFileCountOutputType
     */
    select?: AudioFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudioFileCountOutputType without action
   */
  export type AudioFileCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSessionWhereInput
  }

  /**
   * AudioFileCountOutputType without action
   */
  export type AudioFileCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    audioFiles?: boolean | User$audioFilesArgs<ExtArgs>
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    audioFiles?: boolean | User$audioFilesArgs<ExtArgs>
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$PracticeSessionPayload<ExtArgs>[]
      audioFiles: Prisma.$AudioFilePayload<ExtArgs>[]
      authSessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      weeklySummaries: Prisma.$WeeklySummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audioFiles<T extends User$audioFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$audioFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authSessions<T extends User$authSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$authSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklySummaries<T extends User$weeklySummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklySummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    where?: PracticeSessionWhereInput
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    cursor?: PracticeSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * User.audioFiles
   */
  export type User$audioFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    where?: AudioFileWhereInput
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    cursor?: AudioFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * User.authSessions
   */
  export type User$authSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * User.weeklySummaries
   */
  export type User$weeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    cursor?: WeeklySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Syllable
   */

  export type AggregateSyllable = {
    _count: SyllableCountAggregateOutputType | null
    _min: SyllableMinAggregateOutputType | null
    _max: SyllableMaxAggregateOutputType | null
  }

  export type SyllableMinAggregateOutputType = {
    id: string | null
    code: string | null
    label: string | null
    createdAt: Date | null
  }

  export type SyllableMaxAggregateOutputType = {
    id: string | null
    code: string | null
    label: string | null
    createdAt: Date | null
  }

  export type SyllableCountAggregateOutputType = {
    id: number
    code: number
    label: number
    createdAt: number
    _all: number
  }


  export type SyllableMinAggregateInputType = {
    id?: true
    code?: true
    label?: true
    createdAt?: true
  }

  export type SyllableMaxAggregateInputType = {
    id?: true
    code?: true
    label?: true
    createdAt?: true
  }

  export type SyllableCountAggregateInputType = {
    id?: true
    code?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type SyllableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllable to aggregate.
     */
    where?: SyllableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllables to fetch.
     */
    orderBy?: SyllableOrderByWithRelationInput | SyllableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyllableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Syllables
    **/
    _count?: true | SyllableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyllableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyllableMaxAggregateInputType
  }

  export type GetSyllableAggregateType<T extends SyllableAggregateArgs> = {
        [P in keyof T & keyof AggregateSyllable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyllable[P]>
      : GetScalarType<T[P], AggregateSyllable[P]>
  }




  export type SyllableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyllableWhereInput
    orderBy?: SyllableOrderByWithAggregationInput | SyllableOrderByWithAggregationInput[]
    by: SyllableScalarFieldEnum[] | SyllableScalarFieldEnum
    having?: SyllableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyllableCountAggregateInputType | true
    _min?: SyllableMinAggregateInputType
    _max?: SyllableMaxAggregateInputType
  }

  export type SyllableGroupByOutputType = {
    id: string
    code: string
    label: string | null
    createdAt: Date
    _count: SyllableCountAggregateOutputType | null
    _min: SyllableMinAggregateOutputType | null
    _max: SyllableMaxAggregateOutputType | null
  }

  type GetSyllableGroupByPayload<T extends SyllableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyllableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyllableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyllableGroupByOutputType[P]>
            : GetScalarType<T[P], SyllableGroupByOutputType[P]>
        }
      >
    >


  export type SyllableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    createdAt?: boolean
    targetSessions?: boolean | Syllable$targetSessionsArgs<ExtArgs>
    predictedIn?: boolean | Syllable$predictedInArgs<ExtArgs>
    weeklyMostPracticed?: boolean | Syllable$weeklyMostPracticedArgs<ExtArgs>
    weeklyNeedsImprovement?: boolean | Syllable$weeklyNeedsImprovementArgs<ExtArgs>
    _count?: boolean | SyllableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syllable"]>

  export type SyllableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["syllable"]>

  export type SyllableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["syllable"]>

  export type SyllableSelectScalar = {
    id?: boolean
    code?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type SyllableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "label" | "createdAt", ExtArgs["result"]["syllable"]>
  export type SyllableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetSessions?: boolean | Syllable$targetSessionsArgs<ExtArgs>
    predictedIn?: boolean | Syllable$predictedInArgs<ExtArgs>
    weeklyMostPracticed?: boolean | Syllable$weeklyMostPracticedArgs<ExtArgs>
    weeklyNeedsImprovement?: boolean | Syllable$weeklyNeedsImprovementArgs<ExtArgs>
    _count?: boolean | SyllableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SyllableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SyllableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SyllablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Syllable"
    objects: {
      targetSessions: Prisma.$PracticeSessionPayload<ExtArgs>[]
      predictedIn: Prisma.$PredictionPayload<ExtArgs>[]
      weeklyMostPracticed: Prisma.$WeeklySummaryPayload<ExtArgs>[]
      weeklyNeedsImprovement: Prisma.$WeeklySummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      label: string | null
      createdAt: Date
    }, ExtArgs["result"]["syllable"]>
    composites: {}
  }

  type SyllableGetPayload<S extends boolean | null | undefined | SyllableDefaultArgs> = $Result.GetResult<Prisma.$SyllablePayload, S>

  type SyllableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyllableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyllableCountAggregateInputType | true
    }

  export interface SyllableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Syllable'], meta: { name: 'Syllable' } }
    /**
     * Find zero or one Syllable that matches the filter.
     * @param {SyllableFindUniqueArgs} args - Arguments to find a Syllable
     * @example
     * // Get one Syllable
     * const syllable = await prisma.syllable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyllableFindUniqueArgs>(args: SelectSubset<T, SyllableFindUniqueArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Syllable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyllableFindUniqueOrThrowArgs} args - Arguments to find a Syllable
     * @example
     * // Get one Syllable
     * const syllable = await prisma.syllable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyllableFindUniqueOrThrowArgs>(args: SelectSubset<T, SyllableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableFindFirstArgs} args - Arguments to find a Syllable
     * @example
     * // Get one Syllable
     * const syllable = await prisma.syllable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyllableFindFirstArgs>(args?: SelectSubset<T, SyllableFindFirstArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableFindFirstOrThrowArgs} args - Arguments to find a Syllable
     * @example
     * // Get one Syllable
     * const syllable = await prisma.syllable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyllableFindFirstOrThrowArgs>(args?: SelectSubset<T, SyllableFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Syllables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Syllables
     * const syllables = await prisma.syllable.findMany()
     * 
     * // Get first 10 Syllables
     * const syllables = await prisma.syllable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syllableWithIdOnly = await prisma.syllable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyllableFindManyArgs>(args?: SelectSubset<T, SyllableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Syllable.
     * @param {SyllableCreateArgs} args - Arguments to create a Syllable.
     * @example
     * // Create one Syllable
     * const Syllable = await prisma.syllable.create({
     *   data: {
     *     // ... data to create a Syllable
     *   }
     * })
     * 
     */
    create<T extends SyllableCreateArgs>(args: SelectSubset<T, SyllableCreateArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Syllables.
     * @param {SyllableCreateManyArgs} args - Arguments to create many Syllables.
     * @example
     * // Create many Syllables
     * const syllable = await prisma.syllable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyllableCreateManyArgs>(args?: SelectSubset<T, SyllableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Syllables and returns the data saved in the database.
     * @param {SyllableCreateManyAndReturnArgs} args - Arguments to create many Syllables.
     * @example
     * // Create many Syllables
     * const syllable = await prisma.syllable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Syllables and only return the `id`
     * const syllableWithIdOnly = await prisma.syllable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyllableCreateManyAndReturnArgs>(args?: SelectSubset<T, SyllableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Syllable.
     * @param {SyllableDeleteArgs} args - Arguments to delete one Syllable.
     * @example
     * // Delete one Syllable
     * const Syllable = await prisma.syllable.delete({
     *   where: {
     *     // ... filter to delete one Syllable
     *   }
     * })
     * 
     */
    delete<T extends SyllableDeleteArgs>(args: SelectSubset<T, SyllableDeleteArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Syllable.
     * @param {SyllableUpdateArgs} args - Arguments to update one Syllable.
     * @example
     * // Update one Syllable
     * const syllable = await prisma.syllable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyllableUpdateArgs>(args: SelectSubset<T, SyllableUpdateArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Syllables.
     * @param {SyllableDeleteManyArgs} args - Arguments to filter Syllables to delete.
     * @example
     * // Delete a few Syllables
     * const { count } = await prisma.syllable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyllableDeleteManyArgs>(args?: SelectSubset<T, SyllableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syllables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Syllables
     * const syllable = await prisma.syllable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyllableUpdateManyArgs>(args: SelectSubset<T, SyllableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syllables and returns the data updated in the database.
     * @param {SyllableUpdateManyAndReturnArgs} args - Arguments to update many Syllables.
     * @example
     * // Update many Syllables
     * const syllable = await prisma.syllable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Syllables and only return the `id`
     * const syllableWithIdOnly = await prisma.syllable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyllableUpdateManyAndReturnArgs>(args: SelectSubset<T, SyllableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Syllable.
     * @param {SyllableUpsertArgs} args - Arguments to update or create a Syllable.
     * @example
     * // Update or create a Syllable
     * const syllable = await prisma.syllable.upsert({
     *   create: {
     *     // ... data to create a Syllable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Syllable we want to update
     *   }
     * })
     */
    upsert<T extends SyllableUpsertArgs>(args: SelectSubset<T, SyllableUpsertArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Syllables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableCountArgs} args - Arguments to filter Syllables to count.
     * @example
     * // Count the number of Syllables
     * const count = await prisma.syllable.count({
     *   where: {
     *     // ... the filter for the Syllables we want to count
     *   }
     * })
    **/
    count<T extends SyllableCountArgs>(
      args?: Subset<T, SyllableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyllableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Syllable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyllableAggregateArgs>(args: Subset<T, SyllableAggregateArgs>): Prisma.PrismaPromise<GetSyllableAggregateType<T>>

    /**
     * Group by Syllable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyllableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyllableGroupByArgs['orderBy'] }
        : { orderBy?: SyllableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyllableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyllableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Syllable model
   */
  readonly fields: SyllableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Syllable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyllableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targetSessions<T extends Syllable$targetSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Syllable$targetSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    predictedIn<T extends Syllable$predictedInArgs<ExtArgs> = {}>(args?: Subset<T, Syllable$predictedInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyMostPracticed<T extends Syllable$weeklyMostPracticedArgs<ExtArgs> = {}>(args?: Subset<T, Syllable$weeklyMostPracticedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyNeedsImprovement<T extends Syllable$weeklyNeedsImprovementArgs<ExtArgs> = {}>(args?: Subset<T, Syllable$weeklyNeedsImprovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Syllable model
   */
  interface SyllableFieldRefs {
    readonly id: FieldRef<"Syllable", 'String'>
    readonly code: FieldRef<"Syllable", 'String'>
    readonly label: FieldRef<"Syllable", 'String'>
    readonly createdAt: FieldRef<"Syllable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Syllable findUnique
   */
  export type SyllableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter, which Syllable to fetch.
     */
    where: SyllableWhereUniqueInput
  }

  /**
   * Syllable findUniqueOrThrow
   */
  export type SyllableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter, which Syllable to fetch.
     */
    where: SyllableWhereUniqueInput
  }

  /**
   * Syllable findFirst
   */
  export type SyllableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter, which Syllable to fetch.
     */
    where?: SyllableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllables to fetch.
     */
    orderBy?: SyllableOrderByWithRelationInput | SyllableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllables.
     */
    cursor?: SyllableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllables.
     */
    distinct?: SyllableScalarFieldEnum | SyllableScalarFieldEnum[]
  }

  /**
   * Syllable findFirstOrThrow
   */
  export type SyllableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter, which Syllable to fetch.
     */
    where?: SyllableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllables to fetch.
     */
    orderBy?: SyllableOrderByWithRelationInput | SyllableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllables.
     */
    cursor?: SyllableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllables.
     */
    distinct?: SyllableScalarFieldEnum | SyllableScalarFieldEnum[]
  }

  /**
   * Syllable findMany
   */
  export type SyllableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter, which Syllables to fetch.
     */
    where?: SyllableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllables to fetch.
     */
    orderBy?: SyllableOrderByWithRelationInput | SyllableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Syllables.
     */
    cursor?: SyllableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllables.
     */
    distinct?: SyllableScalarFieldEnum | SyllableScalarFieldEnum[]
  }

  /**
   * Syllable create
   */
  export type SyllableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * The data needed to create a Syllable.
     */
    data: XOR<SyllableCreateInput, SyllableUncheckedCreateInput>
  }

  /**
   * Syllable createMany
   */
  export type SyllableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Syllables.
     */
    data: SyllableCreateManyInput | SyllableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Syllable createManyAndReturn
   */
  export type SyllableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * The data used to create many Syllables.
     */
    data: SyllableCreateManyInput | SyllableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Syllable update
   */
  export type SyllableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * The data needed to update a Syllable.
     */
    data: XOR<SyllableUpdateInput, SyllableUncheckedUpdateInput>
    /**
     * Choose, which Syllable to update.
     */
    where: SyllableWhereUniqueInput
  }

  /**
   * Syllable updateMany
   */
  export type SyllableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Syllables.
     */
    data: XOR<SyllableUpdateManyMutationInput, SyllableUncheckedUpdateManyInput>
    /**
     * Filter which Syllables to update
     */
    where?: SyllableWhereInput
    /**
     * Limit how many Syllables to update.
     */
    limit?: number
  }

  /**
   * Syllable updateManyAndReturn
   */
  export type SyllableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * The data used to update Syllables.
     */
    data: XOR<SyllableUpdateManyMutationInput, SyllableUncheckedUpdateManyInput>
    /**
     * Filter which Syllables to update
     */
    where?: SyllableWhereInput
    /**
     * Limit how many Syllables to update.
     */
    limit?: number
  }

  /**
   * Syllable upsert
   */
  export type SyllableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * The filter to search for the Syllable to update in case it exists.
     */
    where: SyllableWhereUniqueInput
    /**
     * In case the Syllable found by the `where` argument doesn't exist, create a new Syllable with this data.
     */
    create: XOR<SyllableCreateInput, SyllableUncheckedCreateInput>
    /**
     * In case the Syllable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyllableUpdateInput, SyllableUncheckedUpdateInput>
  }

  /**
   * Syllable delete
   */
  export type SyllableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    /**
     * Filter which Syllable to delete.
     */
    where: SyllableWhereUniqueInput
  }

  /**
   * Syllable deleteMany
   */
  export type SyllableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllables to delete
     */
    where?: SyllableWhereInput
    /**
     * Limit how many Syllables to delete.
     */
    limit?: number
  }

  /**
   * Syllable.targetSessions
   */
  export type Syllable$targetSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    where?: PracticeSessionWhereInput
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    cursor?: PracticeSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * Syllable.predictedIn
   */
  export type Syllable$predictedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Syllable.weeklyMostPracticed
   */
  export type Syllable$weeklyMostPracticedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    cursor?: WeeklySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * Syllable.weeklyNeedsImprovement
   */
  export type Syllable$weeklyNeedsImprovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    cursor?: WeeklySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * Syllable without action
   */
  export type SyllableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
  }


  /**
   * Model AudioFile
   */

  export type AggregateAudioFile = {
    _count: AudioFileCountAggregateOutputType | null
    _avg: AudioFileAvgAggregateOutputType | null
    _sum: AudioFileSumAggregateOutputType | null
    _min: AudioFileMinAggregateOutputType | null
    _max: AudioFileMaxAggregateOutputType | null
  }

  export type AudioFileAvgAggregateOutputType = {
    sizeBytes: number | null
    sampleRate: number | null
    channels: number | null
    bitsPerSample: number | null
    durationMs: number | null
  }

  export type AudioFileSumAggregateOutputType = {
    sizeBytes: number | null
    sampleRate: number | null
    channels: number | null
    bitsPerSample: number | null
    durationMs: number | null
  }

  export type AudioFileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    s3Bucket: string | null
    s3Key: string | null
    s3Region: string | null
    contentType: string | null
    sizeBytes: number | null
    sampleRate: number | null
    channels: number | null
    bitsPerSample: number | null
    durationMs: number | null
    createdAt: Date | null
  }

  export type AudioFileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    s3Bucket: string | null
    s3Key: string | null
    s3Region: string | null
    contentType: string | null
    sizeBytes: number | null
    sampleRate: number | null
    channels: number | null
    bitsPerSample: number | null
    durationMs: number | null
    createdAt: Date | null
  }

  export type AudioFileCountAggregateOutputType = {
    id: number
    userId: number
    s3Bucket: number
    s3Key: number
    s3Region: number
    contentType: number
    sizeBytes: number
    sampleRate: number
    channels: number
    bitsPerSample: number
    durationMs: number
    createdAt: number
    _all: number
  }


  export type AudioFileAvgAggregateInputType = {
    sizeBytes?: true
    sampleRate?: true
    channels?: true
    bitsPerSample?: true
    durationMs?: true
  }

  export type AudioFileSumAggregateInputType = {
    sizeBytes?: true
    sampleRate?: true
    channels?: true
    bitsPerSample?: true
    durationMs?: true
  }

  export type AudioFileMinAggregateInputType = {
    id?: true
    userId?: true
    s3Bucket?: true
    s3Key?: true
    s3Region?: true
    contentType?: true
    sizeBytes?: true
    sampleRate?: true
    channels?: true
    bitsPerSample?: true
    durationMs?: true
    createdAt?: true
  }

  export type AudioFileMaxAggregateInputType = {
    id?: true
    userId?: true
    s3Bucket?: true
    s3Key?: true
    s3Region?: true
    contentType?: true
    sizeBytes?: true
    sampleRate?: true
    channels?: true
    bitsPerSample?: true
    durationMs?: true
    createdAt?: true
  }

  export type AudioFileCountAggregateInputType = {
    id?: true
    userId?: true
    s3Bucket?: true
    s3Key?: true
    s3Region?: true
    contentType?: true
    sizeBytes?: true
    sampleRate?: true
    channels?: true
    bitsPerSample?: true
    durationMs?: true
    createdAt?: true
    _all?: true
  }

  export type AudioFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFile to aggregate.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioFiles
    **/
    _count?: true | AudioFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioFileMaxAggregateInputType
  }

  export type GetAudioFileAggregateType<T extends AudioFileAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioFile[P]>
      : GetScalarType<T[P], AggregateAudioFile[P]>
  }




  export type AudioFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioFileWhereInput
    orderBy?: AudioFileOrderByWithAggregationInput | AudioFileOrderByWithAggregationInput[]
    by: AudioFileScalarFieldEnum[] | AudioFileScalarFieldEnum
    having?: AudioFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioFileCountAggregateInputType | true
    _avg?: AudioFileAvgAggregateInputType
    _sum?: AudioFileSumAggregateInputType
    _min?: AudioFileMinAggregateInputType
    _max?: AudioFileMaxAggregateInputType
  }

  export type AudioFileGroupByOutputType = {
    id: string
    userId: string
    s3Bucket: string
    s3Key: string
    s3Region: string | null
    contentType: string | null
    sizeBytes: number | null
    sampleRate: number | null
    channels: number | null
    bitsPerSample: number | null
    durationMs: number | null
    createdAt: Date
    _count: AudioFileCountAggregateOutputType | null
    _avg: AudioFileAvgAggregateOutputType | null
    _sum: AudioFileSumAggregateOutputType | null
    _min: AudioFileMinAggregateOutputType | null
    _max: AudioFileMaxAggregateOutputType | null
  }

  type GetAudioFileGroupByPayload<T extends AudioFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioFileGroupByOutputType[P]>
            : GetScalarType<T[P], AudioFileGroupByOutputType[P]>
        }
      >
    >


  export type AudioFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Bucket?: boolean
    s3Key?: boolean
    s3Region?: boolean
    contentType?: boolean
    sizeBytes?: boolean
    sampleRate?: boolean
    channels?: boolean
    bitsPerSample?: boolean
    durationMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | AudioFile$sessionsArgs<ExtArgs>
    predictions?: boolean | AudioFile$predictionsArgs<ExtArgs>
    _count?: boolean | AudioFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFile"]>

  export type AudioFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Bucket?: boolean
    s3Key?: boolean
    s3Region?: boolean
    contentType?: boolean
    sizeBytes?: boolean
    sampleRate?: boolean
    channels?: boolean
    bitsPerSample?: boolean
    durationMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFile"]>

  export type AudioFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Bucket?: boolean
    s3Key?: boolean
    s3Region?: boolean
    contentType?: boolean
    sizeBytes?: boolean
    sampleRate?: boolean
    channels?: boolean
    bitsPerSample?: boolean
    durationMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFile"]>

  export type AudioFileSelectScalar = {
    id?: boolean
    userId?: boolean
    s3Bucket?: boolean
    s3Key?: boolean
    s3Region?: boolean
    contentType?: boolean
    sizeBytes?: boolean
    sampleRate?: boolean
    channels?: boolean
    bitsPerSample?: boolean
    durationMs?: boolean
    createdAt?: boolean
  }

  export type AudioFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "s3Bucket" | "s3Key" | "s3Region" | "contentType" | "sizeBytes" | "sampleRate" | "channels" | "bitsPerSample" | "durationMs" | "createdAt", ExtArgs["result"]["audioFile"]>
  export type AudioFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | AudioFile$sessionsArgs<ExtArgs>
    predictions?: boolean | AudioFile$predictionsArgs<ExtArgs>
    _count?: boolean | AudioFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AudioFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudioFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AudioFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sessions: Prisma.$PracticeSessionPayload<ExtArgs>[]
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      s3Bucket: string
      s3Key: string
      s3Region: string | null
      contentType: string | null
      sizeBytes: number | null
      sampleRate: number | null
      channels: number | null
      bitsPerSample: number | null
      durationMs: number | null
      createdAt: Date
    }, ExtArgs["result"]["audioFile"]>
    composites: {}
  }

  type AudioFileGetPayload<S extends boolean | null | undefined | AudioFileDefaultArgs> = $Result.GetResult<Prisma.$AudioFilePayload, S>

  type AudioFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioFileCountAggregateInputType | true
    }

  export interface AudioFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioFile'], meta: { name: 'AudioFile' } }
    /**
     * Find zero or one AudioFile that matches the filter.
     * @param {AudioFileFindUniqueArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioFileFindUniqueArgs>(args: SelectSubset<T, AudioFileFindUniqueArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioFileFindUniqueOrThrowArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioFileFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindFirstArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioFileFindFirstArgs>(args?: SelectSubset<T, AudioFileFindFirstArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindFirstOrThrowArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioFileFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioFiles
     * const audioFiles = await prisma.audioFile.findMany()
     * 
     * // Get first 10 AudioFiles
     * const audioFiles = await prisma.audioFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioFileWithIdOnly = await prisma.audioFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioFileFindManyArgs>(args?: SelectSubset<T, AudioFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioFile.
     * @param {AudioFileCreateArgs} args - Arguments to create a AudioFile.
     * @example
     * // Create one AudioFile
     * const AudioFile = await prisma.audioFile.create({
     *   data: {
     *     // ... data to create a AudioFile
     *   }
     * })
     * 
     */
    create<T extends AudioFileCreateArgs>(args: SelectSubset<T, AudioFileCreateArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioFiles.
     * @param {AudioFileCreateManyArgs} args - Arguments to create many AudioFiles.
     * @example
     * // Create many AudioFiles
     * const audioFile = await prisma.audioFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioFileCreateManyArgs>(args?: SelectSubset<T, AudioFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioFiles and returns the data saved in the database.
     * @param {AudioFileCreateManyAndReturnArgs} args - Arguments to create many AudioFiles.
     * @example
     * // Create many AudioFiles
     * const audioFile = await prisma.audioFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioFiles and only return the `id`
     * const audioFileWithIdOnly = await prisma.audioFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioFileCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AudioFile.
     * @param {AudioFileDeleteArgs} args - Arguments to delete one AudioFile.
     * @example
     * // Delete one AudioFile
     * const AudioFile = await prisma.audioFile.delete({
     *   where: {
     *     // ... filter to delete one AudioFile
     *   }
     * })
     * 
     */
    delete<T extends AudioFileDeleteArgs>(args: SelectSubset<T, AudioFileDeleteArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioFile.
     * @param {AudioFileUpdateArgs} args - Arguments to update one AudioFile.
     * @example
     * // Update one AudioFile
     * const audioFile = await prisma.audioFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioFileUpdateArgs>(args: SelectSubset<T, AudioFileUpdateArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioFiles.
     * @param {AudioFileDeleteManyArgs} args - Arguments to filter AudioFiles to delete.
     * @example
     * // Delete a few AudioFiles
     * const { count } = await prisma.audioFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioFileDeleteManyArgs>(args?: SelectSubset<T, AudioFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioFiles
     * const audioFile = await prisma.audioFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioFileUpdateManyArgs>(args: SelectSubset<T, AudioFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioFiles and returns the data updated in the database.
     * @param {AudioFileUpdateManyAndReturnArgs} args - Arguments to update many AudioFiles.
     * @example
     * // Update many AudioFiles
     * const audioFile = await prisma.audioFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudioFiles and only return the `id`
     * const audioFileWithIdOnly = await prisma.audioFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudioFileUpdateManyAndReturnArgs>(args: SelectSubset<T, AudioFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AudioFile.
     * @param {AudioFileUpsertArgs} args - Arguments to update or create a AudioFile.
     * @example
     * // Update or create a AudioFile
     * const audioFile = await prisma.audioFile.upsert({
     *   create: {
     *     // ... data to create a AudioFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioFile we want to update
     *   }
     * })
     */
    upsert<T extends AudioFileUpsertArgs>(args: SelectSubset<T, AudioFileUpsertArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileCountArgs} args - Arguments to filter AudioFiles to count.
     * @example
     * // Count the number of AudioFiles
     * const count = await prisma.audioFile.count({
     *   where: {
     *     // ... the filter for the AudioFiles we want to count
     *   }
     * })
    **/
    count<T extends AudioFileCountArgs>(
      args?: Subset<T, AudioFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudioFileAggregateArgs>(args: Subset<T, AudioFileAggregateArgs>): Prisma.PrismaPromise<GetAudioFileAggregateType<T>>

    /**
     * Group by AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudioFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioFileGroupByArgs['orderBy'] }
        : { orderBy?: AudioFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudioFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioFile model
   */
  readonly fields: AudioFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends AudioFile$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, AudioFile$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    predictions<T extends AudioFile$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, AudioFile$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudioFile model
   */
  interface AudioFileFieldRefs {
    readonly id: FieldRef<"AudioFile", 'String'>
    readonly userId: FieldRef<"AudioFile", 'String'>
    readonly s3Bucket: FieldRef<"AudioFile", 'String'>
    readonly s3Key: FieldRef<"AudioFile", 'String'>
    readonly s3Region: FieldRef<"AudioFile", 'String'>
    readonly contentType: FieldRef<"AudioFile", 'String'>
    readonly sizeBytes: FieldRef<"AudioFile", 'Int'>
    readonly sampleRate: FieldRef<"AudioFile", 'Int'>
    readonly channels: FieldRef<"AudioFile", 'Int'>
    readonly bitsPerSample: FieldRef<"AudioFile", 'Int'>
    readonly durationMs: FieldRef<"AudioFile", 'Int'>
    readonly createdAt: FieldRef<"AudioFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioFile findUnique
   */
  export type AudioFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile findUniqueOrThrow
   */
  export type AudioFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile findFirst
   */
  export type AudioFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFiles.
     */
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile findFirstOrThrow
   */
  export type AudioFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFiles.
     */
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile findMany
   */
  export type AudioFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFiles to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFiles.
     */
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile create
   */
  export type AudioFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioFile.
     */
    data: XOR<AudioFileCreateInput, AudioFileUncheckedCreateInput>
  }

  /**
   * AudioFile createMany
   */
  export type AudioFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioFiles.
     */
    data: AudioFileCreateManyInput | AudioFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioFile createManyAndReturn
   */
  export type AudioFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * The data used to create many AudioFiles.
     */
    data: AudioFileCreateManyInput | AudioFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioFile update
   */
  export type AudioFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioFile.
     */
    data: XOR<AudioFileUpdateInput, AudioFileUncheckedUpdateInput>
    /**
     * Choose, which AudioFile to update.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile updateMany
   */
  export type AudioFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioFiles.
     */
    data: XOR<AudioFileUpdateManyMutationInput, AudioFileUncheckedUpdateManyInput>
    /**
     * Filter which AudioFiles to update
     */
    where?: AudioFileWhereInput
    /**
     * Limit how many AudioFiles to update.
     */
    limit?: number
  }

  /**
   * AudioFile updateManyAndReturn
   */
  export type AudioFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * The data used to update AudioFiles.
     */
    data: XOR<AudioFileUpdateManyMutationInput, AudioFileUncheckedUpdateManyInput>
    /**
     * Filter which AudioFiles to update
     */
    where?: AudioFileWhereInput
    /**
     * Limit how many AudioFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioFile upsert
   */
  export type AudioFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioFile to update in case it exists.
     */
    where: AudioFileWhereUniqueInput
    /**
     * In case the AudioFile found by the `where` argument doesn't exist, create a new AudioFile with this data.
     */
    create: XOR<AudioFileCreateInput, AudioFileUncheckedCreateInput>
    /**
     * In case the AudioFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioFileUpdateInput, AudioFileUncheckedUpdateInput>
  }

  /**
   * AudioFile delete
   */
  export type AudioFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter which AudioFile to delete.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile deleteMany
   */
  export type AudioFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFiles to delete
     */
    where?: AudioFileWhereInput
    /**
     * Limit how many AudioFiles to delete.
     */
    limit?: number
  }

  /**
   * AudioFile.sessions
   */
  export type AudioFile$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    where?: PracticeSessionWhereInput
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    cursor?: PracticeSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * AudioFile.predictions
   */
  export type AudioFile$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * AudioFile without action
   */
  export type AudioFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
  }


  /**
   * Model PracticeSession
   */

  export type AggregatePracticeSession = {
    _count: PracticeSessionCountAggregateOutputType | null
    _avg: PracticeSessionAvgAggregateOutputType | null
    _sum: PracticeSessionSumAggregateOutputType | null
    _min: PracticeSessionMinAggregateOutputType | null
    _max: PracticeSessionMaxAggregateOutputType | null
  }

  export type PracticeSessionAvgAggregateOutputType = {
    score: number | null
  }

  export type PracticeSessionSumAggregateOutputType = {
    score: number | null
  }

  export type PracticeSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    targetSyllableId: string | null
    audioFileId: string | null
    isCorrect: boolean | null
    score: number | null
  }

  export type PracticeSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    targetSyllableId: string | null
    audioFileId: string | null
    isCorrect: boolean | null
    score: number | null
  }

  export type PracticeSessionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    targetSyllableId: number
    audioFileId: number
    isCorrect: number
    score: number
    _all: number
  }


  export type PracticeSessionAvgAggregateInputType = {
    score?: true
  }

  export type PracticeSessionSumAggregateInputType = {
    score?: true
  }

  export type PracticeSessionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    targetSyllableId?: true
    audioFileId?: true
    isCorrect?: true
    score?: true
  }

  export type PracticeSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    targetSyllableId?: true
    audioFileId?: true
    isCorrect?: true
    score?: true
  }

  export type PracticeSessionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    targetSyllableId?: true
    audioFileId?: true
    isCorrect?: true
    score?: true
    _all?: true
  }

  export type PracticeSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeSession to aggregate.
     */
    where?: PracticeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSessions to fetch.
     */
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PracticeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PracticeSessions
    **/
    _count?: true | PracticeSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PracticeSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PracticeSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeSessionMaxAggregateInputType
  }

  export type GetPracticeSessionAggregateType<T extends PracticeSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeSession[P]>
      : GetScalarType<T[P], AggregatePracticeSession[P]>
  }




  export type PracticeSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSessionWhereInput
    orderBy?: PracticeSessionOrderByWithAggregationInput | PracticeSessionOrderByWithAggregationInput[]
    by: PracticeSessionScalarFieldEnum[] | PracticeSessionScalarFieldEnum
    having?: PracticeSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeSessionCountAggregateInputType | true
    _avg?: PracticeSessionAvgAggregateInputType
    _sum?: PracticeSessionSumAggregateInputType
    _min?: PracticeSessionMinAggregateInputType
    _max?: PracticeSessionMaxAggregateInputType
  }

  export type PracticeSessionGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    targetSyllableId: string
    audioFileId: string | null
    isCorrect: boolean
    score: number
    _count: PracticeSessionCountAggregateOutputType | null
    _avg: PracticeSessionAvgAggregateOutputType | null
    _sum: PracticeSessionSumAggregateOutputType | null
    _min: PracticeSessionMinAggregateOutputType | null
    _max: PracticeSessionMaxAggregateOutputType | null
  }

  type GetPracticeSessionGroupByPayload<T extends PracticeSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeSessionGroupByOutputType[P]>
        }
      >
    >


  export type PracticeSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    targetSyllableId?: boolean
    audioFileId?: boolean
    isCorrect?: boolean
    score?: boolean
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    prediction?: boolean | PracticeSession$predictionArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type PracticeSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    targetSyllableId?: boolean
    audioFileId?: boolean
    isCorrect?: boolean
    score?: boolean
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type PracticeSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    targetSyllableId?: boolean
    audioFileId?: boolean
    isCorrect?: boolean
    score?: boolean
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type PracticeSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    targetSyllableId?: boolean
    audioFileId?: boolean
    isCorrect?: boolean
    score?: boolean
  }

  export type PracticeSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "targetSyllableId" | "audioFileId" | "isCorrect" | "score", ExtArgs["result"]["practiceSession"]>
  export type PracticeSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    prediction?: boolean | PracticeSession$predictionArgs<ExtArgs>
  }
  export type PracticeSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PracticeSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
    audioFile?: boolean | PracticeSession$audioFileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PracticeSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PracticeSession"
    objects: {
      targetSyllable: Prisma.$SyllablePayload<ExtArgs>
      audioFile: Prisma.$AudioFilePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      prediction: Prisma.$PredictionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      targetSyllableId: string
      audioFileId: string | null
      isCorrect: boolean
      score: number
    }, ExtArgs["result"]["practiceSession"]>
    composites: {}
  }

  type PracticeSessionGetPayload<S extends boolean | null | undefined | PracticeSessionDefaultArgs> = $Result.GetResult<Prisma.$PracticeSessionPayload, S>

  type PracticeSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PracticeSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticeSessionCountAggregateInputType | true
    }

  export interface PracticeSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PracticeSession'], meta: { name: 'PracticeSession' } }
    /**
     * Find zero or one PracticeSession that matches the filter.
     * @param {PracticeSessionFindUniqueArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PracticeSessionFindUniqueArgs>(args: SelectSubset<T, PracticeSessionFindUniqueArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PracticeSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PracticeSessionFindUniqueOrThrowArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PracticeSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PracticeSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionFindFirstArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PracticeSessionFindFirstArgs>(args?: SelectSubset<T, PracticeSessionFindFirstArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionFindFirstOrThrowArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PracticeSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PracticeSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PracticeSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeSessions
     * const practiceSessions = await prisma.practiceSession.findMany()
     * 
     * // Get first 10 PracticeSessions
     * const practiceSessions = await prisma.practiceSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PracticeSessionFindManyArgs>(args?: SelectSubset<T, PracticeSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PracticeSession.
     * @param {PracticeSessionCreateArgs} args - Arguments to create a PracticeSession.
     * @example
     * // Create one PracticeSession
     * const PracticeSession = await prisma.practiceSession.create({
     *   data: {
     *     // ... data to create a PracticeSession
     *   }
     * })
     * 
     */
    create<T extends PracticeSessionCreateArgs>(args: SelectSubset<T, PracticeSessionCreateArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PracticeSessions.
     * @param {PracticeSessionCreateManyArgs} args - Arguments to create many PracticeSessions.
     * @example
     * // Create many PracticeSessions
     * const practiceSession = await prisma.practiceSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PracticeSessionCreateManyArgs>(args?: SelectSubset<T, PracticeSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticeSessions and returns the data saved in the database.
     * @param {PracticeSessionCreateManyAndReturnArgs} args - Arguments to create many PracticeSessions.
     * @example
     * // Create many PracticeSessions
     * const practiceSession = await prisma.practiceSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticeSessions and only return the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PracticeSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PracticeSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PracticeSession.
     * @param {PracticeSessionDeleteArgs} args - Arguments to delete one PracticeSession.
     * @example
     * // Delete one PracticeSession
     * const PracticeSession = await prisma.practiceSession.delete({
     *   where: {
     *     // ... filter to delete one PracticeSession
     *   }
     * })
     * 
     */
    delete<T extends PracticeSessionDeleteArgs>(args: SelectSubset<T, PracticeSessionDeleteArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PracticeSession.
     * @param {PracticeSessionUpdateArgs} args - Arguments to update one PracticeSession.
     * @example
     * // Update one PracticeSession
     * const practiceSession = await prisma.practiceSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PracticeSessionUpdateArgs>(args: SelectSubset<T, PracticeSessionUpdateArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PracticeSessions.
     * @param {PracticeSessionDeleteManyArgs} args - Arguments to filter PracticeSessions to delete.
     * @example
     * // Delete a few PracticeSessions
     * const { count } = await prisma.practiceSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PracticeSessionDeleteManyArgs>(args?: SelectSubset<T, PracticeSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeSessions
     * const practiceSession = await prisma.practiceSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PracticeSessionUpdateManyArgs>(args: SelectSubset<T, PracticeSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeSessions and returns the data updated in the database.
     * @param {PracticeSessionUpdateManyAndReturnArgs} args - Arguments to update many PracticeSessions.
     * @example
     * // Update many PracticeSessions
     * const practiceSession = await prisma.practiceSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PracticeSessions and only return the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PracticeSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PracticeSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PracticeSession.
     * @param {PracticeSessionUpsertArgs} args - Arguments to update or create a PracticeSession.
     * @example
     * // Update or create a PracticeSession
     * const practiceSession = await prisma.practiceSession.upsert({
     *   create: {
     *     // ... data to create a PracticeSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeSession we want to update
     *   }
     * })
     */
    upsert<T extends PracticeSessionUpsertArgs>(args: SelectSubset<T, PracticeSessionUpsertArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PracticeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionCountArgs} args - Arguments to filter PracticeSessions to count.
     * @example
     * // Count the number of PracticeSessions
     * const count = await prisma.practiceSession.count({
     *   where: {
     *     // ... the filter for the PracticeSessions we want to count
     *   }
     * })
    **/
    count<T extends PracticeSessionCountArgs>(
      args?: Subset<T, PracticeSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PracticeSessionAggregateArgs>(args: Subset<T, PracticeSessionAggregateArgs>): Prisma.PrismaPromise<GetPracticeSessionAggregateType<T>>

    /**
     * Group by PracticeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PracticeSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PracticeSessionGroupByArgs['orderBy'] }
        : { orderBy?: PracticeSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PracticeSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PracticeSession model
   */
  readonly fields: PracticeSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PracticeSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PracticeSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targetSyllable<T extends SyllableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyllableDefaultArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audioFile<T extends PracticeSession$audioFileArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSession$audioFileArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prediction<T extends PracticeSession$predictionArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSession$predictionArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PracticeSession model
   */
  interface PracticeSessionFieldRefs {
    readonly id: FieldRef<"PracticeSession", 'String'>
    readonly userId: FieldRef<"PracticeSession", 'String'>
    readonly createdAt: FieldRef<"PracticeSession", 'DateTime'>
    readonly targetSyllableId: FieldRef<"PracticeSession", 'String'>
    readonly audioFileId: FieldRef<"PracticeSession", 'String'>
    readonly isCorrect: FieldRef<"PracticeSession", 'Boolean'>
    readonly score: FieldRef<"PracticeSession", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PracticeSession findUnique
   */
  export type PracticeSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSession to fetch.
     */
    where: PracticeSessionWhereUniqueInput
  }

  /**
   * PracticeSession findUniqueOrThrow
   */
  export type PracticeSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSession to fetch.
     */
    where: PracticeSessionWhereUniqueInput
  }

  /**
   * PracticeSession findFirst
   */
  export type PracticeSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSession to fetch.
     */
    where?: PracticeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSessions to fetch.
     */
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeSessions.
     */
    cursor?: PracticeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeSessions.
     */
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * PracticeSession findFirstOrThrow
   */
  export type PracticeSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSession to fetch.
     */
    where?: PracticeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSessions to fetch.
     */
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeSessions.
     */
    cursor?: PracticeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeSessions.
     */
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * PracticeSession findMany
   */
  export type PracticeSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSessions to fetch.
     */
    where?: PracticeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSessions to fetch.
     */
    orderBy?: PracticeSessionOrderByWithRelationInput | PracticeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PracticeSessions.
     */
    cursor?: PracticeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeSessions.
     */
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * PracticeSession create
   */
  export type PracticeSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PracticeSession.
     */
    data: XOR<PracticeSessionCreateInput, PracticeSessionUncheckedCreateInput>
  }

  /**
   * PracticeSession createMany
   */
  export type PracticeSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PracticeSessions.
     */
    data: PracticeSessionCreateManyInput | PracticeSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PracticeSession createManyAndReturn
   */
  export type PracticeSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PracticeSessions.
     */
    data: PracticeSessionCreateManyInput | PracticeSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PracticeSession update
   */
  export type PracticeSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PracticeSession.
     */
    data: XOR<PracticeSessionUpdateInput, PracticeSessionUncheckedUpdateInput>
    /**
     * Choose, which PracticeSession to update.
     */
    where: PracticeSessionWhereUniqueInput
  }

  /**
   * PracticeSession updateMany
   */
  export type PracticeSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PracticeSessions.
     */
    data: XOR<PracticeSessionUpdateManyMutationInput, PracticeSessionUncheckedUpdateManyInput>
    /**
     * Filter which PracticeSessions to update
     */
    where?: PracticeSessionWhereInput
    /**
     * Limit how many PracticeSessions to update.
     */
    limit?: number
  }

  /**
   * PracticeSession updateManyAndReturn
   */
  export type PracticeSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * The data used to update PracticeSessions.
     */
    data: XOR<PracticeSessionUpdateManyMutationInput, PracticeSessionUncheckedUpdateManyInput>
    /**
     * Filter which PracticeSessions to update
     */
    where?: PracticeSessionWhereInput
    /**
     * Limit how many PracticeSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PracticeSession upsert
   */
  export type PracticeSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PracticeSession to update in case it exists.
     */
    where: PracticeSessionWhereUniqueInput
    /**
     * In case the PracticeSession found by the `where` argument doesn't exist, create a new PracticeSession with this data.
     */
    create: XOR<PracticeSessionCreateInput, PracticeSessionUncheckedCreateInput>
    /**
     * In case the PracticeSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PracticeSessionUpdateInput, PracticeSessionUncheckedUpdateInput>
  }

  /**
   * PracticeSession delete
   */
  export type PracticeSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
    /**
     * Filter which PracticeSession to delete.
     */
    where: PracticeSessionWhereUniqueInput
  }

  /**
   * PracticeSession deleteMany
   */
  export type PracticeSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeSessions to delete
     */
    where?: PracticeSessionWhereInput
    /**
     * Limit how many PracticeSessions to delete.
     */
    limit?: number
  }

  /**
   * PracticeSession.audioFile
   */
  export type PracticeSession$audioFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    where?: AudioFileWhereInput
  }

  /**
   * PracticeSession.prediction
   */
  export type PracticeSession$predictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
  }

  /**
   * PracticeSession without action
   */
  export type PracticeSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSession
     */
    select?: PracticeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeSession
     */
    omit?: PracticeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSessionInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionMinAggregateOutputType = {
    id: string | null
    practiceSessionId: string | null
    audioFileId: string | null
    predictedSyllableId: string | null
    affirmation: string | null
    createdAt: Date | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: string | null
    practiceSessionId: string | null
    audioFileId: string | null
    predictedSyllableId: string | null
    affirmation: string | null
    createdAt: Date | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    practiceSessionId: number
    audioFileId: number
    predictedSyllableId: number
    affirmation: number
    createdAt: number
    _all: number
  }


  export type PredictionMinAggregateInputType = {
    id?: true
    practiceSessionId?: true
    audioFileId?: true
    predictedSyllableId?: true
    affirmation?: true
    createdAt?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    practiceSessionId?: true
    audioFileId?: true
    predictedSyllableId?: true
    affirmation?: true
    createdAt?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    practiceSessionId?: true
    audioFileId?: true
    predictedSyllableId?: true
    affirmation?: true
    createdAt?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: string
    practiceSessionId: string
    audioFileId: string | null
    predictedSyllableId: string
    affirmation: string | null
    createdAt: Date
    _count: PredictionCountAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    audioFileId?: boolean
    predictedSyllableId?: boolean
    affirmation?: boolean
    createdAt?: boolean
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    audioFileId?: boolean
    predictedSyllableId?: boolean
    affirmation?: boolean
    createdAt?: boolean
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    audioFileId?: boolean
    predictedSyllableId?: boolean
    affirmation?: boolean
    createdAt?: boolean
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectScalar = {
    id?: boolean
    practiceSessionId?: boolean
    audioFileId?: boolean
    predictedSyllableId?: boolean
    affirmation?: boolean
    createdAt?: boolean
  }

  export type PredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "practiceSessionId" | "audioFileId" | "predictedSyllableId" | "affirmation" | "createdAt", ExtArgs["result"]["prediction"]>
  export type PredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }
  export type PredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }
  export type PredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | PracticeSessionDefaultArgs<ExtArgs>
    audioFile?: boolean | Prediction$audioFileArgs<ExtArgs>
    predictedSyllable?: boolean | SyllableDefaultArgs<ExtArgs>
  }

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {
      practiceSession: Prisma.$PracticeSessionPayload<ExtArgs>
      audioFile: Prisma.$AudioFilePayload<ExtArgs> | null
      predictedSyllable: Prisma.$SyllablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      practiceSessionId: string
      audioFileId: string | null
      predictedSyllableId: string
      affirmation: string | null
      createdAt: Date
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Predictions and returns the data saved in the database.
     * @param {PredictionCreateManyAndReturnArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions and returns the data updated in the database.
     * @param {PredictionUpdateManyAndReturnArgs} args - Arguments to update many Predictions.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practiceSession<T extends PracticeSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSessionDefaultArgs<ExtArgs>>): Prisma__PracticeSessionClient<$Result.GetResult<Prisma.$PracticeSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audioFile<T extends Prediction$audioFileArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$audioFileArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    predictedSyllable<T extends SyllableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyllableDefaultArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prediction model
   */
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'String'>
    readonly practiceSessionId: FieldRef<"Prediction", 'String'>
    readonly audioFileId: FieldRef<"Prediction", 'String'>
    readonly predictedSyllableId: FieldRef<"Prediction", 'String'>
    readonly affirmation: FieldRef<"Prediction", 'String'>
    readonly createdAt: FieldRef<"Prediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prediction createManyAndReturn
   */
  export type PredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Prediction updateManyAndReturn
   */
  export type PredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Prediction.audioFile
   */
  export type Prediction$audioFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    where?: AudioFileWhereInput
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    createdAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    createdAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshTokenHash: number
    createdAt: number
    expiresAt: number
    revokedAt: number
    ip: number
    userAgent: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    createdAt?: true
    expiresAt?: true
    revokedAt?: true
    ip?: true
    userAgent?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    createdAt?: true
    expiresAt?: true
    revokedAt?: true
    ip?: true
    userAgent?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    createdAt?: true
    expiresAt?: true
    revokedAt?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: string
    refreshTokenHash: string
    createdAt: Date
    expiresAt: Date
    revokedAt: Date | null
    ip: string | null
    userAgent: string | null
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshTokenHash" | "createdAt" | "expiresAt" | "revokedAt" | "ip" | "userAgent", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshTokenHash: string
      createdAt: Date
      expiresAt: Date
      revokedAt: Date | null
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
    readonly refreshTokenHash: FieldRef<"AuthSession", 'String'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly revokedAt: FieldRef<"AuthSession", 'DateTime'>
    readonly ip: FieldRef<"AuthSession", 'String'>
    readonly userAgent: FieldRef<"AuthSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model WeeklySummary
   */

  export type AggregateWeeklySummary = {
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  export type WeeklySummaryAvgAggregateOutputType = {
    totalPracticeCount: number | null
    overallAccuracy: number | null
  }

  export type WeeklySummarySumAggregateOutputType = {
    totalPracticeCount: number | null
    overallAccuracy: number | null
  }

  export type WeeklySummaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    totalPracticeCount: number | null
    overallAccuracy: number | null
    mostPracticedId: string | null
    needsImprovementId: string | null
    geminiWeeklyReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklySummaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    totalPracticeCount: number | null
    overallAccuracy: number | null
    mostPracticedId: string | null
    needsImprovementId: string | null
    geminiWeeklyReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklySummaryCountAggregateOutputType = {
    id: number
    userId: number
    weekStart: number
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId: number
    needsImprovementId: number
    geminiWeeklyReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeeklySummaryAvgAggregateInputType = {
    totalPracticeCount?: true
    overallAccuracy?: true
  }

  export type WeeklySummarySumAggregateInputType = {
    totalPracticeCount?: true
    overallAccuracy?: true
  }

  export type WeeklySummaryMinAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    totalPracticeCount?: true
    overallAccuracy?: true
    mostPracticedId?: true
    needsImprovementId?: true
    geminiWeeklyReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklySummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    totalPracticeCount?: true
    overallAccuracy?: true
    mostPracticedId?: true
    needsImprovementId?: true
    geminiWeeklyReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklySummaryCountAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    totalPracticeCount?: true
    overallAccuracy?: true
    mostPracticedId?: true
    needsImprovementId?: true
    geminiWeeklyReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeeklySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummary to aggregate.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySummaries
    **/
    _count?: true | WeeklySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type GetWeeklySummaryAggregateType<T extends WeeklySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySummary[P]>
      : GetScalarType<T[P], AggregateWeeklySummary[P]>
  }




  export type WeeklySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithAggregationInput | WeeklySummaryOrderByWithAggregationInput[]
    by: WeeklySummaryScalarFieldEnum[] | WeeklySummaryScalarFieldEnum
    having?: WeeklySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySummaryCountAggregateInputType | true
    _avg?: WeeklySummaryAvgAggregateInputType
    _sum?: WeeklySummarySumAggregateInputType
    _min?: WeeklySummaryMinAggregateInputType
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type WeeklySummaryGroupByOutputType = {
    id: string
    userId: string
    weekStart: Date
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId: string | null
    needsImprovementId: string | null
    geminiWeeklyReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  type GetWeeklySummaryGroupByPayload<T extends WeeklySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    totalPracticeCount?: boolean
    overallAccuracy?: boolean
    mostPracticedId?: boolean
    needsImprovementId?: boolean
    geminiWeeklyReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    totalPracticeCount?: boolean
    overallAccuracy?: boolean
    mostPracticedId?: boolean
    needsImprovementId?: boolean
    geminiWeeklyReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    totalPracticeCount?: boolean
    overallAccuracy?: boolean
    mostPracticedId?: boolean
    needsImprovementId?: boolean
    geminiWeeklyReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectScalar = {
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    totalPracticeCount?: boolean
    overallAccuracy?: boolean
    mostPracticedId?: boolean
    needsImprovementId?: boolean
    geminiWeeklyReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeeklySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "weekStart" | "totalPracticeCount" | "overallAccuracy" | "mostPracticedId" | "needsImprovementId" | "geminiWeeklyReport" | "createdAt" | "updatedAt", ExtArgs["result"]["weeklySummary"]>
  export type WeeklySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mostPracticed?: boolean | WeeklySummary$mostPracticedArgs<ExtArgs>
    needsImprovement?: boolean | WeeklySummary$needsImprovementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySummary"
    objects: {
      mostPracticed: Prisma.$SyllablePayload<ExtArgs> | null
      needsImprovement: Prisma.$SyllablePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weekStart: Date
      totalPracticeCount: number
      overallAccuracy: number
      mostPracticedId: string | null
      needsImprovementId: string | null
      geminiWeeklyReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weeklySummary"]>
    composites: {}
  }

  type WeeklySummaryGetPayload<S extends boolean | null | undefined | WeeklySummaryDefaultArgs> = $Result.GetResult<Prisma.$WeeklySummaryPayload, S>

  type WeeklySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklySummaryCountAggregateInputType | true
    }

  export interface WeeklySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySummary'], meta: { name: 'WeeklySummary' } }
    /**
     * Find zero or one WeeklySummary that matches the filter.
     * @param {WeeklySummaryFindUniqueArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySummaryFindUniqueArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklySummaryFindUniqueOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySummaryFindFirstArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany()
     * 
     * // Get first 10 WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySummaryFindManyArgs>(args?: SelectSubset<T, WeeklySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklySummary.
     * @param {WeeklySummaryCreateArgs} args - Arguments to create a WeeklySummary.
     * @example
     * // Create one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.create({
     *   data: {
     *     // ... data to create a WeeklySummary
     *   }
     * })
     * 
     */
    create<T extends WeeklySummaryCreateArgs>(args: SelectSubset<T, WeeklySummaryCreateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklySummaries.
     * @param {WeeklySummaryCreateManyArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySummaryCreateManyArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklySummaries and returns the data saved in the database.
     * @param {WeeklySummaryCreateManyAndReturnArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklySummary.
     * @param {WeeklySummaryDeleteArgs} args - Arguments to delete one WeeklySummary.
     * @example
     * // Delete one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.delete({
     *   where: {
     *     // ... filter to delete one WeeklySummary
     *   }
     * })
     * 
     */
    delete<T extends WeeklySummaryDeleteArgs>(args: SelectSubset<T, WeeklySummaryDeleteArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklySummary.
     * @param {WeeklySummaryUpdateArgs} args - Arguments to update one WeeklySummary.
     * @example
     * // Update one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySummaryUpdateArgs>(args: SelectSubset<T, WeeklySummaryUpdateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklySummaries.
     * @param {WeeklySummaryDeleteManyArgs} args - Arguments to filter WeeklySummaries to delete.
     * @example
     * // Delete a few WeeklySummaries
     * const { count } = await prisma.weeklySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySummaryDeleteManyArgs>(args?: SelectSubset<T, WeeklySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySummaryUpdateManyArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries and returns the data updated in the database.
     * @param {WeeklySummaryUpdateManyAndReturnArgs} args - Arguments to update many WeeklySummaries.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklySummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklySummary.
     * @param {WeeklySummaryUpsertArgs} args - Arguments to update or create a WeeklySummary.
     * @example
     * // Update or create a WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.upsert({
     *   create: {
     *     // ... data to create a WeeklySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySummary we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySummaryUpsertArgs>(args: SelectSubset<T, WeeklySummaryUpsertArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryCountArgs} args - Arguments to filter WeeklySummaries to count.
     * @example
     * // Count the number of WeeklySummaries
     * const count = await prisma.weeklySummary.count({
     *   where: {
     *     // ... the filter for the WeeklySummaries we want to count
     *   }
     * })
    **/
    count<T extends WeeklySummaryCountArgs>(
      args?: Subset<T, WeeklySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklySummaryAggregateArgs>(args: Subset<T, WeeklySummaryAggregateArgs>): Prisma.PrismaPromise<GetWeeklySummaryAggregateType<T>>

    /**
     * Group by WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySummaryGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySummary model
   */
  readonly fields: WeeklySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mostPracticed<T extends WeeklySummary$mostPracticedArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummary$mostPracticedArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    needsImprovement<T extends WeeklySummary$needsImprovementArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummary$needsImprovementArgs<ExtArgs>>): Prisma__SyllableClient<$Result.GetResult<Prisma.$SyllablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklySummary model
   */
  interface WeeklySummaryFieldRefs {
    readonly id: FieldRef<"WeeklySummary", 'String'>
    readonly userId: FieldRef<"WeeklySummary", 'String'>
    readonly weekStart: FieldRef<"WeeklySummary", 'DateTime'>
    readonly totalPracticeCount: FieldRef<"WeeklySummary", 'Int'>
    readonly overallAccuracy: FieldRef<"WeeklySummary", 'Float'>
    readonly mostPracticedId: FieldRef<"WeeklySummary", 'String'>
    readonly needsImprovementId: FieldRef<"WeeklySummary", 'String'>
    readonly geminiWeeklyReport: FieldRef<"WeeklySummary", 'String'>
    readonly createdAt: FieldRef<"WeeklySummary", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySummary findUnique
   */
  export type WeeklySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findUniqueOrThrow
   */
  export type WeeklySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findFirst
   */
  export type WeeklySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findFirstOrThrow
   */
  export type WeeklySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findMany
   */
  export type WeeklySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummaries to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary create
   */
  export type WeeklySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySummary.
     */
    data: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
  }

  /**
   * WeeklySummary createMany
   */
  export type WeeklySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklySummary createManyAndReturn
   */
  export type WeeklySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySummary update
   */
  export type WeeklySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySummary.
     */
    data: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
    /**
     * Choose, which WeeklySummary to update.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary updateMany
   */
  export type WeeklySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
  }

  /**
   * WeeklySummary updateManyAndReturn
   */
  export type WeeklySummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySummary upsert
   */
  export type WeeklySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySummary to update in case it exists.
     */
    where: WeeklySummaryWhereUniqueInput
    /**
     * In case the WeeklySummary found by the `where` argument doesn't exist, create a new WeeklySummary with this data.
     */
    create: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
    /**
     * In case the WeeklySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
  }

  /**
   * WeeklySummary delete
   */
  export type WeeklySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter which WeeklySummary to delete.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary deleteMany
   */
  export type WeeklySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummaries to delete
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to delete.
     */
    limit?: number
  }

  /**
   * WeeklySummary.mostPracticed
   */
  export type WeeklySummary$mostPracticedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    where?: SyllableWhereInput
  }

  /**
   * WeeklySummary.needsImprovement
   */
  export type WeeklySummary$needsImprovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllable
     */
    select?: SyllableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllable
     */
    omit?: SyllableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllableInclude<ExtArgs> | null
    where?: SyllableWhereInput
  }

  /**
   * WeeklySummary without action
   */
  export type WeeklySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SyllableScalarFieldEnum: {
    id: 'id',
    code: 'code',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type SyllableScalarFieldEnum = (typeof SyllableScalarFieldEnum)[keyof typeof SyllableScalarFieldEnum]


  export const AudioFileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    s3Bucket: 's3Bucket',
    s3Key: 's3Key',
    s3Region: 's3Region',
    contentType: 'contentType',
    sizeBytes: 'sizeBytes',
    sampleRate: 'sampleRate',
    channels: 'channels',
    bitsPerSample: 'bitsPerSample',
    durationMs: 'durationMs',
    createdAt: 'createdAt'
  };

  export type AudioFileScalarFieldEnum = (typeof AudioFileScalarFieldEnum)[keyof typeof AudioFileScalarFieldEnum]


  export const PracticeSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    targetSyllableId: 'targetSyllableId',
    audioFileId: 'audioFileId',
    isCorrect: 'isCorrect',
    score: 'score'
  };

  export type PracticeSessionScalarFieldEnum = (typeof PracticeSessionScalarFieldEnum)[keyof typeof PracticeSessionScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
    id: 'id',
    practiceSessionId: 'practiceSessionId',
    audioFileId: 'audioFileId',
    predictedSyllableId: 'predictedSyllableId',
    affirmation: 'affirmation',
    createdAt: 'createdAt'
  };

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const WeeklySummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekStart: 'weekStart',
    totalPracticeCount: 'totalPracticeCount',
    overallAccuracy: 'overallAccuracy',
    mostPracticedId: 'mostPracticedId',
    needsImprovementId: 'needsImprovementId',
    geminiWeeklyReport: 'geminiWeeklyReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeeklySummaryScalarFieldEnum = (typeof WeeklySummaryScalarFieldEnum)[keyof typeof WeeklySummaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: PracticeSessionListRelationFilter
    audioFiles?: AudioFileListRelationFilter
    authSessions?: AuthSessionListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: PracticeSessionOrderByRelationAggregateInput
    audioFiles?: AudioFileOrderByRelationAggregateInput
    authSessions?: AuthSessionOrderByRelationAggregateInput
    weeklySummaries?: WeeklySummaryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: PracticeSessionListRelationFilter
    audioFiles?: AudioFileListRelationFilter
    authSessions?: AuthSessionListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SyllableWhereInput = {
    AND?: SyllableWhereInput | SyllableWhereInput[]
    OR?: SyllableWhereInput[]
    NOT?: SyllableWhereInput | SyllableWhereInput[]
    id?: StringFilter<"Syllable"> | string
    code?: StringFilter<"Syllable"> | string
    label?: StringNullableFilter<"Syllable"> | string | null
    createdAt?: DateTimeFilter<"Syllable"> | Date | string
    targetSessions?: PracticeSessionListRelationFilter
    predictedIn?: PredictionListRelationFilter
    weeklyMostPracticed?: WeeklySummaryListRelationFilter
    weeklyNeedsImprovement?: WeeklySummaryListRelationFilter
  }

  export type SyllableOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    targetSessions?: PracticeSessionOrderByRelationAggregateInput
    predictedIn?: PredictionOrderByRelationAggregateInput
    weeklyMostPracticed?: WeeklySummaryOrderByRelationAggregateInput
    weeklyNeedsImprovement?: WeeklySummaryOrderByRelationAggregateInput
  }

  export type SyllableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SyllableWhereInput | SyllableWhereInput[]
    OR?: SyllableWhereInput[]
    NOT?: SyllableWhereInput | SyllableWhereInput[]
    label?: StringNullableFilter<"Syllable"> | string | null
    createdAt?: DateTimeFilter<"Syllable"> | Date | string
    targetSessions?: PracticeSessionListRelationFilter
    predictedIn?: PredictionListRelationFilter
    weeklyMostPracticed?: WeeklySummaryListRelationFilter
    weeklyNeedsImprovement?: WeeklySummaryListRelationFilter
  }, "id" | "code">

  export type SyllableOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SyllableCountOrderByAggregateInput
    _max?: SyllableMaxOrderByAggregateInput
    _min?: SyllableMinOrderByAggregateInput
  }

  export type SyllableScalarWhereWithAggregatesInput = {
    AND?: SyllableScalarWhereWithAggregatesInput | SyllableScalarWhereWithAggregatesInput[]
    OR?: SyllableScalarWhereWithAggregatesInput[]
    NOT?: SyllableScalarWhereWithAggregatesInput | SyllableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Syllable"> | string
    code?: StringWithAggregatesFilter<"Syllable"> | string
    label?: StringNullableWithAggregatesFilter<"Syllable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Syllable"> | Date | string
  }

  export type AudioFileWhereInput = {
    AND?: AudioFileWhereInput | AudioFileWhereInput[]
    OR?: AudioFileWhereInput[]
    NOT?: AudioFileWhereInput | AudioFileWhereInput[]
    id?: StringFilter<"AudioFile"> | string
    userId?: StringFilter<"AudioFile"> | string
    s3Bucket?: StringFilter<"AudioFile"> | string
    s3Key?: StringFilter<"AudioFile"> | string
    s3Region?: StringNullableFilter<"AudioFile"> | string | null
    contentType?: StringNullableFilter<"AudioFile"> | string | null
    sizeBytes?: IntNullableFilter<"AudioFile"> | number | null
    sampleRate?: IntNullableFilter<"AudioFile"> | number | null
    channels?: IntNullableFilter<"AudioFile"> | number | null
    bitsPerSample?: IntNullableFilter<"AudioFile"> | number | null
    durationMs?: IntNullableFilter<"AudioFile"> | number | null
    createdAt?: DateTimeFilter<"AudioFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: PracticeSessionListRelationFilter
    predictions?: PredictionListRelationFilter
  }

  export type AudioFileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Bucket?: SortOrder
    s3Key?: SortOrder
    s3Region?: SortOrderInput | SortOrder
    contentType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    bitsPerSample?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sessions?: PracticeSessionOrderByRelationAggregateInput
    predictions?: PredictionOrderByRelationAggregateInput
  }

  export type AudioFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Bucket_s3Key?: AudioFileS3BucketS3KeyCompoundUniqueInput
    AND?: AudioFileWhereInput | AudioFileWhereInput[]
    OR?: AudioFileWhereInput[]
    NOT?: AudioFileWhereInput | AudioFileWhereInput[]
    userId?: StringFilter<"AudioFile"> | string
    s3Bucket?: StringFilter<"AudioFile"> | string
    s3Key?: StringFilter<"AudioFile"> | string
    s3Region?: StringNullableFilter<"AudioFile"> | string | null
    contentType?: StringNullableFilter<"AudioFile"> | string | null
    sizeBytes?: IntNullableFilter<"AudioFile"> | number | null
    sampleRate?: IntNullableFilter<"AudioFile"> | number | null
    channels?: IntNullableFilter<"AudioFile"> | number | null
    bitsPerSample?: IntNullableFilter<"AudioFile"> | number | null
    durationMs?: IntNullableFilter<"AudioFile"> | number | null
    createdAt?: DateTimeFilter<"AudioFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: PracticeSessionListRelationFilter
    predictions?: PredictionListRelationFilter
  }, "id" | "s3Bucket_s3Key">

  export type AudioFileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Bucket?: SortOrder
    s3Key?: SortOrder
    s3Region?: SortOrderInput | SortOrder
    contentType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    bitsPerSample?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AudioFileCountOrderByAggregateInput
    _avg?: AudioFileAvgOrderByAggregateInput
    _max?: AudioFileMaxOrderByAggregateInput
    _min?: AudioFileMinOrderByAggregateInput
    _sum?: AudioFileSumOrderByAggregateInput
  }

  export type AudioFileScalarWhereWithAggregatesInput = {
    AND?: AudioFileScalarWhereWithAggregatesInput | AudioFileScalarWhereWithAggregatesInput[]
    OR?: AudioFileScalarWhereWithAggregatesInput[]
    NOT?: AudioFileScalarWhereWithAggregatesInput | AudioFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioFile"> | string
    userId?: StringWithAggregatesFilter<"AudioFile"> | string
    s3Bucket?: StringWithAggregatesFilter<"AudioFile"> | string
    s3Key?: StringWithAggregatesFilter<"AudioFile"> | string
    s3Region?: StringNullableWithAggregatesFilter<"AudioFile"> | string | null
    contentType?: StringNullableWithAggregatesFilter<"AudioFile"> | string | null
    sizeBytes?: IntNullableWithAggregatesFilter<"AudioFile"> | number | null
    sampleRate?: IntNullableWithAggregatesFilter<"AudioFile"> | number | null
    channels?: IntNullableWithAggregatesFilter<"AudioFile"> | number | null
    bitsPerSample?: IntNullableWithAggregatesFilter<"AudioFile"> | number | null
    durationMs?: IntNullableWithAggregatesFilter<"AudioFile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AudioFile"> | Date | string
  }

  export type PracticeSessionWhereInput = {
    AND?: PracticeSessionWhereInput | PracticeSessionWhereInput[]
    OR?: PracticeSessionWhereInput[]
    NOT?: PracticeSessionWhereInput | PracticeSessionWhereInput[]
    id?: StringFilter<"PracticeSession"> | string
    userId?: StringFilter<"PracticeSession"> | string
    createdAt?: DateTimeFilter<"PracticeSession"> | Date | string
    targetSyllableId?: StringFilter<"PracticeSession"> | string
    audioFileId?: StringNullableFilter<"PracticeSession"> | string | null
    isCorrect?: BoolFilter<"PracticeSession"> | boolean
    score?: FloatFilter<"PracticeSession"> | number
    targetSyllable?: XOR<SyllableScalarRelationFilter, SyllableWhereInput>
    audioFile?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prediction?: XOR<PredictionNullableScalarRelationFilter, PredictionWhereInput> | null
  }

  export type PracticeSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    targetSyllableId?: SortOrder
    audioFileId?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    targetSyllable?: SyllableOrderByWithRelationInput
    audioFile?: AudioFileOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    prediction?: PredictionOrderByWithRelationInput
  }

  export type PracticeSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PracticeSessionWhereInput | PracticeSessionWhereInput[]
    OR?: PracticeSessionWhereInput[]
    NOT?: PracticeSessionWhereInput | PracticeSessionWhereInput[]
    userId?: StringFilter<"PracticeSession"> | string
    createdAt?: DateTimeFilter<"PracticeSession"> | Date | string
    targetSyllableId?: StringFilter<"PracticeSession"> | string
    audioFileId?: StringNullableFilter<"PracticeSession"> | string | null
    isCorrect?: BoolFilter<"PracticeSession"> | boolean
    score?: FloatFilter<"PracticeSession"> | number
    targetSyllable?: XOR<SyllableScalarRelationFilter, SyllableWhereInput>
    audioFile?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prediction?: XOR<PredictionNullableScalarRelationFilter, PredictionWhereInput> | null
  }, "id">

  export type PracticeSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    targetSyllableId?: SortOrder
    audioFileId?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    _count?: PracticeSessionCountOrderByAggregateInput
    _avg?: PracticeSessionAvgOrderByAggregateInput
    _max?: PracticeSessionMaxOrderByAggregateInput
    _min?: PracticeSessionMinOrderByAggregateInput
    _sum?: PracticeSessionSumOrderByAggregateInput
  }

  export type PracticeSessionScalarWhereWithAggregatesInput = {
    AND?: PracticeSessionScalarWhereWithAggregatesInput | PracticeSessionScalarWhereWithAggregatesInput[]
    OR?: PracticeSessionScalarWhereWithAggregatesInput[]
    NOT?: PracticeSessionScalarWhereWithAggregatesInput | PracticeSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PracticeSession"> | string
    userId?: StringWithAggregatesFilter<"PracticeSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PracticeSession"> | Date | string
    targetSyllableId?: StringWithAggregatesFilter<"PracticeSession"> | string
    audioFileId?: StringNullableWithAggregatesFilter<"PracticeSession"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"PracticeSession"> | boolean
    score?: FloatWithAggregatesFilter<"PracticeSession"> | number
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: StringFilter<"Prediction"> | string
    practiceSessionId?: StringFilter<"Prediction"> | string
    audioFileId?: StringNullableFilter<"Prediction"> | string | null
    predictedSyllableId?: StringFilter<"Prediction"> | string
    affirmation?: StringNullableFilter<"Prediction"> | string | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    practiceSession?: XOR<PracticeSessionScalarRelationFilter, PracticeSessionWhereInput>
    audioFile?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
    predictedSyllable?: XOR<SyllableScalarRelationFilter, SyllableWhereInput>
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    audioFileId?: SortOrderInput | SortOrder
    predictedSyllableId?: SortOrder
    affirmation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    practiceSession?: PracticeSessionOrderByWithRelationInput
    audioFile?: AudioFileOrderByWithRelationInput
    predictedSyllable?: SyllableOrderByWithRelationInput
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    practiceSessionId?: string
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    audioFileId?: StringNullableFilter<"Prediction"> | string | null
    predictedSyllableId?: StringFilter<"Prediction"> | string
    affirmation?: StringNullableFilter<"Prediction"> | string | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    practiceSession?: XOR<PracticeSessionScalarRelationFilter, PracticeSessionWhereInput>
    audioFile?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
    predictedSyllable?: XOR<SyllableScalarRelationFilter, SyllableWhereInput>
  }, "id" | "practiceSessionId">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    audioFileId?: SortOrderInput | SortOrder
    predictedSyllableId?: SortOrder
    affirmation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prediction"> | string
    practiceSessionId?: StringWithAggregatesFilter<"Prediction"> | string
    audioFileId?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    predictedSyllableId?: StringWithAggregatesFilter<"Prediction"> | string
    affirmation?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    refreshTokenHash?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    ip?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: StringFilter<"AuthSession"> | string
    refreshTokenHash?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    ip?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
    refreshTokenHash?: StringWithAggregatesFilter<"AuthSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"AuthSession"> | Date | string | null
    ip?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
  }

  export type WeeklySummaryWhereInput = {
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    id?: StringFilter<"WeeklySummary"> | string
    userId?: StringFilter<"WeeklySummary"> | string
    weekStart?: DateTimeFilter<"WeeklySummary"> | Date | string
    totalPracticeCount?: IntFilter<"WeeklySummary"> | number
    overallAccuracy?: FloatFilter<"WeeklySummary"> | number
    mostPracticedId?: StringNullableFilter<"WeeklySummary"> | string | null
    needsImprovementId?: StringNullableFilter<"WeeklySummary"> | string | null
    geminiWeeklyReport?: StringNullableFilter<"WeeklySummary"> | string | null
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    mostPracticed?: XOR<SyllableNullableScalarRelationFilter, SyllableWhereInput> | null
    needsImprovement?: XOR<SyllableNullableScalarRelationFilter, SyllableWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklySummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
    mostPracticedId?: SortOrderInput | SortOrder
    needsImprovementId?: SortOrderInput | SortOrder
    geminiWeeklyReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mostPracticed?: SyllableOrderByWithRelationInput
    needsImprovement?: SyllableOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WeeklySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekStart?: WeeklySummaryUserIdWeekStartCompoundUniqueInput
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    userId?: StringFilter<"WeeklySummary"> | string
    weekStart?: DateTimeFilter<"WeeklySummary"> | Date | string
    totalPracticeCount?: IntFilter<"WeeklySummary"> | number
    overallAccuracy?: FloatFilter<"WeeklySummary"> | number
    mostPracticedId?: StringNullableFilter<"WeeklySummary"> | string | null
    needsImprovementId?: StringNullableFilter<"WeeklySummary"> | string | null
    geminiWeeklyReport?: StringNullableFilter<"WeeklySummary"> | string | null
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    mostPracticed?: XOR<SyllableNullableScalarRelationFilter, SyllableWhereInput> | null
    needsImprovement?: XOR<SyllableNullableScalarRelationFilter, SyllableWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_weekStart">

  export type WeeklySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
    mostPracticedId?: SortOrderInput | SortOrder
    needsImprovementId?: SortOrderInput | SortOrder
    geminiWeeklyReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeeklySummaryCountOrderByAggregateInput
    _avg?: WeeklySummaryAvgOrderByAggregateInput
    _max?: WeeklySummaryMaxOrderByAggregateInput
    _min?: WeeklySummaryMinOrderByAggregateInput
    _sum?: WeeklySummarySumOrderByAggregateInput
  }

  export type WeeklySummaryScalarWhereWithAggregatesInput = {
    AND?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    OR?: WeeklySummaryScalarWhereWithAggregatesInput[]
    NOT?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklySummary"> | string
    userId?: StringWithAggregatesFilter<"WeeklySummary"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    totalPracticeCount?: IntWithAggregatesFilter<"WeeklySummary"> | number
    overallAccuracy?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    mostPracticedId?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    needsImprovementId?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    geminiWeeklyReport?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyllableCreateInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableUncheckedCreateInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionUncheckedCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionUncheckedCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryUncheckedCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUncheckedUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUncheckedUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUncheckedUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableCreateManyInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
  }

  export type SyllableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyllableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFileCreateInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAudioFilesInput
    sessions?: PracticeSessionCreateNestedManyWithoutAudioFileInput
    predictions?: PredictionCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateInput = {
    id?: string
    userId: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutAudioFileInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudioFilesNestedInput
    sessions?: PracticeSessionUpdateManyWithoutAudioFileNestedInput
    predictions?: PredictionUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutAudioFileNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileCreateManyInput = {
    id?: string
    userId: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
  }

  export type AudioFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    isCorrect: boolean
    score: number
    targetSyllable: SyllableCreateNestedOneWithoutTargetSessionsInput
    audioFile?: AudioFileCreateNestedOneWithoutSessionsInput
    user: UserCreateNestedOneWithoutSessionsInput
    prediction?: PredictionCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    targetSyllableId: string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
    prediction?: PredictionUncheckedCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    targetSyllable?: SyllableUpdateOneRequiredWithoutTargetSessionsNestedInput
    audioFile?: AudioFileUpdateOneWithoutSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    prediction?: PredictionUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    prediction?: PredictionUncheckedUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    targetSyllableId: string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
  }

  export type PracticeSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type PracticeSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type PredictionCreateInput = {
    id?: string
    affirmation?: string | null
    createdAt?: Date | string
    practiceSession: PracticeSessionCreateNestedOneWithoutPredictionInput
    audioFile?: AudioFileCreateNestedOneWithoutPredictionsInput
    predictedSyllable: SyllableCreateNestedOneWithoutPredictedInInput
  }

  export type PredictionUncheckedCreateInput = {
    id?: string
    practiceSessionId: string
    audioFileId?: string | null
    predictedSyllableId: string
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSession?: PracticeSessionUpdateOneRequiredWithoutPredictionNestedInput
    audioFile?: AudioFileUpdateOneWithoutPredictionsNestedInput
    predictedSyllable?: SyllableUpdateOneRequiredWithoutPredictedInNestedInput
  }

  export type PredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedSyllableId?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateManyInput = {
    id?: string
    practiceSessionId: string
    audioFileId?: string | null
    predictedSyllableId: string
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedSyllableId?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateInput = {
    id?: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutAuthSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionCreateManyInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklySummaryCreateInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mostPracticed?: SyllableCreateNestedOneWithoutWeeklyMostPracticedInput
    needsImprovement?: SyllableCreateNestedOneWithoutWeeklyNeedsImprovementInput
    user: UserCreateNestedOneWithoutWeeklySummariesInput
  }

  export type WeeklySummaryUncheckedCreateInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mostPracticed?: SyllableUpdateOneWithoutWeeklyMostPracticedNestedInput
    needsImprovement?: SyllableUpdateOneWithoutWeeklyNeedsImprovementNestedInput
    user?: UserUpdateOneRequiredWithoutWeeklySummariesNestedInput
  }

  export type WeeklySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryCreateManyInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PracticeSessionListRelationFilter = {
    every?: PracticeSessionWhereInput
    some?: PracticeSessionWhereInput
    none?: PracticeSessionWhereInput
  }

  export type AudioFileListRelationFilter = {
    every?: AudioFileWhereInput
    some?: AudioFileWhereInput
    none?: AudioFileWhereInput
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type WeeklySummaryListRelationFilter = {
    every?: WeeklySummaryWhereInput
    some?: WeeklySummaryWhereInput
    none?: WeeklySummaryWhereInput
  }

  export type PracticeSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudioFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PredictionListRelationFilter = {
    every?: PredictionWhereInput
    some?: PredictionWhereInput
    none?: PredictionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyllableCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type SyllableMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type SyllableMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AudioFileS3BucketS3KeyCompoundUniqueInput = {
    s3Bucket: string
    s3Key: string
  }

  export type AudioFileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Bucket?: SortOrder
    s3Key?: SortOrder
    s3Region?: SortOrder
    contentType?: SortOrder
    sizeBytes?: SortOrder
    sampleRate?: SortOrder
    channels?: SortOrder
    bitsPerSample?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioFileAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
    sampleRate?: SortOrder
    channels?: SortOrder
    bitsPerSample?: SortOrder
    durationMs?: SortOrder
  }

  export type AudioFileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Bucket?: SortOrder
    s3Key?: SortOrder
    s3Region?: SortOrder
    contentType?: SortOrder
    sizeBytes?: SortOrder
    sampleRate?: SortOrder
    channels?: SortOrder
    bitsPerSample?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioFileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Bucket?: SortOrder
    s3Key?: SortOrder
    s3Region?: SortOrder
    contentType?: SortOrder
    sizeBytes?: SortOrder
    sampleRate?: SortOrder
    channels?: SortOrder
    bitsPerSample?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioFileSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
    sampleRate?: SortOrder
    channels?: SortOrder
    bitsPerSample?: SortOrder
    durationMs?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SyllableScalarRelationFilter = {
    is?: SyllableWhereInput
    isNot?: SyllableWhereInput
  }

  export type AudioFileNullableScalarRelationFilter = {
    is?: AudioFileWhereInput | null
    isNot?: AudioFileWhereInput | null
  }

  export type PredictionNullableScalarRelationFilter = {
    is?: PredictionWhereInput | null
    isNot?: PredictionWhereInput | null
  }

  export type PracticeSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    targetSyllableId?: SortOrder
    audioFileId?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
  }

  export type PracticeSessionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type PracticeSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    targetSyllableId?: SortOrder
    audioFileId?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
  }

  export type PracticeSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    targetSyllableId?: SortOrder
    audioFileId?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
  }

  export type PracticeSessionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PracticeSessionScalarRelationFilter = {
    is?: PracticeSessionWhereInput
    isNot?: PracticeSessionWhereInput
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    audioFileId?: SortOrder
    predictedSyllableId?: SortOrder
    affirmation?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    audioFileId?: SortOrder
    predictedSyllableId?: SortOrder
    affirmation?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    audioFileId?: SortOrder
    predictedSyllableId?: SortOrder
    affirmation?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SyllableNullableScalarRelationFilter = {
    is?: SyllableWhereInput | null
    isNot?: SyllableWhereInput | null
  }

  export type WeeklySummaryUserIdWeekStartCompoundUniqueInput = {
    userId: string
    weekStart: Date | string
  }

  export type WeeklySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
    mostPracticedId?: SortOrder
    needsImprovementId?: SortOrder
    geminiWeeklyReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummaryAvgOrderByAggregateInput = {
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
  }

  export type WeeklySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
    mostPracticedId?: SortOrder
    needsImprovementId?: SortOrder
    geminiWeeklyReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
    mostPracticedId?: SortOrder
    needsImprovementId?: SortOrder
    geminiWeeklyReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummarySumOrderByAggregateInput = {
    totalPracticeCount?: SortOrder
    overallAccuracy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PracticeSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput> | PracticeSessionCreateWithoutUserInput[] | PracticeSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutUserInput | PracticeSessionCreateOrConnectWithoutUserInput[]
    createMany?: PracticeSessionCreateManyUserInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type AudioFileCreateNestedManyWithoutUserInput = {
    create?: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput> | AudioFileCreateWithoutUserInput[] | AudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudioFileCreateOrConnectWithoutUserInput | AudioFileCreateOrConnectWithoutUserInput[]
    createMany?: AudioFileCreateManyUserInputEnvelope
    connect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type WeeklySummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type PracticeSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput> | PracticeSessionCreateWithoutUserInput[] | PracticeSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutUserInput | PracticeSessionCreateOrConnectWithoutUserInput[]
    createMany?: PracticeSessionCreateManyUserInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type AudioFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput> | AudioFileCreateWithoutUserInput[] | AudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudioFileCreateOrConnectWithoutUserInput | AudioFileCreateOrConnectWithoutUserInput[]
    createMany?: AudioFileCreateManyUserInputEnvelope
    connect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type WeeklySummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PracticeSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput> | PracticeSessionCreateWithoutUserInput[] | PracticeSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutUserInput | PracticeSessionCreateOrConnectWithoutUserInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutUserInput | PracticeSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeSessionCreateManyUserInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutUserInput | PracticeSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutUserInput | PracticeSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type AudioFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput> | AudioFileCreateWithoutUserInput[] | AudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudioFileCreateOrConnectWithoutUserInput | AudioFileCreateOrConnectWithoutUserInput[]
    upsert?: AudioFileUpsertWithWhereUniqueWithoutUserInput | AudioFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudioFileCreateManyUserInputEnvelope
    set?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    disconnect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    delete?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    connect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    update?: AudioFileUpdateWithWhereUniqueWithoutUserInput | AudioFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudioFileUpdateManyWithWhereWithoutUserInput | AudioFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudioFileScalarWhereInput | AudioFileScalarWhereInput[]
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type WeeklySummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type PracticeSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput> | PracticeSessionCreateWithoutUserInput[] | PracticeSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutUserInput | PracticeSessionCreateOrConnectWithoutUserInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutUserInput | PracticeSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeSessionCreateManyUserInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutUserInput | PracticeSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutUserInput | PracticeSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type AudioFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput> | AudioFileCreateWithoutUserInput[] | AudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudioFileCreateOrConnectWithoutUserInput | AudioFileCreateOrConnectWithoutUserInput[]
    upsert?: AudioFileUpsertWithWhereUniqueWithoutUserInput | AudioFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudioFileCreateManyUserInputEnvelope
    set?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    disconnect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    delete?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    connect?: AudioFileWhereUniqueInput | AudioFileWhereUniqueInput[]
    update?: AudioFileUpdateWithWhereUniqueWithoutUserInput | AudioFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudioFileUpdateManyWithWhereWithoutUserInput | AudioFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudioFileScalarWhereInput | AudioFileScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type PracticeSessionCreateNestedManyWithoutTargetSyllableInput = {
    create?: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput> | PracticeSessionCreateWithoutTargetSyllableInput[] | PracticeSessionUncheckedCreateWithoutTargetSyllableInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutTargetSyllableInput | PracticeSessionCreateOrConnectWithoutTargetSyllableInput[]
    createMany?: PracticeSessionCreateManyTargetSyllableInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type PredictionCreateNestedManyWithoutPredictedSyllableInput = {
    create?: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput> | PredictionCreateWithoutPredictedSyllableInput[] | PredictionUncheckedCreateWithoutPredictedSyllableInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPredictedSyllableInput | PredictionCreateOrConnectWithoutPredictedSyllableInput[]
    createMany?: PredictionCreateManyPredictedSyllableInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type WeeklySummaryCreateNestedManyWithoutMostPracticedInput = {
    create?: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput> | WeeklySummaryCreateWithoutMostPracticedInput[] | WeeklySummaryUncheckedCreateWithoutMostPracticedInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutMostPracticedInput | WeeklySummaryCreateOrConnectWithoutMostPracticedInput[]
    createMany?: WeeklySummaryCreateManyMostPracticedInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type WeeklySummaryCreateNestedManyWithoutNeedsImprovementInput = {
    create?: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput> | WeeklySummaryCreateWithoutNeedsImprovementInput[] | WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput | WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput[]
    createMany?: WeeklySummaryCreateManyNeedsImprovementInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type PracticeSessionUncheckedCreateNestedManyWithoutTargetSyllableInput = {
    create?: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput> | PracticeSessionCreateWithoutTargetSyllableInput[] | PracticeSessionUncheckedCreateWithoutTargetSyllableInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutTargetSyllableInput | PracticeSessionCreateOrConnectWithoutTargetSyllableInput[]
    createMany?: PracticeSessionCreateManyTargetSyllableInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutPredictedSyllableInput = {
    create?: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput> | PredictionCreateWithoutPredictedSyllableInput[] | PredictionUncheckedCreateWithoutPredictedSyllableInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPredictedSyllableInput | PredictionCreateOrConnectWithoutPredictedSyllableInput[]
    createMany?: PredictionCreateManyPredictedSyllableInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type WeeklySummaryUncheckedCreateNestedManyWithoutMostPracticedInput = {
    create?: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput> | WeeklySummaryCreateWithoutMostPracticedInput[] | WeeklySummaryUncheckedCreateWithoutMostPracticedInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutMostPracticedInput | WeeklySummaryCreateOrConnectWithoutMostPracticedInput[]
    createMany?: WeeklySummaryCreateManyMostPracticedInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type WeeklySummaryUncheckedCreateNestedManyWithoutNeedsImprovementInput = {
    create?: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput> | WeeklySummaryCreateWithoutNeedsImprovementInput[] | WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput | WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput[]
    createMany?: WeeklySummaryCreateManyNeedsImprovementInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PracticeSessionUpdateManyWithoutTargetSyllableNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput> | PracticeSessionCreateWithoutTargetSyllableInput[] | PracticeSessionUncheckedCreateWithoutTargetSyllableInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutTargetSyllableInput | PracticeSessionCreateOrConnectWithoutTargetSyllableInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutTargetSyllableInput | PracticeSessionUpsertWithWhereUniqueWithoutTargetSyllableInput[]
    createMany?: PracticeSessionCreateManyTargetSyllableInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutTargetSyllableInput | PracticeSessionUpdateWithWhereUniqueWithoutTargetSyllableInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutTargetSyllableInput | PracticeSessionUpdateManyWithWhereWithoutTargetSyllableInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type PredictionUpdateManyWithoutPredictedSyllableNestedInput = {
    create?: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput> | PredictionCreateWithoutPredictedSyllableInput[] | PredictionUncheckedCreateWithoutPredictedSyllableInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPredictedSyllableInput | PredictionCreateOrConnectWithoutPredictedSyllableInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutPredictedSyllableInput | PredictionUpsertWithWhereUniqueWithoutPredictedSyllableInput[]
    createMany?: PredictionCreateManyPredictedSyllableInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutPredictedSyllableInput | PredictionUpdateWithWhereUniqueWithoutPredictedSyllableInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutPredictedSyllableInput | PredictionUpdateManyWithWhereWithoutPredictedSyllableInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type WeeklySummaryUpdateManyWithoutMostPracticedNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput> | WeeklySummaryCreateWithoutMostPracticedInput[] | WeeklySummaryUncheckedCreateWithoutMostPracticedInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutMostPracticedInput | WeeklySummaryCreateOrConnectWithoutMostPracticedInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutMostPracticedInput | WeeklySummaryUpsertWithWhereUniqueWithoutMostPracticedInput[]
    createMany?: WeeklySummaryCreateManyMostPracticedInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutMostPracticedInput | WeeklySummaryUpdateWithWhereUniqueWithoutMostPracticedInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutMostPracticedInput | WeeklySummaryUpdateManyWithWhereWithoutMostPracticedInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type WeeklySummaryUpdateManyWithoutNeedsImprovementNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput> | WeeklySummaryCreateWithoutNeedsImprovementInput[] | WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput | WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutNeedsImprovementInput | WeeklySummaryUpsertWithWhereUniqueWithoutNeedsImprovementInput[]
    createMany?: WeeklySummaryCreateManyNeedsImprovementInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutNeedsImprovementInput | WeeklySummaryUpdateWithWhereUniqueWithoutNeedsImprovementInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutNeedsImprovementInput | WeeklySummaryUpdateManyWithWhereWithoutNeedsImprovementInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type PracticeSessionUncheckedUpdateManyWithoutTargetSyllableNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput> | PracticeSessionCreateWithoutTargetSyllableInput[] | PracticeSessionUncheckedCreateWithoutTargetSyllableInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutTargetSyllableInput | PracticeSessionCreateOrConnectWithoutTargetSyllableInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutTargetSyllableInput | PracticeSessionUpsertWithWhereUniqueWithoutTargetSyllableInput[]
    createMany?: PracticeSessionCreateManyTargetSyllableInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutTargetSyllableInput | PracticeSessionUpdateWithWhereUniqueWithoutTargetSyllableInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutTargetSyllableInput | PracticeSessionUpdateManyWithWhereWithoutTargetSyllableInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutPredictedSyllableNestedInput = {
    create?: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput> | PredictionCreateWithoutPredictedSyllableInput[] | PredictionUncheckedCreateWithoutPredictedSyllableInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPredictedSyllableInput | PredictionCreateOrConnectWithoutPredictedSyllableInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutPredictedSyllableInput | PredictionUpsertWithWhereUniqueWithoutPredictedSyllableInput[]
    createMany?: PredictionCreateManyPredictedSyllableInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutPredictedSyllableInput | PredictionUpdateWithWhereUniqueWithoutPredictedSyllableInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutPredictedSyllableInput | PredictionUpdateManyWithWhereWithoutPredictedSyllableInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutMostPracticedNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput> | WeeklySummaryCreateWithoutMostPracticedInput[] | WeeklySummaryUncheckedCreateWithoutMostPracticedInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutMostPracticedInput | WeeklySummaryCreateOrConnectWithoutMostPracticedInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutMostPracticedInput | WeeklySummaryUpsertWithWhereUniqueWithoutMostPracticedInput[]
    createMany?: WeeklySummaryCreateManyMostPracticedInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutMostPracticedInput | WeeklySummaryUpdateWithWhereUniqueWithoutMostPracticedInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutMostPracticedInput | WeeklySummaryUpdateManyWithWhereWithoutMostPracticedInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput> | WeeklySummaryCreateWithoutNeedsImprovementInput[] | WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput | WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutNeedsImprovementInput | WeeklySummaryUpsertWithWhereUniqueWithoutNeedsImprovementInput[]
    createMany?: WeeklySummaryCreateManyNeedsImprovementInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutNeedsImprovementInput | WeeklySummaryUpdateWithWhereUniqueWithoutNeedsImprovementInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutNeedsImprovementInput | WeeklySummaryUpdateManyWithWhereWithoutNeedsImprovementInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAudioFilesInput = {
    create?: XOR<UserCreateWithoutAudioFilesInput, UserUncheckedCreateWithoutAudioFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudioFilesInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeSessionCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput> | PracticeSessionCreateWithoutAudioFileInput[] | PracticeSessionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutAudioFileInput | PracticeSessionCreateOrConnectWithoutAudioFileInput[]
    createMany?: PracticeSessionCreateManyAudioFileInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type PredictionCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput> | PredictionCreateWithoutAudioFileInput[] | PredictionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutAudioFileInput | PredictionCreateOrConnectWithoutAudioFileInput[]
    createMany?: PredictionCreateManyAudioFileInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type PracticeSessionUncheckedCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput> | PracticeSessionCreateWithoutAudioFileInput[] | PracticeSessionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutAudioFileInput | PracticeSessionCreateOrConnectWithoutAudioFileInput[]
    createMany?: PracticeSessionCreateManyAudioFileInputEnvelope
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput> | PredictionCreateWithoutAudioFileInput[] | PredictionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutAudioFileInput | PredictionCreateOrConnectWithoutAudioFileInput[]
    createMany?: PredictionCreateManyAudioFileInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAudioFilesNestedInput = {
    create?: XOR<UserCreateWithoutAudioFilesInput, UserUncheckedCreateWithoutAudioFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudioFilesInput
    upsert?: UserUpsertWithoutAudioFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAudioFilesInput, UserUpdateWithoutAudioFilesInput>, UserUncheckedUpdateWithoutAudioFilesInput>
  }

  export type PracticeSessionUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput> | PracticeSessionCreateWithoutAudioFileInput[] | PracticeSessionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutAudioFileInput | PracticeSessionCreateOrConnectWithoutAudioFileInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutAudioFileInput | PracticeSessionUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: PracticeSessionCreateManyAudioFileInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutAudioFileInput | PracticeSessionUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutAudioFileInput | PracticeSessionUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type PredictionUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput> | PredictionCreateWithoutAudioFileInput[] | PredictionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutAudioFileInput | PredictionCreateOrConnectWithoutAudioFileInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutAudioFileInput | PredictionUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: PredictionCreateManyAudioFileInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutAudioFileInput | PredictionUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutAudioFileInput | PredictionUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type PracticeSessionUncheckedUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput> | PracticeSessionCreateWithoutAudioFileInput[] | PracticeSessionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutAudioFileInput | PracticeSessionCreateOrConnectWithoutAudioFileInput[]
    upsert?: PracticeSessionUpsertWithWhereUniqueWithoutAudioFileInput | PracticeSessionUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: PracticeSessionCreateManyAudioFileInputEnvelope
    set?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    disconnect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    delete?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    connect?: PracticeSessionWhereUniqueInput | PracticeSessionWhereUniqueInput[]
    update?: PracticeSessionUpdateWithWhereUniqueWithoutAudioFileInput | PracticeSessionUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: PracticeSessionUpdateManyWithWhereWithoutAudioFileInput | PracticeSessionUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput> | PredictionCreateWithoutAudioFileInput[] | PredictionUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutAudioFileInput | PredictionCreateOrConnectWithoutAudioFileInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutAudioFileInput | PredictionUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: PredictionCreateManyAudioFileInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutAudioFileInput | PredictionUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutAudioFileInput | PredictionUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type SyllableCreateNestedOneWithoutTargetSessionsInput = {
    create?: XOR<SyllableCreateWithoutTargetSessionsInput, SyllableUncheckedCreateWithoutTargetSessionsInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutTargetSessionsInput
    connect?: SyllableWhereUniqueInput
  }

  export type AudioFileCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AudioFileCreateWithoutSessionsInput, AudioFileUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSessionsInput
    connect?: AudioFileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type PredictionCreateNestedOneWithoutPracticeSessionInput = {
    create?: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPracticeSessionInput
    connect?: PredictionWhereUniqueInput
  }

  export type PredictionUncheckedCreateNestedOneWithoutPracticeSessionInput = {
    create?: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPracticeSessionInput
    connect?: PredictionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SyllableUpdateOneRequiredWithoutTargetSessionsNestedInput = {
    create?: XOR<SyllableCreateWithoutTargetSessionsInput, SyllableUncheckedCreateWithoutTargetSessionsInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutTargetSessionsInput
    upsert?: SyllableUpsertWithoutTargetSessionsInput
    connect?: SyllableWhereUniqueInput
    update?: XOR<XOR<SyllableUpdateToOneWithWhereWithoutTargetSessionsInput, SyllableUpdateWithoutTargetSessionsInput>, SyllableUncheckedUpdateWithoutTargetSessionsInput>
  }

  export type AudioFileUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<AudioFileCreateWithoutSessionsInput, AudioFileUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSessionsInput
    upsert?: AudioFileUpsertWithoutSessionsInput
    disconnect?: AudioFileWhereInput | boolean
    delete?: AudioFileWhereInput | boolean
    connect?: AudioFileWhereUniqueInput
    update?: XOR<XOR<AudioFileUpdateToOneWithWhereWithoutSessionsInput, AudioFileUpdateWithoutSessionsInput>, AudioFileUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PredictionUpdateOneWithoutPracticeSessionNestedInput = {
    create?: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPracticeSessionInput
    upsert?: PredictionUpsertWithoutPracticeSessionInput
    disconnect?: PredictionWhereInput | boolean
    delete?: PredictionWhereInput | boolean
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutPracticeSessionInput, PredictionUpdateWithoutPracticeSessionInput>, PredictionUncheckedUpdateWithoutPracticeSessionInput>
  }

  export type PredictionUncheckedUpdateOneWithoutPracticeSessionNestedInput = {
    create?: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPracticeSessionInput
    upsert?: PredictionUpsertWithoutPracticeSessionInput
    disconnect?: PredictionWhereInput | boolean
    delete?: PredictionWhereInput | boolean
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutPracticeSessionInput, PredictionUpdateWithoutPracticeSessionInput>, PredictionUncheckedUpdateWithoutPracticeSessionInput>
  }

  export type PracticeSessionCreateNestedOneWithoutPredictionInput = {
    create?: XOR<PracticeSessionCreateWithoutPredictionInput, PracticeSessionUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutPredictionInput
    connect?: PracticeSessionWhereUniqueInput
  }

  export type AudioFileCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<AudioFileCreateWithoutPredictionsInput, AudioFileUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutPredictionsInput
    connect?: AudioFileWhereUniqueInput
  }

  export type SyllableCreateNestedOneWithoutPredictedInInput = {
    create?: XOR<SyllableCreateWithoutPredictedInInput, SyllableUncheckedCreateWithoutPredictedInInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutPredictedInInput
    connect?: SyllableWhereUniqueInput
  }

  export type PracticeSessionUpdateOneRequiredWithoutPredictionNestedInput = {
    create?: XOR<PracticeSessionCreateWithoutPredictionInput, PracticeSessionUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: PracticeSessionCreateOrConnectWithoutPredictionInput
    upsert?: PracticeSessionUpsertWithoutPredictionInput
    connect?: PracticeSessionWhereUniqueInput
    update?: XOR<XOR<PracticeSessionUpdateToOneWithWhereWithoutPredictionInput, PracticeSessionUpdateWithoutPredictionInput>, PracticeSessionUncheckedUpdateWithoutPredictionInput>
  }

  export type AudioFileUpdateOneWithoutPredictionsNestedInput = {
    create?: XOR<AudioFileCreateWithoutPredictionsInput, AudioFileUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutPredictionsInput
    upsert?: AudioFileUpsertWithoutPredictionsInput
    disconnect?: AudioFileWhereInput | boolean
    delete?: AudioFileWhereInput | boolean
    connect?: AudioFileWhereUniqueInput
    update?: XOR<XOR<AudioFileUpdateToOneWithWhereWithoutPredictionsInput, AudioFileUpdateWithoutPredictionsInput>, AudioFileUncheckedUpdateWithoutPredictionsInput>
  }

  export type SyllableUpdateOneRequiredWithoutPredictedInNestedInput = {
    create?: XOR<SyllableCreateWithoutPredictedInInput, SyllableUncheckedCreateWithoutPredictedInInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutPredictedInInput
    upsert?: SyllableUpsertWithoutPredictedInInput
    connect?: SyllableWhereUniqueInput
    update?: XOR<XOR<SyllableUpdateToOneWithWhereWithoutPredictedInInput, SyllableUpdateWithoutPredictedInInput>, SyllableUncheckedUpdateWithoutPredictedInInput>
  }

  export type UserCreateNestedOneWithoutAuthSessionsInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAuthSessionsNestedInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    upsert?: UserUpsertWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthSessionsInput, UserUpdateWithoutAuthSessionsInput>, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type SyllableCreateNestedOneWithoutWeeklyMostPracticedInput = {
    create?: XOR<SyllableCreateWithoutWeeklyMostPracticedInput, SyllableUncheckedCreateWithoutWeeklyMostPracticedInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutWeeklyMostPracticedInput
    connect?: SyllableWhereUniqueInput
  }

  export type SyllableCreateNestedOneWithoutWeeklyNeedsImprovementInput = {
    create?: XOR<SyllableCreateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedCreateWithoutWeeklyNeedsImprovementInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutWeeklyNeedsImprovementInput
    connect?: SyllableWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWeeklySummariesInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SyllableUpdateOneWithoutWeeklyMostPracticedNestedInput = {
    create?: XOR<SyllableCreateWithoutWeeklyMostPracticedInput, SyllableUncheckedCreateWithoutWeeklyMostPracticedInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutWeeklyMostPracticedInput
    upsert?: SyllableUpsertWithoutWeeklyMostPracticedInput
    disconnect?: SyllableWhereInput | boolean
    delete?: SyllableWhereInput | boolean
    connect?: SyllableWhereUniqueInput
    update?: XOR<XOR<SyllableUpdateToOneWithWhereWithoutWeeklyMostPracticedInput, SyllableUpdateWithoutWeeklyMostPracticedInput>, SyllableUncheckedUpdateWithoutWeeklyMostPracticedInput>
  }

  export type SyllableUpdateOneWithoutWeeklyNeedsImprovementNestedInput = {
    create?: XOR<SyllableCreateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedCreateWithoutWeeklyNeedsImprovementInput>
    connectOrCreate?: SyllableCreateOrConnectWithoutWeeklyNeedsImprovementInput
    upsert?: SyllableUpsertWithoutWeeklyNeedsImprovementInput
    disconnect?: SyllableWhereInput | boolean
    delete?: SyllableWhereInput | boolean
    connect?: SyllableWhereUniqueInput
    update?: XOR<XOR<SyllableUpdateToOneWithWhereWithoutWeeklyNeedsImprovementInput, SyllableUpdateWithoutWeeklyNeedsImprovementInput>, SyllableUncheckedUpdateWithoutWeeklyNeedsImprovementInput>
  }

  export type UserUpdateOneRequiredWithoutWeeklySummariesNestedInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    upsert?: UserUpsertWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklySummariesInput, UserUpdateWithoutWeeklySummariesInput>, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PracticeSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    isCorrect: boolean
    score: number
    targetSyllable: SyllableCreateNestedOneWithoutTargetSessionsInput
    audioFile?: AudioFileCreateNestedOneWithoutSessionsInput
    prediction?: PredictionCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    targetSyllableId: string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
    prediction?: PredictionUncheckedCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionCreateOrConnectWithoutUserInput = {
    where: PracticeSessionWhereUniqueInput
    create: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput>
  }

  export type PracticeSessionCreateManyUserInputEnvelope = {
    data: PracticeSessionCreateManyUserInput | PracticeSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AudioFileCreateWithoutUserInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    sessions?: PracticeSessionCreateNestedManyWithoutAudioFileInput
    predictions?: PredictionCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateWithoutUserInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutAudioFileInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileCreateOrConnectWithoutUserInput = {
    where: AudioFileWhereUniqueInput
    create: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput>
  }

  export type AudioFileCreateManyUserInputEnvelope = {
    data: AudioFileCreateManyUserInput | AudioFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthSessionCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklySummaryCreateWithoutUserInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mostPracticed?: SyllableCreateNestedOneWithoutWeeklyMostPracticedInput
    needsImprovement?: SyllableCreateNestedOneWithoutWeeklyNeedsImprovementInput
  }

  export type WeeklySummaryUncheckedCreateWithoutUserInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryCreateOrConnectWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryCreateManyUserInputEnvelope = {
    data: WeeklySummaryCreateManyUserInput | WeeklySummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PracticeSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PracticeSessionWhereUniqueInput
    update: XOR<PracticeSessionUpdateWithoutUserInput, PracticeSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PracticeSessionCreateWithoutUserInput, PracticeSessionUncheckedCreateWithoutUserInput>
  }

  export type PracticeSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PracticeSessionWhereUniqueInput
    data: XOR<PracticeSessionUpdateWithoutUserInput, PracticeSessionUncheckedUpdateWithoutUserInput>
  }

  export type PracticeSessionUpdateManyWithWhereWithoutUserInput = {
    where: PracticeSessionScalarWhereInput
    data: XOR<PracticeSessionUpdateManyMutationInput, PracticeSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type PracticeSessionScalarWhereInput = {
    AND?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
    OR?: PracticeSessionScalarWhereInput[]
    NOT?: PracticeSessionScalarWhereInput | PracticeSessionScalarWhereInput[]
    id?: StringFilter<"PracticeSession"> | string
    userId?: StringFilter<"PracticeSession"> | string
    createdAt?: DateTimeFilter<"PracticeSession"> | Date | string
    targetSyllableId?: StringFilter<"PracticeSession"> | string
    audioFileId?: StringNullableFilter<"PracticeSession"> | string | null
    isCorrect?: BoolFilter<"PracticeSession"> | boolean
    score?: FloatFilter<"PracticeSession"> | number
  }

  export type AudioFileUpsertWithWhereUniqueWithoutUserInput = {
    where: AudioFileWhereUniqueInput
    update: XOR<AudioFileUpdateWithoutUserInput, AudioFileUncheckedUpdateWithoutUserInput>
    create: XOR<AudioFileCreateWithoutUserInput, AudioFileUncheckedCreateWithoutUserInput>
  }

  export type AudioFileUpdateWithWhereUniqueWithoutUserInput = {
    where: AudioFileWhereUniqueInput
    data: XOR<AudioFileUpdateWithoutUserInput, AudioFileUncheckedUpdateWithoutUserInput>
  }

  export type AudioFileUpdateManyWithWhereWithoutUserInput = {
    where: AudioFileScalarWhereInput
    data: XOR<AudioFileUpdateManyMutationInput, AudioFileUncheckedUpdateManyWithoutUserInput>
  }

  export type AudioFileScalarWhereInput = {
    AND?: AudioFileScalarWhereInput | AudioFileScalarWhereInput[]
    OR?: AudioFileScalarWhereInput[]
    NOT?: AudioFileScalarWhereInput | AudioFileScalarWhereInput[]
    id?: StringFilter<"AudioFile"> | string
    userId?: StringFilter<"AudioFile"> | string
    s3Bucket?: StringFilter<"AudioFile"> | string
    s3Key?: StringFilter<"AudioFile"> | string
    s3Region?: StringNullableFilter<"AudioFile"> | string | null
    contentType?: StringNullableFilter<"AudioFile"> | string | null
    sizeBytes?: IntNullableFilter<"AudioFile"> | number | null
    sampleRate?: IntNullableFilter<"AudioFile"> | number | null
    channels?: IntNullableFilter<"AudioFile"> | number | null
    bitsPerSample?: IntNullableFilter<"AudioFile"> | number | null
    durationMs?: IntNullableFilter<"AudioFile"> | number | null
    createdAt?: DateTimeFilter<"AudioFile"> | Date | string
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    refreshTokenHash?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    ip?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
  }

  export type WeeklySummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    update: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    data: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
  }

  export type WeeklySummaryUpdateManyWithWhereWithoutUserInput = {
    where: WeeklySummaryScalarWhereInput
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklySummaryScalarWhereInput = {
    AND?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    OR?: WeeklySummaryScalarWhereInput[]
    NOT?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    id?: StringFilter<"WeeklySummary"> | string
    userId?: StringFilter<"WeeklySummary"> | string
    weekStart?: DateTimeFilter<"WeeklySummary"> | Date | string
    totalPracticeCount?: IntFilter<"WeeklySummary"> | number
    overallAccuracy?: FloatFilter<"WeeklySummary"> | number
    mostPracticedId?: StringNullableFilter<"WeeklySummary"> | string | null
    needsImprovementId?: StringNullableFilter<"WeeklySummary"> | string | null
    geminiWeeklyReport?: StringNullableFilter<"WeeklySummary"> | string | null
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklySummary"> | Date | string
  }

  export type PracticeSessionCreateWithoutTargetSyllableInput = {
    id?: string
    createdAt?: Date | string
    isCorrect: boolean
    score: number
    audioFile?: AudioFileCreateNestedOneWithoutSessionsInput
    user: UserCreateNestedOneWithoutSessionsInput
    prediction?: PredictionCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionUncheckedCreateWithoutTargetSyllableInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
    prediction?: PredictionUncheckedCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionCreateOrConnectWithoutTargetSyllableInput = {
    where: PracticeSessionWhereUniqueInput
    create: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput>
  }

  export type PracticeSessionCreateManyTargetSyllableInputEnvelope = {
    data: PracticeSessionCreateManyTargetSyllableInput | PracticeSessionCreateManyTargetSyllableInput[]
    skipDuplicates?: boolean
  }

  export type PredictionCreateWithoutPredictedSyllableInput = {
    id?: string
    affirmation?: string | null
    createdAt?: Date | string
    practiceSession: PracticeSessionCreateNestedOneWithoutPredictionInput
    audioFile?: AudioFileCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionUncheckedCreateWithoutPredictedSyllableInput = {
    id?: string
    practiceSessionId: string
    audioFileId?: string | null
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PredictionCreateOrConnectWithoutPredictedSyllableInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput>
  }

  export type PredictionCreateManyPredictedSyllableInputEnvelope = {
    data: PredictionCreateManyPredictedSyllableInput | PredictionCreateManyPredictedSyllableInput[]
    skipDuplicates?: boolean
  }

  export type WeeklySummaryCreateWithoutMostPracticedInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    needsImprovement?: SyllableCreateNestedOneWithoutWeeklyNeedsImprovementInput
    user: UserCreateNestedOneWithoutWeeklySummariesInput
  }

  export type WeeklySummaryUncheckedCreateWithoutMostPracticedInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryCreateOrConnectWithoutMostPracticedInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput>
  }

  export type WeeklySummaryCreateManyMostPracticedInputEnvelope = {
    data: WeeklySummaryCreateManyMostPracticedInput | WeeklySummaryCreateManyMostPracticedInput[]
    skipDuplicates?: boolean
  }

  export type WeeklySummaryCreateWithoutNeedsImprovementInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mostPracticed?: SyllableCreateNestedOneWithoutWeeklyMostPracticedInput
    user: UserCreateNestedOneWithoutWeeklySummariesInput
  }

  export type WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryCreateOrConnectWithoutNeedsImprovementInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput>
  }

  export type WeeklySummaryCreateManyNeedsImprovementInputEnvelope = {
    data: WeeklySummaryCreateManyNeedsImprovementInput | WeeklySummaryCreateManyNeedsImprovementInput[]
    skipDuplicates?: boolean
  }

  export type PracticeSessionUpsertWithWhereUniqueWithoutTargetSyllableInput = {
    where: PracticeSessionWhereUniqueInput
    update: XOR<PracticeSessionUpdateWithoutTargetSyllableInput, PracticeSessionUncheckedUpdateWithoutTargetSyllableInput>
    create: XOR<PracticeSessionCreateWithoutTargetSyllableInput, PracticeSessionUncheckedCreateWithoutTargetSyllableInput>
  }

  export type PracticeSessionUpdateWithWhereUniqueWithoutTargetSyllableInput = {
    where: PracticeSessionWhereUniqueInput
    data: XOR<PracticeSessionUpdateWithoutTargetSyllableInput, PracticeSessionUncheckedUpdateWithoutTargetSyllableInput>
  }

  export type PracticeSessionUpdateManyWithWhereWithoutTargetSyllableInput = {
    where: PracticeSessionScalarWhereInput
    data: XOR<PracticeSessionUpdateManyMutationInput, PracticeSessionUncheckedUpdateManyWithoutTargetSyllableInput>
  }

  export type PredictionUpsertWithWhereUniqueWithoutPredictedSyllableInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutPredictedSyllableInput, PredictionUncheckedUpdateWithoutPredictedSyllableInput>
    create: XOR<PredictionCreateWithoutPredictedSyllableInput, PredictionUncheckedCreateWithoutPredictedSyllableInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutPredictedSyllableInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutPredictedSyllableInput, PredictionUncheckedUpdateWithoutPredictedSyllableInput>
  }

  export type PredictionUpdateManyWithWhereWithoutPredictedSyllableInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutPredictedSyllableInput>
  }

  export type PredictionScalarWhereInput = {
    AND?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    OR?: PredictionScalarWhereInput[]
    NOT?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    id?: StringFilter<"Prediction"> | string
    practiceSessionId?: StringFilter<"Prediction"> | string
    audioFileId?: StringNullableFilter<"Prediction"> | string | null
    predictedSyllableId?: StringFilter<"Prediction"> | string
    affirmation?: StringNullableFilter<"Prediction"> | string | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
  }

  export type WeeklySummaryUpsertWithWhereUniqueWithoutMostPracticedInput = {
    where: WeeklySummaryWhereUniqueInput
    update: XOR<WeeklySummaryUpdateWithoutMostPracticedInput, WeeklySummaryUncheckedUpdateWithoutMostPracticedInput>
    create: XOR<WeeklySummaryCreateWithoutMostPracticedInput, WeeklySummaryUncheckedCreateWithoutMostPracticedInput>
  }

  export type WeeklySummaryUpdateWithWhereUniqueWithoutMostPracticedInput = {
    where: WeeklySummaryWhereUniqueInput
    data: XOR<WeeklySummaryUpdateWithoutMostPracticedInput, WeeklySummaryUncheckedUpdateWithoutMostPracticedInput>
  }

  export type WeeklySummaryUpdateManyWithWhereWithoutMostPracticedInput = {
    where: WeeklySummaryScalarWhereInput
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyWithoutMostPracticedInput>
  }

  export type WeeklySummaryUpsertWithWhereUniqueWithoutNeedsImprovementInput = {
    where: WeeklySummaryWhereUniqueInput
    update: XOR<WeeklySummaryUpdateWithoutNeedsImprovementInput, WeeklySummaryUncheckedUpdateWithoutNeedsImprovementInput>
    create: XOR<WeeklySummaryCreateWithoutNeedsImprovementInput, WeeklySummaryUncheckedCreateWithoutNeedsImprovementInput>
  }

  export type WeeklySummaryUpdateWithWhereUniqueWithoutNeedsImprovementInput = {
    where: WeeklySummaryWhereUniqueInput
    data: XOR<WeeklySummaryUpdateWithoutNeedsImprovementInput, WeeklySummaryUncheckedUpdateWithoutNeedsImprovementInput>
  }

  export type WeeklySummaryUpdateManyWithWhereWithoutNeedsImprovementInput = {
    where: WeeklySummaryScalarWhereInput
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementInput>
  }

  export type UserCreateWithoutAudioFilesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAudioFilesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAudioFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAudioFilesInput, UserUncheckedCreateWithoutAudioFilesInput>
  }

  export type PracticeSessionCreateWithoutAudioFileInput = {
    id?: string
    createdAt?: Date | string
    isCorrect: boolean
    score: number
    targetSyllable: SyllableCreateNestedOneWithoutTargetSessionsInput
    user: UserCreateNestedOneWithoutSessionsInput
    prediction?: PredictionCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionUncheckedCreateWithoutAudioFileInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    targetSyllableId: string
    isCorrect: boolean
    score: number
    prediction?: PredictionUncheckedCreateNestedOneWithoutPracticeSessionInput
  }

  export type PracticeSessionCreateOrConnectWithoutAudioFileInput = {
    where: PracticeSessionWhereUniqueInput
    create: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput>
  }

  export type PracticeSessionCreateManyAudioFileInputEnvelope = {
    data: PracticeSessionCreateManyAudioFileInput | PracticeSessionCreateManyAudioFileInput[]
    skipDuplicates?: boolean
  }

  export type PredictionCreateWithoutAudioFileInput = {
    id?: string
    affirmation?: string | null
    createdAt?: Date | string
    practiceSession: PracticeSessionCreateNestedOneWithoutPredictionInput
    predictedSyllable: SyllableCreateNestedOneWithoutPredictedInInput
  }

  export type PredictionUncheckedCreateWithoutAudioFileInput = {
    id?: string
    practiceSessionId: string
    predictedSyllableId: string
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PredictionCreateOrConnectWithoutAudioFileInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput>
  }

  export type PredictionCreateManyAudioFileInputEnvelope = {
    data: PredictionCreateManyAudioFileInput | PredictionCreateManyAudioFileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAudioFilesInput = {
    update: XOR<UserUpdateWithoutAudioFilesInput, UserUncheckedUpdateWithoutAudioFilesInput>
    create: XOR<UserCreateWithoutAudioFilesInput, UserUncheckedCreateWithoutAudioFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAudioFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAudioFilesInput, UserUncheckedUpdateWithoutAudioFilesInput>
  }

  export type UserUpdateWithoutAudioFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAudioFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeSessionUpsertWithWhereUniqueWithoutAudioFileInput = {
    where: PracticeSessionWhereUniqueInput
    update: XOR<PracticeSessionUpdateWithoutAudioFileInput, PracticeSessionUncheckedUpdateWithoutAudioFileInput>
    create: XOR<PracticeSessionCreateWithoutAudioFileInput, PracticeSessionUncheckedCreateWithoutAudioFileInput>
  }

  export type PracticeSessionUpdateWithWhereUniqueWithoutAudioFileInput = {
    where: PracticeSessionWhereUniqueInput
    data: XOR<PracticeSessionUpdateWithoutAudioFileInput, PracticeSessionUncheckedUpdateWithoutAudioFileInput>
  }

  export type PracticeSessionUpdateManyWithWhereWithoutAudioFileInput = {
    where: PracticeSessionScalarWhereInput
    data: XOR<PracticeSessionUpdateManyMutationInput, PracticeSessionUncheckedUpdateManyWithoutAudioFileInput>
  }

  export type PredictionUpsertWithWhereUniqueWithoutAudioFileInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutAudioFileInput, PredictionUncheckedUpdateWithoutAudioFileInput>
    create: XOR<PredictionCreateWithoutAudioFileInput, PredictionUncheckedCreateWithoutAudioFileInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutAudioFileInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutAudioFileInput, PredictionUncheckedUpdateWithoutAudioFileInput>
  }

  export type PredictionUpdateManyWithWhereWithoutAudioFileInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutAudioFileInput>
  }

  export type SyllableCreateWithoutTargetSessionsInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    predictedIn?: PredictionCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableUncheckedCreateWithoutTargetSessionsInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    predictedIn?: PredictionUncheckedCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryUncheckedCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableCreateOrConnectWithoutTargetSessionsInput = {
    where: SyllableWhereUniqueInput
    create: XOR<SyllableCreateWithoutTargetSessionsInput, SyllableUncheckedCreateWithoutTargetSessionsInput>
  }

  export type AudioFileCreateWithoutSessionsInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAudioFilesInput
    predictions?: PredictionCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateWithoutSessionsInput = {
    id?: string
    userId: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    predictions?: PredictionUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileCreateOrConnectWithoutSessionsInput = {
    where: AudioFileWhereUniqueInput
    create: XOR<AudioFileCreateWithoutSessionsInput, AudioFileUncheckedCreateWithoutSessionsInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    audioFiles?: AudioFileCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    audioFiles?: AudioFileUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type PredictionCreateWithoutPracticeSessionInput = {
    id?: string
    affirmation?: string | null
    createdAt?: Date | string
    audioFile?: AudioFileCreateNestedOneWithoutPredictionsInput
    predictedSyllable: SyllableCreateNestedOneWithoutPredictedInInput
  }

  export type PredictionUncheckedCreateWithoutPracticeSessionInput = {
    id?: string
    audioFileId?: string | null
    predictedSyllableId: string
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PredictionCreateOrConnectWithoutPracticeSessionInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
  }

  export type SyllableUpsertWithoutTargetSessionsInput = {
    update: XOR<SyllableUpdateWithoutTargetSessionsInput, SyllableUncheckedUpdateWithoutTargetSessionsInput>
    create: XOR<SyllableCreateWithoutTargetSessionsInput, SyllableUncheckedCreateWithoutTargetSessionsInput>
    where?: SyllableWhereInput
  }

  export type SyllableUpdateToOneWithWhereWithoutTargetSessionsInput = {
    where?: SyllableWhereInput
    data: XOR<SyllableUpdateWithoutTargetSessionsInput, SyllableUncheckedUpdateWithoutTargetSessionsInput>
  }

  export type SyllableUpdateWithoutTargetSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedIn?: PredictionUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableUncheckedUpdateWithoutTargetSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedIn?: PredictionUncheckedUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUncheckedUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type AudioFileUpsertWithoutSessionsInput = {
    update: XOR<AudioFileUpdateWithoutSessionsInput, AudioFileUncheckedUpdateWithoutSessionsInput>
    create: XOR<AudioFileCreateWithoutSessionsInput, AudioFileUncheckedCreateWithoutSessionsInput>
    where?: AudioFileWhereInput
  }

  export type AudioFileUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AudioFileWhereInput
    data: XOR<AudioFileUpdateWithoutSessionsInput, AudioFileUncheckedUpdateWithoutSessionsInput>
  }

  export type AudioFileUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudioFilesNestedInput
    predictions?: PredictionUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFiles?: AudioFileUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFiles?: AudioFileUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PredictionUpsertWithoutPracticeSessionInput = {
    update: XOR<PredictionUpdateWithoutPracticeSessionInput, PredictionUncheckedUpdateWithoutPracticeSessionInput>
    create: XOR<PredictionCreateWithoutPracticeSessionInput, PredictionUncheckedCreateWithoutPracticeSessionInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutPracticeSessionInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutPracticeSessionInput, PredictionUncheckedUpdateWithoutPracticeSessionInput>
  }

  export type PredictionUpdateWithoutPracticeSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFile?: AudioFileUpdateOneWithoutPredictionsNestedInput
    predictedSyllable?: SyllableUpdateOneRequiredWithoutPredictedInNestedInput
  }

  export type PredictionUncheckedUpdateWithoutPracticeSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedSyllableId?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSessionCreateWithoutPredictionInput = {
    id?: string
    createdAt?: Date | string
    isCorrect: boolean
    score: number
    targetSyllable: SyllableCreateNestedOneWithoutTargetSessionsInput
    audioFile?: AudioFileCreateNestedOneWithoutSessionsInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type PracticeSessionUncheckedCreateWithoutPredictionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    targetSyllableId: string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
  }

  export type PracticeSessionCreateOrConnectWithoutPredictionInput = {
    where: PracticeSessionWhereUniqueInput
    create: XOR<PracticeSessionCreateWithoutPredictionInput, PracticeSessionUncheckedCreateWithoutPredictionInput>
  }

  export type AudioFileCreateWithoutPredictionsInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAudioFilesInput
    sessions?: PracticeSessionCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateWithoutPredictionsInput = {
    id?: string
    userId: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileCreateOrConnectWithoutPredictionsInput = {
    where: AudioFileWhereUniqueInput
    create: XOR<AudioFileCreateWithoutPredictionsInput, AudioFileUncheckedCreateWithoutPredictionsInput>
  }

  export type SyllableCreateWithoutPredictedInInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionCreateNestedManyWithoutTargetSyllableInput
    weeklyMostPracticed?: WeeklySummaryCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableUncheckedCreateWithoutPredictedInInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionUncheckedCreateNestedManyWithoutTargetSyllableInput
    weeklyMostPracticed?: WeeklySummaryUncheckedCreateNestedManyWithoutMostPracticedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableCreateOrConnectWithoutPredictedInInput = {
    where: SyllableWhereUniqueInput
    create: XOR<SyllableCreateWithoutPredictedInInput, SyllableUncheckedCreateWithoutPredictedInInput>
  }

  export type PracticeSessionUpsertWithoutPredictionInput = {
    update: XOR<PracticeSessionUpdateWithoutPredictionInput, PracticeSessionUncheckedUpdateWithoutPredictionInput>
    create: XOR<PracticeSessionCreateWithoutPredictionInput, PracticeSessionUncheckedCreateWithoutPredictionInput>
    where?: PracticeSessionWhereInput
  }

  export type PracticeSessionUpdateToOneWithWhereWithoutPredictionInput = {
    where?: PracticeSessionWhereInput
    data: XOR<PracticeSessionUpdateWithoutPredictionInput, PracticeSessionUncheckedUpdateWithoutPredictionInput>
  }

  export type PracticeSessionUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    targetSyllable?: SyllableUpdateOneRequiredWithoutTargetSessionsNestedInput
    audioFile?: AudioFileUpdateOneWithoutSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type PracticeSessionUncheckedUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type AudioFileUpsertWithoutPredictionsInput = {
    update: XOR<AudioFileUpdateWithoutPredictionsInput, AudioFileUncheckedUpdateWithoutPredictionsInput>
    create: XOR<AudioFileCreateWithoutPredictionsInput, AudioFileUncheckedCreateWithoutPredictionsInput>
    where?: AudioFileWhereInput
  }

  export type AudioFileUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: AudioFileWhereInput
    data: XOR<AudioFileUpdateWithoutPredictionsInput, AudioFileUncheckedUpdateWithoutPredictionsInput>
  }

  export type AudioFileUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudioFilesNestedInput
    sessions?: PracticeSessionUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type SyllableUpsertWithoutPredictedInInput = {
    update: XOR<SyllableUpdateWithoutPredictedInInput, SyllableUncheckedUpdateWithoutPredictedInInput>
    create: XOR<SyllableCreateWithoutPredictedInInput, SyllableUncheckedCreateWithoutPredictedInInput>
    where?: SyllableWhereInput
  }

  export type SyllableUpdateToOneWithWhereWithoutPredictedInInput = {
    where?: SyllableWhereInput
    data: XOR<SyllableUpdateWithoutPredictedInInput, SyllableUncheckedUpdateWithoutPredictedInInput>
  }

  export type SyllableUpdateWithoutPredictedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUpdateManyWithoutTargetSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableUncheckedUpdateWithoutPredictedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUncheckedUpdateManyWithoutTargetSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUncheckedUpdateManyWithoutMostPracticedNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type UserCreateWithoutAuthSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
  }

  export type UserUpsertWithoutAuthSessionsInput = {
    update: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SyllableCreateWithoutWeeklyMostPracticedInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionCreateNestedManyWithoutPredictedSyllableInput
    weeklyNeedsImprovement?: WeeklySummaryCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableUncheckedCreateWithoutWeeklyMostPracticedInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionUncheckedCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionUncheckedCreateNestedManyWithoutPredictedSyllableInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedCreateNestedManyWithoutNeedsImprovementInput
  }

  export type SyllableCreateOrConnectWithoutWeeklyMostPracticedInput = {
    where: SyllableWhereUniqueInput
    create: XOR<SyllableCreateWithoutWeeklyMostPracticedInput, SyllableUncheckedCreateWithoutWeeklyMostPracticedInput>
  }

  export type SyllableCreateWithoutWeeklyNeedsImprovementInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryCreateNestedManyWithoutMostPracticedInput
  }

  export type SyllableUncheckedCreateWithoutWeeklyNeedsImprovementInput = {
    id?: string
    code: string
    label?: string | null
    createdAt?: Date | string
    targetSessions?: PracticeSessionUncheckedCreateNestedManyWithoutTargetSyllableInput
    predictedIn?: PredictionUncheckedCreateNestedManyWithoutPredictedSyllableInput
    weeklyMostPracticed?: WeeklySummaryUncheckedCreateNestedManyWithoutMostPracticedInput
  }

  export type SyllableCreateOrConnectWithoutWeeklyNeedsImprovementInput = {
    where: SyllableWhereUniqueInput
    create: XOR<SyllableCreateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedCreateWithoutWeeklyNeedsImprovementInput>
  }

  export type UserCreateWithoutWeeklySummariesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklySummariesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: PracticeSessionUncheckedCreateNestedManyWithoutUserInput
    audioFiles?: AudioFileUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklySummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
  }

  export type SyllableUpsertWithoutWeeklyMostPracticedInput = {
    update: XOR<SyllableUpdateWithoutWeeklyMostPracticedInput, SyllableUncheckedUpdateWithoutWeeklyMostPracticedInput>
    create: XOR<SyllableCreateWithoutWeeklyMostPracticedInput, SyllableUncheckedCreateWithoutWeeklyMostPracticedInput>
    where?: SyllableWhereInput
  }

  export type SyllableUpdateToOneWithWhereWithoutWeeklyMostPracticedInput = {
    where?: SyllableWhereInput
    data: XOR<SyllableUpdateWithoutWeeklyMostPracticedInput, SyllableUncheckedUpdateWithoutWeeklyMostPracticedInput>
  }

  export type SyllableUpdateWithoutWeeklyMostPracticedInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUpdateManyWithoutPredictedSyllableNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableUncheckedUpdateWithoutWeeklyMostPracticedInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUncheckedUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUncheckedUpdateManyWithoutPredictedSyllableNestedInput
    weeklyNeedsImprovement?: WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementNestedInput
  }

  export type SyllableUpsertWithoutWeeklyNeedsImprovementInput = {
    update: XOR<SyllableUpdateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedUpdateWithoutWeeklyNeedsImprovementInput>
    create: XOR<SyllableCreateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedCreateWithoutWeeklyNeedsImprovementInput>
    where?: SyllableWhereInput
  }

  export type SyllableUpdateToOneWithWhereWithoutWeeklyNeedsImprovementInput = {
    where?: SyllableWhereInput
    data: XOR<SyllableUpdateWithoutWeeklyNeedsImprovementInput, SyllableUncheckedUpdateWithoutWeeklyNeedsImprovementInput>
  }

  export type SyllableUpdateWithoutWeeklyNeedsImprovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUpdateManyWithoutMostPracticedNestedInput
  }

  export type SyllableUncheckedUpdateWithoutWeeklyNeedsImprovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSessions?: PracticeSessionUncheckedUpdateManyWithoutTargetSyllableNestedInput
    predictedIn?: PredictionUncheckedUpdateManyWithoutPredictedSyllableNestedInput
    weeklyMostPracticed?: WeeklySummaryUncheckedUpdateManyWithoutMostPracticedNestedInput
  }

  export type UserUpsertWithoutWeeklySummariesInput = {
    update: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklySummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type UserUpdateWithoutWeeklySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutUserNestedInput
    audioFiles?: AudioFileUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    targetSyllableId: string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
  }

  export type AudioFileCreateManyUserInput = {
    id?: string
    s3Bucket: string
    s3Key: string
    s3Region?: string | null
    contentType?: string | null
    sizeBytes?: number | null
    sampleRate?: number | null
    channels?: number | null
    bitsPerSample?: number | null
    durationMs?: number | null
    createdAt?: Date | string
  }

  export type AuthSessionCreateManyUserInput = {
    id?: string
    refreshTokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    ip?: string | null
    userAgent?: string | null
  }

  export type WeeklySummaryCreateManyUserInput = {
    id?: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    targetSyllable?: SyllableUpdateOneRequiredWithoutTargetSessionsNestedInput
    audioFile?: AudioFileUpdateOneWithoutSessionsNestedInput
    prediction?: PredictionUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    prediction?: PredictionUncheckedUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type AudioFileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUpdateManyWithoutAudioFileNestedInput
    predictions?: PredictionUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PracticeSessionUncheckedUpdateManyWithoutAudioFileNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Region?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    bitsPerSample?: NullableIntFieldUpdateOperationsInput | number | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklySummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mostPracticed?: SyllableUpdateOneWithoutWeeklyMostPracticedNestedInput
    needsImprovement?: SyllableUpdateOneWithoutWeeklyNeedsImprovementNestedInput
  }

  export type WeeklySummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSessionCreateManyTargetSyllableInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    audioFileId?: string | null
    isCorrect: boolean
    score: number
  }

  export type PredictionCreateManyPredictedSyllableInput = {
    id?: string
    practiceSessionId: string
    audioFileId?: string | null
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type WeeklySummaryCreateManyMostPracticedInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    needsImprovementId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryCreateManyNeedsImprovementInput = {
    id?: string
    userId: string
    weekStart: Date | string
    totalPracticeCount: number
    overallAccuracy: number
    mostPracticedId?: string | null
    geminiWeeklyReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeSessionUpdateWithoutTargetSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    audioFile?: AudioFileUpdateOneWithoutSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    prediction?: PredictionUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateWithoutTargetSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    prediction?: PredictionUncheckedUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateManyWithoutTargetSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type PredictionUpdateWithoutPredictedSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSession?: PracticeSessionUpdateOneRequiredWithoutPredictionNestedInput
    audioFile?: AudioFileUpdateOneWithoutPredictionsNestedInput
  }

  export type PredictionUncheckedUpdateWithoutPredictedSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyWithoutPredictedSyllableInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    audioFileId?: NullableStringFieldUpdateOperationsInput | string | null
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUpdateWithoutMostPracticedInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    needsImprovement?: SyllableUpdateOneWithoutWeeklyNeedsImprovementNestedInput
    user?: UserUpdateOneRequiredWithoutWeeklySummariesNestedInput
  }

  export type WeeklySummaryUncheckedUpdateWithoutMostPracticedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutMostPracticedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    needsImprovementId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUpdateWithoutNeedsImprovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mostPracticed?: SyllableUpdateOneWithoutWeeklyMostPracticedNestedInput
    user?: UserUpdateOneRequiredWithoutWeeklySummariesNestedInput
  }

  export type WeeklySummaryUncheckedUpdateWithoutNeedsImprovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutNeedsImprovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPracticeCount?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    mostPracticedId?: NullableStringFieldUpdateOperationsInput | string | null
    geminiWeeklyReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSessionCreateManyAudioFileInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    targetSyllableId: string
    isCorrect: boolean
    score: number
  }

  export type PredictionCreateManyAudioFileInput = {
    id?: string
    practiceSessionId: string
    predictedSyllableId: string
    affirmation?: string | null
    createdAt?: Date | string
  }

  export type PracticeSessionUpdateWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    targetSyllable?: SyllableUpdateOneRequiredWithoutTargetSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    prediction?: PredictionUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
    prediction?: PredictionUncheckedUpdateOneWithoutPracticeSessionNestedInput
  }

  export type PracticeSessionUncheckedUpdateManyWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSyllableId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type PredictionUpdateWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSession?: PracticeSessionUpdateOneRequiredWithoutPredictionNestedInput
    predictedSyllable?: SyllableUpdateOneRequiredWithoutPredictedInNestedInput
  }

  export type PredictionUncheckedUpdateWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    predictedSyllableId?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyWithoutAudioFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    predictedSyllableId?: StringFieldUpdateOperationsInput | string
    affirmation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}