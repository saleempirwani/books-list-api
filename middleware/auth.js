module.exports.auth = async (req, res, next) => {
  try {
    const apiKey = req.header("API-Key");

    if (apiKey !== "hello_world") {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(401).send({ message: "Invalid API Key" });
    console.log("Middleware ERROR ========> ", e);
  }
};
