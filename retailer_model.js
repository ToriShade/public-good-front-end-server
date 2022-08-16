const Pool = require('pg').Pool
const pool = new Pool({
    user: 'public_good_admin',
    host: 'localhost',
    database: 'public_good_app_db',
    password: 'AdaC171843',
    port: 5432,
});

// pool.query('SELECT storeid, storelat, storelong, storename, storezipcode, storestate FROM retailers WHERE storezipcode = ANY ($1)', [zipQuery], (error, results) => {
// const zipQuery = ['43017', '43016', '43002', '43065'];
const getStoresByZipCode = async (zipQuery = ['43017', '43016', '43002', '43065']) => {
    try {
        const response = await pool.query('SELECT storeid, storelat, storelong, storename, storelongname, storezipcode, storestate FROM retailers WHERE storezipcode = ANY ($1)', [zipQuery]);
        console.log(response.rows);
    } catch (err) {
        console.error('Error Occurred', err);
    }
};


// const getStoresByZipCode = (zipQuery = ['43017', '43016', '43002', '43065']) => {
//     return new Promise(function(resolve, reject) {
//         // const zipQuery = parseInt(request.params.zipQuery)
//         // pool.query('SELECT storeid, storelat, storelong, storename, storezipcode, storestate FROM retailers WHERE storezipcode IN ("43017", "43016")', (error, results) => {
//         pool.query("SELECT storeid, storelat, storelong, storename, storelongname, storezipcode, storestate FROM retailers WHERE storezipcode = ANY ($1)", [zipQuery], (error, results) => {
//         // pool.query('SELECT * FROM retailers', (error, results) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve(results.rows);
//         });
//     }) 
// }

// const getStoresByLatLong = () => {
//     return new Promise(function(resolve, reject) {
//         const id = parseInt(request.params.id)
//         pool.query('SELECT * FROM stores WHERE id = $1', [id], (error, results) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results.rows);
//         })
//     }) 
// }

module.exports = {
    getStoresByZipCode,
    // getStoresByLatLong
}