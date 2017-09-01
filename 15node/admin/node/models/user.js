/**
 * Created by Administrator on 2017/8/31.
 */
module.exports= {
    list:function (res) {
        //console.log('niupi');  数据库操作
        var UserList = [{
        "id": 11,
        "name": 'helaoban',
        "email": "zhuleipro◎hotmail.com",
        "account":'hebaba'
        },
        {
        "id": 12,
        "name": 'liulaoban',
        "email": "liumama◎hotmail.com",
        "account":'liumama'
        }];
        res.write( JSON.stringify(UserList));
    },
    update:function (res) {
        res.write('更新');
    },
    del:function (res) {
        res.write('删除查询');
    },
    add: function (res) {
        res.write('增加查询');
    }
}