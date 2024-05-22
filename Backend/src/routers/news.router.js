import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { NewsModel } from "../models/news.model.js";
import path from 'path';
import multer from 'multer';

const router = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/'); // Uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Return the image path in the response
        res.status(201).json({ message: 'File uploaded successfully', imagePath: path.join('Uploads/', req.file.filename) });
        // res.json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(BAD_REQUEST).send("File upload failed");
    }
});


router.post('/createNews', handler(async (req, res) => {

    const { heading, author, imagePath, newsBody } = req.body;
    const currentDateTime = new Date(); //real time
    const createdDate = currentDateTime.toDateString();
    const createdTime = currentDateTime.toTimeString();
    const show = false;
    // Validate required fields
    if (!heading || !author || !newsBody) {
        return res.status(BAD_REQUEST).send("Missing required fields");
    }
    const newID = await generateNewsId(heading);

    try {
        const newNews = await NewsModel.create({
            newsId: newID,
            heading,
            author,
            image: imagePath || '',
            newsBody,
            createdDate,
            createdTime,
            show,
        });
        res.send(newNews);
    } catch (error) {
        console.error("Error creating news:", error);
        res.status(BAD_REQUEST).send("News create failed");
    }

}));

router.patch('/updateNews/:newsId', handler(async (req, res) => {
    const { newsId } = req.params;
    const { heading, author, imagePath, newsBody, show } = req.body;
    // Validate required fields
    if (!heading || !author || !newsBody) {
        return res.status(BAD_REQUEST).send("Missing required fields");
    }
    try {
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
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(BAD_REQUEST).send("News update failed");
    }

}));

router.post('/getNews', handler(async (req, res) => {
    try {
        const result = await NewsModel.find({});
        res.send(result);
    } catch (error) {
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));

router.delete('/deleteNews/:newsId', handler(async (req, res) => {
    const { newsId } = req.params;
    try {
        const deleteNewsItem = await NewsModel.findOneAndDelete({ newsId });
        res.send(deleteNewsItem);

    } catch (error) {
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));



const generateNewsId = async () => {
    var count = await NewsModel.countDocuments();

    while (await NewsModel.findOne({ newsId: count.toString() })) {
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
