require("dotenv").config();
const request = require('request')
const moment = require('moment')

const apiUrl = process.env.API_URL;

const main = async () => {
  try {
    /*
    let answerFullHolidays = await getFullHolidays()
    console.log("---- ", answerFullHolidays)
    
    let answerHolidaysforYear = await getHolidaysforCurrentYear()
    console.log("---- ", answerHolidaysforYear)
    
    let answerHolidaysforXYear = await getHolidaysforXYear(2021)
    console.log(answerHolidaysforXYear)
    
    let answerMonthHolidaysforCurrentMonth = await getMonthHolidaysforCurrentMonth()
    console.log(answerMonthHolidaysforCurrentMonth)
    
    let answerMonthHolidaysforSpecificYearMonth = await getMonthHolidaysforSpecificYearMonth()
    console.log(answerMonthHolidaysforSpecificYearMonth)
    
    let answerMonthHolidaysforCurrentDay = await getMonthHolidaysforCurrentDay()
    console.log(answerMonthHolidaysforCurrentDay)
    
    let answerMonthHolidaysforCurrentDay = await getMonthHolidaysforSpecificYearMonthDay(2021,09,8)
    console.log(answerMonthHolidaysforCurrentDay)
    */
   } catch (error) {
    console.log(`Catch error: ${error}`)
  }
}


const getFullHolidays = async () => {
  try {
    let fullHolidaysURL = apiUrl
    return new Promise((resolve, reject) => {
      request.post({
          url: fullHolidaysURL,//`${url}/feriados`, //+ moment().format('YYYY'),
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
              reject(body);
          }

      });
  });
  } catch (error) {
    //console.log(`Catch getFullHolidays error: ${error.message}`)
    return `Catch getFullHolidays error: ${error.message}`
  }
};

const getHolidaysforCurrentYear = async () => {
  try {
    let year = moment().format('YYYY')
    let holidaysforYearURL = `${apiUrl}/${year}`
    return new Promise((resolve, reject) => {
      request.post({
          url: holidaysforYearURL,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
              reject(body);
          }

      });
  });
  } catch (error) {
    //console.log(`Catch getFullHolidays error: ${error.message}`)
    return `Catch getFullHolidays error: ${error.message}`
  }
};

const getHolidaysforXYear = async (year) => {
  try {
    let holidaysforYearURL = `${apiUrl}/${year}`
    return new Promise((resolve, reject) => {
      request.post({
          url: holidaysforYearURL,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
              reject(body);
          }

      });
  });
  } catch (error) {
    //console.log(`Catch getFullHolidays error: ${error.message}`)
    return `Catch getFullHolidays error: ${error.message}`
  }
};

const getMonthHolidaysforCurrentMonth = async () => {
  try {
    let argument = moment().format('YYYY/MM')
    let urlApi = `${apiUrl}/${argument}`
    return new Promise((resolve, reject) => {
      request.post({
          url: urlApi,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
            console.log(`Endpoint ${urlApi} with error`)
            reject(body);
          }

      });
  });
  } catch (error) {
    return `Catch getMonthHolidaysforCurrentMonth error: ${error.message}`
  }
};

const getMonthHolidaysforSpecificYearMonth = async (year, month) => {
  if(year === undefined || month === undefined){
    return "no arguments provided"
  }
  try {
    let urlApi = `${apiUrl}/${year}/${month.length == 1 ? `0${month}` : month}`
    return new Promise((resolve, reject) => {
      request.post({
          url: urlApi,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
            console.log(`Endpoint ${urlApi} with error`)
            reject(body);
          }

      });
  });
  } catch (error) {
    return `Catch getMonthHolidaysforCurrentMonth error: ${error.message}`
  }
};

const getMonthHolidaysforCurrentDay = async () => {
  try {
    let argument = moment().format('YYYY/MM/DD')
    let urlApi = `${apiUrl}/${argument}`
    return new Promise((resolve, reject) => {
      request.post({
          url: urlApi,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body);
              resolve(response.map(day => day.fecha));
          } else {
            console.log(`Endpoint ${urlApi} with error`)
            reject(body);
          }

      });
  });
  } catch (error) {
    return `Catch getMonthHolidaysforCurrentDay error: ${error.message}`
  }
};

const getMonthHolidaysforSpecificYearMonthDay = async (year, month, day) => {
  if(year === undefined || month === undefined || day === undefined){
    return "no arguments provided"
  }
  try {
    let newMonth = month.toString().length < 2 ? `0${month}` : month
    let newDay = day.toString().length < 2 ? `0${day}` : day
    let urlApi = `${apiUrl}/${year}/${newMonth}/${newDay}`
    return new Promise((resolve, reject) => {
      request.post({
          url: urlApi,
          headers: {
              'Content-Type': 'application/json'
          }

      }, (err, resp, body) => {
          if (err) {
              return reject(err);
          }

          if (resp.statusCode === 200) {
              const response = JSON.parse(body)
              if(response.error){
                resolve(false, response)
              }else{
                resolve(true, response.map(day => day.fecha))
              }
          } else {
            console.log(`Endpoint ${urlApi} with error`)
            reject(body);
          }

      });
  });
  } catch (error) {
    return `Catch getMonthHolidaysforCurrentMonth error: ${error.message}`
  }
};

main()