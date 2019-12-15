module.exports = (app) => {
    const personController = require('../controllers/personController')

    app.route('/persons')
        .get(personController.list_all_persons)
        .post(personController.create_a_person);

    app.route('/persons/:person_id')
        .get(personController.get_a_person)
        .put(personController.update_a_person)
        .delete(personController.delete_a_person);

}