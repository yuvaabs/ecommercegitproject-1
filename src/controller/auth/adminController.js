require('dotenv').config()
const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const AdmindetailModel=db.AdmindetailModel;
const {encryptPassword,decryptPassword}=require('./encryptdcrypt')
const jwt = require('jsonwebtoken')





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
    console.log(productname,producerID)
    
    // Update the document in the ProductModel collection
    const updatedProduct = await ProductModel.findOneAndUpdate({productname:productname,producerID:producerID},
      { $set: { status: 'approved' } },
      { new: true }
    );
    console.log(updatedProduct)
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




exports.addadmin = async (req, res) => {
  const { adminname,password} = req.body;
  
  try {

    const hashedPassword=encryptPassword(password)

    const data = new AdmindetailModel({
      adminname:adminname,
      password:hashedPassword
    });
    console.log(data)
    
    const saveddetail = await data.save();
    console.log(saveddetail)
    const admindetail={adminname:saveddetail.adminname,
    password:saveddetail.password}
    const accesstoken=jwt.sign(admindetail, process.env.SECRET_KEY)
     return res.json({Inserted_Detail:saveddetail,
    Access_Token:accesstoken});
  } catch (err) {
    return res.status(500).json({ error: 'Error saving the product' });
  }
};
exports.getadmin = async (req, res) => {
    try {
      const admin= await AdmindetailModel.find({}).exec();
      return  res.json(admin);
    } catch (error) {
      return res.status(500).json({ error: 'Error seeing producers' });
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

