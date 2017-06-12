/**
 * Created by Administrator on 2017/6/7.
 */
//main.js
    /*main.js用来把Greeter模块返回的节点插入页面。*/
/*var greeter = require('./Greeter.js');//使用require*/

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件
render(<Greeter />, document.getElementById('root'));
/*
document.getElementById('root').appendChild(greeter());*/
