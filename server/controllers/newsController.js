const fs = require('fs/promises')
module.exports.getNews = async (req, res) => {
    try {
        res.json(JSON.parse(await fs.readFile('news.json', 'utf-8')))
    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}

module.exports.showImg = async (req, res) => {
    try {
        const {imagename} = req.params;
        res.sendFile(imagename, {root: "./uploads"});
    } catch (err) {
        console.log(err);
    }
};