"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComSurvey = createComSurvey;
exports.getComSurvey = getComSurvey;
exports.deleteComSurvey = deleteComSurvey;
exports.updateComSurvey = updateComSurvey;
exports.getComSurveyByMentor = getComSurveyByMentor;
exports.getComSurveyById = getComSurveyById;

var _Company_survey = _interopRequireDefault(require("../models/Company_survey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createComSurvey(_x, _x2) {
  return _createComSurvey.apply(this, arguments);
}

function _createComSurvey() {
  _createComSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, mentor_id, company_id, vote, feedback, preference, survey;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, mentor_id = _req$body.mentor_id, company_id = _req$body.company_id, vote = _req$body.vote, feedback = _req$body.feedback, preference = _req$body.preference;
            _context.next = 4;
            return _Company_survey["default"].create({
              mentor_id: mentor_id,
              company_id: company_id,
              vote: vote,
              feedback: feedback,
              preference: preference
            }, {
              fields: ['mentor_id', 'company_id', 'vote', 'feedback', 'preference']
            });

          case 4:
            survey = _context.sent;
            res.json({
              message: 'New Company Survey Created'
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createComSurvey.apply(this, arguments);
}

;

function getComSurvey(_x3, _x4) {
  return _getComSurvey.apply(this, arguments);
}

function _getComSurvey() {
  _getComSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var surveys;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Company_survey["default"].findAll({
              attributes: ['survey_id', 'vote', 'mentor_id', 'company_id', 'vote', 'feedback', 'preference']
            });

          case 2:
            surveys = _context2.sent;
            res.json({
              surveys: surveys
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getComSurvey.apply(this, arguments);
}

;

function deleteComSurvey(_x5, _x6) {
  return _deleteComSurvey.apply(this, arguments);
}

function _deleteComSurvey() {
  _deleteComSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Company_survey["default"].destroy({
              where: {
                survey_id: id
              }
            });

          case 3:
            deleteCount = _context3.sent;
            res.json({
              message: "Company Survey Deleted",
              count: deleteCount
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteComSurvey.apply(this, arguments);
}

;

function updateComSurvey(_x7, _x8) {
  return _updateComSurvey.apply(this, arguments);
}

function _updateComSurvey() {
  _updateComSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, mentor_id, company_id, vote, feedback, preference, survey, updatedSurvey;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, mentor_id = _req$body2.mentor_id, company_id = _req$body2.company_id, vote = _req$body2.vote, feedback = _req$body2.feedback, preference = _req$body2.preference;
            _context4.next = 4;
            return _Company_survey["default"].findAll({
              attributes: ['mentor_id', 'company_id', 'vote', 'feedback', 'preference'],
              where: {
                survey_id: id
              }
            });

          case 4:
            survey = _context4.sent;
            _context4.next = 7;
            return _Company_survey["default"].update({
              mentor_id: mentor_id,
              company_id: company_id,
              vote: vote,
              feedback: feedback,
              preference: preference
            }, {
              where: {
                survey_id: id
              }
            });

          case 7:
            updatedSurvey = _context4.sent;
            res.json({
              message: "Survey Updated Successfully",
              updatedSurvey: updatedSurvey
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateComSurvey.apply(this, arguments);
}

;

function getComSurveyByMentor(_x9, _x10) {
  return _getComSurveyByMentor.apply(this, arguments);
}

function _getComSurveyByMentor() {
  _getComSurveyByMentor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, surveys;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Company_survey["default"].findAll({
              attributes: ['mentor_id'],
              where: {
                mentor_id: id
              }
            });

          case 3:
            surveys = _context5.sent;
            res.json({
              surveys: surveys
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getComSurveyByMentor.apply(this, arguments);
}

;

function getComSurveyById(_x11, _x12) {
  return _getComSurveyById.apply(this, arguments);
}

function _getComSurveyById() {
  _getComSurveyById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, survey;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Company_survey["default"].findOne({
              where: {
                survey_id: id
              }
            });

          case 3:
            survey = _context6.sent;
            res.json({
              survey: survey
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getComSurveyById.apply(this, arguments);
}

;