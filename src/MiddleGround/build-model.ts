let i = 0;
export let buildModel = (specs: { [key: string]: HTMLElement[] }) => {
  let output = {};

  // 2. Parcourir les clés de l'objet specs
  Object.entries(specs).forEach((e) => {
    output[e[0]] = e[1].reduce((acc, current) => {
      return (acc[current.id] = current);
    });
  });
  i++;
  return output;
};
