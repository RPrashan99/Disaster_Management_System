import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { ContactInfoModel } from "../models/contactInfo.model.js";
import path from 'path';

const router = Router();

router.post('/createInfo', handler(async (req, res) => {

    const {authority, address,hotline, name, title, directDial, mobile, email} = req.body;
    const show = false;
        // Validate required fields
    if ( !authority || !address || !hotline || !name || !title || !directDial || !email ) {
        return res.status(BAD_REQUEST).send("Missing required fields");
    }
    const newContactID = await generateContactId(authority);    

    try{
        const newAuthority = await ContactInfoModel.create({
            contactID: newContactID,
            address,
            authority,
            name,
            title,
            hotline,
            directDial,
            mobile,
            email
          });
        res.send(newAuthority);
    } catch(error){
        console.error("Error creating Authority:", error);
        res.status(BAD_REQUEST).send("Authority create failed");
    }

}));

router.patch('/updateContactInfo/:contactID', handler(async (req, res) => {
    const { newsId } = req.params;
    const {heading, author, imagePath, newsBody, show} = req.body;
        // Validate required fields
        if (!heading || !author || !newsBody ) {
            return res.status(BAD_REQUEST).send("Missing required fields");
          }    
    try{
        let updateData = { heading, author, newsBody, show };

        if (imagePath) {
            updateData.image = imagePath;
        }

        const updatedNews = await NewsModel.findOneAndUpdate(
            { newsId: newsId },
            updateData,
            { new: true }
        );

        res.send(updatedNews);
    } catch(error){
        console.error("Error updating news:", error);
        res.status(BAD_REQUEST).send("News update failed");
    }

}));

router.post('/getNews', handler( async(req,res) => {
    try{
        const result = await NewsModel.find({});
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));

router.delete('/deleteNews/:newsId',handler(async(req,res) => {
    const { newsId } = req.params;
    try{
        const deleteNewsItem = await NewsModel.findOneAndDelete({newsId});
        res.send(deleteNewsItem);

    } catch(error){
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));



const generateNewsId = async() => {
    var count = await NewsModel.countDocuments();

    while(await NewsModel.findOne({newsId: count.toString()})) {
        count++;
    }
  
    return count.toString();
};

// Route for serving static images
router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '../Uploads/', imageName);
    res.sendFile(imagePath);
});

export default router;
