// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    var user_id;
    if (!res.locals.card) {
      return next();
    } else {
      user_id = res.locals.card.user_id;
      return (__F('article/article')).count({
        user_id: user_id,
        is_yuanchuang: 1
      }, function(error, count) {
        res.locals.his_articles_count = count;
        return (__F('article/article')).getAll(1, 10, {
          user_id: user_id,
          is_yuanchuang: 1
        }, function(error, articles) {
          res.locals.his_articles = articles;
          return next();
        });
      });
    }
  };

}).call(this);
