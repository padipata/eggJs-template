'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);
  router.get('/search', controller.search.info);
  router.resources('topics', '/api/v2/topics', controller.topics);
};
