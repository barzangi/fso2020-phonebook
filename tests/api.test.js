const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../app');

const api = supertest(app);

const Person = require('../models/person');

const initialPersons = [
  {
    name: 'James Holden',
    number: '051-3809311'
  },
  {
    name: 'Naomi Nagata',
    number: '097-1064508'
  },
  {
    name: 'Alex Kamal',
    number: '088-2193690'
  },
  {
    name: 'Amos Burton',
    number: '011-7703241'
  }
];

beforeEach(async () => {
  // clear database
  await Person.deleteMany({});

  // initialize database
  const personObjectes = initialPersons.map(person => new Person(person));
  const promiseArray = personObjectes.map(person => person.save());
  await Promise.all(promiseArray);
});

test('persons are returned as json', async () => {
  await api
    .get('/api/persons')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('get person by id', async () => {
  // first get all persons
  const resAll = await api.get('/api/persons');
  // get id and name of second person in array
  const id = resAll.body[1].id;
  const name = resAll.body[1].name;

  // use id to get person info from get by id endpoint
  const resOne = await api.get(`/api/persons/${id}`);
  expect(200);
  expect(resOne.body.name).toBe(name);
});

afterAll(() => {
  mongoose.connection.close();
});