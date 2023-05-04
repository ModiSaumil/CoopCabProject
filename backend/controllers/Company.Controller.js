const Jwt = require('jsonwebtoken');
const jwtKey = 'cabkey';
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const CompanyModule = require('../Models/company.model');

module.exports = {
    registerCompany: async (req,resp,next) => {
        try{
            const company = new CompanyModule(req.body);

            //if (!req.body.company_name || !req.body.owner_name || !req.body.state)

            let result = await company.save()

            if(result){
                return resp.send("Record Inserted Successfully!!");
            }

        }catch(err){
            console.log(err);
        }
    },

    SelectAllCompany: async (req,resp,next) => {
        try{
            let result = await CompanyModule.find()

            //result = result.json()

            if(result){
                resp.send(result)
            }
        }catch(err){
            console.log(err);
        }
    }
}