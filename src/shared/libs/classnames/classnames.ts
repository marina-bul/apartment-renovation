export const cn = (
  cNames: string[],
  mods?: Record<string, boolean>
): string => {
  const getClassesByMods = (initMods: Record<string, boolean>): string[] => {
    if (!initMods) return [];
    const resMods = Object.entries(initMods).reduce(
      (acc, [cName, value]) => (!!value ? [...acc, cName] : acc),
      []
    );
    return resMods;
  };

  const result = [...cNames, ...getClassesByMods(mods)].join(" ");
  return result;
};
