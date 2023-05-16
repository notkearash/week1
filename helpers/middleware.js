const mustBeInteger = (req, res, next) => {
    const id = req.params.id;
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: "ID Must be an int" })
    } else {
        next();
    }
}

const checkFieldsPost = (req, res, next) => {
    const { title, content, tags } = req.body;
    if (title && content && tags) {
        next()
    } else {
        res.status(404).json({ message: "Fields should not be empty" })
    }
}