require('dotenv').config()
const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;

const jwt = require('jsonwebtoken')

const post = {
    adminname: 'karthicbabu',
    password: '123'
  }
exports.adminverfy=async (req,res)=>{
  try{
    const {adminname,password}=req.body
    const admindetail={adminname:adminname,
      password:password}
      const accesstoken=jwt.sign(admindetail, process.env.SECRET_KEY)
       return res.json({
      Access_Token:accesstoken});
  }
  catch(err){
      res.send("failed to login")
  }
}
exports.approveadmin=async (req,res,next)=>{
  try{
    const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401).send("Token is empty")
  const admin=jwt.verify(token,process.env.SECRET_KEY)
  console.log(admin)
  console.log(post)


  if(post.adminname==admin.adminname && post.password==admin.password){
    return next()
  }
  return res.send("failed to login")
  }
  catch(err){
     return res.send("failed to authenticate")
  }
}

// Get all products awaiting approval
exports.getPendingProducts = async (req, res) => {
  try {
    
    const pendingProducts = await AdminModel.find({ status: { $eq: 'approved' }} ).exec();
    return res.json(pendingProducts);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving pending products' });
  }
};

exports.approve = async (req, res) => {
  try {
    const productname = req.body.productname;
    const producerID = req.body.producerID;
    
    
    // Update the document in the ProductModel collection
    const updatedProduct = await ProductModel.findOneAndUpdate({$and:[{productname:productname},{producerID:producerID}]},
      { $set: { status: 'approved' } },
      { new: true }
    );
    
    if (!updatedProduct) {
      console.log('Document not found in the source collection');
      return;
    }

    // Create a new document in the AdminModel collection
    const createdAdminDocument = await AdminModel.insertMany(updatedProduct);

    console.log('Document inserted into the destination collection:', createdAdminDocument);

    

    return res.send('Approver successfully');
  } catch (err) {
    console.error('An error occurred:', err);
    return res.send('An error occurred');
  }
};

/*async function moveDocument() {
  try {
    const documentId= req.params.productId;
    const document = await ProductModel.findById(documentId).exec();
    
    if (!document) {
      console.log('Document not found in the source collection');
      return;
    }
    
    const result = await DestinationModel.create(document);
    console.log('Document inserted into the destination collection:', result);
    
    // Optionally, you can remove the document from the source collection
    await ProductModel.findByIdAndRemove(documentId).exec();
    console.log('Document removed from the source collection');
  } catch (err) {
    console.error('Error moving document:', err);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}*/

