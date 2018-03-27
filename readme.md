根据某个属性名key及属性值value从对象数组arr中获取另外一属性attr的值  
如果根据属性名key及属性值value能查到某个对象(仅查找符合条件的第一个对象)   
1. attr为空字符串返回查找到的对象  
2. 查找到对象的attr有值则返回该值  
3. 其他情况均返回空字符串  
如果查不到对象则返回空字符串  
# 安装
```bash
npm i get-attr-by-another-attr
```
# 使用
```js
import gaba from "get-attr-by-another-attr"
let obj = [{
  name:'zs',
  id:'1234',
  age:20,
},{
  name:'zs1',
  id:'1235',
  age:19,
}{
  name:'zs2',
  id:'1236',
  age:20,
}]
// 想要获取id为1234对象的name属性
let new_obj = gaba(obj,{key:"id",value:"1234",attr:"name"})
// new_obj ='zs'
 
// 想要获取id为1234的对象
let new_obj2 = gaba(obj,{key:"id",value:"1234",attr:""})
/*
new_obj2 
{
  name:'zs',
  id:'1234',
  age:20,
}
*/
 
// 想要获取id为1234的对象的gander属性
let new_obj3 = gaba(obj,{key:"id",value:"1234",attr:"gander"})
// new_obj3 =""
```
# 其他情况
如果第一个参数不是数组，抛出错误并返回空字符串 
如果第二个参数不是对象，抛出错误并返回空字符串 
如果第二个参数对象中不包含key,value,attr中任意一个，抛出错误并返回空字符串