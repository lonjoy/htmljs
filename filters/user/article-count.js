// Generated by CoffeeScript 1.9.3
(function() {
  var func_article;

  func_article = __F('article/article');

  module.exports = function(req, res, next) {
    return func_article.count({
      user_id: res.locals.user.id,
      is_yuanchuang: 1
    }, function(error, _count) {
      res.locals.article_count = _count;
      return next();
    });
  };

}).call(this);
