import Mock from 'mockjs';
import Person from './person.js';

Mock.mock('http://12345.com/list','post', Person.show);

export default Mock;