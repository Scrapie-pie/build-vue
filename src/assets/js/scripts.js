function getCSSProp(propName, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(propName).trim();
}

function getCSSVars(group, useBind = true, element = document.documentElement) {
  let keys = group ? getCSSVarKeys().filter(key => key.startsWith(`--${group}`)) : getCSSVarKeys();
  let object = {};

  keys.forEach(key => object[key] = useBind ? `var(${key})` : getCSSProp(key).trim());

  return object;

}

function getCssVar(name, useBind = true, element = document.documentElement) {
  return useBind ? `var(${name})` : getCSSProp(name);
}

function getCSSVarKeys(byName, element = document.documentElement) {
  return Array.from(document.styleSheets)
    .filter(sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
    .reduce((acc, sheet) => (
      acc = [...acc, ...Array.from(sheet.cssRules)
      .reduce((def, rule) => (def = rule.selectorText === ":root" ? [...def, ...Array.from(rule.style).filter(name => name.startsWith("--"))] : def), [])]
      ), []
    );
  //return byName ? all.
}

export {getCSSProp, getCSSVars, getCSSVarKeys};