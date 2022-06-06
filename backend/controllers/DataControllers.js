const DataSchema = require('../schema/DataSchema');

class DataController {
    async SendData(req, res) {

        const { age, company, firstname, lastname,country } = req.body.data;
        const {value} = req.body;
        if (!firstname || !lastname || !age || !company || !country || !value) {
            return res.status(400).json({ message: 'Send All Details' });
        }
        const datas = await DataSchema.find({ firstname });
        if(datas.lastname === lastname){
            return res.status(409).json({ message: 'Already Employee exist' });
        }
        // const datas1 = await DataSchema.find({ email });
        else {
            const data = await new DataSchema({ firstname, lastname, age, company, country, value });
            await data.save();
            if (data !== null && data !== undefined) {
                console.log(data);
                return res.status(200).json({ message: data });
            }
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async GetData(req, res) {
        try {
            const Datas = await DataSchema.find({});
            return res.status(200).json({ message: Datas });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server issue' });
        }
    } async EditData(req, res) {
        console.log(req.body);
        const { age, company, firstname, lastname,country } = req.body.updatedDatas;
        const {_id} = req.body.idx;
        if (!firstname || !lastname || !age || !company || !country) {
            return res.status(400).json({ message: 'Send All Details' });
        }
        try {
            await DataSchema.findByIdAndUpdate({ _id: _id}, { firstname, lastname, age,country,company }).then((data) => {
                if (data) {
                    return res.status(200).json({ message: 'Updated' });
                }
            }).catch(err => {
                return res.status(500).json({ message: 'Internal Server Errors!!' });
            })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Errors!!' });
        }
    }
    async DeleteData(req, res) {
        const id = req.body.datas._id;
        try {
            await DataSchema.findOneAndDelete({ _id: id }).then((data) => {
                return res.status(200).json({ message: "Deleted" });
            }).catch(err => {
                return res.status(500).json({ message: 'Internal Server Errors!!' });
            })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Errors!!' });
        }
    }
    async DeleteData1(req, res) {
        const { password } = req.body;
        console.log(password);
        if (password === 'admin') {
            try {
                await DataSchema.remove({}).then((data) => {
                    console.log(data);
                    return res.status(200).json({ message: "Deleted" });
                }).catch(err => {
                    console.log(err);
                    return res.status(500).json({ message: 'Internal Server Errors!!' });
                });
            } catch (error) {
                return res.status(500).json({ message: 'Internal Server Errors!!' });
            }
        } else {
            return res.status(401).json({ message: 'Enter correct password' });
        }
    }
}

module.exports = new DataController();