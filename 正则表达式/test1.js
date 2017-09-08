
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

/**
 * [javascript] view plain copy print?
 * 这个看起来比较复杂，是一个js群里的人发的，一个十分巧妙的正则。
 * 不过，分解开来其实一点也不复杂，这是由五个零宽断言和一个负向零
 * 宽断言（负向表否定）组成。前五个分别是：必须是8位以上、必须出现数字、
 * 必须出现特殊符号（非字母数字下划数）、必须出现大写字母、必须出现小写字母。
 * 最后一个负向零宽断言是：不得出现换行。大家会发现每个断言都是以 .* 开头，
 * 那这个表示什么意思呢？因为这些断言都是写在同一位置，而同一位置是不可能同时
 * 出现以上六种情况的。所以用 .* 来告诉表达式，这个断言之前可以有字符（意即这
 * 个断言可以出现在接下来的字符串任何位置）。那么这条正则表达式有什么作用呢？有
 * 做过密码验证的同学马上就反应过来了，这可以用来做强密码验证。
 */
let reg = /^(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/  