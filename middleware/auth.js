module.exports.auth = async (req, res, next) => {
  try {
    const apiKey = req.header("x-api-key");

    if (apiKey !== "#b0@6hX8YasCq6^unOaPw1tqR") {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(401).send({ message: "Invalid API Key" });
    console.log("Middleware ERROR ========> ", e);
  }
};
