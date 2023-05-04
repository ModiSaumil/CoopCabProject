const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        company_name:{
            type: String,
            required: [true, 'Company Name is required']
        },

        owner_name:{
            type: String,
            required: [true, 'Owner Name is required']
        },

        state:{
            type: String,
            required: [true, 'State is required']
        },

        city:{
            type: String,
            required: [true, 'City is required']
        },

        vehicle_details:{
            type: String,
            required: [true, 'Vehicle details is required']
        },

        bank_details:{
            type: String,
            required: [true, 'bank details is required']
        },

        adhar_card:{
            type: String,
            required: [true, 'Adhar card details is required']
        },

        registerd_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const CompanyModule = mongoose.model('tbl_company',schema);
module.exports = CompanyModule;