import Mock from 'mockjs';

var list = [];

for(let i =0; i < 50; i++) {
    list.push(Mock.mock({
        'name': '@cname',
        'id': '@id',
        'sex|1': ['man','woman'],
        'age|15-30': 25,
        'weight|100-120.2-5':100.24,
        'like|1':Boolean
    }))
}
export default {
    show: config => {
        console.log(config);
        return list;
    }
}