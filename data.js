const Mock =require('mockjs')

// {
//     id:Mock.Random.id(),
//     img:Mock.Random.image("100x100"),
//     title:Mock.Random.ctitle(),
//     time:Mock.Random.time(),
//     name:Mock.Random.cname()
// }

const data=[];

for (let index = 1; index < 20; index++) {
    data.push({
    id:Mock.Random.id(),
    img:Mock.Random.image("100x100"),
    title:Mock.Random.ctitle(),
    time:Mock.Random.time(),
    name:Mock.Random.cname()
    })
}
module.exports={
    data
}