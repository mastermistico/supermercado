var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server="https://tiempo-supermercado.herokuapp.com/api/1";
let should = chai.should();
chai.use(chaiHttp);

it ("Should Fecth all the Products", (done)=>{
    chai.request(server)
        .get("/products/")
        .end((err, result)=>{
            result.should.have.status(200);
            //console.log ("Got",result.body.data.length, " products")
            console.log ("Result Body:", result.body);
            done();
    })
})

describe('get the product with id : ',()=>{
    it('should get the product with id ', (done) => {
        chai.request(server)
        .get('/products/5e8fded8ee0861002416ed72')
        .end( function(err,res){
            console.log(res.body)
            res.should.have.status(200);
            done();
        });
    });
   });

   describe('Insert a product : ',()=>{
    it('should insert product', (done) => {
    chai.request(server)
    .post('/products')
    .send({title: "product2", description: "desc product 2", price: 1000})
    .end( function(err,res){
        console.log(res.body)
        res.should.have.status(200);
        done();
    });
    });
   });

   it("Should Delete Particular product", (done)=>{
    chai.request(server)
        .delete("/products/5e8fcff32f2f7c0024f69e87")
        .end((err, result)=>{                    
            result.should.have.status(200)                
            console.log("Deleted Particlar product", result.body)    
            done()
        })
})