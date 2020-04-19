// @login & register
const express = require('express');
const router = express.Router();

const sr = require('./mongo');

// GET api/srs/test
// 返回的请求的json数据 
router.get('/test', (req, res) => {
    res.json({ msg: 'sr works3' });
});

// POST api/srs/add
// 创建信息接口
router.post(
    '/add',
    (req, res) => {
        const srFields = {};

        if (req.body.name) srFields.name = req.body.name;
        if (req.body.time) srFields.time = req.body.time;
        if (req.body.color) srFields.color = req.body.color;
        if (req.body.head) srFields.head = req.body.head;
        if (req.body.end) srFields.end = req.body.end;
        if (req.body.endIP) srFields.endIP = req.body.endIP;
        if (req.body.adType) srFields.adType = req.body.adType;
        if (req.body.adAtt) srFields.adAtt = req.body.adAtt;
        if (req.body.otherAd) srFields.otherAd = req.body.otherAd;
        if (req.body.adTF) srFields.adTF = req.body.adTF;
        srFields.allString = srFields.name + ',' + srFields.time + ',' + srFields.color + ',' + srFields.head + ',' +
            srFields.end + ',' + srFields.endIP + ',' + srFields.adType + ',' + srFields.adAtt
        new sr(srFields).save().then(sr => {
            res.json(sr);
        });
    }
);

// GET api/srs
// 获取所有信息

router.get(
    '/',
    (req, res) => {
        sr.find()
            .then(sr => {
                if (!sr) {
                    return res.status(404).json('没有任何内容');
                }

                res.json(sr);
            })
            .catch(err => res.status(404).json(err));
    }
);

// POST api/srs/edit
// 编辑信息接口
// Private
router.post(
    '/edit/:id',
    (req, res) => {
        const srFields = {};

        if (req.body.index) srFields.index = req.body.index;
        if (req.body.name) srFields.name = req.body.name;
        if (req.body.describe) srFields.describe = req.body.describe;

        sr.findOneAndUpdate({ _id: req.params.id }, { $set: srFields }, { new: true }).then(sr => res.json(sr));
    }
);

// POST api/srs/delete/:id
// 删除信息接口
// Private
router.delete(
    '/delete/:id',
    (req, res) => {
        sr.findOneAndRemove({ _id: req.params.id })
            .then(sr => {
                sr.save().then(sr => res.json(sr));
            })
            .catch(err => res.status(404).json('删除失败!'));
    }
);

module.exports = router;