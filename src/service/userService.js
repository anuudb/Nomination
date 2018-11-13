/**
 * Created by ananda on 11/4/18.
 */
import _ from 'lodash';
import User from '../repository/addUserData';
import {UserManager}  from 'Managers'


const getUserByUserId = async (req) => {
  // const uid = req.params.uid;
  return User.fetchUserById( "qwe", "rty", "tyu", "qwe", "2016-11-23", "tyu", "qwe", "rty", "tyu", "qwe" );
};

export default {
  getUserByUserId,
}
const addDataCandidates = async (req) => {
  // const uid = req.params.uid;
  return User.fetchUserById( "qwe", "rty", "tyu", "qwe", "2016-11-23", "tyu", "qwe", "rty", "tyu", "qwe" );
};

export default {
  getUserByUserId,
}