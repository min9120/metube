export const trendingVideo = (req, res) => res.render("home", {pageTitle:"home"});
export const see = (req, res) => res.render("watch", {pageTitle:"watch"});
export const edit = (req, res) => res.send("edit video");
export const search = (req, res) => res.send("search page");
export const deleteVideo = (req, res) => res.send("delete video page");
export const upload = (req, res) => res.send("upload video page");
