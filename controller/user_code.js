const Codes = require("../model/codes");

const UserCodes = async (req, res) => {
  try {
    const savedcodes = await Codes.find({ user_Id: req.user.id });
    if (!savedcodes) res.status(404).json({ message: "No saved codes" });
    res.status(200).json({ codes: savedcodes });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
const getcode = async (req, res) => {
  const id = req.params.id;
  try {
    const code = await Codes.findOne({ _id: id });
    if (!code) return res.status(404).json({ message: "code doesn't exists" });

    res.status(200).json({ content: code });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

const savecode = async (req, res) => {
  const { title, code, lang } = req.body;
  try {
    const codeexist = await Codes.findOne({ title });
    if (codeexist) {
      codeexist.title = title;
      codeexist.code = code;
      codeexist.lang = lang;
      await codeexist.save();
      return res.status(200).json({ message: "code saved" });
    } else {
      const newcode = new Codes({
        user_Id: req.user.id,
        title,
        lang,
        code,
      });
      await newcode.save();
      return res.status(201).json({ message: "Code saved successfully!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

const deletecode = async (req, res) => {
  const id = req.params.id;
  try {
    const del = await Codes.findByIdAndDelete(id);
    if (!del) return res.status(404).json({ message: "Id not found" });
    res.status(200).json({ message: "deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  getcode,
  savecode,
  UserCodes,
  deletecode,
};