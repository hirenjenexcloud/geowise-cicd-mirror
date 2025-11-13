const status = require("../config/status.config");
const User = require("../models/user.model");


exports.updateUsr = async (req,res) =>{
    var email = req.body.email;

    console.log('usr email.................',email);

    try{
        let user = await User.findOneAndUpdate({email :email},{
            $set :{
                name : req.body.name,
                phone_no : req.body.phone_no,
                address : req.body.address,
                role : req.body.role
            }
        }).lean().exec();
        console.log('usr.................',user);

        if(user)
        {
            return res.json({success :true ,status : status.OK,msg:'user updated successfully.'})
        }
        else{
            return res.json({success :false ,status : status.NOTMODIFIED,msg:'user updated failed.'})

        }
    }
    catch(err){
        return res.json({success :false ,status : status.INVALIDSYNTAX,msg:'something went wrong.'})

    }

}
exports.deleteUser = async (req, res) => {
    var id = req.query.id;
    try {
        if (id === undefined) {
            return res.json({ success: false, status: status.NOTFOUND, msg: 'Id Parameter Not Available' });
        }
        let result = await User.findOneAndUpdate({_id :id},{ $set : {
            'is_deleted' : true
        }}).lean().exec();
        if (result) {

            res.json({ success: true, status: status.OK, msg: 'User is Deleted successfully.' });
        }
        else {
            return res.json({ success: false, status: status.NOTFOUND, msg: 'Id not found' });
        }

    } catch (err) {
        console.log('error .............',err)
        res.json({ success: false, status: status.INVALIDSYNTAX, msg : 'Delete  failed.' });
    }}

    exports.getUserById = async (req, res) => {
        var id =  req.query.id;
        try {
            if(!id)
            {
                return res.json({ success: false, status: status.NOTFOUND, msg: 'Id Parameter Not Available' });
            }
            let data = await User.findById({_id:id},{'is_deleted':false}).lean().exec();
            res.json({ success: true, status: status.OK, data: data })
    
        } catch (err) {
            res.json({ success: false, status: status.INVALIDSYNTAX, data: data })
        }
    }

exports.getAllUser = async (req,res) =>{
    try{

        let data = await User.find({'is_deleted':false}).lean().exec();

        res.json({success :true , status:status.OK,data:data})

    }catch(err){
        res.json({success :false , status:status.INVALIDSYNTAX,data:data})

    }
}
