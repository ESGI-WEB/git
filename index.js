const users = [
  {
    id: 1,
    languages: [
      'javascript',
      'c++',
      'php',
    ],
  },
  {
    id: 2,
    languages: [
      'javascript',
      'C#',
      'python',
    ],
  },
  {
    id: 3,
    languages: [
      'c++',
    ],
  }, {
    id: 4,
    languages: [
      'php',
      'python',
    ],
  }, {
    id: 5,
    languages: [
      'javascript',
      'c',
    ],
  },
];

function languageFilter(language) {
  return users.filter((u) => u.languages.includes(language));
}

const filteredUsers = languageFilter('javascript')

console.log("Tab d'utilisateur filtré", filteredUsers);

const user = {
  address: {
    geolocation: {
      latitude: 1.2345,
    },
  },
};

const path = ['address', 'geolocation', 'latitude'];

let value = user;

for (const element of path) {
      if (typeof value === 'undefined') {
       break;
  }
  if (element in value) {
    value = value[element];
  } else {
    value = undefined;
  }
}

console.log('=>', value)
