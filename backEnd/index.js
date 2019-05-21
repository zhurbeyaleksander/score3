const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
var brain = require('brain.js');

app.use(bodyParser.json());
app.use(cors());

///Global Var
var ISNETTRAIN = 0;
var DATASETCOUNT = 0;
var PREPARETOTRAIN =0;
///Global Var

//const db = mysql.createConnection({
  //  host: '209.97.184.60',
 //   port: '3306',
  //  user: 'root',
 //   password: 'super-pass',
 //   database: 'loanslist1',
//});

//db.connect();


app.listen(3210, ()=> {
    console.log('Server was run. Use port 3210');
});

const config = {
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20,20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
};

const net = new brain.NeuralNetwork(config);

net.train([{input: { age: 22, salary: 20000, pe: 3 }, output: { result: 0 }},
    {input: { age: 27, salary: 40000, pe: 36}, output: { result: 1 }},
    {input: { age: 25, salary: 15000, pe: 5 }, output: { result: 0 }}]);

const net2 = new brain.NeuralNetwork(config);

    net2.train([
        {input: { age: 22, salary: 20000, pe: 3 }, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
        {input: { age: 22, salary: 20000, pe: 4}, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
        {input: { age: 23, salary: 23000, pe: 5 }, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
        {input: { age: 18, salary: 0, pe: 0 }, output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
        {input: { age: 17, salary: 0, pe: 0 }, output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
        {input: { age: 16, salary: 0, pe: 0 }, output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
        {input: { age: 22, salary: 25000, pe: 6 }, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
        {input: { age: 24, salary: 25000, pe: 4}, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
        {input: { age: 23, salary: 25000, pe: 7 }, output: [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0] },
    ]);

    function convertDateToTrain(inputDate){
         const inputDateArrString = inputDate.split('|');
         return inputDateArrString;
    }

    const dataSet =[
        {
          "Application_ID": 1002,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5849,
          "CoapplicantIncome": 0,
          "LoanAmount": "",
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1003,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4583,
          "CoapplicantIncome": 1508,
          "LoanAmount": 128,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1005,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 3000,
          "CoapplicantIncome": 0,
          "LoanAmount": 66,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1006,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2583,
          "CoapplicantIncome": 2358,
          "LoanAmount": 120,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1008,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 6000,
          "CoapplicantIncome": 0,
          "LoanAmount": 141,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1011,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 5417,
          "CoapplicantIncome": 4196,
          "LoanAmount": 267,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1013,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2333,
          "CoapplicantIncome": 1516,
          "LoanAmount": 95,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1014,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3036,
          "CoapplicantIncome": 2504,
          "LoanAmount": 158,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1018,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4006,
          "CoapplicantIncome": 1526,
          "LoanAmount": 168,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1020,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 12841,
          "CoapplicantIncome": 10968,
          "LoanAmount": 349,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1024,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3200,
          "CoapplicantIncome": 700,
          "LoanAmount": 70,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1027,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 2500,
          "CoapplicantIncome": 1840,
          "LoanAmount": 109,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1028,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3073,
          "CoapplicantIncome": 8106,
          "LoanAmount": 200,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1029,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1853,
          "CoapplicantIncome": 2840,
          "LoanAmount": 114,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1030,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1299,
          "CoapplicantIncome": 1086,
          "LoanAmount": 17,
          "Loan_Amount_Term": 120,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1032,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4950,
          "CoapplicantIncome": 0,
          "LoanAmount": 125,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1034,
          "Gender": "M",
          "Married": "No",
          "Dependents": 1,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3596,
          "CoapplicantIncome": 0,
          "LoanAmount": 100,
          "Loan_Amount_Term": 240,
          "Credit_History": "",
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1036,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3510,
          "CoapplicantIncome": 0,
          "LoanAmount": 76,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1038,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4887,
          "CoapplicantIncome": 0,
          "LoanAmount": 133,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1041,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 2600,
          "CoapplicantIncome": 3500,
          "LoanAmount": 115,
          "Loan_Amount_Term": "",
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1043,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 7660,
          "CoapplicantIncome": 0,
          "LoanAmount": 104,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1046,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5955,
          "CoapplicantIncome": 5625,
          "LoanAmount": 315,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1047,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2600,
          "CoapplicantIncome": 1911,
          "LoanAmount": 116,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1050,
          "Gender": "",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3365,
          "CoapplicantIncome": 1917,
          "LoanAmount": 112,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1052,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 3717,
          "CoapplicantIncome": 2925,
          "LoanAmount": 151,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1066,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 9560,
          "CoapplicantIncome": 0,
          "LoanAmount": 191,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1068,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2799,
          "CoapplicantIncome": 2253,
          "LoanAmount": 122,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1073,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4226,
          "CoapplicantIncome": 1040,
          "LoanAmount": 110,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1086,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1442,
          "CoapplicantIncome": 0,
          "LoanAmount": 35,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1087,
          "Gender": "F",
          "Married": "No",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 3750,
          "CoapplicantIncome": 2083,
          "LoanAmount": 120,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1091,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 4166,
          "CoapplicantIncome": 3369,
          "LoanAmount": 201,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1095,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3167,
          "CoapplicantIncome": 0,
          "LoanAmount": 74,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1097,
          "Gender": "M",
          "Married": "No",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 4692,
          "CoapplicantIncome": 0,
          "LoanAmount": 106,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1098,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3500,
          "CoapplicantIncome": 1667,
          "LoanAmount": 114,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1100,
          "Gender": "M",
          "Married": "No",
          "Dependents": "3+",
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 12500,
          "CoapplicantIncome": 3000,
          "LoanAmount": 320,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1106,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2275,
          "CoapplicantIncome": 2067,
          "LoanAmount": "",
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1109,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1828,
          "CoapplicantIncome": 1330,
          "LoanAmount": 100,
          "Loan_Amount_Term": "",
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1112,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3667,
          "CoapplicantIncome": 1459,
          "LoanAmount": 144,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1114,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4166,
          "CoapplicantIncome": 7210,
          "LoanAmount": 184,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1116,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3748,
          "CoapplicantIncome": 1668,
          "LoanAmount": 110,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1119,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3600,
          "CoapplicantIncome": 0,
          "LoanAmount": 80,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1120,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1800,
          "CoapplicantIncome": 1213,
          "LoanAmount": 47,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1123,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2400,
          "CoapplicantIncome": 0,
          "LoanAmount": 75,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1131,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3941,
          "CoapplicantIncome": 2336,
          "LoanAmount": 134,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1136,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 4695,
          "CoapplicantIncome": 0,
          "LoanAmount": 96,
          "Loan_Amount_Term": "",
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1137,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3410,
          "CoapplicantIncome": 0,
          "LoanAmount": 88,
          "Loan_Amount_Term": "",
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1138,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5649,
          "CoapplicantIncome": 0,
          "LoanAmount": 44,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1144,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5821,
          "CoapplicantIncome": 0,
          "LoanAmount": 144,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1146,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2645,
          "CoapplicantIncome": 3440,
          "LoanAmount": 120,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1151,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4000,
          "CoapplicantIncome": 2275,
          "LoanAmount": 144,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1155,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1928,
          "CoapplicantIncome": 1644,
          "LoanAmount": 100,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1157,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3086,
          "CoapplicantIncome": 0,
          "LoanAmount": 120,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1164,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4230,
          "CoapplicantIncome": 0,
          "LoanAmount": 112,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1179,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4616,
          "CoapplicantIncome": 0,
          "LoanAmount": 134,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1186,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 11500,
          "CoapplicantIncome": 0,
          "LoanAmount": 286,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1194,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2708,
          "CoapplicantIncome": 1167,
          "LoanAmount": 97,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1195,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2132,
          "CoapplicantIncome": 1591,
          "LoanAmount": 96,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1197,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3366,
          "CoapplicantIncome": 2200,
          "LoanAmount": 135,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1198,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 8080,
          "CoapplicantIncome": 2250,
          "LoanAmount": 180,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1199,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3357,
          "CoapplicantIncome": 2859,
          "LoanAmount": 144,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1205,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2500,
          "CoapplicantIncome": 3796,
          "LoanAmount": 120,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1206,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3029,
          "CoapplicantIncome": 0,
          "LoanAmount": 99,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1207,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 2609,
          "CoapplicantIncome": 3449,
          "LoanAmount": 165,
          "Loan_Amount_Term": 180,
          "Credit_History": 0,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1213,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4945,
          "CoapplicantIncome": 0,
          "LoanAmount": "",
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Rural",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1222,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4166,
          "CoapplicantIncome": 0,
          "LoanAmount": 116,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1225,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5726,
          "CoapplicantIncome": 4595,
          "LoanAmount": 258,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1228,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3200,
          "CoapplicantIncome": 2254,
          "LoanAmount": 126,
          "Loan_Amount_Term": 180,
          "Credit_History": 0,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1233,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 10750,
          "CoapplicantIncome": 0,
          "LoanAmount": 312,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1238,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Not Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 7100,
          "CoapplicantIncome": 0,
          "LoanAmount": 125,
          "Loan_Amount_Term": 60,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1241,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4300,
          "CoapplicantIncome": 0,
          "LoanAmount": 136,
          "Loan_Amount_Term": 360,
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1243,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3208,
          "CoapplicantIncome": 3066,
          "LoanAmount": 172,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1245,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 1875,
          "CoapplicantIncome": 1875,
          "LoanAmount": 97,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1248,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3500,
          "CoapplicantIncome": 0,
          "LoanAmount": 81,
          "Loan_Amount_Term": 300,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1250,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4755,
          "CoapplicantIncome": 0,
          "LoanAmount": 95,
          "Loan_Amount_Term": "",
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1253,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 5266,
          "CoapplicantIncome": 1774,
          "LoanAmount": 187,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1255,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3750,
          "CoapplicantIncome": 0,
          "LoanAmount": 113,
          "Loan_Amount_Term": 480,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1256,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3750,
          "CoapplicantIncome": 4750,
          "LoanAmount": 176,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1259,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 1000,
          "CoapplicantIncome": 3022,
          "LoanAmount": 110,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1263,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3167,
          "CoapplicantIncome": 4000,
          "LoanAmount": 180,
          "Loan_Amount_Term": 300,
          "Credit_History": 0,
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1264,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": "3+",
          "Education": "Not Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 3333,
          "CoapplicantIncome": 2166,
          "LoanAmount": 130,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1265,
          "Gender": "F",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3846,
          "CoapplicantIncome": 0,
          "LoanAmount": 111,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1266,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "Yes",
          "ApplicantIncome": 2395,
          "CoapplicantIncome": 0,
          "LoanAmount": "",
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1267,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1378,
          "CoapplicantIncome": 1881,
          "LoanAmount": 167,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1273,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 6000,
          "CoapplicantIncome": 2250,
          "LoanAmount": 265,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Semiurban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1275,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 1,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3988,
          "CoapplicantIncome": 0,
          "LoanAmount": 50,
          "Loan_Amount_Term": 240,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1279,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2366,
          "CoapplicantIncome": 2531,
          "LoanAmount": 136,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1280,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3333,
          "CoapplicantIncome": 2000,
          "LoanAmount": 99,
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1282,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2500,
          "CoapplicantIncome": 2118,
          "LoanAmount": 104,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1289,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 8566,
          "CoapplicantIncome": 0,
          "LoanAmount": 210,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1310,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 5695,
          "CoapplicantIncome": 4167,
          "LoanAmount": 175,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1316,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2958,
          "CoapplicantIncome": 2900,
          "LoanAmount": 131,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1318,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 6250,
          "CoapplicantIncome": 5654,
          "LoanAmount": 188,
          "Loan_Amount_Term": 180,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1319,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 2,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3273,
          "CoapplicantIncome": 1820,
          "LoanAmount": 81,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Urban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1322,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4133,
          "CoapplicantIncome": 0,
          "LoanAmount": 122,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1325,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 3620,
          "CoapplicantIncome": 0,
          "LoanAmount": 25,
          "Loan_Amount_Term": 120,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1326,
          "Gender": "M",
          "Married": "No",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "",
          "ApplicantIncome": 6782,
          "CoapplicantIncome": 0,
          "LoanAmount": "",
          "Loan_Amount_Term": 360,
          "Credit_History": "",
          "Property_Area": "Urban",
          "Loan_Status": "N"
        },
        {
          "Application_ID": 1327,
          "Gender": "F",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 2484,
          "CoapplicantIncome": 2302,
          "LoanAmount": 137,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1333,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1977,
          "CoapplicantIncome": 997,
          "LoanAmount": 50,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1334,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Not Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 4188,
          "CoapplicantIncome": 0,
          "LoanAmount": 115,
          "Loan_Amount_Term": 180,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        },
        {
          "Application_ID": 1343,
          "Gender": "M",
          "Married": "Yes",
          "Dependents": 0,
          "Education": "Graduate",
          "Self_Employed": "No",
          "ApplicantIncome": 1759,
          "CoapplicantIncome": 3541,
          "LoanAmount": 131,
          "Loan_Amount_Term": 360,
          "Credit_History": 1,
          "Property_Area": "Semiurban",
          "Loan_Status": "Y"
        }
      ];

    let netDataSet = [];

    

    function prepareDataSet(dataSet){
        dataSet.forEach(item =>{
            let loan_status = item.Loan_Status == 'Y' ? 1 : 0;
            let gender = item.Gender == 'M' ? 1 : 2;
            let mar = item.Married == 'Yes' ? 1 : 0;
            let edu = item.Education == 'Graduate' ? 1 : 0;
            let selfEmp = item.Self_Employed == 'Yes' ? 1 : 0;
            let area = item.Property_Area == 'Urban' ? 1 : 0;
            netDataSet.push({input: 
              { 
                Gender: +gender, 
                Married: +mar,
                Dependents: +item.Dependents,
                Education: edu,
                Self_Employed: selfEmp, 
                ApplicantIncome: +item.ApplicantIncome,
                CoapplicantIncome: +item.CoapplicantIncome,
                LoanAmount: +item.LoanAmount,
                Loan_Amount_Term: +item.Loan_Amount_Term, 
                Credit_History: +item.Credit_History, 
                Property_Area: area  }, 
                output: {result: +loan_status} });
        });
        console.log('DataSet подготовлен');
        console.log(netDataSet.length);
        console.log(netDataSet[3]);
        DATASETCOUNT = netDataSet.length;
    }

    //console.log(netDataSet)

    prepareDataSet(dataSet);

    //console.log(netDataSet)

    const net3 = new brain.NeuralNetwork();

     function trainNet(){
      if (netDataSet.length > 0) {
        net3.train(netDataSet);
        console.log('Сеть обучена');
        ISNETTRAIN = 1;  
        } else {
          console.log('Сеть не обучена ')
        }
  
   
    setTimeout(() =>{
    console.log('Тест сети:')  
    console.log(net3.run({ 
       Gender: 1, 
       Married: 0, 
       Dependents: 2, 
       Education: 1,
        Self_Employed: 0, 
        ApplicantIncome: 7000, 
        CoapplicantIncome: 2000,
         LoanAmount: 1000, 
         Loan_Amount_Term: 360, 
         Credit_History: 1, 
         Property_Area: 0 }))}, 15000)
    }

console.log('Приложение запущено')

function paymentForcast(borrowerData){
    return net2.run(borrowerData);
}

function firstThreePeriodsDefault(paymentForcast){
    var result = false;
    for(var i = 0; i < 3; i++) {
        if(paymentForcast[i] > 0.7) {
            result = true
        }
    }
    return result
}

function everyPeriodCheckDefault(paymentForcast, loansList){
         console.log(paymentForcast) 
         var result = false; 
         var defaultPeriods = [];     
         paymentForcast.forEach( (item, i) => {
                 var countFlagPeriods = 0;
                 var acceptDefault = 0;
                 if(item > 0.7) {
                  var sql = 'SELECT COUNT(value) as total FROM riskflaglist1 WHERE periodnumber =' + i;
                  db.query(sql, (err, result)=>{
                      if(err) throw err;
                      countFlagPeriods = result[0].total;

                      var sqlAcceptDefault = 'SELECT acceptDefault FROM settings WHERE id = 1';
                      db.query(sqlAcceptDefault, (err, res)=>{
                          if(err) throw err;
                   
                          acceptDefault = res[0].acceptDefault
                          var check = (1 + countFlagPeriods)/ acceptDefault
                          if(check >= acceptDefault/100) {
                            defaultPeriods.push(i)
                            return result = true
                          }

                      })
                  }) 
                  
                
                
                 }
          })
        return { 
            result: result, 
            defaultPeriods: defaultPeriods,             
        }
}

///Эта функция срабабтывает только после того, как мы одобрили кредит 
///и добавили его в таблицу

function addRiskFlag(paymentForcast){
    paymentForcast.forEach( (item, i) => {
        if(item > 0.7) {
              console.log('Рисковый флаг добавлен в портфель на ' +  i  +' период')
        }
 })
}

function makeDecision(borrowerData){
    console.log('---------------------------------------------------')
    console.log('Кредитное решение')
    var result = 0;
    var forcast = paymentForcast(borrowerData);
    console.log('Прогноз дефолта')
    console.log(forcast);

    var firstThreePeriodsDefault_var = firstThreePeriodsDefault(forcast);
    
    console.log('Вероятность дефолта на первых 3-х платежах (true/false) ' + firstThreePeriodsDefault_var );

    var everyPeriodCheckDefault_var = everyPeriodCheckDefault(forcast, [0,0,0,0,0,4,4,0,0,0,0,0]);
    
    console.log('Вероятность дефолта за весь период жизни кредита (true/false): ' + everyPeriodCheckDefault_var.result );
    console.log('Дефолты возможны на следующих платежах: ' + everyPeriodCheckDefault_var.defaultPeriods)
    
    if(!firstThreePeriodsDefault_var && !everyPeriodCheckDefault_var.result) result = 1;
     
    console.log('Финальный результат ' + result);
    
    return { 
        result: result, 
        defaultPeriods: everyPeriodCheckDefault_var.defaultPeriods,             
    }
}

function makeDecisionSecondVer(borrowerData){
  const inputDate = {
    Gender: borrowerData.sex,
    Married: borrowerData.married,
    Dependents: borrowerData.dependents,
    Education: borrowerData.edu,
    Self_Employed: borrowerData.selfEmp,
    ApplicantIncome: borrowerData.income,
    CoapplicantIncome: borrowerData.coIncome,
    LoanAmount: borrowerData.creditAmount,
    Loan_Amount_Term: borrowerData.loanTerm,
    Credit_History: borrowerData.creditHistory,
    Property_Area: borrowerData.area,  
  }

  const answer = net3.run(inputDate);
  console.log('++++++++++++++++');
  console.log(answer);
  console.log('++++++++++++++');
  return answer;
}


function check(input){

const output = net.run(input);
console.log(output);

return output;
}

var des = [];
var defaultPeriods;

app.get('/net', function(req,res){

    console.log('Отработал')
 
        res.send({
      creditDecision: des[0],
           defaultPeriods: defaultPeriods,
        });
   
    });

app.post('/net', function(req, res){
    des = [];
    defaultPeriods = null;
    console.log(req.body); 
    
    //var output = makeDecision(req.body);
    var output = makeDecisionSecondVer(req.body);
    console.log(output)


    des.push(output);
    //defaultPeriods = output.defaultPeriods;

    res.send({
		output: 1,
    });

});

app.post('/add_to_loans_list', function(req, res){
     console.log('Запрос отправлен')
     console.log(req.body.defaultPeriods)

    var data = {
        age:req.body.age,
        salary:req.body.salary,
        pe: req.body.pe,
        net_decision: req.body.net_decision,
        decision: req.body.decision,
    };
    var sql = 'INSERT INTO loansList1 SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
        status: 'Запись добавлена',
	});
});
});

app.post('/add_to_risk_flag_list', function(req, res){
    console.log('Запрос добавления флага дефолта отправлен');
    req.body.defaultPeriods.forEach( item => {
        var data = {
            value: 1, 
            periodNumber: item,
        };
        var sql = 'INSERT INTO riskflaglist1 SET ?';
        db.query(sql, data, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send({
            status: 'Запись добавлена',
        });
     });
    })
});

app.get('/getDefPeriods', function(req,res){

    var defPeriods = [];


    var sqlCount = 'SELECT * FROM loansList1';
    db.query(sqlCount, (err, result)=>{
        if(err) throw err;
        
        result.forEach(function(element) {
          var forcast = paymentForcast({age: element.age, salary: element.salary, pe: element.pe});

         defPeriods.push(forcast);
          });
           
          console.log(defPeriods)
       res.send(defPeriods)
    }) 
    });

    app.get('/getSettings', function(req,res){

    
        var sqlSettings = 'SELECT acceptDefault FROM settings ';
        db.query(sqlSettings, (err, result)=>{
            if(err) throw err;
              
           console.log(result)
           res.send(result)
        }) 
        });

        app.post('/changeSettings', function(req, res){
            console.log('Запрос: изменение настроек');
            console.log(req.body.acceptDefault)
                var data = {
                    acceptDefault: req.body.acceptDefault,
                    id: 1,
                };
                db.query('UPDATE settings SET acceptDefault = ? WHERE id = ?', [data.acceptDefault, data.id], (err, result)=>{
                if(err) throw err;
                console.log(result);
                res.send({
                    status: 'Запись добавлена',
                });
             });
           
        });

    app.get('/getNetParams', function(req,res){
        res.send({
          isNetTrain: ISNETTRAIN,
          dataSet: DATASETCOUNT,
        })
        });

    app.get('/trainNet', function(req,res){
        trainNet();
        res.send({isNetTrain: ISNETTRAIN});
        });