const bodyParser=require('body-parser');
const {data} =require('./data')


module.exports={
    devServer:{
        before(app){
            app.use(bodyParser.json());
            app.get('/api/list',(req,res)=>{
                // console.log(req.query);
                res.send(data)
            })
        }
    }
}