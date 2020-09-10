import axios from 'axios';

let list = (data) => axios.get('/role/list',{params:data});
let remove = (id) => axios.delete(`/role/${id}`);
let add = (data) => axios.post('/role',data);
export default{
    list,
    remove,
    add,

}