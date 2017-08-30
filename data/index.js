const fs = require('fs');
const { people, categories } = require('./data.json');

const toKey = s => s.toLowerCase().replace(' ', '-');

const variables = categories.map(c => ({
  key: toKey(c.category),
  label: c.category
}));

const strengthsToObject = cat =>
  cat.strengths.reduce(
    (acc, str) =>
      Object.assign({}, acc, {
        [toKey(str)]: toKey(cat.category)
      }),
    {}
  );

const categoryStrengths = categories.reduce(
  (acc, cat) => Object.assign({}, acc, strengthsToObject(cat)),
  {}
);

// {
//   [toKey(cat.category)]: cat.strengths
// }

const emptyValues = () => ({
  [toKey('Executing')]: 0,
  [toKey('Influencing')]: 0,
  [toKey('Relationship Building')]: 0,
  [toKey('Strategic Thinking')]: 0
});

const processPerson = p => {
  const name = p.id;
  const { strength1, strength2, strength3, strength4, strength5 } = p;
  const values = emptyValues();

  values[categoryStrengths[toKey(strength1)]] += 1;
  values[categoryStrengths[toKey(strength2)]] += 1;
  values[categoryStrengths[toKey(strength3)]] += 1;
  values[categoryStrengths[toKey(strength4)]] += 1;
  values[categoryStrengths[toKey(strength5)]] += 1;

  return {
    key: toKey(name),
    label: name,
    values
  };
};

const allSets = people.map(p => ({
  variables,
  sets: [processPerson(p)]
}));

fs.writeFileSync('./radar.json', JSON.stringify(allSets));
