/**
 * 根据某个属性名key及属性值vale从对象数组arr中获取另外一属性attr的值
 * 如果根据属性名key及属性值key能查到某个对象(仅查找符合条件的第一个对象)
 * 1. attr为空字符串返回查找到的对象
 * 2. 查找到对象的attr有值则返回该值
 * 其他情况均返回空字符串
 * @method   getAttrByAnotherAttr
 * @param    {Array[Object]}         arr 对象数组
 * @param    {Object}                obj 查找条件 
 *                                       {
 *                                         key:'属性名',
 *                                         value:'属性值',
 *                                         attr:'找到对象的另一属性值，若为空则返回找到的对象'
 *                                       }
 * @return   {String|Object}             1.找到返回对应的值
 *                                       2.属性为空返回找到的对象
 *                                       3.其他情况返回空字符串
 * @author   朱阳星
 * @datetime 2018-03-25T10:53:43+080
 */
function getAttrByAnotherAttr(arr, obj) {
  if (!Array.isArray(arr)) {
    try {
      throw new Error("the frist arguments must be an array")
    } catch (e) {
      console.error(e)
    }
    return ''
  }
  if (typeof obj !== "Object") {
    try {
      throw new Error("the second arguments must be an object")
    } catch (e) {
      console.error(e)
    }
    return ''
  }
  if (obj.key === undefined || obj.value === = undefined || || obj.attr === = undefined) {
    try {
      throw new Error("the second arguments must has key value and the wanted attr attributes")
    } catch (e) {
      console.error(e)
    }
    return ''
  }

  let tmp = arr.find(ele => {
    return ele[obj.key] === obj.value
  })
  if (tmp !== undefined) {
    if (obj.attr.length === 0) {
      return tmp
    } else {
      return tmp[obj.attr] || ''
    }
  } else {
    return ''
  }
}

module.exports = getAttrByAnotherAttr;