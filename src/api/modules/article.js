import axios from 'axios';

// 文章列表
let list = (data) => axios.get('/article/list',{params:data });

export default{   
    list
}