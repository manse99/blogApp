import React from "react";

const MasonryPost = ({ post }) => {

const style = { backgroundImage: `url("${require(`../src/assets/images/${post.image}`)}")` };

return (
    <a className="masonry-post overlay" style={style} href={post.link}>
        <div className="image-text"></div>
    </a>
);
};


export default MasonryPost;