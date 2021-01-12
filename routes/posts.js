const express = require('express')
const router = express.Router()
const Post = require('../models/Post')


//GET BACK ALL THE POST
router.get('/', async(req,res) => {
	try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch(err){
        res.json({message:err})
    }
})

//SUBMIT A POST
router.post('/', async(req,res) => {
    //console.log(req.body)
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    })

    try{
        const savePost = await post.save()
        res.json(savePost);
    }
    catch(err){
        console.log(err)
        res.json({message:err})
    }

})

//SPESIFIC POST
router.get('/:postId', async(req,res) => {
    //console.log(req.params.postId)
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }
})

//Delete Post
router.delete('/:postId', async(req,res) => {
    try{
        const removedPost = await Post.remove({
            _id : req.params.postId
        })
        res.json(removedPost)
    }
    catch(err){
        res.json({message : err})
    }
})

//Update a Post
router.patch('/:postId', async(req,res) => {
    try{
        const updatedPost = await  Post.updateOne(
            { _id : req.params.postId }, 
            { $set : { title : req.body.title } }
        )
        res.json(updatedPost)
    }
    catch(err){
        res.json({message : err})
    }
})
//cari perbedaan method patch dan put


module.exports = router;
