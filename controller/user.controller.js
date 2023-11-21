

const signUpUser = async (req, res) => {
    try {
        res.json({ name:"selvaraj" });
    }
    catch (e) {
        res.json({ success: false });
    }
}
module.exports.signUpUser = signUpUser;