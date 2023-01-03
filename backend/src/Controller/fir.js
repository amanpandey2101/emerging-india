const Fir =  require('../Models/fir')


exports.logFir = (req,res)=>{
    const {identityProof,address,firDetails} = req.body
    const _fir = new Fir(
        {
            informerName:req.user.fullName,
            identityProof,
            address,
            firDetails
        }
    );
    _fir.save((error,fir)=>{
        if(error) res.status(400).json({error})
        if(fir) res.status(200).json({fir})
    })
}