import { DBError } from 'Errors';
import { DbConnection } from './dataSource';


// const USER_SELECT_QUERY = `INSERT INTO test (nic, b, c) VALUES (:A, :B, :C)`;
const USER_SELECT_QUERY = `INSERT INTO voter (nic, full_name_si, full_name_en, gender, date_of_birth, house_number, village_street, grama_niladhari_division, polling_district, polling_division, district) VALUES (:A, :B, :C, :D, :E, :F, :G, :H, :I, :J, :K)`;

const fetchUserById = (nic, full_name_si, full_name_en, gender, date_of_birth, house_number, village_street, grama_niladhari_division, polling_district, polling_division, district) => {
    return DbConnection()
    const params = {A:nic, B:full_name_si, C:full_name_en, D:gender, E:date_of_birth, F:house_number, G:village_street, H:grama_niladhari_division, I:polling_district, J:polling_division, K:district };
    .query(USER_SELECT_QUERY,
      {
        replacements: params,
        type: DbConnection().QueryTypes.INSERT,
      }).catch((error) => {
      // throw new DBError(error);
      console.log(error);
    });
};

const fetchUserById = (nic, full_name_si, full_name_en, gender, date_of_birth, house_number, village_street, grama_niladhari_division, polling_district, polling_division, district) => {
    return DbConnection()
    const params = {A:nic, B:full_name_si, C:full_name_en, D:gender, E:date_of_birth, F:house_number, G:village_street, H:grama_niladhari_division, I:polling_district, J:polling_division, K:district };
    .query(USER_SELECT_QUERY,
      {
        replacements: params,
        type: DbConnection().QueryTypes.INSERT,
      }).catch((error) => {
      // throw new DBError(error);
      console.log(error);
    });
};


export default {
  fetchUserById
}