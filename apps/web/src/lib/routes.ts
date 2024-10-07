export type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string
        ? T[K] extends object
          ? `${K}.${DeepKeys<T[K]>}`
          : K
        : never;
    }[keyof T]
  : "";

export const routes = {
  DISCLAIMER: "/disclaimer",
  PRIVACY_POLICY: "/privacy-policy",
};

const parse = (
  obj: typeof routes,
  deepKey: DeepKeys<typeof routes>,
): string => {
  const keys = deepKey.split(".");

  // Recursively traverse the object to find the value
  function traverse(object: any, keys: string[]): any {
    if (!object || keys.length === 0) {
      return object;
    }
    const [currentKey, ...remainingKeys] = keys;
    return traverse(object[currentKey], remainingKeys);
  }

  return traverse(obj, keys);
};

const serializeQuery = (data: Record<string, any>) => {
  return Object.entries(data).reduce((prev, [key, value], index) => {
    return prev.concat(
      ...[key, "=", value, Object.keys(data).length - 1 === index ? "" : "&"],
    );
  }, "?");
};

const route = (
  namespace: DeepKeys<typeof routes>,
  params: Record<string, any> | undefined | null,
  query?: Record<string, any>,
) => {
  let template = parse(routes, namespace);
  if (!params && !query) return template;

  if (params && params !== null) {
    template = Object.entries(params).reduce((prev, [key, value]) => {
      return prev.replace(`:${[key]}`, value);
    }, template);
  }

  if (query) {
    template = Object.entries(query).reduce((prev, [key, value], index) => {
      return prev.concat(
        ...[
          key,
          "=",
          value,
          Object.keys(query).length - 1 === index ? "" : "&",
        ],
      );
    }, template + "?");
  }

  return template;
};

export { route, serializeQuery };
