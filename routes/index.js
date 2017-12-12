const express = require('express');
const router = express.Router();
const request = require('request');

const allAboutMe = {
    description: { 
        question: 'Tell me a little bit about yourself?',
        answer: 'Hello! My name is Rita. I am from originally from Massachusetts, and I live and work in Brooklyn.'
    },
    tech: {
        question: 'What excites you about technology?',
        answer: 'What excites me about technology is that it has revolutionized the way humans solve problems. I can\'t wait to see the product of human innovation in the form of technological advancement in the coming years.'
    },
    techstack: {
        question: 'What is your preferred technology stack?',
        answer: 'I enjoy working with Node.js, Hapi, and React/Redux.'
    },
    hobbies: {
        question: 'What are your favorite hobbies?',
        answer: 'I love baking, travelling, listening to podcasts, and visiting art museums.'
    }
};

router.get('/posts', (req, res) => {
    request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            response.render('index.ejs');
        };
      })
});

router.get('/aboutme/:q?', (req, res) => {
    const q = req.params.q;
    if(!q) {
        res.send(allAboutMe);
    } else if(Object.keys(allAboutMe).indexOf(q) !== -1) {
        res.send(allAboutMe[q]);
    } else {
        res.send('Parameter not found');
    }
});

module.exports = router;