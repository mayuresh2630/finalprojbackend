const mongoose=require("mongoose")

const ExcelSchema = new mongoose.Schema({
    "SL. NO.": {
      type: Number,
     // required: true,
      unique: true,
  },
  DOJ: {
    type: String,
    //required: true,
  },
  "EMP CODE": {
      type: Number,
      //required: true,
      unique:true,
  },
  "EMPLOYEE NAME": {
    type: String,
    //required: true,
  },
  
  "FATHER NAME": {
    type: String,
    //required: true,
  },
  EDUCATION: {
    type: String,
    //required: true,
  },
  "Dept.": {
    type: String,
   // required: true,
  },
  CONTRACTOR: {
    type: String,
    //required: true,
  },
  });

  const Employee=mongoose.model("Employee",ExcelSchema)
  exports.ExcelSchema=ExcelSchema
  exports.Employee=Employee