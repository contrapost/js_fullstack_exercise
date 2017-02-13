import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
        contests: contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in tristique tortor. Aenean semper, odio vel mattis eleifend, mauris libero dapibus orci, vel facilisis leo lorem vel arcu. Aenean dictum, sem et malesuada pretium, lorem ipsum egestas turpis, id ultrices libero arcu vitae lectus. Nam congue ut nibh nec auctor. Vivamus in suscipit dolor. Ut elit eros, congue eget eros ac, commodo pretium metus. Morbi bibendum massa eget lacus consequat laoreet.';

    res.send(contest);
});

export default router;