class DemoController{
    Testing(req,res){
        return res.status(200).json({message:'Running Successfully'});
    }
}

module.exports = new DemoController();