const generateUniqueId = require('generate-unique-id');
const Url = require("../Model/Url");
const { validateURL } = require("../Config/validateURL");

module.exports.shortUrl = async (req, res) => {
  const { originalUrl} = req.body;
  
  if (validateURL(originalUrl)) {
    try {
      const url = await Url.findOne({ originalUrl });
      if (url) {
        return res.status(200).json({
            message:"Url Already Shortened",
            data: { url },
        });
      } else {
        const urlId = generateUniqueId({
            length: 10,
          });
        const base =  'https://localhost:8000';
        const shortUrl =  `${base}/${urlId}`;
        const url = await Url.create({
            originalUrl,
            shortUrl,
            urlId,
        })
        return res.status(200).json({
            message : 'Successfull',
            data: { url },
        });
      }
    } catch (err) {
      return res.status(500).json({
        message : 'Server Error',
        data: {},
    });
    }
  } else {
    return res.status(400).json({
        message : 'Invalid Original Url',
        data: {},
    });
  }
};



module.exports.visitOriginalUrl= async(req,res)=>{

    try {
        const {urlId} = req.params
        const url = await Url.findOne({urlId});
        if(!url){
            return res.status(404).json({
                error: "404 Not Found",
            })
        }
        await Url.findOneAndUpdate({urlId},{clicks : url.clicks + 1},{new:true})
        return res.redirect(url.originalUrl);
        
    } catch (error) {
        return res.status(500).json({
            error: "Server Error",
        })
    }
}