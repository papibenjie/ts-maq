interface String {
    interpolate(params: object): string
}

String.prototype.interpolate = function(params: object) {
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
}
