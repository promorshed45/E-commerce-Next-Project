import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import multer from 'multer';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret
});


export const imageUpload = async (imageName: string, path: string): Promise<Record<string, unknown>> => {

    return new Promise((resolve, reject) => {

        // Upload an image
        cloudinary.uploader.upload(
            path, {
            public_id: imageName
        },
            function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
                //delete a file asynchronously
                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file is deleted');
                    }
                })
            }
        )
    })
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

export const upload = multer({ storage: storage })