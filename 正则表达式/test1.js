
//匹配字符串2009
let str = '1232009345'
let regStr = /2009/
console.log(regStr.test(str))

/**
 * 周曙光同学有两个名字, 分别叫做 zola 和 zuola, 
 * 人们常常混淆. 请帮周曙光同学设计一个正则表达式, 可以帮他匹配自己的名字.
 */
let name = 'zola'
let regName = /z(o|uo)la/
console.log(regName.test(name))

/**
 * 二进制数字 (最少有一位, 但只含有 0 或者 1的)
 */
let binaryNumber = ''
let binaryReg = /(0|1)+/

/**
 * 非零的十进制数字 (有至少一位数字, 但是不能以0开头)
 */
let number = '0789798'
let regNumber = /[1-9]\d*/
console.log(regNumber.test(number))

/**
 *  var web_development = "python php ruby javascript jsonp perhapsphpisoutdated";
    找出其中 包含 p 但不包含 ph 的所有单词，即[ 'python', 'javascript', 'jsonp' ]
 */

let web_develeopment = 'python php ruby javascript jsonp perhapsphpisoutdated'
let regWeb = /\b(?=\w*p)(?!\w*ph)\w*\b/g
console.log(web_develeopment.match(regWeb))

//匹配邮箱的正则表达式
let email = '123432@qq.com'
let regEmail = /^[a-zA-Z0-9_-\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)+$/g
console.log(email.match(regEmail))