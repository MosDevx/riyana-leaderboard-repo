export const array = [
  {
    name: 'Riyana',
    score: 100,
  },

  {
    name: 'Anwar',
    score: 68,
  },

  {
    name: 'Omar',
    score: 59,
  },

  {
    name: 'Aaha',
    score: 60,
  },

  {
    name: 'Faiza',
    score: 89,
  },

  {
    name: 'Farhan',
    score: 100,
  },
  {
    name: 'kaka',
    score: 60,
  },
  {
    name: 'bhelo',
    score: 50,
  },
  {
    name: 'pius',
    score: 99,
  },
];

const element = document.createElement('li');
export const render = () => {
  array.forEach((a, index) => {
    element.innerHTML += `
    <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
      <label class='lname'> ${a.name} : </label> 
      <label class='lscore'> ${a.score} </label>
    </li>
    `;
  });
};
window.onload = () => {
  render();
  document.querySelector('#scores').appendChild(element);
};
