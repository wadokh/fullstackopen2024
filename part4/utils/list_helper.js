const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((acc, obj) =>{
        return acc + obj.likes
    }, 0)

}

const favoriteBlog = (blogs) => {
    return blogs.reduce(function(prev, current) {
        return (prev && prev.likes > current.likes) ? prev : current
      })
}

const mostBlogs = (blogs) => {
    const bloggers = new Map()
    blogs.forEach((blog) =>{
        if(bloggers.has(blog.author)){
            bloggers.set(blog.author,bloggers.get(blog.author)+1)
        }
        else{
            bloggers.set(blog.author,1)
        }
    })
    let maxEntry = [null, -Infinity];

    for (const [key, value] of bloggers) {
    if (value > maxEntry[1]) {
        maxEntry = [key, value];
    }
    }
    return {
        'author': maxEntry[0],
        'blogs': maxEntry[1]
    }
}

const mostLikes = (blogs) => {
    const bloggers = new Map()
    blogs.forEach((blog) =>{
        if(bloggers.has(blog.author)){
            bloggers.set(blog.author,bloggers.get(blog.author)+blog.likes)
        }
        else{
            bloggers.set(blog.author,blog.likes)
        }
    })
    let maxEntry = [null, -Infinity];

    for (const [key, value] of bloggers) {
    if (value > maxEntry[1]) {
        maxEntry = [key, value];
    }
    }
    return {
        'author': maxEntry[0],
        'likes': maxEntry[1]
    }
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}