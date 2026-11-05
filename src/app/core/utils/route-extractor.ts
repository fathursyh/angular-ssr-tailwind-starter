type RouteParam = string | number;

// Replaces segments starting with ':' with (string | number)
type TransformSegment<S extends string> =
  S extends `:${string}` ? RouteParam : S;

// Recursively walks slash-delimited segments
type TransformPath<P extends string> =
  P extends `${infer Segment}/${infer Rest}`
    ? `${TransformSegment<Segment>}/${TransformPath<Rest>}`
    : TransformSegment<P>;

type JoinPath<Prefix extends string, Segment extends string> =
  Segment extends ''
    ? (Prefix extends '' ? '/' : Prefix)
    : Prefix extends '' | '/'
      ? `/${Segment}`
      : `${Prefix}/${Segment}`;

type RawRoutes<T, Prefix extends string = ''> =
  T extends readonly (infer R)[]
    ? RawRoutes<R, Prefix>
    : T extends { readonly path: infer Path extends string }
      ? Path extends '**'
        ? never
        : | JoinPath<Prefix, Path>
          | (T extends { readonly children: readonly any[] }
              ? RawRoutes<T['children'], JoinPath<Prefix, Path>>
              : never)
      : never;

// TransformPath distributes automatically over the union of raw paths
export type ExtractRoutes<T> = TransformPath<RawRoutes<T>>;