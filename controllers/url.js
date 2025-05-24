const shortid = require("shortid");
const URL = require('../model/url');

async function handelGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' });

    const shortID = shortid.generate(); // ✅ Generates a new unique ID
    try {
        const newURL = await URL.create({
            shortId: shortID,  // ✅ Ensure this field matches the schema
            redirectURL: body.url,
            visitHistory: [],
        });
        return res.json({ id: newURL.shortId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handelGenerateNewShortURL,
};
