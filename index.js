const faker = require("./node_modules/faker");
const express = require("express");
const app = express();
const port = 8000;


const newUser = () =>(
{
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
    }
)
console.log(newUser());


const newCompany = () =>(
    {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
)
console.log(newCompany());



app.get("/api/users/new", (req,res) =>{
    const newUserProfile = newUser();
    res.json(newUserProfile);
})

app.get("/api/companies/new", (req,res) =>{
    const newCompanyProfile = newCompany();
    res.json(newCompanyProfile);
})


app.get("/api/user/company", (req,res) =>{
    const newUserProfile = newUser();
    const newCompanyProfile = newCompany();
    const responseObject = {
        user: newUserProfile,
        company: newCompanyProfile
    }
    res.json(responseObject);
})







app.listen(port, () => console.log(`express server running on port ${port}`))