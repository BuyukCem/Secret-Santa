module.exports = (app) => {
    const giftController = require('../controllers/giftController');

    app.route('/persons/:person_id/gifts')
        .get(giftController.get_all_gifts)
        .post(giftController.create_a_gift);

    app.route('/gifts/:gift_id')
        .get(giftController.get_a_gift)
        .put(giftController.update_a_gift)
        .delete(giftController.delete_a_gift);

};
